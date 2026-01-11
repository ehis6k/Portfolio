"use client";

import { experience } from "@/data/experience";
import { H2 } from "@/components/ui/typography";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const work = experience.filter((e) => e.type === "work");
  const education = experience.filter((e) => e.type === "education");

  return (
    <section id="experience" aria-labelledby="experience-heading" className="section bg-white">
      <div className="container">
        <H2 id="experience-heading" className="mb-12 max-w-prose">Experience</H2>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* Work Experience Column */}
          <div className="space-y-6 relative">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-5 w-5 text-teal" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wide">
                Professional Experience
              </h3>
            </div>

            {/* Timeline line for visual connection */}
            <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-200 hidden lg:block" />

            {work.map((item, index) => (
              <Card
                key={item.id}
                className={cn(
                  "relative lg:pl-12",
                  index === 0 && "border-teal/30" // Highlight Fujifilm
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 -translate-x-1/2 hidden lg:flex">
                  <div
                    className={cn(
                      "h-4 w-4 rounded-full border-2 border-white",
                      index === 0
                        ? "bg-teal border-teal"
                        : "bg-slate-300 border-slate-300"
                    )}
                    aria-hidden="true"
                  />
                </div>

                {index === 0 && (
                  <div className="absolute -left-1 top-0 bottom-0 w-1 bg-teal rounded-l-lg lg:hidden" />
                )}
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <CardTitle className={cn(index === 0 && "text-[#00a888]")}>
                        {item.role}
                      </CardTitle>
                      <p className="text-sm text-slate-600 mt-1">
                        {item.company}
                        {item.location && ` · ${item.location}`}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {item.start} – {item.end}
                      </p>
                    </div>
                    <Badge variant="outline">Work</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-5 w-5 text-slate-600" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wide">
                Education
              </h3>
            </div>

            {education.map((item) => {
              const graduationYear = item.end !== "Present" ? item.end.slice(-2) : "";
              const displayYear = item.end !== "Present" ? `Class of '${graduationYear}` : item.end;
              
              return (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <CardTitle>{item.role}</CardTitle>
                      <p className="text-sm text-slate-600 mt-1">
                        {item.company}
                        {item.location && ` · ${item.location}`}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {displayYear}
                      </p>
                    </div>
                    <Badge variant="outline">Education</Badge>
                  </div>
                </CardHeader>
                {item.highlights && item.highlights.length > 0 && (
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

