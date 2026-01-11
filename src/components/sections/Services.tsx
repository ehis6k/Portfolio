'use client'

import { motion } from 'framer-motion'
import { Code, ArrowRight, CheckCircle, Globe, Monitor, Smartphone, Plug, Wrench, LucideIcon } from 'lucide-react'
import { FadeIn, SlideUp, StaggeredFadeIn } from '@/components/ui/animated-components'
import { services, getSoftwareServices, type Service } from '@/lib/services'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const iconMap: Record<string, LucideIcon> = {
  'static-website': Globe,
  'web-application': Monitor,
  'mobile-app': Smartphone,
  'api-integration': Plug,
  'debugging-fixes': Wrench
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = iconMap[service.id] || Code

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:border-teal/50 transition-colors duration-300">
        <CardHeader>
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-charcoal">
                {service.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                <span className="text-sm text-slate-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Services = () => {
  const softwareServices = getSoftwareServices()

  return (
    <section id="services" className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <SlideUp>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Professional <span className="text-teal">Services</span>
              </h1>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                I provide comprehensive software development solutions 
                tailored to your needs. Contact me for personalized pricing and project details.
              </p>
            </SlideUp>
          </div>
        </FadeIn>

        {/* Software Development Services */}
        <StaggeredFadeIn delay={0.3}>
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-teal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                Software Development
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </StaggeredFadeIn>

        {/* Get Your Quote Button */}
        <FadeIn delay={0.4}>
          <div className="text-center mb-16">
            <SlideUp delay={0.5}>
              <Button 
                asChild
                size="lg" 
                variant="primary"
                className="px-8"
              >
                <Link href="/contact" className="inline-flex items-center">
                  <span>Get Your Quote</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </SlideUp>
          </div>
        </FadeIn>

        {/* Pricing Note */}
        <FadeIn delay={0.6}>
          <Card className="border-l-4 border-l-teal p-8 text-center bg-slate-50/50">
            <SlideUp delay={0.7}>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Student-Friendly Pricing Available
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                I offer competitive rates with special pricing for students and educational projects. 
                Contact me to discuss your specific needs and receive a personalized quote.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  asChild
                  size="lg" 
                  variant="primary"
                  className="px-8"
                >
                  <Link href="/contact" className="inline-flex items-center">
                    <span>Get Your Quote</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </SlideUp>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

export default Services
