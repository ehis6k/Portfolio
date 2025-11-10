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
}

const ContactForm = ({ className }: ContactFormProps) => {
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
        const errorMessage = result.error instanceof Error 
          ? result.error.message 
          : typeof result.error === 'object' && result.error && 'message' in result.error
          ? String(result.error.message)
          : 'Failed to send email'
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
      className={`glass-effect-dark dark:glass-effect-dark light:glass-effect border border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-2xl p-8 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-theme-primary mb-2">
          Get Your Quote
        </h3>
        <p className="text-theme-secondary">
          Fill out the form below and I'll get back to you with a personalized quote and project details.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              <FormItem>
                <FormLabel className="text-theme-primary">
                  Full Name *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="bg-gradient-card border-gray-700 dark:border-gray-700 light:border-gray-400 text-theme-primary placeholder:text-theme-muted focus:border-blue-500 focus:ring-blue-500/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-theme-primary">
                  Email Address *
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-gradient-card border-gray-700 dark:border-gray-700 light:border-gray-400 text-theme-primary placeholder:text-theme-muted focus:border-blue-500 focus:ring-blue-500/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {/* Service Selection */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-theme-primary">
                  Service Interest *
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gradient-card border-gray-700 dark:border-gray-700 light:border-gray-400 text-theme-primary focus:border-blue-500 focus:ring-blue-500/20">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-section-dark border-gray-700 dark:border-gray-700 light:border-gray-400">
                    {serviceOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-theme-primary hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-200 focus:bg-gray-700 dark:focus:bg-gray-700 light:focus:bg-gray-200"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-theme-primary">
                  Project Details *
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    className="min-h-[120px] bg-gradient-card border-gray-700 dark:border-gray-700 light:border-gray-400 text-theme-primary placeholder:text-theme-muted focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
      <div className="mt-6 pt-6 border-t border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30">
        <p className="text-sm text-theme-secondary text-center">
          Prefer to email directly? Contact me at{' '}
          <a
            href="mailto:gabrieluwaila@gmail.com"
            className="text-blue-400 dark:text-blue-400 light:text-blue-600 hover:text-blue-300 dark:hover:text-blue-300 light:hover:text-blue-700 transition-colors"
          >
            gabrieluwaila@gmail.com
          </a>
        </p>
      </div>

    </motion.div>
  )
}

export default ContactForm
