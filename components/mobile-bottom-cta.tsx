"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MobileBottomCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 200px
      if (window.scrollY > 150 && !isDismissed) {
        setIsVisible(true)
      } else if (window.scrollY <= 150) {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-in slide-in-from-bottom duration-300 w-full">
      <div className="bg-[#FF4757] text-white px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">Get Your Free Review</p>
          <p className="text-xs text-white/90 truncate">See how to grow revenue to 3X in 90 days</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button asChild size="sm" className="bg-[#1a1a2e] hover:bg-[#1a1a2e]/90 text-white text-xs px-3 h-8">
            <Link href="/contact">
              Book Now
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
          <button
            onClick={handleDismiss}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
