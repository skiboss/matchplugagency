import { Globe, Grid3X3, FolderX } from "lucide-react"
import { Button } from "@/components/ui/button"

const differentiators = [
  {
    icon: Globe,
    title: "License-agnostic expertise",
    description: "We operate successfully in both regulated and grey markets",
  },
  {
    icon: Grid3X3,
    title: "Geo-specific mastery",
    description: "Deep experience across 79+ countries with localized strategies",
  },
  {
    icon: FolderX,
    title: "No Spaghetti Marketing",
    description: "Most agencies waste your budget testing random tactics hoping something works.",
  },
]

export function AboutSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Who We Are - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Who We Are</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Matchplug Agency is the acquisition partner for iGaming and Web3 brands that refuse to play small.
          </p>
        </div>

        {/* Quote Box */}
        <div className="max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="border-l-4 border-primary pl-6 py-4">
            <p className="text-muted-foreground text-base md:text-lg mb-2">
              While other agencies only optimize for "efficiency," we optimize for dominance. We don't help you
              participate in markets—
            </p>
            <p className="text-primary font-medium underline underline-offset-2">we help you own them.</p>
          </div>
          <div className="mt-6">
            <Button variant="link" className="text-primary p-0 h-auto font-medium">
              Know us Better
            </Button>
          </div>
        </div>

        {/* The Hard Truth */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10">The Hard Truth</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground text-sm md:text-base">
                Meta's algorithm needs 50-100+ creative variations to find winners.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground text-sm md:text-base">
                Google Performance Max demands dynamic asset libraries.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground text-sm md:text-base">
                TikTok-style native content dominates Taboola and generic creatives don't convert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
