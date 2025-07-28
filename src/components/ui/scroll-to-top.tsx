'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-800 dark:to-gray-700 light:from-gray-200 light:to-gray-300 hover:from-gray-700 hover:to-gray-600 dark:hover:from-gray-700 dark:hover:to-gray-600 light:hover:from-gray-300 light:hover:to-gray-400 text-gray-200 dark:text-gray-200 light:text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-600/50 dark:border-gray-600/50 light:border-gray-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 dark:focus-visible:ring-offset-gray-900 light:focus-visible:ring-offset-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop 