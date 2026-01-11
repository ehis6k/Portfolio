'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { contactFormSchema, serviceOptions, type ContactFormData } from '@/lib/contact-form'
import { sendEmail, validateEmailJSConfig, initEmailJS, createTemplateParams } from '@/lib/emailjs'

interface ContactFormProps {
  className?: string
  hideHeader?: boolean
}

const ContactForm = ({ className, hideHeader = false }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [rateLimitMessage, setRateLimitMessage] = useState<string>('')

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
    // Track form start time for validation
    sessionStorage.setItem('form_start_time', Date.now().toString())
  }, [])

  // Rate limiting configuration
  const RATE_LIMIT_CONFIG = {
    maxAttempts: 3,        // Maximum attempts per window
    windowMs: 5 * 60 * 1000, // 5 minutes in milliseconds
    storageKey: 'contact_form_attempts'
  }

  // Check rate limiting
  const checkRateLimit = (): { allowed: boolean; message: string; timeLeft?: number } => {
    const now = Date.now()
    const attempts = JSON.parse(localStorage.getItem(RATE_LIMIT_CONFIG.storageKey) || '[]')
    
    // Filter attempts within the time window
    const recentAttempts = attempts.filter((timestamp: number) => 
      now - timestamp < RATE_LIMIT_CONFIG.windowMs
    )
    
    if (recentAttempts.length >= RATE_LIMIT_CONFIG.maxAttempts) {
      const oldestAttempt = Math.min(...recentAttempts)
      const timeLeft = Math.ceil((oldestAttempt + RATE_LIMIT_CONFIG.windowMs - now) / 1000 / 60)
      return {
        allowed: false,
        message: `Too many attempts. Please wait ${timeLeft} minute(s) before trying again.`,
        timeLeft
      }
    }
    
    return { allowed: true, message: '' }
  }

  // Record submission attempt
  const recordAttempt = () => {
    const now = Date.now()
    const attempts = JSON.parse(localStorage.getItem(RATE_LIMIT_CONFIG.storageKey) || '[]')
    attempts.push(now)
    localStorage.setItem(RATE_LIMIT_CONFIG.storageKey, JSON.stringify(attempts))
  }

  // Additional client-side validation
  const validateFormData = (data: ContactFormData): boolean => {
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i, // Script tags
      /javascript:/i, // JavaScript URLs
      /on\w+\s*=/i, // Event handlers
      /data:text\/html/i, // Data URLs
      /vbscript:/i, // VBScript
      /expression\s*\(/i, // CSS expressions
    ]

    const allText = `${data.name} ${data.email} ${data.message}`.toLowerCase()
    
    // Check for suspicious content
    if (suspiciousPatterns.some(pattern => pattern.test(allText))) {
      console.log('Suspicious content detected')
      setRateLimitMessage('Invalid content detected. Please provide a genuine inquiry.')
      return false
    }

    // Check for excessive special characters (potential obfuscation)
    const specialCharCount = (data.message.match(/[^a-zA-Z0-9\s]/g) || []).length
    if (specialCharCount > data.message.length * 0.3) {
      console.log('Excessive special characters detected')
      setRateLimitMessage('Message contains too many special characters. Please provide a clear inquiry.')
      return false
    }

    // Check for rapid form filling (potential automation)
    const formStartTime = sessionStorage.getItem('form_start_time')
    if (formStartTime) {
      const timeSpent = Date.now() - parseInt(formStartTime)
      if (timeSpent < 5000) { // Less than 5 seconds
        console.log('Form filled too quickly - potential automation')
        setRateLimitMessage('Please take your time to provide a detailed inquiry.')
        return false
      }
    }

    return true
  }

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: ''
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setRateLimitMessage('')

    try {
      // Rate limiting check
      const rateLimitCheck = checkRateLimit()
      if (!rateLimitCheck.allowed) {
        setRateLimitMessage(rateLimitCheck.message)
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      // Honeypot validation - check if hidden field was filled (bot detection)
      const honeypotField = document.querySelector('input[name="website"]') as HTMLInputElement
      if (honeypotField && honeypotField.value) {
        console.log('Bot detected - honeypot field filled')
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      // Additional client-side validation
      if (!validateFormData(data)) {
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      // Validate EmailJS configuration
      if (!validateEmailJSConfig()) {
        throw new Error('EmailJS is not properly configured. Please contact me directly.')
      }

      // Prepare template parameters for EmailJS with dynamic variables
      const templateParams = createTemplateParams({
        name: data.name,
        email: data.email,
        service: data.service,
        message: data.message,
      })

      // Send email via EmailJS using the main template (sends inquiry to you)
      const result = await sendEmail(templateParams, 'contact')
      
      if (result.success) {
        // Record successful submission attempt for rate limiting
        recordAttempt()
        setSubmitStatus('success')
        form.reset()
      } else {
        // Handle error response
        const error = result.error
        let errorMessage = 'Failed to send email'
        
        if (error instanceof Error) {
          errorMessage = error.message
        } else if (error && typeof error === 'object' && 'message' in error) {
          errorMessage = String((error as { message: unknown }).message)
        } else if (typeof error === 'string') {
          errorMessage = error
        }
        
        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white/[0.05] border border-white/10 rounded-xl p-8 md:p-10 ${className}`}
    >
      {!hideHeader && (
        <div className="mb-8">
          <h3 
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ color: '#F8F9FA' }}
          >
            Let's get in touch
          </h3>
          <p 
            className="text-base leading-relaxed"
            style={{ color: '#CBD5E1' }}
          >
            Fill out the form below and I'll get back to you with a personalized quote and project details.
          </p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Honeypot Field - Hidden from users but visible to bots */}
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none' }}
            />
          </div>

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel 
                  className="text-sm font-semibold block"
                  style={{ color: '#F8F9FA' }}
                >
                  Name <span className="text-xs font-normal" style={{ color: '#94A3B8' }}>(required)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-2 focus:border-[#00D4AA] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors placeholder:text-white/30"
                    style={{ color: '#F8F9FA' }}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel 
                  className="text-sm font-semibold block"
                  style={{ color: '#F8F9FA' }}
                >
                  Email <span className="text-xs font-normal" style={{ color: '#94A3B8' }}>(required)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-2 focus:border-[#00D4AA] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors placeholder:text-white/30"
                    style={{ color: '#F8F9FA' }}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          {/* Service Selection */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel 
                  className="text-sm font-semibold block"
                  style={{ color: '#F8F9FA' }}
                >
                  Service Interest <span className="text-xs font-normal" style={{ color: '#94A3B8' }}>(required)</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-2 focus:border-[#00D4AA] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors" style={{ color: '#F8F9FA' }}>
                      <SelectValue placeholder="Select a service" className="placeholder:text-white/30" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#1A1A1A] border border-white/20">
                    {serviceOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-[#F8F9FA] hover:bg-white/10 focus:bg-white/10"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel 
                  className="text-sm font-semibold block"
                  style={{ color: '#F8F9FA' }}
                >
                  Message <span className="text-xs font-normal" style={{ color: '#94A3B8' }}>(required)</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    className="min-h-[120px] bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-2 focus:border-[#00D4AA] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none transition-colors placeholder:text-white/30"
                    style={{ color: '#F8F9FA' }}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pt-4"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00D4AA] text-[#1A1A1A] hover:bg-[#26E0C4] font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4AA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3"
            >
              <AlertCircle className="w-5 h-5" />
              <span>
                {rateLimitMessage || 'Failed to send message. Please try again or contact me directly.'}
              </span>
            </motion.div>
          )}
        </form>
      </Form>

      {/* Additional Contact Info */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <p 
          className="text-sm text-center"
          style={{ color: '#CBD5E1' }}
        >
          Prefer to email directly? Contact me at{' '}
          <a
            href="mailto:gabrieluwaila@gmail.com"
            className="text-[#00D4AA] hover:text-[#26E0C4] transition-colors underline underline-offset-2"
          >
            gabrieluwaila@gmail.com
          </a>
        </p>
      </div>

    </motion.div>
  )
}

export default ContactForm
