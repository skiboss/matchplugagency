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
import { MatchplugDoes } from "@/components/sections/matchplug-does"

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
                            <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/about_hero.png')" }} />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-4 md:mb-6">
                          The Complete
                  <br />
                  <span className="text-foreground">Acquisition Arsenal</span>
                        </h1>
        
                        <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10">
                  We don't help you participate in markets— we help you own them through aggressive, compliant FTD generation
                        </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                          <Button size="lg" asChild className="group text-base font-medium rounded-full md:py-4 md:px-11">
                            <Link href="https://calendly.com/chris-ojukoko-jnr/30min?" target="_blank">
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

        {/* What Most Agencies Do */}
        <section className="py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 md:mb-12 max-w-4xl mx-auto">
              {/* Content */}
              <div className="">
                {/* Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#EEF8F1]/50 text-[#02DC3B] text-xs md:text-sm font-medium mb-2 md:mb-3">
                  Other Agencies
                </div>
                <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-foreground md:w-3/4">
                  What Most Agencies Do:
                </h2>
              </div>
              <div className="self-end">
                <p className="text-base md:text-lg font-normal text-muted-foreground max-w-3/4">
                  Want to know our competitive edge? Here's what most other agencies do
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-91 overflow-hidden" style={{ borderRadius: "0.75rem" }}>
              <Image
                src="/most_agy.png"
                alt="What most agencies do"
                width={800}
                height={600}
                className="w-full h-full object-contain md:object-cover "
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </section>


        {/* Matchplug Does */}
        <MatchplugDoes />

        {/* Our Legacy  */}
        <OurLegacySection />

        {/* Who We Work Best With */}
        <section className="py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-0">
            <div className="flex flex-col items-center justify-center text-center mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground mb-4">
                Who We Work Best With
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                You don't have to take our word, hear from our clients
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-3xl h-64 sm:h-80 md:h-96 lg:h-[500px]" style={{ borderRadius: "0.75rem" }}>
                <Image
                  src="/work_best.png"
                  alt="Who we work best with"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <OurClientsSection />

        {/* Call to action Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
