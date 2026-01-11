export interface Service {
  id: string
  title: string
  description: string
  category: 'software'
  features: string[]
  cta: string
}

export const services: Service[] = [
  // Software Development Services
  {
    id: 'static-website',
    title: 'Static Website Development',
    description: 'Professional informational websites built with modern technologies for optimal performance and user experience.',
    category: 'software',
    features: ['HTML/CSS/JavaScript', 'Responsive Design', 'SEO Optimization', 'Fast Loading'],
    cta: 'Get Quote'
  },
  {
    id: 'web-application',
    title: 'Web Application Development',
    category: 'software',
    description: 'Full-stack web applications with user accounts, databases, and advanced functionality using Spring Boot or ASP.NET.',
    features: ['User Authentication', 'Database Integration', 'API Development', 'Admin Dashboard'],
    cta: 'Get Quote'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    category: 'software',
    description: 'Native iOS/Android apps or cross-platform solutions for seamless mobile experiences.',
    features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment', 'Push Notifications'],
    cta: 'Get Quote'
  },
  {
    id: 'api-integration',
    title: 'API Integration & Development',
    category: 'software',
    description: 'REST APIs, internal tools, and local AI setup for seamless system integration.',
    features: ['REST API Design', 'Third-party Integration', 'Local AI Setup', 'Documentation'],
    cta: 'Get Quote'
  },
  {
    id: 'debugging-fixes',
    title: 'Debugging & Code Fixes',
    category: 'software',
    description: 'Expert debugging services for existing codebases and hosting issues.',
    features: ['Code Review', 'Bug Fixing', 'Performance Optimization', 'Hosting Issues'],
    cta: 'Get Quote'
  }
]

export const getServicesByCategory = (category: 'software') => {
  return services.filter(service => service.category === category)
}

export const getSoftwareServices = () => getServicesByCategory('software')
