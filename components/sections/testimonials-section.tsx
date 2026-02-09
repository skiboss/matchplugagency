
"use client"
import Image from "next/image"

const testimonials = [
  {
    title: "Rivalry Success in Europe",
    text: "Matchplug speaks fluent Meta and google results and made us the coolest betting brand in Canada again",
    logo: "/partners/rivalry_logo.png",
    bgColor: "bg-orange-50/80",
  },
  {
    title: "96.com Growth Metrics",
    text: "Matchplug CPA for crypto casino users in grey markets felt like cheating.",
    logo: "/partners/96_logo.png",
    bgColor: "bg-amber-50/50",
  },
  {
    title: "Betboro Marketing Lead",
    text: "Hi Chris, Happy with the results and lets ramp it up with more budget and how about other geos, can we replicate same results in other geos as we just have our best month ever",
    logo: "/partners/bet_logo.png",
    bgColor: "bg-green-50/50",
  },
  {
    title: "MarketBhai",
    text: "Matchplug 10x’d our scale and cut CPA in half by cracking hyper local vernacular acquisition for a multi-asset exchange.",
    logo: "/partners/MarketBhaiB.png",
    bgColor: "bg-blue-50/80",
  },
  {
    title: "Legacy Arcade",
    text: "Hi Chris, wanted to start by saying- you and the team have been absolutely killing it! We have been really impressed with the results and we would like to increase spend and double down on the winning ads.",
    logo: "/partners/legacy_logo.png",
    bgColor: "bg-purple-50/80",
  },
  {
    title: "Alibabet",
    text: "Matchplug made crypto betting acquisition feel worth building and turned awareness into explosive growth and all I would say is we need more.",
    logo: "/partners/alibabet_logo.png",
    bgColor: "bg-pink-50/50",
  },
]


import { useRef, useEffect, useState } from "react"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const visibleCount = isMobile ? 1 : 3

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 3500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Compute visible testimonials (carousel logic)
  const getVisible = () => {
    const arr = []
    for (let i = 0; i < visibleCount; i++) {
      arr.push(testimonials[(current + i) % testimonials.length])
    }
    return arr
  }

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4">You're In Good Hands</h2>
          <p className="text-muted-foreground text-sm md:text-lg font-normal">
            You don't have to take our words, hear from our clients
          </p>
        </div>

        {/* Carousel */}
        <div className="flex gap-5 md:gap-6 mb-10 md:mb-14 transition-all duration-500">
          {getVisible().map((testimonial, index) => (
            <div key={index} className={`flex-1 min-w-0 p-6 md:px-6 md:py-10 border border-border rounded-2xl flex flex-col justify-between ${testimonial.bgColor} shadow-sm transition-all duration-500`}>
              <div className="flex items-center mb-3">
                {/* <Image src={testimonial.logo} alt="Brand logo" width={44} height={44} className="h-11 w-11 object-contain rounded-full border bg-white" /> */}
                <span className="font-semibold text-base md:text-lg text-foreground">{testimonial.title}</span>
              </div>
              <p className="text-foreground text-sm md:text-base font-regular tracking-wide [word-spacing:0.3rem] leading-relaxed mb-4 md:mb-20 flex-1">
                {testimonial.text}
              </p>

              {/* Brand Logo */}
              <div className="flex items-center">
                <Image
                  src={testimonial.logo}
                  alt="Brand logo"
                  width={100}
                  height={40}
                  className="h-11 min-w-32 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-24.5 py-6 md:py-8">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium text-foreground mb-4">79+ countries</p>
            <p className="text-sm md:text-lg font-normal text-muted-foreground">Trusted Brands</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium text-foreground mb-4">12,000+ FTDs</p>
            <p className="text-xs md:text-lg font-normal text-muted-foreground">Delivered monthly</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium text-foreground mb-4">90-day ROAS & Market share dominance</p>
            <p className="text-xs md:text-lg font-normal text-muted-foreground">Market lead map</p>
          </div>
        </div>
      </div>
    </section>
  )
}
