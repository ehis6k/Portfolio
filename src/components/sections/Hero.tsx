"use client";

import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { H1, Lead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

// Top 3 technologies to highlight in Hero
const topTech = ["Spring Boot", ".NET 9", "React"];

export function Hero() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:items-center md:gap-12">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-3">
              <H1 id="about-heading">{profile.name}</H1>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-teal">
                {profile.role}
              </p>
            </div>

            <Lead className="max-w-prose">{profile.summary}</Lead>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {topTech.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild size="lg" variant="primary">
                <Link
                  href={profile.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  View Resume
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2"
                >
                  View Projects
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="hidden sm:inline-flex"
              >
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  aria-label="View GitHub profile"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-border bg-white shadow-lg md:h-56 md:w-56">
              <Image
                src={profile.profileImage}
                alt={`Portrait of ${profile.name}, ${profile.role}`}
                fill
                sizes="(min-width: 768px) 224px, 192px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
