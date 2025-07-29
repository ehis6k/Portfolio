'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
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
              <button className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[320px] bg-gradient-to-b from-black via-gray-900 to-black border-l border-gray-700/50 backdrop-blur-2xl shadow-2xl"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              
              {/* Mobile Menu Content */}
              <div className="flex flex-col h-full">
                {/* Header Section */}
                <div className="flex flex-col space-y-6 pt-8 pb-6 border-b border-gray-800/50">
                  {/* Mobile Logo */}
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="group text-left"
                  >
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-white to-gray-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-blue-300 transition-all duration-300">
                      Gabriel Uwaila
                    </span>
                    <p className="text-sm text-gray-400 mt-1">Full-Stack Developer</p>
                  </button>
                </div>
                
                {/* Navigation Section */}
                <nav className="flex-1 py-8">
                  <div className="space-y-2">
                    {navigationItems.map((item, index) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full group flex items-center justify-between px-4 py-4 rounded-xl text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 transform hover:scale-[1.02]"
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        <span className="flex items-center space-x-3">
                          <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors duration-300"></span>
                          <span>{item.label}</span>
                        </span>
                        <span className="text-gray-600 group-hover:text-blue-400 transition-colors duration-300">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </nav>
                
                {/* Footer Section */}
                <div className="border-t border-gray-800/50 pt-6 pb-4">
                  <div className="flex flex-col space-y-4">
                    {/* Social Links */}
                    <div className="flex items-center justify-center space-x-6">
                      <a
                        href="https://www.youtube.com/@ehis6k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/gabriel-uwaila-183780242"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                    
                    {/* Handle */}
                    <div className="text-center">
                      <p className="text-xs text-gray-500">@ehis6k</p>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header 