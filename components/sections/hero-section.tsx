import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DecorativeCurves } from "@/components/decorative-curves"
import { ArrowRight } from "lucide-react"

const clientLogos = [
  { name: "BET", text: "BET SOFTWARE" },
  { name: "dafabet", text: "dafabet" },
  { name: "LEGACY", text: "LEGACY ARCADES" },
  { name: "Betano", text: "Betano" },
  { name: "1XBET", text: "1XBET" },
  { name: "BC Game", text: "BC.GAME" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <DecorativeCurves position="top-right" />

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="pt-4 md:pt-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Dominance for iGaming & Web3
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4 md:mb-6">
              Paid media and acquisition agency
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-6 md:mb-8 text-pretty">
              We help iGaming and Web3 brands scale fast with qualified FTDs and 400-800% ROAS in every market.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
              <Button size="lg" asChild className="group w-full sm:w-auto">
                <Link href="/contact">
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Dashboard Illustration */}
          <div className="relative hidden lg:block">
            <Image
              src="/modern-analytics-dashboard-with-charts-graphs-purp.jpg"
              alt="Analytics Dashboard"
              width={500}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-primary py-4 md:py-6 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 mb-4">
          <p className="text-center text-primary-foreground text-sm md:text-base">
            Trusted by leading brands in <span className="font-semibold">79+ countries</span>
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative flex overflow-x-hidden">
          {/* First set of logos */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <span
                key={`${logo.name}-${index}`}
                className="mx-8 md:mx-12 text-sm md:text-base font-bold tracking-wide text-primary-foreground/90"
              >
                {logo.text}
              </span>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <span
                key={`${logo.name}-dup-${index}`}
                className="mx-8 md:mx-12 text-sm md:text-base font-bold tracking-wide text-primary-foreground/90"
              >
                {logo.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
