import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DecorativeCurves } from "@/components/decorative-curves";
import { ArrowRight } from "lucide-react";

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
];

export function HeroSection() {
  return (
    <section 
      className="relative py-12 md:py-20 lg:py-28 overflow-hidden bg-white"
      style={{
        backgroundImage: "url('/home_hero.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#EEF8F1]/50 text-[#02DC3B] text-base font-medium mb-6 md:mb-8">
              Domination for iGaming & Web3
            </div>

            {/* Headline */}
            <h1 className="text-4xl text-foreground sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-balance mb-6 md:mb-8">
              Paid media and acquisition agency
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground font-normal max-w-xl mx-auto mb-8 md:mb-10 text-pretty">
              We help iGaming and Web3 brands scale fast with qualified FTDs and 400-800% in regulated and unregulated markets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Button
                size="lg"
                asChild
                className="group text-base font-medium rounded-full px-8 md:px-10 py-3 md:py-4"
              >
                <Link href="/contact">
                  Book Strategy Call
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base font-medium rounded-full px-8 md:px-10 py-3 md:py-4 border border-primary text-primary hover:bg-primary/5"
              >
                <Link href="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
