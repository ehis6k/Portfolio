import Image from "next/image";
import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/img/Logo_Gabriel.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50 py-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          {/* Left: Logo & Copyright */}
          <div className="flex flex-col justify-between items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image 
                  src={logo} 
                  alt="Gabriel Uwaila Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg text-charcoal">Gabriel Uwaila</span>
            </div>
            <p className="text-xs text-slate-500 max-w-[200px]">
              © {new Date().getFullYear()} {profile.name}.<br />
              {profile.role}
            </p>
          </div>

          {/* Center: Now & Next (Horizontal Grid) */}
          <div className="flex-1 border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-medium text-teal">
                  Building
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {profile.now}
                </p>
              </div>
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                  Next
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {profile.next}
                </p>
              </div>
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                  Learning
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {profile.learning}
                </p>
            </div>
            </div>
        </div>

          {/* Right: Socials */}
          <div className="flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-10">
            <p className="text-sm font-semibold text-charcoal">Connect</p>
            <div className="flex flex-col gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-teal transition-colors group"
              aria-label="GitHub profile"
            >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-teal transition-colors group"
              aria-label="LinkedIn profile"
            >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.links.email}
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-teal transition-colors group"
              aria-label="Send email"
            >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>Email</span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
