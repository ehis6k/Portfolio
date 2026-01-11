"use client";

import { projects } from "@/data/projects";
import { H2, Lead } from "@/components/ui/typography";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectArchiveSection() {
  const secondary = projects.filter((p) => !p.featured);

  if (!secondary.length) {
    return null;
  }

  return (
    <section aria-labelledby="more-projects-heading" className="section bg-white">
      <div className="container">
        <div className="mb-8">
          <H2 id="more-projects-heading" className="mb-4">More Projects</H2>
          <Lead className="max-w-prose">
            Additional work spanning backend APIs, frontend applications, machine learning, and cloud infrastructure.
          </Lead>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondary.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

