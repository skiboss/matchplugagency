import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { DecorativeCurves } from "@/components/decorative-curves"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Target, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Who We Are | Matchplug Agency",
  description: "Matchplug Agency is the acquisition partner for iGaming and Web3 brands that refuse to play small.",
}

const differentiators = [
  {
    icon: Globe,
    title: "License-agnostic expertise",
    description: "We operate successfully in both regulated and grey markets",
  },
  {
    icon: Target,
    title: "Geo-specific mastery",
    description: "Deep experience across 79+ countries with localized strategies",
  },
  {
    icon: Zap,
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
        <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden">
          <DecorativeCurves position="top-right" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <div className="pt-4 md:pt-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
                  We don't participate.
                  <br />
                  <span className="text-foreground">We Dominate.</span>
                </h1>

                <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-6 md:mb-8">
                  We don't help you participate in markets— we help you own them through aggressive, compliant FTD
                  generation
                </p>

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

              {/* Right Column - 3D City Illustration */}
              <div className="relative hidden lg:block">
                <Image
                  src="/3d-isometric-city-buildings-purple-blue-modern-tec.jpg"
                  alt="3D City Illustration"
                  width={450}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground text-base md:text-lg">
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
              <p className="text-primary font-medium mb-8">What Makes Us Different:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {differentiators.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <item.icon className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Layered Data Advantage */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                Our Layered
                <br />
                Data Advantage:
              </h2>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column */}
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    We operate campaigns for <span className="font-semibold text-foreground">29+ brands</span> across
                    regulated and grey markets simultaneously. This gives us a unique{" "}
                    <span className="font-semibold text-foreground">cross - client intelligence network</span> that
                    other agencies cant match.
                  </p>
                  <p className="text-muted-foreground">
                    The algorithm wars are now won and lost on creative quality and volume.
                  </p>
                </div>

                {/* Right Column - Cards */}
                <div className="space-y-4">
                  <div className="p-5 bg-secondary/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Survival technology</h3>
                    <p className="text-sm text-muted-foreground">
                      Proprietary cloaking methods keep campaigns live when competitors get banned.
                    </p>
                  </div>
                  <div className="p-5 bg-secondary/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Creative diversity</h3>
                    <p className="text-sm text-muted-foreground">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Where We Operate</h2>
              <p className="text-muted-foreground">Top performing Geos and FTD Ranges</p>
            </div>

            {/* World Map */}
            <div className="max-w-4xl mx-auto">
              <Image
                src="/world-map-with-connected-dots-purple-teal-markers-.jpg"
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
