import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { ServicesSection } from "@/components/sections/services-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PillarsSection } from "@/components/sections/pillars-section"
import { OurClientsSection } from "@/components/sections/clients-section"
import { OurLegacySection } from "@/components/sections/legacy-section"

export const metadata: Metadata = {
  title: "Services | Matchplug Agency",
  description:
    "Full-stack acquisition solutions for iGaming and Web3 brands. Meta Ads, Google Ads, Bing, Taboola, Crypto Marketing, and more.",
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6">
                  The Complete
                  <br />
                  <span className="text-foreground">Acquisition Arsenal</span>
                </h1>

                <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10">
                  We don't help you participate in markets— we help you own them through aggressive, compliant FTD generation
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" asChild className="group text-base font-medium rounded-full md:py-4 md:px-11">
                    <Link href="/contact">
                      Book Strategy Call
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base font-medium bg-transparent rounded-full md:py-4 md:px-11 outline outline-primary text-primary">
                    <Link href="/portfolio">View Case Studies</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Services Section - using the component */}
        <ServicesSection />

        {/* Our Pillars */}
        <PillarsSection />

        {/* Our Legacy  */}
        <OurLegacySection />

        {/* Our Clients */}
        <OurClientsSection />

        {/* Call to action Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
