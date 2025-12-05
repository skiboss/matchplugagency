import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Search, BarChart3, Gamepad2, Newspaper, Users, Bitcoin, Building2 } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Meta Ads Domination",
    description: "Proprietary link cloaking technology with unlimited Meta assets.",
  },
  {
    icon: Search,
    title: "Google Ads Authority",
    description: "Dominate high intent search traffic, Performance Max and display networks.",
  },
  {
    icon: BarChart3,
    title: "Microsoft Bing Ads",
    description: "Bing delivers high quality FTDs at 20-40% lower CPA than Google in most geos.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Web3",
    description: "We create conversion-focused content that ranks and drives conversions.",
  },
  {
    icon: Newspaper,
    title: "Taboola Native",
    description:
      "Native content distribution across premium publisher networks drives high-intent traffic with the content.",
  },
  {
    icon: Users,
    title: "Cappers Network",
    description: "Access our exclusive network of sports betting influencers with engaged audiences.",
  },
  {
    icon: Bitcoin,
    title: "Crypto Exchange",
    description: "We figured the needs of the market and can produce results in fast paced markets.",
  },
  {
    icon: Building2,
    title: "B2B iGaming & Web3",
    description: "Lead generation for B2B software platforms and Web3 infrastructure providers.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            The system built to deliver 400-800% ROAS and market share in 79+ geos - licensed or not.
          </p>
        </div>

        {/* Services Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          {services.map((service, index) => (
            <div key={index} className="group text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <service.icon
                  className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-semibold text-foreground text-base md:text-lg">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
