'use client'

import { FadeIn, SlideUp, StaggeredFadeIn } from '@/components/ui/animated-components'
import { Mail, Linkedin, Youtube, Github, ExternalLink, User } from 'lucide-react'
import ContactForm from '@/components/ui/contact-form'

const Contact = () => {
  const contactOptions = [
    {
      title: 'Email',
      description: 'Let\'s discuss opportunities and collaborations',
      icon: Mail,
      href: 'mailto:gabriel@example.com',
      color: 'blue',
      label: 'gabriel@example.com'
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      icon: Linkedin,
      href: 'https://linkedin.com/in/gabrieluwaila',
      color: 'indigo',
      label: 'LinkedIn Profile'
    },
    {
      title: 'YouTube',
      description: 'Check out my vlogs and tech content',
      icon: Youtube,
      href: 'https://youtube.com/@ehis6k',
      color: 'red',
      label: 'YouTube Channel'
    },
    {
      title: 'GitHub',
      description: 'Explore my code and contributions',
      icon: Github,
      href: 'https://github.com/ehis6k',
      color: 'slate',
      label: 'GitHub Profile'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600/20 dark:bg-blue-600/20 light:bg-blue-500/20 text-blue-300 dark:text-blue-300 light:text-blue-600 border-blue-500/50 dark:border-blue-500/50 light:border-blue-400/50 hover:bg-blue-500/30 dark:hover:bg-blue-500/30 light:hover:bg-blue-400/30',
      indigo: 'bg-indigo-600/20 dark:bg-indigo-600/20 light:bg-indigo-500/20 text-indigo-300 dark:text-indigo-300 light:text-indigo-600 border-indigo-500/50 dark:border-indigo-500/50 light:border-indigo-400/50 hover:bg-indigo-500/30 dark:hover:bg-indigo-500/30 light:hover:bg-indigo-400/30',
      red: 'bg-red-600/20 dark:bg-red-600/20 light:bg-red-500/20 text-red-300 dark:text-red-300 light:text-red-600 border-red-500/50 dark:border-red-500/50 light:border-red-400/50 hover:bg-red-500/30 dark:hover:bg-red-500/30 light:hover:bg-red-400/30',
      slate: 'bg-slate-600/20 dark:bg-slate-600/20 light:bg-slate-500/20 text-slate-300 dark:text-slate-300 light:text-slate-600 border-slate-500/50 dark:border-slate-500/50 light:border-slate-400/50 hover:bg-slate-500/30 dark:hover:bg-slate-500/30 light:hover:bg-slate-400/30'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-50 light:to-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <SlideUp>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-6">
                Let's <span className="text-gradient-accent">Connect</span>
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's start a conversation about your next project
              </p>
            </SlideUp>
          </div>
        </FadeIn>

        <StaggeredFadeIn delay={0.3}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactOptions.map((option) => {
              const IconComponent = option.icon
              return (
                <a
                  key={option.title}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-effect-dark dark:glass-effect-dark light:glass-effect border rounded-2xl p-6 hover:border-gray-700/50 dark:hover:border-gray-700/50 light:hover:border-gray-300/50 transition-all duration-300 group ${getColorClasses(option.color)}`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${
                      option.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      option.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                      option.color === 'red' ? 'from-red-500 to-red-600' :
                      'from-slate-500 to-slate-600'
                    } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 group-hover:text-current transition-colors">
                        {option.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-3 group-hover:text-current transition-colors">
                    {option.description}
                  </p>
                  <span className="text-sm font-medium group-hover:text-current transition-colors">
                    {option.label}
                  </span>
                </a>
              )
            })}
          </div>
        </StaggeredFadeIn>

        {/* Social Media Handle */}
        <FadeIn delay={0.6}>
          <div className="glass-effect-dark dark:glass-effect-dark light:glass-effect border border-l-4 border-l-blue-500 border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-2xl p-8 text-center">
            <SlideUp delay={0.7}>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900">
                  Find Me Everywhere
                </h3>
              </div>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4">
                Follow my journey across all platforms with my universal handle
              </p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-3xl font-bold text-gradient-accent">@ehis6k</span>
                <span className="inline-flex items-center rounded-full bg-blue-600/20 dark:bg-blue-600/20 light:bg-blue-500/20 border border-blue-500/40 dark:border-blue-500/40 light:border-blue-400/40 px-3 py-1 text-sm font-medium text-blue-300 dark:text-blue-300 light:text-blue-600">
                  Universal Handle
                </span>
              </div>
            </SlideUp>
          </div>
        </FadeIn>

        {/* Get Your Quote Section */}
        <FadeIn delay={0.8}>
          <div className="mt-16 max-w-2xl mx-auto">
            <SlideUp delay={0.9}>
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-4">
                  Get Your <span className="text-gradient-accent">Quote</span>
                </h3>
                <p className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-600">
                  Fill out the form below and I'll get back to you with a personalized quote and project details.
                </p>
              </div>
            </SlideUp>
            <SlideUp delay={1.0}>
              <div id="get-quote">
                <ContactForm />
              </div>
            </SlideUp>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Contact 