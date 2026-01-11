import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-slate-100 text-slate-900",
        outline: "border border-border text-slate-700 bg-transparent",
        featured: "bg-gold text-charcoal",
        "status-completed": "bg-teal/10 text-[#00a888] border border-teal/40",
        "status-in-progress":
          "bg-slate-100 text-slate-700 border border-slate-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Show a small dot indicator (useful for status-in-progress variant)
   */
  showDot?: boolean
}

function Badge({ className, variant, showDot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {variant === "status-in-progress" && showDot !== false && (
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-75" aria-hidden="true" />
      )}
      {children}
    </span>
  )
}

export { Badge, badgeVariants } 