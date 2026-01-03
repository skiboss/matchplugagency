import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Matchplug | Top Media Buyers for iGaming & Crypto",
  description: "Matchplug Agency is the acquisition partner for iGaming and Web3 brands that refuse to play small.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
