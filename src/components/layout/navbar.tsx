"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const sections = [
  { href: "#about", label: "About", sectionId: "about", isPage: false },
  { href: "#experience", label: "Experience", sectionId: "experience", isPage: false },
  { href: "#projects", label: "Projects", sectionId: "projects", isPage: false },
  { href: "/services", label: "Services", sectionId: null, isPage: true },
  { href: "/contact", label: "Contact", sectionId: null, isPage: true },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (section: { href: string; sectionId: string | null; isPage: boolean; label: string }) => {
    setIsMobileMenuOpen(false);
    
    // If it's a page link (like /services or /contact), navigate directly
    if (section.isPage) {
      router.push(section.href);
      return;
    }
    
    // Otherwise, it's a section link - scroll or navigate to home page first
    if (!section.sectionId) return;
    
    // If we're on the home page, just scroll to the section
    if (pathname === "/") {
      scrollToSection(section.sectionId);
    } else {
      // If we're on a different page, navigate to home page with hash
      router.push(`/#${section.sectionId}`);
      // Scroll will happen after navigation via useEffect below
    }
  };

  // Handle scroll to section after navigation when URL has hash
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove the #
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <nav
        className="container flex h-14 items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Branding */}
        <Link
          href="/"
          className="flex flex-col text-sm font-semibold tracking-tight text-charcoal hover:text-[#00a888] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded"
          aria-label="Gabriel Uwaila - Back to home"
        >
          <span>{profile.name}</span>
          <span className="text-xs font-normal text-slate-600">
            {profile.role}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          {sections.map((section) => (
            section.isPage ? (
              <Link
                key={section.href}
                href={section.href}
                className="hover:text-charcoal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded px-1"
              >
                {section.label}
              </Link>
            ) : (
              <button
                key={section.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(section);
                }}
                className="hover:text-charcoal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded px-1"
              >
                {section.label}
              </button>
            )
          ))}
          <Button asChild size="sm" variant="primary">
            <Link href={profile.links.resume} target="_blank" rel="noopener noreferrer">
              View Resume
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={menuButtonRef}
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 hover:text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-white"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="container py-4 space-y-2">
            {sections.map((section) => (
              section.isPage ? (
                <Link
                  key={section.href}
                  href={section.href}
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-charcoal rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                >
                  {section.label}
                </Link>
              ) : (
                <button
                  key={section.href}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(section);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-charcoal rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                >
                  {section.label}
                </button>
              )
            ))}
            <div className="pt-2 px-4">
              <Button
                asChild
                size="sm"
                variant="primary"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href={profile.links.resume} target="_blank" rel="noopener noreferrer">
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

