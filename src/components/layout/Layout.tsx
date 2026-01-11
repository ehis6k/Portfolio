import React from 'react'
import ScrollToTop from '@/components/ui/scroll-to-top'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  )
}

export default Layout 