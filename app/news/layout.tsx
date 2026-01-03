import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Insights | Matchplug Agency",
  description: "Stay updated with the latest trends, insights, and strategies in iGaming and crypto advertising.",
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
