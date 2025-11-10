'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Youtube } from 'lucide-react'
import { FadeIn, SlideUp, FloatingIcon } from '@/components/ui/animated-components'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Check for reduced motion preference
    const checkReduceMotion = () => {
      setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkMobile()
    checkReduceMotion()
    
    window.addEventListener('resize', checkMobile)
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', checkReduceMotion)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', checkReduceMotion)
    }
  }, [])

  const scrollToNext = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Simplified animation variants for mobile
  const mobileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const desktopVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Background Effects - Simplified for mobile */}
      <div className="absolute inset-0">
        {!isMobile && (
          <>
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
          </>
        )}
        {/* Simplified mobile background */}
        {isMobile && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-2xl"></div>
        )}
      </div>

      {/* Floating Icons - Disabled on mobile for performance */}
      {!isMobile && !reduceMotion && (
        <>
          <FloatingIcon 
            icon={Github} 
            className="absolute top-1/4 left-1/4 text-gray-400/20" 
            delay={0}
          />
          <FloatingIcon 
            icon={Linkedin} 
            className="absolute top-3/4 right-1/4 text-gray-400/20" 
            delay={2}
          />
          <FloatingIcon 
            icon={Youtube} 
            className="absolute top-1/2 left-1/6 text-gray-400/20" 
            delay={4}
          />
        </>
      )}

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={reduceMotion ? false : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: isMobile ? 0.4 : 0.8, 
            ease: "easeOut",
            delay: isMobile ? 0 : 0.2
          }}
          className="space-y-8 max-w-5xl mx-auto"
        >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: isMobile ? 0.3 : 0.6, 
                  delay: isMobile ? 0.1 : 0.3,
                  ease: "easeOut"
                }}
              >
                <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide">
                  Welcome to the web portfolio of
                </p>
              </motion.div>
              
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: isMobile ? 0.3 : 0.6, 
                  delay: isMobile ? 0.2 : 0.5,
                  ease: "easeOut"
                }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  <span className="text-gray-100">Gabriel </span>
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Uwaila
                  </span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: isMobile ? 0.3 : 0.6, 
                  delay: isMobile ? 0.3 : 0.7,
                  ease: "easeOut"
                }}
              >
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Final-year Computer Science student, Fujifilm intern, and aspiring full-stack developer 
                  passionate about creating innovative digital solutions.
                </p>
              </motion.div>
            </div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.6, 
                delay: isMobile ? 0.4 : 0.9,
                ease: "easeOut"
              }}
            >
              <div className="flex items-center justify-center space-x-4 md:space-x-8 mt-12 mb-12 flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">R</span>
                  </div>
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">T</span>
                  </div>
                  <span className="text-sm font-medium">TypeScript</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">N</span>
                  </div>
                  <span className="text-sm font-medium">.NET</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">J</span>
                  </div>
                  <span className="text-sm font-medium">Java</span>
                </div>
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.6, 
                delay: isMobile ? 0.5 : 1.1,
                ease: "easeOut"
              }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 mb-20">
                <motion.button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  whileTap={!isMobile ? { scale: 0.95 } : {}}
                >
                  View My Work
                </motion.button>
                <motion.a
                  href="/api/cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg backdrop-blur hover:bg-white/20 transition-all duration-300"
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  whileTap={!isMobile ? { scale: 0.95 } : {}}
                >
                  Download CV
                </motion.a>
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  whileTap={!isMobile ? { scale: 0.95 } : {}}
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

        {/* Scroll Indicator - Positioned at the very bottom */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: isMobile ? 0.3 : 0.6, 
            delay: isMobile ? 0.6 : 1.3,
            ease: "easeOut"
          }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <motion.div 
            animate={!reduceMotion ? { y: [0, 10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center space-y-2 text-gray-400 hover:text-gray-300 transition-colors">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 