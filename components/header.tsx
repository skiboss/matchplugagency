"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Who we are", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "News", href: "/news" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 mb-8 z-50 w-full bg-background border-b border-border">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8 relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <Image 
              src="/mp_logo.png" 
              alt="Matchplug Agency" 
              width={16}
              height={16}
              // priority
              className="h-8 w-auto"
            />
            {/* <img src="/mp_logo.png" alt="Matchplug Agency" className="h-8 w-auto" /> */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg transition-colors ${
                  isActive ? "text-foreground font-medium" : "text-[#A3A3A3] hover:text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button asChild className="rounded-full text-base font-medium px-6 py-3">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button type="button" className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="lg:hidden border-t border-border bg-background relative z-50">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-sm font-medium transition-colors ${
                      isActive ? "text-muted-foreground" : "text-foreground hover:text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Button asChild className="w-full rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
