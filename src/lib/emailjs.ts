import emailjs from '@emailjs/browser'

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_xvzpfe7',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ezr1pod',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '9tQ_kih1GIdfZ_DLt',
}

// Template IDs for different email types
export const EMAILJS_TEMPLATES = {
  // Current template (legacy)
  contact: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ezr1pod',
  
  // New professional service inquiry template
  serviceInquiry: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_TEMPLATE_ID || 'template_service_inquiry',
  
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
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }
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

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    console.log('EmailJS success:', result)
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      error: error,
      config: {
        serviceId: EMAILJS_CONFIG.serviceId,
        templateId: EMAILJS_TEMPLATES[templateType],
        publicKey: EMAILJS_CONFIG.publicKey ? 'Set' : 'Missing'
      }
    })
    return { success: false, error }
  }
}

// Send service inquiry email using the new professional template
export const sendServiceInquiryEmail = async (templateParams: Record<string, any>) => {
  return sendEmail(templateParams, 'serviceInquiry')
}

// Create template parameters for EmailJS with proper variable mapping
export const createTemplateParams = (formData: {
  name: string
  email: string
  service: string
  message: string
}) => {
  return {
    // Primary variables for EmailJS
    from_name: formData.name,
    from_email: formData.email,
    service: formData.service,
    message: formData.message,
    to_email: 'gabrieluwaila@gmail.com',
    reply_to: formData.email,
    
    // Additional variables for template personalization
    name: formData.name,           // For {{name}} in template
    email: formData.email,         // For {{email}} in template  
    service_name: formData.service, // For {{service}} in template
    user_message: formData.message, // For {{message}} in template
  }
}

// Validate EmailJS configuration
export const validateEmailJSConfig = () => {
  const missing = []
  
  if (!EMAILJS_CONFIG.serviceId) missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
  if (!EMAILJS_CONFIG.templateId) missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID')
  if (!EMAILJS_CONFIG.publicKey) missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')
  
  if (missing.length > 0) {
    console.warn('Missing EmailJS environment variables:', missing.join(', '))
    return false
  }
  
  return true
}

