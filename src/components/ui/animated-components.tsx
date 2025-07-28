'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const AnimatedCard = ({ children, className = '', delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`group rounded-xl border bg-card/50 backdrop-blur-sm p-6 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const ScrollReveal = ({ children, className = '', delay = 0 }: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// New FadeIn component
interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const FadeIn = ({ children, className = '', delay = 0 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// New SlideUp component
interface SlideUpProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const SlideUp = ({ children, className = '', delay = 0 }: SlideUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// New StaggeredFadeIn component
interface StaggeredFadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

export const StaggeredFadeIn = ({ 
  children, 
  className = '',
  delay = 0,
  staggerDelay = 0.1 
}: StaggeredFadeInProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// New FloatingIcon component
interface FloatingIconProps {
  icon: LucideIcon
  className?: string
  delay?: number
}

export const FloatingIcon = ({ icon: Icon, className = '', delay = 0 }: FloatingIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
    </motion.div>
  )
}

interface GradientButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export const GradientButton = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: GradientButtonProps) => {
  const baseClasses = "group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl",
    secondary: "border-2 border-primary/30 text-foreground hover:bg-primary/10"
  }

  const MotionComponent = motion.a || motion.button

  const buttonContent = (
    <MotionComponent
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </MotionComponent>
  )

  return buttonContent
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, className = '' }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 