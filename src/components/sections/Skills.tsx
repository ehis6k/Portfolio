"use client";

import { skills } from "@/data/skills";
import { H2, Lead } from "@/components/ui/typography";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section bg-white">
      <div className="container">
        <div className="mb-8">
          <H2 id="skills-heading" className="mb-4">Skills in Context</H2>
          <Lead className="max-w-prose">
            Grouped by how they are used in real projects, not just a logo wall.
          </Lead>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <Card key={group.id} className="h-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-base break-words leading-tight">{group.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="mb-4 text-sm text-slate-700 leading-relaxed flex-1">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
