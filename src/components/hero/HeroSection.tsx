"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { heroContent, HeroContent } from "@/data/hero-content";
import StatusBadge from "./StatusBadge";
import HeroVisual from "./HeroVisual";
import { Button } from "@/components/ui/button";
import TechTicker from "@/components/shared/TechTicker";

export interface HeroSectionProps {
  content?: HeroContent;
  className?: string;
}

export default function HeroSection({ 
  content = heroContent, 
  className 
}: HeroSectionProps) {
  return (
    <>
      <section 
        className={`min-h-[90vh] flex items-center justify-center relative overflow-hidden ${className || ""}`}
        style={{ backgroundColor: '#1A1A1A' }}
      >
        {/* Inner container with max-width and responsive grid */}
        <div className="w-full max-w-[1280px] px-4 md:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-8 lg:py-12">
          {/* Text/Content column - Desktop: cols 1-7, Mobile: full width */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-6 order-2 lg:order-1">
            <StatusBadge status={content.status} />
            <div className="space-y-4">
              <h1 
                className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight"
                style={{ color: '#F8F9FA' }}
              >
                {content.headline}
              </h1>
              <p 
                className="text-base md:text-lg leading-relaxed max-w-2xl"
                style={{ color: '#CBD5E1' }}
              >
                {content.subheadline.replace(/\*\*/g, '')}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                {content.ctas.map((cta, index) => (
                  <Button
                    key={index}
                    asChild
                    variant={cta.variant || "primary"}
                    size="lg"
                  >
                    <Link href={cta.href} className="group inline-flex items-center gap-2">
                      {cta.label}
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-[2px]" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Visual/Image column - Desktop: cols 8-12, Mobile: full width, appears first on mobile */}
          <div className="col-span-1 lg:col-span-5 flex items-center justify-center relative order-1 lg:order-2">
            <HeroVisual profileImage={content.profileImage} />
          </div>
        </div>
        
        {/* Scroll Indicator - bottom center with bounce animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={() => {
              const nextSection = document.getElementById('projects') || document.querySelector('section:not(:first-of-type)');
              nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="flex flex-col items-center gap-2 text-[#F8F9FA] hover:text-[#00D4AA] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4AA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] rounded-md p-2"
            aria-label="Scroll to next section"
          >
            <span className="text-xs font-mono opacity-70">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-subtle-bounce" />
          </button>
        </div>
      </section>
      
      {/* TechTicker Credibility Band - immediately following hero section */}
      <TechTicker />
    </>
  );
}

