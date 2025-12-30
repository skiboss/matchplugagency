import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const mp_does = [
  {
    title: "Go aggressive",
    description:
      "We push campaigns to the edge of what’s possible to maximize volume",
    image: "/market_share.png",
  },
  {
    title: "Creative Diversity",
    description: "We provide the right creatives required to convert saving clients energy and time.",
    image: "/survival.png",
  },
  {
    title: "Stay live",
    description:
      "Proprietary technology keeps campaigns running 98% of the time",
    image: "/performance.png",
  },
  {
    title: "Geo specialization",
    description:
      "Every campaign is localized for maximum resonance",
    image: "/geo_mastery.png",
  },
  {
    title: "Measure what matters",
    description:
      "And that is FTDs and market share, period",
    image: "/geo_mastery.png",
  },
  {
    title: "Take accountability",
    description:
      "Performance-based fees align our incentives with yours",
    image: "/geo_mastery.png",
  },
]

export function MatchplugDoes() {
  return (
    <section className="py-16 md:py-20 lg:py-18">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-foreground mb-4">What Matchplug Does</h2>
          <p className="text-muted-foreground text-base md:text-lg font-normal">Here's How We Keep You Ahead</p>
        </div>

        {/* Pillars Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-15.5">
          {mp_does.map((item, index) => (
            <div key={index} className="bg-background rounded-2xl p-4 md:p-5 border border-border hover:border-primary/30 transition-colors">
              {/* Image Container */}
              <div className="h-40 md:h-70 mb-6 relative rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <h3 className="font-medium text-lg md:text-2xl mb-3">{item.title}</h3>
              <p className="text-lg font-normal text-muted-foreground">{item.description}</p>
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
