import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

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

interface ContactSectionProps {
  showBorder?: boolean
}

export function ContactSection({ showBorder = true }: ContactSectionProps) {
  return (
    <section className={`py-8 md:py-12 lg:py-20 ${showBorder ? "border-t border-border" : ""}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4 text-wrap">
              Testing is for brands with time. You need territory.
            </h2>
            <p className="text-muted-foreground mb-8 text-sm font-normal md:text-lg">
              Join the partners dominating 79+ geos. 90-day market share guarantee. Get a free consultation!
            </p>

            <div className="border-t border-[#EBEBEB] pt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Column 1 - Addresses */}
                <div className="space-y-8">
                  {offices.map((office) => (
                    <div key={office.name}>
                      <p className="font-medium text-foreground text-sm md:text-lg">{office.name}:</p>
                      <p className="text-xs md:text-base font-normal text-muted-foreground">{office.address}</p>
                    </div>
                  ))}
                </div>

                {/* Column 2 - Social Links */}
                <div className="flex flex-row gap-3 justify-self-end">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EEF8F1]/50 hover:bg-secondary hover:border-primary/50 transition-colors"
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
          <div className="order-1 lg:order-2 bg-card rounded-2xl border border-border p-5 sm:p-6 lg:px-6 lg:py-10 shadow-[inset_1px_2px_8px_0px_rgba(0,0,0,0.08)]">
            <h3 className="text-lg sm:text-xl md:text-3xl font-medium mb-9">Send us a brief</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
