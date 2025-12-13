import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DecorativeCurves } from "@/components/decorative-curves"
import { ArrowRight } from "lucide-react"

const clientLogos = [
  { name: "BET", src: "/partners/bet_logo.png" },
  { name: "dafabet", src: "/partners/dafabet_Logo.png" },
  { name: "LEGACY", src: "/partners/legacy_logo.png" },
  { name: "Betano", src: "/partners/betano_logo.png" },
  { name: "1XBET", src: "/partners/1XBET_logo.png" },
  { name: "BC Game", src: "/partners/bc_logo.png" },
  { name: "22bet", src: "/partners/22bet_logo.png" },
  { name: "96", src: "/partners/96_logo.png" },
  { name: "Alibabet", src: "/partners/alibabet_logo.png" },
  { name: "Rivalry", src: "/partners/rivalry_logo.png" },
]

export function Trustbar() {
  return (
    <section className="relative overflow-hidden">

      <div className="bg-primary py-4 md:py-6 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 mb-4">
          <p className="text-center text-primary-foreground text-sm md:text-lg">
            Trusted by leading brands in <span className="font-semibold">79+ countries</span>
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative flex overflow-x-hidden">
          {/* First set of logos */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="mx-6 md:mx-10 shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={80}
                  height={50}
                  className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          {/* <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={`${logo.name}-dup-${index}`} className="mx-6 md:mx-10 shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={80}
                  height={50}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
