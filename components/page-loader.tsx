"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Start exit animation after 1.5s
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 1500)

    // Complete loading after exit animation
    const loadTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(loadTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative">
        {/* Animated 3D Cubes similar to matchplugagency.com */}
        <div className="flex items-center gap-4">
          {/* Left floating cube */}
          <div className="relative animate-float-slow">
            <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-primary/30 transform rotate-12 animate-spin-slow" />
            <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 border-2 border-primary/20 transform rotate-45 animate-pulse" />
          </div>

          {/* Center logo */}
          <div className="flex items-center gap-1 animate-pulse">
            {/* <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl md:text-3xl">M</span>
            </div> */}
            <div className="flex flex-col items-center justify-center">
              <img src="/mp_logo.png" alt="Matchplug Agency" className="h-10" />
              <div className="italic text-xs md:text-sm">...Fueling growth by delivering FTds</div>
            </div>
            {/* <div className="w-4 h-12 md:w-5 md:h-16 bg-accent rounded-sm" /> */}
          </div>

          {/* Right floating cube */}
          <div className="relative animate-float">
            <div className="w-10 h-10 md:w-14 md:h-14 border-2 border-primary/30 transform -rotate-12 animate-spin-reverse" />
            <div className="absolute inset-0 w-10 h-10 md:w-14 md:h-14 border-2 border-accent/40 transform rotate-30 animate-pulse" />
          </div>
        </div>

        {/* Additional floating cubes in background */}
        <div className="absolute -top-16 -left-12 w-8 h-8 border-2 border-primary/20 transform rotate-45 animate-float opacity-60" />
        <div className="absolute -top-8 -right-16 w-6 h-6 border-2 border-accent/30 transform rotate-12 animate-float-slow opacity-50" />
        <div className="absolute -bottom-12 left-4 w-7 h-7 border-2 border-primary/25 transform -rotate-30 animate-float opacity-40" />
        <div className="absolute -bottom-16 -right-8 w-9 h-9 border-2 border-accent/20 transform rotate-60 animate-float-slow opacity-50" />
      </div>
    </div>
  )
  // return null
}
