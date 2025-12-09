import { Globe, Grid3X3, FolderX } from "lucide-react"
import Image from "next/image"
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
    <section className="py-16 md:py-20 lg:py-24 lg:pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Who We Are Section with two columns */}
        <div className="max-w-5xl mx-auto mb-20 md:mb-24">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Who We Are</h2>
            <p className="text-muted-foreground w-3/5 mx-auto text-base md:text-lg">
              Matchplug Agency is the acquisition partner for iGaming and Web3 brands that refuse to play small.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Column - Quote and Button */}
            <div className="flex flex-col justify-between">
              <div className="mb-8">
                <p className="text-base md:text-xl text-black mb-3">
                  While other agencies only optimize for "efficiency," we optimize for dominance. We don't help you participate in markets —
                  <span className="text-lg md:text-xl font-medium text-green-400"> we help you own them.</span>
                </p>
                
              </div>
              <Button className="md:mr-auto bg-primary hover:bg-primary/90 text-white cursor-pointer rounded-full px-6">
                Know Us Better
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="relative hidden lg:flex justify-center items-center">
              <Image
                src="/about.png"
                alt="3D Illustration"
                width={600}
                height={550}
                className="w-full h-auto max-w-sm rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* The Hard Truth */}
        <div>
          <h3 className="text-2xl sm:text-4xl md:text-5xl mb-8 md:mb-10">The Hard Truth</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9 mt-4">
            <div className="relative overflow-hidden rounded-lg pt-6 pb-24 px-6 bg-cover bg-bottom" style={{ backgroundImage: "url('/about/red_bg.png')" }}>
              <p className="text-muted-foreground text-sm md:text-base relative z-10">
                Meta's algorithm needs 50-100+ creative variations to find winners.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg pt-6 pb-24 px-6 bg-cover bg-no-repeat bg-bottom" style={{ backgroundImage: "url('/about/green_bg.png')" }}>
              <p className="text-muted-foreground text-sm md:text-base relative z-10">
                Google Performance Max demands dynamic asset libraries.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg pt-6 pb-24 px-6 bg-cover bg-bottom" style={{ backgroundImage: "url('/about/orange_bg.png')" }}>
              <p className="text-muted-foreground text-sm md:text-base relative z-10">
                TikTok-style native content dominates Taboola and generic creatives don't convert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
