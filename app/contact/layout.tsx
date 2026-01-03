import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Matchplug Agency",
  description:
    "Book a strategy call with Matchplug Agency. Get a free consultation on how we can help you dominate your market with 400-800% ROAS.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
