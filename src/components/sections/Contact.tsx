"use client";

import { profile } from "@/data/profile";
import { H2, Lead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section bg-white">
      <div className="container">
        <div className="max-w-prose mx-auto text-center">
          <H2 id="contact-heading" className="mb-4">Get In Touch</H2>
          <Lead className="mb-8">
            Interested in collaborating or learning more about my work? I'm always open to discussing new opportunities and interesting projects.
          </Lead>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact" className="inline-flex items-center gap-2">
                <Mail className="w-5 h-5" aria-hidden="true" />
                Send Email
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                View Resume
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded p-2"
              aria-label="GitHub profile"
            >
              <Github className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded p-2"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
