import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '@/components/ui/scroll-to-top'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout 