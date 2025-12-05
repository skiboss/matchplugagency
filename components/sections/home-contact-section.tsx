import Link from "next/link"
import { Mail, MessageCircle, Send } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const offices = [
  {
    name: "Office 1:",
    address: "Skogveien 10B, Stavanger, Norway",
  },
  {
    name: "Office 2:",
    address: "30 N Gould St Ste R Sheridan, Wyoming 82801, USA",
  },
  {
    name: "Office 3:",
    address: "Victoria Crest 4, Lekki, Lagos, Nigeria.",
  },
]

export function HomeContactSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance">
              Testing is for brands with time. You need territory
            </h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Join the partners dominating 79+ geos. 90-day market share guarantee. Get a free consultation!
            </p>

            <div className="space-y-4 mb-8">
              {offices.map((office, index) => (
                <div key={index}>
                  <p className="font-medium text-foreground text-sm">{office.name}</p>
                  <p className="text-muted-foreground text-sm">{office.address}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6">Send us a brief</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
