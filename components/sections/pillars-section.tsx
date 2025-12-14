import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    title: "Market Share, Not Metrics",
    description:
      "We don't celebrate vanity metrics. We measure success by one thing: Did you get FTDs and gain market share?",
    image: "/market_share.png",
  },
  {
    title: "Survival Technology",
    description: "Our proprietary cloaking and asset infrastructure keeps you live when competitors go down.",
    image: "/survival.png",
  },
  {
    title: "Performance Partnership",
    description:
      "We're compensated based on results, and our tier 2 package includes performance bonuses tied to your ROAS.",
    image: "/performance.png",
  },
  {
    title: "Geo-Specific Mastery",
    description:
      "We've operated in 79+ countries and know that winning in Brazil requires completely different tactics than winning in Germany.",
    image: "/geo_mastery.png",
  },
]

export function PillarsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-18">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4">Our Pillars</h2>
          <p className="text-muted-foreground text-base md:text-2xl font-normal">The Four Systems That Guarantee Market Dominance</p>
        </div>

        {/* Pillars Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-15.5">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-background rounded-2xl p-4 md:p-5 border border-border hover:border-primary/30 transition-colors">
              {/* Image Container */}
              <div className="h-40 md:h-70 mb-6 relative rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <h3 className="font-medium text-lg md:text-2xl mb-3">{pillar.title}</h3>
              <p className="text-lg font-light text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button asChild className="bg-primary px-25.5 py-3.5 rounded-full hover:bg-primary/90">
            <Link href="/contact">Start Dominating</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
