import { cn } from "@/lib/utils";
import * as React from "react";

/**
 * Typography components with responsive scale and 65ch measure
 * Following PRD: "Clean, Precise Engineering Journal" aesthetic
 */

export function H1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-semibold tracking-tight text-charcoal md:text-4xl lg:text-5xl",
        className
      )}
      {...props}
    />
  );
}

export function H2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold tracking-tight text-charcoal md:text-3xl",
        className
      )}
      {...props}
    />
  );
}

export function H3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold tracking-tight text-charcoal md:text-2xl",
        className
      )}
      {...props}
    />
  );
}

export function H4({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "text-lg font-semibold tracking-tight text-charcoal md:text-xl",
        className
      )}
      {...props}
    />
  );
}

export function Lead({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-base text-slate-700 md:text-lg leading-relaxed",
        "max-w-prose",
        className
      )}
      {...props}
    />
  );
}

export function Body({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-slate-700 md:text-base leading-relaxed",
        "max-w-prose",
        className
      )}
      {...props}
    />
  );
}

export function Small({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <small
      className={cn("text-xs text-slate-600 md:text-sm", className)}
      {...props}
    />
  );
}

export function Code({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "font-mono text-sm bg-slate-100 text-slate-900 px-1.5 py-0.5 rounded",
        "border border-slate-200",
        className
      )}
      {...props}
    />
  );
}

export function Pre({
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={cn(
        "font-mono text-sm bg-slate-50 text-slate-900 p-4 rounded-lg overflow-x-auto",
        "border border-slate-200",
        "max-w-full",
        className
      )}
      {...props}
    />
  );
}

