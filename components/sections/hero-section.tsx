import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DecorativeCurves } from "@/components/decorative-curves"
import { ArrowRight } from "lucide-react"

const clientLogos = [
  { name: "BET", src: "/partners/bet_logo.png" },
  { name: "dafabet", src: "/partners/dafabet_Logo.png" },
  { name: "LEGACY", src: "/partners/legacy_logo.png" },
  { name: "Betano", src: "/partners/betano_logo.png" },
  { name: "1XBET", src: "/partners/1XBET_logo.png" },
  { name: "BC Game", src: "/partners/bc_logo.png" },
  { name: "22bet", src: "/partners/22bet_logo.png" },
  { name: "96", src: "/partners/96_logo.png" },
  { name: "Alibabet", src: "/partners/alibabet_logo.png" },
  { name: "Rivalry", src: "/partners/rivalry_logo.png" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 mr-16 w-full h-full bg-contain bg-right bg-no-repeat hidden lg:block" style={{ backgroundImage: "url('/home_hero.png')", backgroundPosition: 'right center' }} />

      {/* <DecorativeCurves position="top-right" /> */}

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-24 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
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

          {/* Right Column - Background image area (no content) */}
          <div className="relative hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
