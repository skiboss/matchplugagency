"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const INACTIVITY_TIMEOUT = 1 * 60 * 1000 // 5 minutes in milliseconds

export function InactivityModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)

  const resetTimer = useCallback(() => {
    // Don't reset if modal has already been shown
    if (hasBeenShown) return
  }, [hasBeenShown])

  useEffect(() => {
    if (hasBeenShown) return

    let timeoutId: NodeJS.Timeout

    const startTimer = () => {
      timeoutId = setTimeout(() => {
        setIsVisible(true)
        setHasBeenShown(true)
      }, INACTIVITY_TIMEOUT)
    }

    const handleActivity = () => {
      clearTimeout(timeoutId)
      startTimer()
    }

    // Activity events to track
    const events = ["mousedown", "mousemove", "keydown", "scroll", "touchstart", "click"]

    events.forEach((event) => {
      document.addEventListener(event, handleActivity, { passive: true })
    })

    // Start initial timer
    startTimer()

    return () => {
      clearTimeout(timeoutId)
      events.forEach((event) => {
        document.removeEventListener(event, handleActivity)
      })
    }
  }, [hasBeenShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-[#2D1B69] rounded-2xl p-6 sm:p-8 max-w-lg w-full animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="text-center sm:text-left">
          <p className="text-white/80 text-sm sm:text-base mb-2">
            You came here to give your marketing a boost, right?
          </p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">Book a Discovery Call to Find Out How</h2>
          <p className="text-white/70 text-sm sm:text-base mb-6">
            Do you need the type of marketing that actually gets results? Want to talk to an actual human growth
            strategist <span className="font-semibold text-white">today</span>?
          </p>

          <div className="mb-6">
            <p className="text-white font-semibold mb-3">In a brief 20-minute call, our strategist can:</p>
            <ul className="space-y-2 text-left">
              {[
                "Assess your situation and identify potential issues",
                "Suggest strategies we've used for similar clients successfully",
                "Give you a campaign plan and quote",
                "And more!!",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-white/90 text-sm sm:text-base">
                  <span className="text-orange-400 mt-0.5">👉</span>
                  <span className={index === 3 ? "italic" : ""}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center sm:justify-start">
            <Button asChild size="lg" className="bg-[#39FF14] hover:bg-[#32E612] text-black font-bold px-6">
              <Link href="/contact">
                Book It
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
