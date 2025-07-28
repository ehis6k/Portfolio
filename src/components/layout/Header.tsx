'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsOpen(false) // Close mobile menu after navigation
  }

  const navigationItems = [
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="group flex items-center space-x-2"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent hover:from-white hover:to-gray-200 transition-all duration-300">
              Gabriel Uwaila
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-80 bg-black/95 backdrop-blur-xl border-l border-gray-800/50"
            >
              <div className="flex flex-col space-y-8 mt-8">
                {/* Mobile Logo */}
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-left"
                >
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Gabriel Uwaila
                  </span>
                </button>
                
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-6">
                  {navigationItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-gray-800/30 hover:border-gray-700/50"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header 