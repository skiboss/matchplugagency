import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { ServicesSection } from "@/components/sections/services-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PillarsSection } from "@/components/sections/pillars-section"

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
        <section className="relative py-8 md:py-12 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 sm:mt-12 w-full h-full bg-cover bg-right bg-no-repeat hidden lg:block" style={{ backgroundImage: "url('/about_hero.png')", backgroundPosition: 'right center' }} />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              {/* Left Column - Content */}
              <div className="pt-4 md:pt-7">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-20 font-semibold tracking-tight mb-4 md:mb-6">
                  The Complete
                  <br />
                  <span className="text-foreground">Acquisition Arsenal</span>
                </h1>

                <p className="text-base md:text-xl text-muted-foreground max-w-xl mb-6 md:mb-10">
                  We don't help you participate in markets— we help you own them through aggressive, compliant FTD generation
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                  <Button size="lg" asChild className="group w-full text-base font-medium sm:w-auto rounded-full md:py-4 md:px-11">
                    <Link href="/contact">
                      Book Strategy Call
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="w-full text-base font-medium sm:w-auto bg-transparent rounded-full md:py-4 md:px-11 outline outline-primary text-primary">
                    <Link href="/portfolio">View Case Studies</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Background image area (no content) */}
            </div>
          </div>
        </section>
        

        {/* Services Section - using the component */}
        <ServicesSection />

        {/* What Makes Us Different */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <p className="text-[#02DC3B] bg-[#EEF8F1]/50 font-light text-xl py-2 px-3 inline-block mb-12 rounded-full">What Makes Us Different:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
                {differentiators.map((item) => (
                  <div key={item.title} className="bg-[#000000]/1 py-4 px-3 rounded-[12px]">
                    <Image src={item.icon} alt={item.title} width={32} height={32} className="h-8 w-8 mb-4 md:mb-14" />
                    <h3 className="font-medium text-2xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground font-light text-xl">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        
        {/* Our Pillars */}
        <PillarsSection />

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
