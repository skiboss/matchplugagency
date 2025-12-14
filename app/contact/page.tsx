import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/sections/contact-section"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Contact Us | Matchplug Agency",
  description:
    "Book a strategy call with Matchplug Agency. Get a free consultation on how we can help you dominate your market with 400-800% ROAS.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center pt-8 md:pt-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Contact Us</h1>
              <p className="text-base md:text-lg text-muted-foreground px-4 w-3/5 mx-auto">
                We don't help you participate in markets, we help you own them
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section - using reusable component */}
        <ContactSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
