import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { DecorativeCurves } from "@/components/decorative-curves"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Who We Are | Matchplug Agency",
  description: "Matchplug Agency is the acquisition partner for iGaming and Web3 brands that refuse to play small.",
}

const differentiators = [
  {
    icon: "/icons/brain.svg",
    title: "License-agnostic expertise",
    description: "We operate successfully in both regulated and grey markets",
  },
  {
    icon: "/icons/Atom.svg",
    title: "Geo-specific mastery",
    description: "Deep experience across 79+ countries with localized strategies",
  },
  {
    icon: "/icons/CookingPot.svg",
    title: "No Spaghetti Marketing",
    description: "Most agencies waste your budget testing random tactics hoping something works.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - matches Apage design */}
        <section className="relative py-8 md:py-12 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-contain bg-right bg-no-repeat hidden lg:block" style={{ backgroundImage: "url('/about_hero.png')", backgroundPosition: 'right center' }} />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <div className="pt-4 md:pt-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 md:mb-6">
                  We don't participate.
                  <br />
                  <span className="text-foreground">We Dominate.</span>
                </h1>

                <p className="text-base md:text-xl text-muted-foreground max-w-xl mb-6 md:mb-10">
                  We don't help you participate in markets— we help you own them through aggressive, compliant FTD
                  generation
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                  <Button size="lg" asChild className="group w-full text-base font-medium sm:w-auto rounded-full md:py-4 md:px-11">
                    <Link href="/contact">
                      Book Strategy Call
                      {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="w-full text-base font-medium sm:w-auto bg-transparent rounded-full md:py-4 md:px-11 outline outline-primary text-primary">
                    <Link href="/portfolio">View Case Studies</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Background image area (no content) */}
              {/* <div className="relative hidden lg:block" /> */}
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-12 md:py-16 lg:py-18">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium">Our Mission</h2>
              <p className="text-muted-foreground text-base md:text-2xl font-light">
                Deliver measurable market share through aggressive, compliant FTD generation in regulated and grey
                markets worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <p className="text-[#02DC3B] bg-[#EEF8F1]/50 font-light text-xl py-2.5 px-3 inline-block mb-12 rounded-full">What Makes Us Different:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
                {differentiators.map((item) => (
                  <div key={item.title} className="bg-[#000000]/1 py-4 px-3 rounded-[12px]">
                    <Image src={item.icon} alt={item.title} width={32} height={32} className="h-8 w-8 mb-4 md:mb-6" />
                    <h3 className="font-medium text-2xl">{item.title}</h3>
                    <p className="text-muted-foreground font-light text-xl">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Layered Data Advantage */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-medium mb-6">
                Our Layered
                <br />
                Data Advantage:
              </h2>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column */}
                <div className="space-y-6 flex flex-col justify-between">
                  <p className="text-xl font-light text-muted-foreground">
                    We operate campaigns for <span className="font-normal text-foreground">29+ brands</span> across
                    regulated and grey markets simultaneously. This gives us a unique{" "}
                    <span className="font-normal text-foreground">cross - client intelligence network</span> that
                    other agencies cant match.
                  </p>
                  <p className="text-xl font-medium text-muted-foreground">
                    The algorithm wars are now won and lost on creative quality and volume.
                  </p>
                </div>

                {/* Right Column - Cards */}
                <div className="space-y-12">
                  <div className="p-5 bg-[#F1F2FF]/40 rounded-xl">
                    <h3 className="font-medium mb-3 text-2xl">Survival technology</h3>
                    <p className="text-xl font-light text-muted-foreground">
                      Proprietary cloaking methods keep campaigns live when competitors get banned.
                    </p>
                  </div>
                  <div className="p-5 bg-[#F1F2FF]/40 rounded-xl">
                    <h3 className="font-medium mb-3 text-2xl">Creative diversity</h3>
                    <p className="text-xl font-light text-muted-foreground">
                      The algorithm wars are now won and lost on creative quality and volume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Operate */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4">Where We Operate</h2>
              <p className="text-2xl text-muted-foreground">Top performing Geos and FTD Ranges</p>
            </div>

            {/* World Map */}
            <div className="max-w-4xl mx-auto">
              <Image
                src="/map.png"
                alt="Global Operations Map"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
