'use client'

import { motion } from 'framer-motion'
import { Code, Music, ArrowRight, CheckCircle } from 'lucide-react'
import { FadeIn, SlideUp, StaggeredFadeIn } from '@/components/ui/animated-components'
import { services, getSoftwareServices, getAudioServices, getMusicServices, type Service } from '@/lib/services'

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-effect-dark dark:glass-effect-dark light:glass-effect border border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-2xl p-6 hover:border-gray-700/50 dark:hover:border-gray-700/50 light:hover:border-gray-300/50 transition-all duration-300 group"
    >
      {/* Service Icon and Title */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">{service.icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 transition-colors">
            {service.title}
          </h3>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            service.category === 'software' 
              ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50' 
              : service.category === 'audio'
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/50'
              : 'bg-green-600/20 text-green-300 border border-green-500/50'
          }`}>
            {service.category === 'software' ? 'Software Development' : 
             service.category === 'audio' ? 'Audio Engineering' : 'Music Performance'}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-4 transition-colors">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group-hover:shadow-lg"
        onClick={() => {
          // Navigate to home page and scroll to get-quote section
          window.location.href = '/#get-quote'
        }}
      >
        <span>{service.cta}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </motion.button>
    </motion.div>
  )
}

const Services = () => {
  const softwareServices = getSoftwareServices()
  const audioServices = getAudioServices()
  const musicServices = getMusicServices()

  return (
    <section id="services" className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-50 light:to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <SlideUp>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-6">
                Professional <span className="text-gradient-accent">Services</span>
              </h1>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto">
                From software development to audio engineering, I provide comprehensive solutions 
                tailored to your needs. Contact me for personalized pricing and project details.
              </p>
            </SlideUp>
          </div>
        </FadeIn>

        {/* Software Development Services */}
        <StaggeredFadeIn delay={0.3}>
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900">
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

        {/* Audio Engineering Services */}
        <StaggeredFadeIn delay={0.5}>
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900">
                Audio Engineering
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audioServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </StaggeredFadeIn>

        {/* Music Performance Services */}
        <StaggeredFadeIn delay={0.6}>
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900">
                Music Performance
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {musicServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </StaggeredFadeIn>

        {/* Pricing Note */}
        <FadeIn delay={0.8}>
          <div className="glass-effect-dark dark:glass-effect-dark light:glass-effect border border-l-4 border-l-blue-500 border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-2xl p-8 text-center">
            <SlideUp delay={0.9}>
              <h3 className="text-2xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-4">
                Student-Friendly Pricing Available
              </h3>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">
                I offer competitive rates with special pricing for students and educational projects. 
                Contact me to discuss your specific needs and receive a personalized quote.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg"
                onClick={() => {
                  // Navigate to home page and scroll to get-quote section
                  window.location.href = '/#get-quote'
                }}
              >
                <span>Get Your Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </SlideUp>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Services
