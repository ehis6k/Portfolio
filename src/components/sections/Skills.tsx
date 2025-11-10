'use client'

import { FadeIn, SlideUp, StaggeredFadeIn } from '@/components/ui/animated-components'
import {
  Code,
  Database,
  Cloud,
  Settings,
  Server,
  ShieldCheck
} from 'lucide-react'

interface SkillBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'highlight'
}

const SkillBadge = ({ children, variant = 'default' }: SkillBadgeProps) => {
  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105'
  const variantClasses = {
    default: 'bg-gradient-card border-gray-700/50 dark:border-gray-700/50 light:border-gray-400/60 text-theme-primary hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-300/60',
    highlight: 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 dark:from-blue-600/20 dark:to-indigo-600/20 light:from-blue-500/30 light:to-indigo-500/30 border-blue-500/40 dark:border-blue-500/40 light:border-blue-500/60 text-blue-300 dark:text-blue-300 light:text-blue-700 hover:from-blue-500/30 hover:to-indigo-500/30 dark:hover:from-blue-500/30 dark:hover:to-indigo-500/30 light:hover:from-blue-400/40 light:hover:to-indigo-400/40'
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
      title: 'Programming Languages',
      icon: Code,
      skills: ['TypeScript', 'Java', 'C#', 'Python', 'SQL', 'JavaScript', 'HTML5', 'CSS3'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frameworks & Platforms',
      icon: Settings,
      skills: ['Spring Boot', '.NET 9', 'Blazor Server', 'Next.js', 'React', 'Material UI', 'React Query', 'FastAPI', 'Framer Motion', 'Tailwind CSS'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Azure Container Apps', 'GitLab CI/CD', 'Docker', 'GitHub Actions', 'Azure Blob Storage', 'Vercel', 'Infrastructure as Code'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Data, ML & Analytics',
      icon: Database,
      skills: ['PostgreSQL', 'MS SQL Server', 'Redis', 'Pandas', 'Scikit-learn', 'XGBoost', 'SMOTE', 'Transformers', 'LLM Pipelines'],
      gradient: 'from-emerald-500 to-teal-600'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-section-dark">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <SlideUp>
              <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
                Skills & <span className="text-gradient-accent">Technologies</span>
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-xl text-theme-secondary max-w-2xl mx-auto">
                Enterprise-ready engineering capabilities across full-stack delivery, cloud operations, and applied machine learning
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
                    <h3 className="text-2xl font-bold text-theme-primary">
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
              <h3 className="text-3xl font-bold text-theme-primary mb-8">
                Delivery <span className="text-gradient-accent">Expertise</span>
              </h3>
            </SlideUp>
            <StaggeredFadeIn delay={0.8}>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="glass-effect-dark dark:glass-effect-dark light:glass-effect border border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-xl p-6 hover:border-gray-700/50 dark:hover:border-gray-700/50 light:hover:border-gray-300/50 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-theme-primary">Architecture & Delivery</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge>Domain-Driven Design</SkillBadge>
                    <SkillBadge>Hexagonal Architecture</SkillBadge>
                    <SkillBadge>Clean Architecture</SkillBadge>
                    <SkillBadge>Agile Collaboration</SkillBadge>
                    <SkillBadge>Technical Documentation</SkillBadge>
                  </div>
                </div>

                <div className="glass-effect-dark dark:glass-effect-dark light:glass-effect border border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-xl p-6 hover:border-gray-700/50 dark:hover:border-gray-700/50 light:hover:border-gray-300/50 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-theme-primary">Security & Integrations</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge>Active Directory</SkillBadge>
                    <SkillBadge>Keycloak OIDC</SkillBadge>
                    <SkillBadge>JWT Authentication</SkillBadge>
                    <SkillBadge>Stripe Payments</SkillBadge>
                    <SkillBadge>REST API Design</SkillBadge>
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