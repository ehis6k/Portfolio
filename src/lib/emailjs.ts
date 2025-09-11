import emailjs from '@emailjs/browser'

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_xvzpfe7',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ezr1pod',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '9tQ_kih1GIdfZ_DLt',
}


// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }
}

// Send email using EmailJS
export const sendEmail = async (templateParams: Record<string, any>) => {
  try {

    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      throw new Error('EmailJS configuration is incomplete. Please check your environment variables.')
    }

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
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
        templateId: EMAILJS_CONFIG.templateId,
        publicKey: EMAILJS_CONFIG.publicKey ? 'Set' : 'Missing'
      }
    })
    return { success: false, error }
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

