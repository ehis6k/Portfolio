import { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "fujifilm-intern",
    type: "work",
    role: "Software Engineering Intern",
    company: "Fujifilm Europe",
    location: "Belgium",
    start: "2024",
    end: "Present",
    highlights: [
      "Developing an Asset Management System (AMS) / CMDB tool using .NET 9.0, Blazor Server, and SQL Server",
      "Implementing unique serial tracking, automated discovery, and transaction history features",
      "Building AD-backed role-based access control for admins, engineers, and end users",
      "Hardening enterprise security practices and deploying within Fujifilm infrastructure",
      "Gaining valuable insights into enterprise-level software development and project management",
    ],
  },
  {
    id: "kdg-bachelors",
    type: "education",
    role: "Applied Computer Science",
    company: "Karel de Grote University College",
    location: "Belgium",
    start: "2021",
    end: "2026",
    highlights: [
      "Final year student specializing in full-stack development and software engineering",
      "Strong foundation in software development principles and methodologies",
      "Focus on modern web technologies, backend systems, and cloud computing",
    ],
  },
];

