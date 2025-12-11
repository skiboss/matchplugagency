import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  navigation: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ],
  social: [
    { name: "WhatsApp", href: "#", icon: "/icons/whatsapp.svg" },
    { name: "Telegram", href: "#", icon: "/icons/telegram.svg" },
    { name: "Email", href: "mailto:contact@matchplugagency.com", icon: "/icons/mail.svg" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {footerLinks.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="p-2 rounded-full bg-[#EEF8F1]/50 border border-border hover:bg-secondary transition-colors"
                aria-label={item.name}
              >
                <Image src={item.icon} alt={item.name} width={24} height={24} className="h-6 w-6" />
              </Link>
            ))}
          </div>

          {/* Logo & Tagline */}
          <div className="flex flex-col items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center">
                {/* <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div> */}
                <img src="/mp_logo.png" alt="Matchplug Agency" className="h-8" />
              </div>
            </Link>
            <p className="text-base text-muted-foreground text-center w-5/6 max-w-xs">
              Testing is for brands with time. You need territory.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {footerLinks.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-base text-center text-muted-foreground">
            © {new Date().getFullYear()} Matchplug Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
