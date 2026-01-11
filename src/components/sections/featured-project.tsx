"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { H2, H3, Lead } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function FeaturedProjectSection() {
  const featured = projects.find((p) => p.featured);

  if (!featured || !featured.caseStudy) {
    return null;
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section bg-white">
      <div className="container">
        <div className="mb-8">
          <Badge variant="featured" className="mb-4">
            Featured Case Study
          </Badge>
          <H2 id="projects-heading" className="mb-4">Asset Management System</H2>
          <Lead className="max-w-prose">{featured.summary}</Lead>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] lg:gap-12">
          {/* Narrative Content Column */}
          <div className="space-y-6">
            {/* Problem */}
            <div>
              <H3 className="text-base font-semibold text-charcoal mb-2">
                Problem
              </H3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {featured.caseStudy.problem}
              </p>
            </div>

            {/* Constraints */}
            <div>
              <H3 className="text-base font-semibold text-charcoal mb-2">
                Constraints
              </H3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                {featured.caseStudy.constraints.map((constraint, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {constraint}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack & Architecture */}
            <div>
              <H3 className="text-base font-semibold text-charcoal mb-2">
                Stack & Architecture
              </H3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                {featured.caseStudy.architecture}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {featured.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <H3 className="text-base font-semibold text-charcoal mb-2">
                Results
              </H3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                {featured.caseStudy.results.map((result, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            {(featured.links.demo || featured.links.github) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {featured.links.demo && (
                  <Button asChild variant="primary" size="sm">
                  <a
                    href={featured.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    View Live
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </Button>
              )}
              {featured.links.github && (
                <Button asChild variant="secondary" size="sm">
                  <a
                    href={featured.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    View Code
                  </a>
                </Button>
                )}
              </div>
            )}
          </div>

          {/* Visual Column */}
          <div className="space-y-4">
            {/* Hero Image */}
            <div className="relative h-56 w-full overflow-hidden rounded-lg border border-border bg-slate-50 md:h-72">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Optional: Additional project images if available */}
            {/* Future enhancement: Add architecture diagram or additional screenshots here */}
          </div>
        </div>
      </div>
    </section>
  );
}

