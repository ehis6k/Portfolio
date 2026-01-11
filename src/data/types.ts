/**
 * TypeScript data models for portfolio content
 * These interfaces define the structure for profile, experience, skills, and projects
 */

export interface Profile {
  name: string;
  role: string;
  location?: string;
  summary: string;
  profileImage: string; // Path to image in public/assets/img, e.g., "/assets/img/profile/profile_pic.jpeg"
  now: string;
  next: string;
  learning: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
}

export type ExperienceType = "work" | "education";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string | "Present";
  highlights: string[];
}

export interface SkillGroup {
  id: string;
  category: string; // Backend, Frontend, DevOps, Game AI
  description: string;
  tools: string[];
}

export type ProjectStatus = "completed" | "in-progress";

export interface Project {
  id: string;
  name: string;
  slug: string;
  summary: string;
  role: string;
  status: ProjectStatus;
  tags: string[];
  stack: string[];
  image: string; // Path to image in public/assets/img, e.g., "/assets/img/ams.png"
  imageAlt: string;
  featured?: boolean;
  links: {
    github?: string;
    demo?: string;
  };
  caseStudy?: {
    problem: string;
    constraints: string[];
    architecture: string;
    results: string[];
  };
}

