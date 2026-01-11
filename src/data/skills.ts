import { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    id: "backend",
    category: "Backend",
    description:
      "Building RESTful and event-driven APIs with Java, Spring Boot, and .NET to power enterprise workflows and microservices.",
    tools: [
      "Java",
      "Spring Boot",
      ".NET 9",
      "C#",
      "Blazor Server",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MS SQL Server",
      "Redis",
      "JWT Authentication",
      "Keycloak OIDC",
      "Stripe Payments",
      "REST API Design",
      "Domain-Driven Design",
      "Hexagonal Architecture",
    ],
  },
  {
    id: "frontend",
    category: "Frontend",
    description:
      "Creating responsive, accessible user interfaces with React, TypeScript, and modern CSS frameworks for optimal user experiences.",
    tools: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "React Query",
      "Framer Motion",
      "Blazor Server",
    ],
  },
  {
    id: "devops",
    category: "DevOps",
    description:
      "Orchestrating cloud infrastructure, CI/CD pipelines, and containerized deployments on Azure for scalable, reliable systems.",
    tools: [
      "Azure Container Apps",
      "Azure Blob Storage",
      "Docker",
      "GitLab CI/CD",
      "GitHub Actions",
      "Vercel",
      "Infrastructure as Code",
      "Active Directory",
      "Git",
    ],
  },
  {
    id: "data-ml",
    category: "Data & Machine Learning",
    description:
      "Processing datasets, training models, and building ML pipelines with Python, scikit-learn, and transformers for data-driven insights.",
    tools: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "SMOTE",
      "Transformers",
      "LLM Pipelines",
      "PostgreSQL",
      "Redis",
      "FastAPI",
    ],
  },
];

