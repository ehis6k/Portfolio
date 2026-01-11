import { Project } from "./types";

/**
 * Projects data with image mappings
 *
 * Image Asset Mapping (public/assets/img/):
 * - AMS (featured): /assets/img/fujifilm/dev_work.jpeg (hero)
 * - EvaleBike: /assets/img/kdg/evalbike.jpeg
 * - Adullam: /assets/img/adullam/adullam_dev.jpeg (or design.jpeg)
 * - Other projects use placeholders until screenshots are added
 */

export const projects: Project[] = [
  {
    id: "asset-management-system",
    name: "Asset Management System (AMS)",
    slug: "asset-management-system",
    summary:
      "Enterprise asset lifecycle platform powering Fujifilm Europe's IT infrastructure visibility.",
    role: "Full-stack Developer",
    status: "in-progress",
    tags: ["Featured", "Enterprise", "Internal"],
    stack: [".NET 9", "Blazor Server", "C#", "SQL Server", "Active Directory"],
    image: "/assets/img/fujifilm/dev_work.jpeg",
    imageAlt:
      "Asset Management System interface displaying hardware asset catalog with search and filter functionality",
    featured: true,
    links: {
      // Internal project - no public demo
    },
    caseStudy: {
      problem:
        "Fujifilm Europe needed a centralized system to catalog and manage IT hardware assets across multiple locations, with unique serial tracking, automated discovery, and comprehensive transaction history.",
      constraints: [
        "Must integrate with existing Active Directory infrastructure",
        "Deploy within secure Fujifilm internal network",
        "Support role-based access for admins, engineers, and end users",
        "Handle large-scale asset inventory with performance requirements",
        "Maintain enterprise security standards and compliance",
      ],
      architecture:
        "Built with .NET 9.0 and Blazor Server for real-time updates and server-side rendering. SQL Server handles transactional data and asset relationships. Active Directory integration provides authentication and authorization. The system implements a layered architecture with clear separation between data access, business logic, and presentation layers.",
      results: [
        "Centralized visibility into IT infrastructure assets across Fujifilm Europe",
        "Automated asset discovery reduces manual data entry overhead",
        "Role-based access control ensures proper security boundaries",
        "Transaction history provides audit trail for compliance",
        "Currently in pilot phase with positive stakeholder feedback",
      ],
    },
  },
  {
    id: "bandit-games",
    name: "BanditGames (Microservices Platform)",
    slug: "bandit-games",
    summary:
      "Enterprise-level full-stack architecture with containerized microservices for gaming and AI.",
    role: "Full-stack Developer",
    status: "completed",
    tags: ["Microservices", "AI/ML", "Full-stack"],
    stack: [
      "Spring Boot",
      "React",
      "Docker",
      "MCTS/Minimax AI",
      "Microservices",
    ],
    image: "/assets/img/kdg/BanditGames.JPG",
    imageAlt:
      "BanditGames microservices architecture diagram showing backend, frontend, and AI services orchestration",
    featured: false,
    links: {
      github: "https://github.com/ehis6k",
    },
  },
  {
    id: "adullam-bible-app",
    name: "Adullam - Bible Journal App",
    slug: "adullam-bible-app",
    summary:
      "Beautiful React Native app for Bible journaling with AI-powered insights and multi-language support.",
    role: "Mobile Developer",
    status: "in-progress",
    tags: ["Mobile", "React Native", "AI"],
    stack: [
      "React Native",
      "TypeScript",
      "Firebase",
      "OpenAI API",
      "i18next",
    ],
    image: "/assets/img/adullam/adullam_dev.jpeg",
    imageAlt:
      "Adullam mobile app interface showing Bible journal entries and AI-powered insights",
    featured: false,
    links: {
      github: "https://github.com/ehis6k",
    },
  },
  {
    id: "multi-agent-dai6",
    name: "Multi-Agent AI Systems",
    slug: "multi-agent-dai6",
    summary:
      "Advanced AI project showcasing multi-agent systems and reinforcement learning with a dedicated frontend.",
    role: "AI Engineer",
    status: "completed",
    tags: ["AI/ML", "Reinforcement Learning", "Research"],
    stack: ["Python", "Multi-Agent Systems", "Reinforcement Learning", "React"],
    image: "/assets/img/kdg/evalbike.jpeg", // Placeholder
    imageAlt:
      "Multi-agent system simulation interface showing agent interactions and learning progress",
    featured: false,
    links: {
      github: "https://github.com/ehis6k",
    },
  },
  {
    id: "programming-6-fullstack",
    name: "Enterprise Full-stack System",
    slug: "programming-6-fullstack",
    summary:
      "Production-ready Spring Boot backend and React frontend with automated CI/CD pipelines.",
    role: "Full-stack Developer",
    status: "completed",
    tags: ["Full-stack", "CI/CD", "Enterprise"],
    stack: ["Spring Boot", "React", "CI/CD", "Automated Testing"],
    image: "/assets/img/kdg/evalbike.jpeg", // Placeholder
    imageAlt:
      "CI/CD pipeline dashboard and application interface showing automated deployment status",
    featured: false,
    links: {
      github: "https://github.com/ehis6k",
    },
  },
  {
    id: "evalbike",
    name: "EvaleBike",
    slug: "evalbike",
    summary:
      "Azure-native evaluation platform for electric bike test benches.",
    role: "Full-stack Developer",
    status: "completed",
    tags: ["Cloud", "Azure", "Enterprise"],
    stack: [
      "Spring Boot",
      "Azure Container Apps",
      "PostgreSQL",
      "Redis",
      "GitLab CI/CD",
    ],
    image: "/assets/img/kdg/evalbike.jpeg",
    imageAlt:
      "EvaleBike evaluation platform dashboard showing telemetry data from electric bike test benches",
    featured: false,
    links: {
      // Internal project
    },
  },
  {
    id: "deep-learning-rl",
    name: "Deep Learning & RL Research",
    slug: "deep-learning-rl",
    summary:
      "Deep learning and reinforcement learning implementations demonstrating ML depth.",
    role: "ML Engineer",
    status: "completed",
    tags: ["AI/ML", "Deep Learning", "Research"],
    stack: ["Python", "PyTorch", "TensorFlow", "Neural Networks"],
    image: "/assets/img/kdg/evalbike.jpeg", // Placeholder
    imageAlt:
      "Neural network training curves and reinforcement learning agent performance metrics",
    featured: false,
    links: {
      github: "https://github.com/ehis6k",
    },
  },
];
