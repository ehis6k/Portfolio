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

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  service: z.string()
    .min(1, 'Please select a service'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Default form values
export const defaultFormValues: ContactFormData = {
  name: '',
  email: '',
  service: '',
  message: ''
}
