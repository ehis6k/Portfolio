import Layout from '@/components/layout/Layout'
import ContactForm from '@/components/ui/contact-form'

export default function ContactPage() {
  return (
    <Layout>
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 md:py-16 lg:py-20"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="w-full max-w-2xl px-4 md:px-6 lg:px-8 mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: '#F8F9FA' }}
            >
              Get Your <span style={{ color: '#00D4AA' }}>Quote</span>
            </h1>
            <p 
              className="text-base md:text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: '#CBD5E1' }}
            >
              Fill out the form below and I'll get back to you with a personalized quote and project details.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm hideHeader={true} />
        </div>
      </section>
    </Layout>
  )
}

