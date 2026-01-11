"use client";

import React from "react";
import Image from "next/image";
import { ProfileImage } from "@/data/hero-content";

/**
 * HeroVisual Component - Performance Optimized
 * 
 * Performance Optimizations Applied:
 * 1. Next.js Image component for automatic optimization (WebP/AVIF conversion)
 * 2. Priority loading for LCP (Largest Contentful Paint) optimization
 * 3. Fixed container dimensions (h-64 md:h-80 lg:h-96) to prevent CLS (Cumulative Layout Shift)
 * 4. Responsive sizes attribute for proper image sizing across breakpoints
 * 5. Quality set to 90 for optimal balance between size and visual quality
 * 6. Fill with sized parent ensures proper aspect ratio maintenance
 * 
 * LCP Target: < 1.5s
 * - This image is the primary LCP candidate for the hero section
 * - Priority flag ensures preload/fetchPriority hints are added automatically
 * - Fixed dimensions prevent layout shift during image load
 * 
 * Guidelines for future images:
 * - Use Next.js Image component for all images
 * - Set priority={true} only for above-the-fold LCP images
 * - Always provide fixed dimensions or use fill with sized parent
 * - Include accurate sizes attribute for responsive images
 * - Use quality={90} for hero images, quality={75} for non-critical images
 */

export interface HeroVisualProps {
  profileImage: ProfileImage;
  className?: string;
}

export default function HeroVisual({ profileImage, className }: HeroVisualProps) {
  return (
    <div className={`relative w-full animate-slide-in-right ${className || ""}`}>
      {/* Framed profile image container - polaroid/data card style */}
      <div className="relative w-full max-w-sm mx-auto h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-1 shadow-lg">
        {/* Geometric background element - code bracket SVG */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0 pointer-events-none">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          >
            <path
              d="M30 30 L20 40 L30 50 M90 30 L100 40 L90 50"
              stroke="#00D4AA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40 30 L60 30 L60 50 L40 50 M70 30 L80 30 L80 50 L70 50"
              stroke="#00D4AA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        <div className="relative w-full h-full rounded-lg overflow-hidden" style={{ minHeight: '100%' }}>
          {/* Temporary debug - check if image src is correct */}
          {/* Image src: {profileImage.src} */}
          <Image
            src={profileImage.src}
            alt={profileImage.alt}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 256px"
            className="object-cover rounded-lg"
            priority
            quality={90}
          />
        </div>
      </div>
    </div>
  );
}

