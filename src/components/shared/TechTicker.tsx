"use client";

import React from "react";

export interface TechTickerProps {
  items?: string[];
  className?: string;
}

// Modern tech stack - showcasing key technologies and tools
const defaultTechStack = [
  'Java / Spring Boot',
  'React / Next.js',
  'C# / .NET',
  'RabbitMQ',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'Redis',
  'MongoDB',
  'Git',
  'TypeScript',
  'REST APIs',
  'GraphQL'
];

export default function TechTicker({ items = defaultTechStack, className }: TechTickerProps) {
  // Create enough duplicates for truly seamless infinite scroll
  // We create 4 sets total to ensure continuous scrolling on wide viewports
  // Animation will move exactly 25% (one set) and loop seamlessly
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div 
      className={`w-full border-y border-white/5 bg-white/[0.02] py-4 font-mono text-sm overflow-hidden relative ${className || ""}`}
      style={{ color: '#CBD5E1' }}
    >
      {/* Infinite scrolling marquee from right to left - works on all viewports */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center">
          {duplicatedItems.map((item, index) => (
            <span key={index} className="mx-12 whitespace-nowrap flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

