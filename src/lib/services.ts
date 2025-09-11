export interface Service {
  id: string
  title: string
  description: string
  category: 'software' | 'audio' | 'music'
  features: string[]
  cta: string
  icon: string
}

export const services: Service[] = [
  // Software Development Services
  {
    id: 'static-website',
    title: 'Static Website Development',
    description: 'Professional informational websites built with modern technologies for optimal performance and user experience.',
    category: 'software',
    features: ['HTML/CSS/JavaScript', 'Responsive Design', 'SEO Optimization', 'Fast Loading'],
    cta: 'Get Quote',
    icon: '🌐'
  },
  {
    id: 'web-application',
    title: 'Web Application Development',
    category: 'software',
    description: 'Full-stack web applications with user accounts, databases, and advanced functionality using Spring Boot or ASP.NET.',
    features: ['User Authentication', 'Database Integration', 'API Development', 'Admin Dashboard'],
    cta: 'Get Quote',
    icon: '💻'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    category: 'software',
    description: 'Native iOS/Android apps or cross-platform solutions for seamless mobile experiences.',
    features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment', 'Push Notifications'],
    cta: 'Get Quote',
    icon: '📱'
  },
  {
    id: 'api-integration',
    title: 'API Integration & Development',
    category: 'software',
    description: 'REST APIs, internal tools, and local AI setup for seamless system integration.',
    features: ['REST API Design', 'Third-party Integration', 'Local AI Setup', 'Documentation'],
    cta: 'Get Quote',
    icon: '🔌'
  },
  {
    id: 'debugging-fixes',
    title: 'Debugging & Code Fixes',
    category: 'software',
    description: 'Expert debugging services for existing codebases and hosting issues.',
    features: ['Code Review', 'Bug Fixing', 'Performance Optimization', 'Hosting Issues'],
    cta: 'Get Quote',
    icon: '🔧'
  },
  
  // Audio Engineering Services
  {
    id: 'live-mixing',
    title: 'Live Mixing',
    category: 'audio',
    description: 'Professional on-site or remote live sound mixing for events, bands, and performances.',
    features: ['On-site Mixing', 'Remote Mixing', 'Event Sound', 'Band Performances'],
    cta: 'Get Quote',
    icon: '🎛️'
  },
  {
    id: 'bass-overdub',
    title: 'Bass Overdub & Editing',
    category: 'audio',
    description: 'High-quality bass guitar recording and layering for your music productions.',
    features: ['Bass Recording', 'Track Layering', 'Audio Editing', 'Professional Quality'],
    cta: 'Get Quote',
    icon: '🎸'
  },
  {
    id: 'drum-overdub',
    title: 'Drum Overdub & Editing',
    category: 'audio',
    description: 'Professional drum recording and editing services for enhanced rhythm sections.',
    features: ['Drum Recording', 'Track Editing', 'Rhythm Enhancement', 'Studio Quality'],
    cta: 'Get Quote',
    icon: '🥁'
  },
  {
    id: 'stem-export',
    title: 'Stem Export & Track Prep',
    category: 'audio',
    description: 'Preparing stems for performance, remixing, or further production work.',
    features: ['Stem Preparation', 'Track Organization', 'Performance Ready', 'Remix Ready'],
    cta: 'Get Quote',
    icon: '🎵'
  },
  
  // Music Performance Services
  {
    id: 'live-bass-recording',
    title: 'Live Bass Recording',
    category: 'music',
    description: 'Professional studio bass overdubs with DI or mic\'d amp, delivering raw or lightly processed stems.',
    features: ['Studio Overdubs', 'DI Recording', 'Mic\'d Amp', 'Raw/Lightly Processed Stems'],
    cta: 'Get Quote',
    icon: '🎸'
  },
  {
    id: 'live-drums-recording',
    title: 'Live Drums Recording',
    category: 'music',
    description: 'High-quality studio drum overdubs with multi-mic setup, providing raw or lightly processed stems.',
    features: ['Studio Overdubs', 'Multi-Mic Setup', 'Professional Recording', 'Raw/Lightly Processed Stems'],
    cta: 'Get Quote',
    icon: '🥁'
  },
  {
    id: 'live-bass-gig',
    title: 'Live Bass (Gig)',
    category: 'music',
    description: 'Professional bass playing services for rehearsals, concerts, and live events.',
    features: ['Rehearsals', 'Concerts', 'Live Events', 'Professional Performance'],
    cta: 'Get Quote',
    icon: '🎸'
  },
  {
    id: 'live-drums-gig',
    title: 'Live Drums (Gig)',
    category: 'music',
    description: 'Expert drumming services for rehearsals, concerts, and live performances.',
    features: ['Rehearsals', 'Concerts', 'Live Performances', 'Professional Drumming'],
    cta: 'Get Quote',
    icon: '🥁'
  }
]

export const getServicesByCategory = (category: 'software' | 'audio' | 'music') => {
  return services.filter(service => service.category === category)
}

export const getSoftwareServices = () => getServicesByCategory('software')
export const getAudioServices = () => getServicesByCategory('audio')
export const getMusicServices = () => getServicesByCategory('music')
