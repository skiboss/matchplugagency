import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DecorativeCurves } from "@/components/decorative-curves"
import { ContactForm } from "@/components/contact-form"
import { FAQSection } from "@/components/faq-section"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us | Matchplug Agency",
  description:
    "Book a strategy call with Matchplug Agency. Get a free consultation on how we can help you dominate your market with 400-800% ROAS.",
}

const offices = [
  {
    name: "Office 1",
    address: "Skogveien 10B, Stavanger, Norway",
  },
  {
    name: "Office 2",
    address: "30 N Gould St Ste R Sheridan, Wyoming 82801, USA",
  },
  {
    name: "Office 3",
    address: "Victoria Crest 4, Lekki, Lagos, Nigeria.",
  },
]

const socialLinks = [
  { name: "WhatsApp", href: "https://api.whatsapp.com/send?phone={{+1 (307) 218-5698}}", icon: "/icons/whatsapp.svg" },
  { name: "Telegram", href: "https://telegram.me/@matchplugvip", icon: "/icons/telegram.svg" },
  { name: "Email", href: "mailto:hello@matchplugagency.com", icon: "/icons/mail.svg" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Updated curves to span full width */}
        <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
          {/* <DecorativeCurves position="top-right" /> */}

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center pt-8 md:pt-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Contact Us</h1>
              <p className="text-base md:text-lg text-muted-foreground px-4 w-3/5 mx-auto">
                We don't help you participate in markets, we help you own them
              </p>
            </div>
          </div>

          {/* <DecorativeCurves position="bottom-left" /> */}
        </section>

        {/* Contact Section - Improved mobile layout and spacing */}
        <section className="py-8 md:py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Column - Info */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-balance">
                  Testing is for brands with time. You need territory.
                </h2>
                <p className="text-muted-foreground mb-8 text-2xl">
                  Join the partners dominating 79+ geos. 90-day market share guarantee. Get a free consultation!
                </p>

                <div className="border-t border-border pt-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                    <div className="space-y-5">
                      {offices.map((office) => (
                        <div key={office.name}>
                          <p className="font-semibold text-sm">{office.name}:</p>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex sm:flex-col gap-3">
                      {socialLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="p-3 rounded-full border border-border hover:bg-secondary hover:border-primary/50 transition-colors"
                          aria-label={link.name}
                        >
                          <Image src={link.icon} alt={link.name} width={20} height={20} className="h-5 w-5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="order-1 lg:order-2 bg-card rounded-2xl border border-border p-5 sm:p-6 lg:p-8 shadow-[inset_1px_2px_8px_0px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg sm:text-xl font-semibold mb-6">Send us a brief</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
