'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    // Function to update theme
    const updateTheme = (newTheme: 'light' | 'dark') => {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(newTheme)
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    }

    // Get current theme from DOM (already set by inline script in layout.tsx)
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    
    if (savedTheme) {
      // Only update if different from current to avoid flash
      if (savedTheme !== currentTheme) {
        updateTheme(savedTheme)
      } else {
        setTheme(savedTheme)
      }
    } else {
      // Set initial theme state without re-applying (already applied by inline script)
      setTheme(currentTheme)
      
      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme')) {
          updateTheme(e.matches ? 'dark' : 'light')
        }
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <>
      {children}
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </>
  )
}

