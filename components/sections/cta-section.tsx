import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { DecorativeCurves } from "@/components/decorative-curves"

export function CTASection() {
  return (
    <section 
      className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/cta_banner.png')"
      }}
    >
      {/* Dark overlay for text readability */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-[#F2F3FF]">Start Dominating</h2>
          <p className="text-xl sm:text-2xl font-normal text-white mb-8 leading-relaxed">
            The market won’t wait for you to find an edge. Deploy our 98% uptime tech stack and 
            secure your market share in 90 days.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild className="text-base py-5.5 px-12.5 font-medium group bg-white hover:bg-white text-primary rounded-full">
              <Link href="https://calendly.com/chris-ojukoko-jnr/30min?" target="_blank">
                {/* <Calendar className="mr-2 h-5 w-5" /> */}
                Book Strategy Call
                {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}
