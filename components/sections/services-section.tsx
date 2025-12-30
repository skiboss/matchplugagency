import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Search, Rocket, BarChart3, Radio, Target, Gem, Truck } from "lucide-react"
import { PillarsSection } from "./pillars-section"

const services = [
  {
    icon: TrendingUp,
    title: "Meta Ads Domination",
    description: "Proprietary link cloaking technology with unlimited Meta assets.",
  },
  {
    icon: Search,
    title: "Google Ads Authority",
    description: "Dominate high intent search traffic, Performance Max and display networks.",
  },
  {
    icon: Rocket,
    title: "Microsoft Bing Ads",
    description: "Bing delivers high quality FTDs at 20-40% lower CPA than Google in most geos.",
  },
  {
    icon: BarChart3,
    title: "IGaming & Web3 Content",
    description: "We create conversion-focused content that ranks and drives conversions.",
  },
  {
    icon: Radio,
    title: "Taboola Native",
    description:
      "Native content distribution across premium publisher networks drives high-intent traffic.",
  },
  {
    icon: Target,
    title: "Cappers Network",
    description: "Access our exclusive network of sports betting influencers with engaged audiences.",
  },
  {
    icon: Gem,
    title: "Crypto Exchange",
    description: "We figured the needs of the market and can produce results in fast paced markets.",
  },
  {
    icon: Truck,
    title: "B2B iGaming & Web3",
    description: "Lead generation for B2B software platforms and Web3 infrastructure providers.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4 text-foreground">Our Services</h2>
          <p className="text-muted-foreground text-base md:text-lg font-normal max-w-xl mx-auto">
            The system built to deliver 400-800% ROAS and market share in 79+ geos - licensed or not.
          </p>
        </div>

        {/* Services Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          {services.map((service, index) => (
            <div key={index} className="group text-left space-y-4">
              <div className="flex items-start justify-between mb-14">
                <div className="flex items-center justify-center">
                  <service.icon
                    className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                {/* <ArrowUpRight className="h-7 w-7 text-[#02DC3B] transition-opacity" /> */}
              </div>
              <div>
                <h3 className="font-medium text-foreground text-base md:text-2xl mb-3">{service.title}</h3>
                <p className="text-sm md:text-lg font-normal text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-primary rounded-full text-base md:px-6 md:py-3 text-primary-foreground hover:bg-transparent hover:text-primary bg-primary"
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
