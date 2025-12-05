import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PageLoader } from "@/components/page-loader"
import { MobileBottomCTA } from "@/components/mobile-bottom-cta"
import { InactivityModal } from "@/components/inactivity-modal"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Matchplug Agency | Paid Media & Acquisition for iGaming & Web3",
  description:
    "We flood iGaming and Web3 brands with qualified FTDs at 400-800% ROAS with proven methods—in any geo, licensed or not—until you dominate.",
  generator: "Matchplug Agency",
  keywords: [
    "iGaming",
    "Web3",
    "paid media",
    "FTD",
    "crypto marketing",
    "sportsbook marketing",
    "Meta Ads",
    "Google Ads",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <PageLoader />
        {children}
        <MobileBottomCTA />
        <InactivityModal />
        <Analytics />
      </body>
    </html>
  )
}
