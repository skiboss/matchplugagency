import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DecorativeCurves } from "@/components/decorative-curves"
import { ArrowRight } from "lucide-react"

const clientLogos = [
  { name: "BET", color: "/partners/bet_logo.png", white: "/partners/logo-white/bet.png" },
  { name: "dafabet", color: "/partners/dafabet_Logo.png", white: "/partners/logo-white/dfb.png" },
  { name: "LEGACY", color: "/partners/legacy_logo.png", white: "/partners/logo-white/legacy.png" },
  { name: "Betano", color: "/partners/betano_logo.png", white: "/partners/logo-white/Betano.png" },
  { name: "1XBET", color: "/partners/1XBET_logo.png", white: "/partners/logo-white/1XB.png" },
  { name: "BC Game", color: "/partners/bc_logo.png", white: "/partners/logo-white/BCG.png" },
  { name: "22bet", color: "/partners/22bet_logo.png", white: "/partners/logo-white/22bet.png" },
  { name: "96", color: "/partners/96_logo.png", white: "/partners/logo-white/96_logo.png" },
  { name: "Alibabet", color: "/partners/alibabet_logo.png", white: "/partners/logo-white/Alibabet.png" },
  { name: "Rivalry", color: "/partners/rivalry_logo.png", white: "/partners/logo-white/Rivalry.png" },
]

export function Trustbar() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-primary py-4 md:py-12 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 mb-14">
          <p className="text-center text-primary-foreground text-sm md:text-2xl font-medium">
            Trusted by leading brands in <span className="">79+ countries</span>
          </p>
        </div>
        {/* Marquee container */}
        <div className="relative w-full h-[60px] overflow-x-hidden">
          <div className="absolute left-0 top-0 flex animate-marquee whitespace-nowrap w-max">
            {clientLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="mx-6 md:mx-9 shrink-0 group relative flex items-center justify-center" style={{ width: 100, height: 50 }}>
                {logo.white ? (
                  <Image
                    src={logo.white}
                    alt={logo.name + ' white'}
                    width={100}
                    height={50}
                    className="h-10 md:h-12 w-auto object-contain absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    style={{ zIndex: 1 }}
                  />
                ) : null}
                <Image
                  src={logo.color}
                  alt={logo.name}
                  width={100}
                  height={50}
                  className={`h-10 md:h-12 w-auto object-contain transition-opacity duration-300 ${logo.white ? 'opacity-0 group-hover:opacity-100 absolute inset-0' : ''}`}
                  style={logo.white ? { zIndex: 2 } : {}}
                />
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 flex animate-marquee2 whitespace-nowrap w-max">
            {clientLogos.map((logo, index) => (
              <div key={`${logo.name}-dup-${index}`} className="mx-6 md:mx-9 shrink-0 group relative flex items-center justify-center" style={{ width: 100, height: 50 }}>
                {logo.white ? (
                  <Image
                    src={logo.white}
                    alt={logo.name + ' white'}
                    width={100}
                    height={50}
                    className="h-10 md:h-12 w-auto object-contain absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    style={{ zIndex: 1 }}
                  />
                ) : null}
                <Image
                  src={logo.color}
                  alt={logo.name}
                  width={100}
                  height={50}
                  className={`h-10 md:h-12 w-auto object-contain transition-opacity duration-300 ${logo.white ? 'opacity-0 group-hover:opacity-100 absolute inset-0' : ''}`}
                  style={logo.white ? { zIndex: 2 } : {}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
