import emailjs from '@emailjs/browser'

// EmailJS configuration
// These values MUST be set via environment variables for security
// Never commit secrets to version control
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
}

// Template IDs for different email types
export const EMAILJS_TEMPLATES = {
  // Current template - requires NEXT_PUBLIC_EMAILJS_TEMPLATE_ID env var
  contact: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  
  // New professional service inquiry template
  serviceInquiry: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_TEMPLATE_ID || '',
  
  // Future templates can be added here
  // newsletter: process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID,
  // followUp: process.env.NEXT_PUBLIC_EMAILJS_FOLLOWUP_TEMPLATE_ID,
}

// Template parameter mapping for dynamic variables
export const TEMPLATE_PARAMS = {
  // User form data
  name: 'from_name',
  email: 'from_email', 
  service: 'service',
  message: 'message',
  
  // Email configuration
  to_email: 'to_email',
  reply_to: 'reply_to',
  
  // Additional variables for template personalization
  user_name: 'from_name',        // For {{name}} in template
  user_email: 'from_email',      // For {{email}} in template
  service_name: 'service',       // For {{service}} in template
  user_message: 'message',       // For {{message}} in template
}


// Initialize EmailJS
// Must be called before sending emails
export const initEmailJS = () => {
  if (!EMAILJS_CONFIG.publicKey) {
    // Only log in development to reduce console noise
    if (process.env.NODE_ENV === 'development') {
      console.warn('EmailJS public key is not configured. Please set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your .env.local file.')
    }
    return false
  }
  emailjs.init(EMAILJS_CONFIG.publicKey)
  return true
}

// Send email using EmailJS with specific template
export const sendEmail = async (
  templateParams: Record<string, any>, 
  templateType: keyof typeof EMAILJS_TEMPLATES = 'contact'
) => {
  try {
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.publicKey) {
      throw new Error('EmailJS configuration is incomplete. Please check your environment variables.')
    }

    const templateId = EMAILJS_TEMPLATES[templateType]
    if (!templateId) {
      throw new Error(`Template ID not found for type: ${templateType}`)
    }

    // Ensure EmailJS is initialized before sending
    if (!EMAILJS_CONFIG.publicKey) {
      throw new Error('EmailJS public key is not configured. Please set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your .env.local file.')
    }
    emailjs.init(EMAILJS_CONFIG.publicKey)

    // Log parameters for debugging (remove sensitive data in production)
    console.log('EmailJS sending email with:', {
      serviceId: EMAILJS_CONFIG.serviceId,
      templateId: templateId,
      paramsKeys: Object.keys(templateParams),
      params: {
        ...templateParams,
        // Don't log full email/message in production
        from_email: templateParams.from_email ? '***' : 'missing',
        message: templateParams.message ? `${templateParams.message.substring(0, 50)}...` : 'missing'
      }
    })

    // Send email via EmailJS (publicKey is passed as 4th parameter for explicit authentication)
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    console.log('EmailJS success:', result)
    return { success: true, result }
  } catch (error: any) {
    // Enhanced error handling for common EmailJS errors
    let errorMessage = 'Failed to send email'
    
    if (error?.status === 412) {
      // 412 error means template variables don't match - get more details
      const currentTemplateId = EMAILJS_TEMPLATES[templateType]
      console.error('EmailJS 412 Error Details:', {
        status: error?.status,
        statusText: error?.statusText,
        text: error?.text,
        error: error,
        templateId: currentTemplateId,
        sentParams: Object.keys(templateParams)
      })
      errorMessage = `Template validation failed (412). This usually means the template variables in your EmailJS template (${currentTemplateId}) don't match what we're sending. 

Template variables we're sending:
${Object.keys(templateParams).join(', ')}

Please verify your EmailJS template uses these exact variable names:
- {{from_name}}
- {{from_email}}
- {{service}}
- {{message}}

Check the browser console for full error details.`
    } else if (error?.status === 400) {
      errorMessage = 'Invalid request. Please check that all required fields are filled correctly.'
    } else if (error?.status === 401) {
      errorMessage = 'Unauthorized. Please check your EmailJS public key configuration.'
    } else if (error?.status === 404) {
      errorMessage = 'Template or service not found. Please verify your EmailJS template ID and service ID.'
    } else if (error?.status === 429) {
      errorMessage = 'Too many requests. Please wait a moment before trying again.'
    } else if (error instanceof Error) {
      errorMessage = error.message
    } else if (typeof error === 'string') {
      errorMessage = error
    } else if (error?.text) {
      errorMessage = error.text
    }

    console.error('EmailJS error details:', {
      status: error?.status,
      statusText: error?.statusText,
      message: errorMessage,
      error: error,
      config: {
        serviceId: EMAILJS_CONFIG.serviceId,
        templateId: EMAILJS_TEMPLATES[templateType],
        publicKey: EMAILJS_CONFIG.publicKey ? `${EMAILJS_CONFIG.publicKey.substring(0, 4)}...` : 'Missing'
      },
      templateParams: Object.keys(templateParams)
    })
    
    return { 
      success: false, 
      error: new Error(errorMessage),
      originalError: error
    }
  }
}

// Send service inquiry email using the new professional template
export const sendServiceInquiryEmail = async (templateParams: Record<string, any>) => {
  return sendEmail(templateParams, 'serviceInquiry')
}

// Create template parameters for EmailJS with proper variable mapping
// Main contact template uses: {{from_name}}, {{from_email}}, {{service}}, {{message}}
// Auto-reply template needs: {{email}} (for To Email field), {{name}} (for greeting), {{service}}
export const createTemplateParams = (formData: {
  name: string
  email: string
  service: string
  message: string
}) => {
  return {
    // Variables for main contact template (sends to you)
    from_name: formData.name,
    from_email: formData.email,
    service: formData.service,
    message: formData.message,
    
    // Variables for auto-reply template (sends to user)
    // EmailJS auto-reply uses {{email}} for the "To Email" field (recipient)
    email: formData.email,  // Required for auto-reply "To Email" field
    name: formData.name,    // Required for auto-reply body "Hi {{name}},"
    // service is already included above
  }
}

// Validate EmailJS configuration
// Throws error if required environment variables are missing
export const validateEmailJSConfig = (): boolean => {
  const missing: string[] = []
  
  if (!EMAILJS_CONFIG.serviceId) missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
  if (!EMAILJS_CONFIG.templateId) missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID')
  if (!EMAILJS_CONFIG.publicKey) missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')
  
  if (missing.length > 0) {
    // Only log detailed error in development to reduce console noise
    if (process.env.NODE_ENV === 'development') {
      const errorMessage = `Missing required EmailJS environment variables: ${missing.join(', ')}\n\nPlease create a .env.local file in your project root with:\n${missing.map(key => `${key}=your_value_here`).join('\n')}\n\nNote: The .env.local file is already in .gitignore and will not be committed to version control.\n\nSee .env.example for a template.`
      console.error(errorMessage)
    } else {
      // In production, log a minimal error
      console.error('EmailJS is not configured. Form submissions will fail.')
    }
    return false
  }
  
  return true
}

