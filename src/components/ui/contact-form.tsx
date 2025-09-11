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

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

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

    try {
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
        <h3 className="text-2xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-2">
          Get Your Quote
        </h3>
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">
          Fill out the form below and I'll get back to you with a personalized quote and project details.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                  Full Name *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100/50 border-gray-700 dark:border-gray-700 light:border-gray-300 text-gray-100 dark:text-gray-100 light:text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
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
                <FormLabel className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                  Email Address *
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100/50 border-gray-700 dark:border-gray-700 light:border-gray-300 text-gray-100 dark:text-gray-100 light:text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
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
                <FormLabel className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                  Service Interest *
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100/50 border-gray-700 dark:border-gray-700 light:border-gray-300 text-gray-100 dark:text-gray-100 light:text-gray-900 focus:border-blue-500 focus:ring-blue-500/20">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-800 dark:bg-gray-800 light:bg-gray-100 border-gray-700 dark:border-gray-700 light:border-gray-300">
                    {serviceOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-gray-100 dark:text-gray-100 light:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-200 focus:bg-gray-700 dark:focus:bg-gray-700 light:focus:bg-gray-200"
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
                <FormLabel className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                  Project Details *
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    className="min-h-[120px] bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100/50 border-gray-700 dark:border-gray-700 light:border-gray-300 text-gray-100 dark:text-gray-100 light:text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
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
              <span>Failed to send message. Please try again or contact me directly.</span>
            </motion.div>
          )}
        </form>
      </Form>

      {/* Additional Contact Info */}
      <div className="mt-6 pt-6 border-t border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30">
        <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 text-center">
          Prefer to email directly? Contact me at{' '}
          <a
            href="mailto:gabrieluwaila@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            gabrieluwaila@gmail.com
          </a>
        </p>
      </div>

    </motion.div>
  )
}

export default ContactForm
