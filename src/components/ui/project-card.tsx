"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const statusLabel =
    project.status === "completed" ? "Completed" : "In Progress";

  const MotionWrapper = shouldReduceMotion ? "div" : motion.div;

  return (
    <MotionWrapper
      {...(shouldReduceMotion
        ? {}
        : {
            whileHover: { y: -3 },
            transition: { type: "spring", stiffness: 260, damping: 20 },
          })}
      className={cn("h-full", className)}
    >
      <Card className="h-full flex flex-col">
        {/* Image Thumbnail */}
        <div className="relative mb-3 h-40 w-full overflow-hidden rounded-md border border-border/80 bg-slate-50">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        {/* Header with Title and Status */}
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <CardTitle>{project.name}</CardTitle>
              <p className="text-xs text-slate-600 mt-1">{project.role}</p>
            </div>
            <Badge
              variant={
                project.status === "completed"
                  ? "status-completed"
                  : "status-in-progress"
              }
              showDot={project.status === "in-progress"}
            >
              {statusLabel}
            </Badge>
          </div>
        </CardHeader>

        {/* Content with Summary and Stack */}
        <CardContent className="flex-1">
          <p className="mb-3 text-sm text-slate-700 leading-relaxed">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.stack.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>

        {/* Footer with Links */}
        {(project.links.demo || project.links.github) && (
          <CardFooter>
            <div className="flex flex-wrap gap-2 w-full">
              {project.links.demo && (
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="flex-1 min-w-[120px]"
                >
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                    aria-label={`View live demo of ${project.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="flex-1 min-w-[120px]"
                >
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          </CardFooter>
        )}
      </Card>
    </MotionWrapper>
  );
}

