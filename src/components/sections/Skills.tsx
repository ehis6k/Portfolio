'use client'

import { FadeIn, SlideUp, StaggeredFadeIn } from '@/components/ui/animated-components'
import {
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Terminal,
  GitBranch,
  Cloud,
  Settings
} from 'lucide-react'

interface SkillBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'highlight'
}

const SkillBadge = ({ children, variant = 'default' }: SkillBadgeProps) => {
  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105'
  const variantClasses = {
    default: 'bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/50 border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-300/50',
    highlight: 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 dark:from-blue-600/20 dark:to-indigo-600/20 light:from-blue-500/20 light:to-indigo-500/20 border-blue-500/40 dark:border-blue-500/40 light:border-blue-400/40 text-blue-300 dark:text-blue-300 light:text-blue-600 hover:from-blue-500/30 hover:to-indigo-500/30 dark:hover:from-blue-500/30 dark:hover:to-indigo-500/30 light:hover:from-blue-400/30 light:hover:to-indigo-400/30'
  }
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} border`}>
      {children}
    </span>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['TypeScript', 'JavaScript', 'C#', 'Java', 'Python', 'SQL', 'HTML5', 'CSS3', 'C'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Settings,
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'Spring Boot', '.NET', 'Blazor', 'Bootstrap', 'TailwindCSS', 'Chart.js'],
      gradient: 'from-slate-500 to-slate-600'
    },
    {
      title: 'Databases & Cloud',
      icon: Database,
      skills: ['PostgreSQL', 'MS SQL Server', 'MongoDB', 'Azure', 'Vercel', 'Netlify'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      skills: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'Arduino', 'Bash'],
      gradient: 'from-blue-600 to-indigo-600'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-50 light:to-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <SlideUp>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-6">
                Skills & <span className="text-gradient-accent">Technologies</span>
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
                A comprehensive toolkit for building modern, scalable applications
              </p>
            </SlideUp>
          </div>
        </FadeIn>

        <StaggeredFadeIn delay={0.3}>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div
                  key={category.title}
                  className="glass-effect-dark dark:glass-effect-dark light:glass-effect border border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-2xl p-8 hover:border-gray-700/50 dark:hover:border-gray-700/50 light:hover:border-gray-300/50 transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge 
                        key={skill} 
                        variant={skillIndex < 3 ? 'highlight' : 'default'}
                      >
                        {skill}
                      </SkillBadge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </StaggeredFadeIn>

        {/* Additional Skills Section */}
        <FadeIn delay={0.6}>
          <div className="mt-20 text-center">
            <SlideUp delay={0.7}>
              <h3 className="text-3xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-8">
                Additional <span className="text-gradient-accent">Expertise</span>
              </h3>
            </SlideUp>
            <StaggeredFadeIn delay={0.8}>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="glass-effect-dark dark:glass-effect-dark light:glass-effect border border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-xl p-6 hover:border-gray-700/50 dark:hover:border-gray-700/50 light:hover:border-gray-300/50 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900">Content Creation</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge>Video Editing</SkillBadge>
                    <SkillBadge>YouTube</SkillBadge>
                    <SkillBadge>Vlogging</SkillBadge>
                    <SkillBadge>Social Media</SkillBadge>
                  </div>
                </div>

                <div className="glass-effect-dark dark:glass-effect-dark light:glass-effect border border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-xl p-6 hover:border-gray-700/50 dark:hover:border-gray-700/50 light:hover:border-gray-300/50 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900">Audio Engineering</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge>Bass Guitar</SkillBadge>
                    <SkillBadge>Drums</SkillBadge>
                    <SkillBadge>Music Production</SkillBadge>
                    <SkillBadge>Audio Mixing</SkillBadge>
                  </div>
                </div>
              </div>
            </StaggeredFadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Skills 