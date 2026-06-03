import { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "utonomy-intern",
    type: "work",
    role: "Software Engineer Intern",
    company: "Utonomy",
    location: "Utrecht, Netherlands",
    start: "March 2026",
    end: "Present",
    highlights: [
      "Designed and built two production-deployed MCP (Model Context Protocol) servers for Utonomy's Solid-based data platform.",
      "hive-mind: remote MCP server giving AI coding agents (Cursor, Claude Code) shared architectural context of the Utonomy monorepo; built service documentation tooling, lookup/search tools, GitHub webhook-based context refresh pipeline, and bearer auth middleware; deployed on Scaleway serverless containers.",
      "u-mind: privacy-first personal context MCP server exposing user pod data (Solid/RDF) to AI clients via OAuth2 + PKCE; enables consent-aware read/write of personal data models with automatic audit logging.",
      "Tech stack: TypeScript, Node.js, Fastify, MCP SDK (Streamable HTTP), Solid/RDF, Zod, pnpm/Turborepo, Docker, Scaleway, GitHub Actions CI/CD.",
    ],
  },
  {
    id: "fujifilm",
    type: "work",
    role: "Software Engineer & IT Assistant",
    company: "Fujifilm Electronic Materials",
    location: "Belgium",
    start: "Feb 2025",
    end: "March 2026",
    highlights: [
      "Built AI Shark for the Fujifilm Global AI Challenge — internal phishing simulation platform targeting 10 departments; used Fujifilm's internal LLM to generate personalised phishing emails with configurable difficulty, open/click tracking, and admin analytics dashboard. Stack: React, TypeScript, ASP.NET Core 10, Entity Framework Core, SQL Server.",
      "Developed Asset Management System (AMS) tracking 500+ IT assets with serial numbers, borrowing/returning workflows, and AD-backed role-based access control. Stack: .NET 9, Blazor Server, SQL Server, Dapper.",
      "Maintained a mission-critical C# Blazor app for the Infrastructure Team, resolving 15 bugs and shipping new features; created PowerShell automation scripts for Cisco switch upgrades across 30 devices.",
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

