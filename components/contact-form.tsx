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

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({ code: "+234", flag: "🇳🇬" })

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
          className="w-full bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-colors"
        />
      </div>

      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-colors"
        />
      </div>

      {/* Company Type Select - underline style */}
      <div className="relative">
        <Select required>
          <SelectTrigger className="w-full bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary rounded-none px-0 py-3 h-auto focus:ring-0 focus:ring-offset-0 [&>svg]:hidden">
            <div className="flex items-center justify-between w-full">
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

      {/* Phone Input with country code */}
      <div className="relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b-2 border-muted-foreground/30 focus-within:border-primary transition-colors">
        <div className="flex items-center gap-2 py-3 shrink-0">
          <span className="text-xl">{selectedCountry.flag}</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{selectedCountry.code}</span>
        </div>
        <input
          type="tel"
          placeholder=""
          className="flex-1 bg-transparent border-0 px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 min-w-0"
        />
        <span className="text-xs text-muted-foreground text-right sm:text-left">( whatsapp/telegram )</span>
      </div>

      {/* Message Textarea */}
      <div className="relative">
        <textarea
          placeholder="Add brief message"
          rows={3}
          className="w-full bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-colors resize-none"
        />
      </div>

      <Button type="submit" className="rounded-full px-6" disabled={isSubmitting}>
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
