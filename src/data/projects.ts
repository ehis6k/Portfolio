import { Project } from "./types";

/**
 * Projects data with image mappings
 * 
 * Image Asset Mapping (public/assets/img/):
 * - AMS (featured): /assets/img/fujifilm/dev_work.jpeg (hero), dev_work2.jpeg, dev_work3.jpeg available for variants
 * - EvaleBike: /assets/img/kdg/evalbike.jpeg ✅
 * - Other projects: Need actual project screenshots/images (currently using placeholder)
 * 
 * TODO: Add actual images for:
 * - Spring Boot Backend API
 * - KDG Restaurant Backend  
 * - KDG Food Delivery Frontend
 * - LLL Sentiment Project
 * - Credit Card Fraud Detection
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
    // Hero image for featured case study - additional images available: dev_work2.jpeg, dev_work3.jpeg, staging_devices.jpeg
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
    id: "spring-boot-backend-api",
    name: "Spring Boot Backend API",
    slug: "spring-boot-backend-api",
    summary:
      "A robust REST API built with Spring Boot showcasing modern backend development practices and clean architecture.",
    role: "Backend Developer",
    status: "completed",
    tags: ["Backend", "API", "Open Source"],
    stack: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Maven", "JUnit"],
    // TODO: Add actual project screenshot/image
    image: "/assets/img/kdg/evalbike.jpeg", // Placeholder - needs actual project image
    imageAlt:
      "Spring Boot REST API code structure showing controllers, services, and repository layers with JWT authentication",
    featured: false,
    links: {
      github: "https://github.com/ehis6k",
    },
  },
  {
    id: "kdg-restaurant-backend",
    name: "KDG Restaurant Backend",
    slug: "kdg-restaurant-backend",
    summary:
      "Hexagonal Spring Boot core for the Keep Dishes Going hospitality platform.",
    role: "Backend Developer",
    status: "in-progress",
    tags: ["Backend", "Microservices", "DDD"],
    stack: [
      "Java",
      "Spring Boot",
      "Hexagonal Architecture",
      "PostgreSQL",
      "Stripe",
      "Keycloak",
    ],
    // TODO: Add actual project screenshot/image
    image: "/assets/img/kdg/evalbike.jpeg", // Placeholder - needs actual project image
    imageAlt:
      "KDG Restaurant Backend architecture diagram showing hexagonal design with domain, application, and infrastructure layers",
    featured: false,
    links: {
      github: "https://github.com/ehis6k",
    },
  },
  {
    id: "kdg-food-delivery-frontend",
    name: "KDG Food Delivery Frontend",
    slug: "kdg-food-delivery-frontend",
    summary:
      "Responsive React + TypeScript SPA delivering the customer and owner experience for KDG.",
    role: "Frontend Developer",
    status: "in-progress",
    tags: ["Frontend", "React", "TypeScript"],
    stack: [
      "React",
      "TypeScript",
      "Material UI",
      "React Query",
      "Keycloak",
      "Vite",
    ],
    // TODO: Add actual project screenshot/image
    image: "/assets/img/kdg/evalbike.jpeg", // Placeholder - needs actual project image
    imageAlt:
      "KDG Food Delivery frontend interface showing restaurant listings, menu items, and responsive customer dashboard",
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
      "REST APIs",
    ],
    image: "/assets/img/kdg/evalbike.jpeg",
    imageAlt:
      "EvaleBike evaluation platform dashboard showing telemetry data from electric bike test benches with Azure cloud infrastructure",
    featured: false,
    links: {
      // Internal project
    },
  },
  {
    id: "lll-sentiment-project",
    name: "LLL Sentiment Project",
    slug: "lll-sentiment-project",
    summary:
      "Aspect-based sentiment analysis toolkit comparing lexicon, transformer, and LLM approaches.",
    role: "ML Engineer",
    status: "completed",
    tags: ["ML", "NLP", "Research"],
    stack: ["Python", "Transformers", "LLMs", "Pandas", "Scikit-learn"],
    // TODO: Add actual project screenshot/image
    image: "/assets/img/kdg/evalbike.jpeg", // Placeholder - needs actual project image
    imageAlt:
      "Sentiment analysis toolkit interface comparing results from lexicon-based, transformer, and LLM sentiment engines with explainable metrics",
    featured: false,
    links: {
      github: "https://github.com/ehis6k",
    },
  },
  {
    id: "credit-card-fraud-detection",
    name: "Credit Card Fraud Detection",
    slug: "credit-card-fraud-detection",
    summary:
      "End-to-end machine learning lifecycle across imbalanced financial transactions.",
    role: "ML Engineer",
    status: "completed",
    tags: ["ML", "Data Science", "API"],
    stack: [
      "Python",
      "FastAPI",
      "SMOTE",
      "XGBoost",
      "Scikit-learn",
      "Docker",
    ],
    // TODO: Add actual project screenshot/image
    image: "/assets/img/kdg/evalbike.jpeg", // Placeholder - needs actual project image
    imageAlt:
      "Credit card fraud detection model pipeline showing SMOTE balancing, XGBoost classifier, and FastAPI deployment with performance metrics",
    featured: false,
    links: {
      github: "https://github.com/ehis6k",
    },
  },
];

