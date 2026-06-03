"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  onClick?: () => void;
}

export function ProjectCard({ project, className, onClick }: ProjectCardProps) {
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
      className={cn("h-full group cursor-pointer", className)}
      onClick={onClick}
    >
      <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:translate-y-0">
        {/* Image Thumbnail */}
        <div className="relative mb-3 h-40 w-full overflow-hidden rounded-md border border-border/80 bg-muted flex-shrink-0">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Clickability Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-foreground/90 text-background p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg backdrop-blur-sm">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Header with Title and Status */}
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <CardTitle className="group-hover:text-primary transition-colors">{project.name}</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">{project.role}</p>
            </div>
            <Badge
              variant={
                project.status === "completed"
                  ? "status-completed"
                  : "status-in-progress"
              }
              showDot={project.status === "in-progress"}
              className="shrink-0 whitespace-nowrap"
            >
              {statusLabel}
            </Badge>
          </div>
        </CardHeader>

        {/* Content with Summary and Stack */}
        <CardContent className="flex-1">
          <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
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
                  className="flex-1 min-w-[120px] relative z-10"
                  onClick={(e) => e.stopPropagation()}
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
                  className="flex-1 min-w-[120px] relative z-10"
                  onClick={(e) => e.stopPropagation()}
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
