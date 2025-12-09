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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Dominate Your Market?</h2>
          <p className="text-lg text-white mb-8">
            Stop testing. Start dominating. Book a 15-minute strategy call and discover how we can flood your brand with
            qualified FTDs at 400-800% ROAS.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild className="group bg-white hover:bg-white text-primary rounded-full">
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}
