import { z } from 'zod'
import { services } from './services'

// Create service options for the dropdown
export const serviceOptions = [
  { value: 'general', label: 'General Inquiry' },
  ...services.map(service => ({
    value: service.id,
    label: service.title
  }))
]

// Contact form validation schema with enhanced security
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name can only contain letters, spaces, hyphens, apostrophes, and periods')
    .refine((val) => val.trim().length >= 2, 'Name cannot be just spaces'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(100, 'Email address is too long')
    .refine((val) => !val.includes('+'), 'Please use your primary email address without aliases'),
  service: z.string()
    .min(1, 'Please select a service')
    .refine((val) => {
      const validServices = ['general', ...services.map(s => s.id)]
      return validServices.includes(val)
    }, 'Please select a valid service'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .refine((val) => val.trim().length >= 10, 'Message cannot be just spaces')
    .refine((val) => {
      // Check for common spam patterns
      const spamPatterns = [
        /https?:\/\/[^\s]+/gi, // URLs
        /www\.[^\s]+/gi, // www links
        /[A-Z]{5,}/g, // Excessive caps
        /(.)\1{4,}/g, // Repeated characters
        /free\s+money|click\s+here|buy\s+now/gi // Common spam phrases
      ]
      return !spamPatterns.some(pattern => pattern.test(val))
    }, 'Message contains suspicious content. Please provide a genuine inquiry.')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Default form values
export const defaultFormValues: ContactFormData = {
  name: '',
  email: '',
  service: '',
  message: ''
}
