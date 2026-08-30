import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/sections/contact-section"
import { FAQSection } from "@/components/faq-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 sm:py-12 md:py-20 lg:py-24 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/blooper.png')" }}>
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="max-w-2xl bg-white/5 inner-shadow-2xl rounded-4xl backdrop-blur-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 md:mb-8 text-foreground">Contact Us</h1>
                <p className="text-base md:text-lg font-normal text-muted-foreground md:w-5/7 mx-auto">
                  We don't help you participate in markets, we help you own them
                </p>
              </div>
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
