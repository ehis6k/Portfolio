"use client";

import React from "react";

export interface StatusBadgeProps {
  status: string;
  className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white/5 border-white/10 text-xs font-mono text-[#00D4AA] max-w-full sm:max-w-md ${className || ""}`}
      aria-live="polite"
      role="status"
      aria-label={`Status: ${status}`}
    >
      {/* Animated green live indicator dot */}
      <span
        className="h-2 w-2 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0"
        aria-hidden="true"
      />
      <span className="break-words">{status}</span>
    </div>
  );
}

