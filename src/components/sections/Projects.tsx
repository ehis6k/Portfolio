'use client'

import { FadeIn, SlideUp, StaggeredFadeIn } from '@/components/ui/animated-components'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Asset Management / CMDB Tool',
      description: 'A comprehensive enterprise-level asset management and configuration management database system built during my internship at Fujifilm.',
      details: 'Built with .NET Core and Blazor, this application helps manage IT assets, track configurations, and maintain an accurate inventory of all company resources. Features include asset lifecycle management, automated discovery, and detailed reporting capabilities.',
      technologies: ['.NET', 'Blazor', 'C#', 'SQL Server', 'Entity Framework'],
      type: 'enterprise',
      featured: true,
      status: 'In Development',
      isInternal: true
    },
    {
      id: 2,
      title: 'Spring Boot Backend API',
      description: 'A robust REST API built with Spring Boot showcasing modern backend development practices and clean architecture.',
      details: 'This project demonstrates my understanding of enterprise Java development, featuring JWT authentication, role-based access control, comprehensive error handling, and extensive API documentation. Built following SOLID principles and includes comprehensive testing.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Maven', 'JUnit'],
      type: 'backend',
      featured: true,
      githubUrl: 'https://github.com/ehis6k',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'This very website you\'re viewing! A modern, responsive portfolio built with Next.js and cutting-edge web technologies.',
      details: 'Features a sleek design with smooth animations, dark/light mode toggle, responsive layout, and optimized performance. Built with TypeScript for type safety and uses Framer Motion for engaging animations.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      type: 'frontend',
      featured: false,
      githubUrl: 'https://github.com/ehis6k',
      status: 'Completed'
    }
  ]

  const getTypeColor = (type: string) => {
    const colors = {
      enterprise: 'bg-blue-600/20 dark:bg-blue-600/20 light:bg-blue-500/20 text-blue-300 dark:text-blue-300 light:text-blue-600 border-blue-500/40 dark:border-blue-500/40 light:border-blue-400/40',
      backend: 'bg-green-600/20 dark:bg-green-600/20 light:bg-green-500/20 text-green-300 dark:text-green-300 light:text-green-600 border-green-500/40 dark:border-green-500/40 light:border-green-400/40',
      frontend: 'bg-purple-600/20 dark:bg-purple-600/20 light:bg-purple-500/20 text-purple-300 dark:text-purple-300 light:text-purple-600 border-purple-500/40 dark:border-purple-500/40 light:border-purple-400/40',
      mobile: 'bg-orange-600/20 dark:bg-orange-600/20 light:bg-orange-500/20 text-orange-300 dark:text-orange-300 light:text-orange-600 border-orange-500/40 dark:border-orange-500/40 light:border-orange-400/40'
    }
    return colors[type as keyof typeof colors] || colors.frontend
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <SlideUp>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-6">
                Featured <span className="text-gradient-accent">Projects</span>
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
                A showcase of my technical skills and passion for creating innovative solutions
              </p>
            </SlideUp>
          </div>
        </FadeIn>

        <StaggeredFadeIn delay={0.3}>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`glass-effect-dark dark:glass-effect-dark light:glass-effect border border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30 rounded-2xl p-8 hover:border-gray-700/50 dark:hover:border-gray-700/50 light:hover:border-gray-300/50 transition-all duration-300 group ${
                  project.featured ? 'border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 dark:from-blue-600/20 dark:to-indigo-600/20 light:from-blue-500/20 light:to-indigo-500/20 border border-blue-500/40 dark:border-blue-500/40 light:border-blue-400/40 px-3 py-1 text-sm font-medium text-blue-300 dark:text-blue-300 light:text-blue-600">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${getTypeColor(project.type)}`}>
                      {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/50 border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50 px-3 py-1 text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700">
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-6">
                  {project.details}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/50 border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50 px-3 py-1 text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-300/50 hover:border-gray-600/50 dark:hover:border-gray-600/50 light:hover:border-gray-400/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 group"
                    >
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      View Code
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <span className="inline-flex items-center rounded-full bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/50 border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50 px-4 py-2 text-sm font-medium text-gray-400 dark:text-gray-400 light:text-gray-600">
                        Internal Project
                      </span>
                      <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-gray-600 text-white font-semibold rounded-lg hover:from-slate-700 hover:to-gray-700 transition-all duration-300 hover:scale-105 group">
                        <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Let's Work Together
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </StaggeredFadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <SlideUp delay={0.7}>
              <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 mb-8">
                Interested in collaborating or learning more about my work?
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
            </SlideUp>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Projects 