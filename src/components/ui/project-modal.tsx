"use client"

import * as React from "react"
import { ExternalLink, Github } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectGalleryCarousel } from "@/components/ui/project-gallery-carousel"
import type { Project } from "@/data/types"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] sm:h-auto max-h-[90vh] overflow-y-auto sm:overflow-visible p-0 gap-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full lg:h-[600px]">
          {/* Left Column: Text Content (1/3 width) */}
          <div className="col-span-1 p-6 lg:p-8 flex flex-col h-full overflow-y-auto border-b lg:border-b-0 lg:border-r border-border/50 bg-[#ffffff]">
            <DialogHeader className="p-0 mb-6 text-left">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant={project.status === "completed" ? "status-completed" : "status-in-progress"}
                  showDot={project.status === "in-progress"}
                >
                  {project.status === "completed" ? "Completed" : "In Progress"}
                </Badge>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                {project.name}
              </DialogTitle>
              <p className="text-slate-600 font-medium">
                {project.role}
              </p>
            </DialogHeader>

            <div className="flex-1 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
                  About
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {project.modalDetails || project.summary}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="default" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.caseStudy && (
                <div>
                   <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
                    Case Study
                  </h4>
                  <div className="space-y-3 text-sm text-slate-600">
                    <p>
                      <strong className="text-slate-900">Problem:</strong> {project.caseStudy.problem.substring(0, 100)}...
                    </p>
                    <p>
                      <strong className="text-slate-900">Architecture:</strong> {project.caseStudy.architecture.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              {project.links.demo && (
                <Button asChild className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-lg shadow-teal-500/20">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button asChild variant="outline" className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Carousel (2/3 width) */}
          <div className="col-span-1 lg:col-span-2 p-6 lg:p-8 flex items-center justify-center bg-[#f8fafc]">
            <ProjectGalleryCarousel 
              images={images} 
              projectName={project.name} 
              className="h-full max-h-[500px]"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
