import Link from "next/link"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    title: "Market Share, Not Metrics",
    description:
      "We don't celebrate vanity metrics. We measure success by one thing: Did you get FTDs and gain market share?",
    stat: "467%",
    statLabel: "AVG ROAS",
    hasChart: true,
  },
  {
    title: "Survival Technology",
    description: "Our proprietary cloaking and asset infrastructure keeps you live when competitors go down.",
    highlight: "98% ROAS WHEN OTHERS GO DOWN",
    hasHighlight: true,
  },
  {
    title: "Performance Partnership",
    description:
      "We're compensated based on results, and our tier 2 package includes performance bonuses tied to your ROAS.",
    hasIcon: true,
  },
  {
    title: "Geo-Specific Mastery",
    description:
      "We've operated in 79+ countries and know that winning in Brazil requires completely different tactics than winning in Germany.",
    hasIcon: true,
  },
]

export function PillarsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Our Pillars</h2>
          <p className="text-muted-foreground text-base md:text-lg">The Four Systems That Guarantee Market Dominance</p>
        </div>

        {/* Pillars Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* Pillar 1 - Market Share with Chart */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
            <div className="mb-4">
              <div className="text-xs text-muted-foreground mb-1">AVG ROAS</div>
              <div className="text-4xl md:text-5xl font-bold text-primary">467%</div>
            </div>
            {/* Simple chart representation */}
            <div className="h-24 md:h-32 mb-6 flex items-end gap-1">
              {[40, 55, 45, 65, 50, 70, 60, 80, 75, 90, 85, 95].map((height, i) => (
                <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${height}%` }} />
              ))}
            </div>
            <h3 className="font-semibold text-lg md:text-xl mb-2">{pillars[0].title}</h3>
            <p className="text-sm text-muted-foreground">{pillars[0].description}</p>
          </div>

          {/* Pillar 2 - Survival Technology */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
            <div className="h-24 md:h-32 mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">98% ROAS</div>
                    <div className="text-[10px] text-muted-foreground">WHEN OTHERS GO DOWN</div>
                  </div>
                </div>
                {/* Animated dots */}
                <div className="absolute -top-2 left-1/2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute top-1/2 -right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300" />
              </div>
            </div>
            <h3 className="font-semibold text-lg md:text-xl mb-2">{pillars[1].title}</h3>
            <p className="text-sm text-muted-foreground">{pillars[1].description}</p>
          </div>

          {/* Pillar 3 - Performance Partnership */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
            <div className="h-24 md:h-32 mb-6 flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg md:text-xl mb-2">{pillars[2].title}</h3>
            <p className="text-sm text-muted-foreground">{pillars[2].description}</p>
          </div>

          {/* Pillar 4 - Geo-Specific Mastery */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
            <div className="h-24 md:h-32 mb-6 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="text-lg">🇧🇷</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-lg">🇩🇪</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <span className="text-lg">🇬🇧</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <span className="text-lg">🇳🇬</span>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg md:text-xl mb-2">{pillars[3].title}</h3>
            <p className="text-sm text-muted-foreground">{pillars[3].description}</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Start Dominating</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
