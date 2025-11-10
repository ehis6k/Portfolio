'use client'

import { FadeIn, SlideUp, StaggeredFadeIn } from '@/components/ui/animated-components'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Asset Management System (AMS)',
      description: 'Enterprise asset lifecycle platform powering Fujifilm Europe’s IT infrastructure visibility.',
      details: 'Built with .NET 9.0, Blazor Server, and SQL Server to catalogue hardware assets, locations, and owners. Implements unique serial tracking, automated discovery, transaction history, and AD-backed role-based access for admins, engineers, and end users. Hardened with enterprise security practices and deployed inside Fujifilm infrastructure.',
      technologies: ['.NET 9', 'Blazor Server', 'C#', 'SQL Server', 'Active Directory'],
      type: 'enterprise',
      featured: true,
      status: 'In Pilot',
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
      title: 'KDG Restaurant Backend',
      description: 'Hexagonal Spring Boot core for the Keep Dishes Going hospitality platform.',
      details: 'Implements domain-driven design with aggregates for restaurants, menus, and orders. Provides secure owner onboarding, menu publishing flows, basket management, and Stripe-powered payments. Protected with Keycloak auth, documented REST APIs, Dockerized for CI/CD readiness, and backed by PostgreSQL.',
      technologies: ['Java', 'Spring Boot', 'Hexagonal Architecture', 'PostgreSQL', 'Stripe', 'Keycloak'],
      type: 'backend',
      featured: false,
      githubUrl: 'https://github.com/ehis6k',
      status: 'In Development'
    },
    {
      id: 4,
      title: 'KDG Food Delivery Frontend',
      description: 'Responsive React + TypeScript SPA delivering the customer and owner experience for KDG.',
      details: 'Built with Material UI and React Query to offer restaurant discovery, filtering, responsive layouts, and owner dashboards. Integrates with the Spring Boot APIs, provides mock API fallbacks, and secures owner workflows through Keycloak OIDC.',
      technologies: ['React', 'TypeScript', 'Material UI', 'React Query', 'Keycloak', 'Vite'],
      type: 'frontend',
      featured: false,
      githubUrl: 'https://github.com/ehis6k',
      status: 'In Development'
    },
    {
      id: 5,
      title: 'LLL Sentiment Project',
      description: 'Aspect-based sentiment analysis toolkit comparing lexicon, transformer, and LLM approaches.',
      details: 'Delivers a unified Python interface to analyse annotated reviews, benchmark multiple sentiment engines, and surface explainable metrics. Includes dataset management, experimentation pipelines, and reporting for practical adoption.',
      technologies: ['Python', 'Transformers', 'LLMs', 'Pandas', 'Scikit-learn'],
      type: 'ml',
      featured: false,
      githubUrl: 'https://github.com/ehis6k',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Credit Card Fraud Detection',
      description: 'End-to-end machine learning lifecycle across imbalanced financial transactions.',
      details: 'Processes the Kaggle credit card dataset with SMOTE balancing, evaluates Random Forest, XGBoost, and Logistic Regression models, and deploys the champion model behind a FastAPI microservice with health and scoring endpoints. Includes notebooks, explainability, and reporting artifacts.',
      technologies: ['Python', 'FastAPI', 'SMOTE', 'XGBoost', 'Scikit-learn', 'Docker'],
      type: 'data',
      featured: false,
      githubUrl: 'https://github.com/ehis6k',
      status: 'Completed'
    },
    {
      id: 7,
      title: 'EvaleBike',
      description: 'Azure-native evaluation platform for electric bike test benches.',
      details: 'Spring Boot services aggregate telemetry across environments, persisting to Azure PostgreSQL with Redis caching and Blob Storage for artifacts. GitLab CI/CD orchestrates validation, builds, deployments, and infrastructure provisioning, while external APIs enrich the evaluation scoring engine.',
      technologies: ['Spring Boot', 'Azure Container Apps', 'PostgreSQL', 'Redis', 'GitLab CI/CD', 'REST APIs'],
      type: 'cloud',
      featured: false,
      status: 'In Production',
      isInternal: true
    }
  ]

  const getTypeColor = (type: string) => {
    const colors = {
      enterprise: 'bg-blue-600/20 dark:bg-blue-600/20 light:bg-blue-500/20 text-blue-300 dark:text-blue-300 light:text-blue-600 border-blue-500/40 dark:border-blue-500/40 light:border-blue-400/40',
      backend: 'bg-green-600/20 dark:bg-green-600/20 light:bg-green-500/20 text-green-300 dark:text-green-300 light:text-green-600 border-green-500/40 dark:border-green-500/40 light:border-green-400/40',
      frontend: 'bg-purple-600/20 dark:bg-purple-600/20 light:bg-purple-500/20 text-purple-300 dark:text-purple-300 light:text-purple-600 border-purple-500/40 dark:border-purple-500/40 light:border-purple-400/40',
      mobile: 'bg-orange-600/20 dark:bg-orange-600/20 light:bg-orange-500/20 text-orange-300 dark:text-orange-300 light:text-orange-600 border-orange-500/40 dark:border-orange-500/40 light:border-orange-400/40',
      ml: 'bg-emerald-600/20 dark:bg-emerald-600/20 light:bg-emerald-500/20 text-emerald-300 dark:text-emerald-300 light:text-emerald-600 border-emerald-500/40 dark:border-emerald-500/40 light:border-emerald-400/40',
      data: 'bg-cyan-600/20 dark:bg-cyan-600/20 light:bg-cyan-500/20 text-cyan-300 dark:text-cyan-300 light:text-cyan-600 border-cyan-500/40 dark:border-cyan-500/40 light:border-cyan-400/40',
      cloud: 'bg-teal-600/20 dark:bg-teal-600/20 light:bg-teal-500/20 text-teal-300 dark:text-teal-300 light:text-teal-600 border-teal-500/40 dark:border-teal-500/40 light:border-teal-400/40'
    }
    return colors[type as keyof typeof colors] || colors.frontend
  }

  return (
    <section id="projects" className="py-20 bg-section-light">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <SlideUp>
              <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
                Featured <span className="text-gradient-accent">Projects</span>
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-xl text-theme-secondary max-w-2xl mx-auto">
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
                    <h3 className="text-2xl font-bold text-theme-primary">
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

                <p className="text-theme-primary text-lg leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <p className="text-theme-secondary leading-relaxed mb-6">
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
                      <button
                        type="button"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-gray-600 text-white font-semibold rounded-lg hover:from-slate-700 hover:to-gray-700 transition-all duration-300 hover:scale-105 group"
                      >
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