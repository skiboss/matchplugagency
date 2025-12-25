"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, ChevronDown } from "lucide-react"

const companyTypes = [
  "iGaming Operator",
  "Crypto Exchange",
  "Sportsbook",
  "Online Casino",
  "Web3 Platform",
  "B2B Provider",
  "Other",
]

const countries = [
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const handleCountryChange = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode)
    if (country) {
      setSelectedCountry(country)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
        <p className="text-muted-foreground">We'll get back to you within 24 hours to schedule your strategy call.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full md:text-lg bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary px-0 py-3 text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-colors"
        />
      </div>

      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full md:text-lg bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary px-0 py-3 text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-colors"
        />
      </div>

      {/* Company Type Select - underline style */}
      <div className="relative">
        <Select required>
          <SelectTrigger className="w-full bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary rounded-none px-0 py-3 h-auto focus:ring-0 focus:ring-offset-0 [&>svg]:hidden">
            <div className="flex items-center justify-between w-full md:text-lg">
              <SelectValue placeholder="Company" />
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </SelectTrigger>
          <SelectContent>
            {companyTypes.map((type) => (
              <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Phone Input with country code selector */}
      <div className="relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b-2 border-muted-foreground/30 focus-within:border-primary transition-colors">
        <Select onValueChange={handleCountryChange} defaultValue={selectedCountry.code}>
          <SelectTrigger className="w-auto bg-transparent border-0 rounded-none px-0 py-3 h-auto focus:ring-0 focus:ring-offset-0 [&>svg]:hidden shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xl">{selectedCountry.flag}</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{selectedCountry.code}</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{country.flag}</span>
                  <span>{country.name}</span>
                  <span className="text-muted-foreground text-sm">{country.code}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input
          type="tel"
          placeholder="Phone number"
          className="flex-1 bg-transparent border-0 px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 min-w-0 md:text-lg"
        />
        <span className="text-xs md:text-base text-muted-foreground text-right sm:text-left">( whatsapp/telegram )</span>
      </div>

      {/* Message Textarea */}
      <div className="relative">
        <textarea
          placeholder="Add brief message"
          rows={1}
          className="w-full bg-transparent md:text-lg border-0 border-b-2 border-muted-foreground/30 focus:border-primary px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-colors resize-none"
        />
      </div>

      <Button type="submit" className="text-base font-medium rounded-full px-6" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Book Strategy Call"
        )}
      </Button>
    </form>
  )
}
