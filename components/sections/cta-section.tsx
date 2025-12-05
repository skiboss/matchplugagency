import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { DecorativeCurves } from "@/components/decorative-curves"

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <DecorativeCurves className="top-0 left-0 w-full h-16 opacity-30" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dominate Your Market?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stop testing. Start dominating. Book a 15-minute strategy call and discover how we can flood your brand with
            qualified FTDs at 400-800% ROAS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="group">
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Results</Link>
            </Button>
          </div>
        </div>
      </div>

      <DecorativeCurves className="bottom-0 right-0 w-full h-16 rotate-180 opacity-30" />
    </section>
  )
}
