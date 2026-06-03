"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectGalleryCarouselProps {
  images: string[]
  projectName: string
  className?: string
}

export function ProjectGalleryCarousel({
  images,
  projectName,
  className,
}: ProjectGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  // Use the first image if array is empty (defensive)
  const safeImages = images.length > 0 ? images : ["/assets/img/kdg/evalbike.jpeg"] // Fallback placeholder

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = safeImages.length - 1
      if (nextIndex >= safeImages.length) nextIndex = 0
      return nextIndex
    })
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        paginate(-1)
      } else if (e.key === "ArrowRight") {
        paginate(1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex]) // Re-bind when index changes to ensure fresh state if needed (though paginate uses functional update)

  return (
    <div className={cn("relative flex flex-col w-full h-full group", className)}>
      <div className="relative flex-1 w-full min-h-[300px] sm:min-h-[400px] overflow-hidden rounded-lg bg-[#f8fafc] border border-slate-200">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={safeImages[currentIndex]}
                alt={`${projectName} screenshot ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 800px, 100vw"
                priority={currentIndex === 0}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {safeImages.length > 1 && (
          <>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm shadow-md text-slate-700 hover:bg-white hover:text-slate-900"
                onClick={(e) => {
                  e.stopPropagation()
                  paginate(-1)
                }}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous image</span>
              </Button>
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm shadow-md text-slate-700 hover:bg-white hover:text-slate-900"
                onClick={(e) => {
                  e.stopPropagation()
                  paginate(1)
                }}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Thumbnails / Indicators */}
      {safeImages.length > 1 && (
        <div className="flex justify-center gap-2 mt-4 px-2 overflow-x-auto py-1">
          {safeImages.map((img, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={cn(
                "relative h-12 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all",
                currentIndex === index
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
