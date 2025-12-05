"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DecorativeCurves } from "@/components/decorative-curves"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"

const categories = ["Hot News", "Important News", "Trending", "Blockchain", "iGaming", "American Sports", "Crypto"]

const blogPosts = [
  {
    id: "vr-ar-campaigns",
    title: "VR/AR Campaigns: Immersive ads for metaverse casinos and virtual betting lounges",
    excerpt:
      "Virtual reality is reshaping how iGaming brands connect with players. From immersive casino experiences in the metaverse to AR-enhanced sports betting, learn how leading platforms are using spatial computing to drive 3x higher engagement rates and create unforgettable player experiences that translate to real-world deposits.",
    category: "Blockchain",
    readTime: "16 mins",
    date: "December 2nd, 2025",
    image: "/vr-headset-gaming-metaverse.jpg",
  },
  {
    id: "crypto-seo-ppc",
    title: "Crypto SEO + PPC: Long-tail keywords like 'best BTC slots' driving 400% more FTDs",
    excerpt:
      "The crypto gambling space is exploding, but most operators are fighting over the same generic keywords. We break down our strategy for capturing high-intent traffic through long-tail crypto-specific search terms, revealing how phrases like 'ethereum casino no KYC' and 'best bitcoin slots 2025' are delivering 4x better ROI than broad match campaigns.",
    category: "Crypto",
    readTime: "16 mins",
    date: "December 2nd, 2025",
    image: "/cryptocurrency-bitcoin-trading-charts.jpg",
  },
  {
    id: "blockchain-ad-analytics",
    title: "Blockchain Ad Analytics: On-chain tools like Dune cut CAC by 35%",
    excerpt:
      "Traditional attribution is broken in Web3. Players use multiple wallets, pseudonymous identities, and cross-chain bridges. Discover how on-chain analytics platforms like Dune, Nansen, and custom blockchain tracking are revolutionizing campaign attribution—and why operators using these tools are seeing 35% lower customer acquisition costs.",
    category: "Blockchain",
    readTime: "16 mins",
    date: "December 2nd, 2025",
    image: "/blockchain-analytics-dashboard.png",
  },
  {
    id: "ai-driven-igaming",
    title: "AI-Driven iGaming Ads: Predictive targeting to boost FTD rates by 280%",
    excerpt:
      "Machine learning is transforming paid media for iGaming. We explore how AI-powered lookalike audiences, predictive LTV modeling, and real-time bid optimization are helping operators identify high-value players before they even register. Case study included: How one sportsbook achieved 280% higher FTD rates using our AI targeting framework.",
    category: "iGaming",
    readTime: "16 mins",
    date: "December 2nd, 2025",
    image: "/ai-artificial-intelligence-marketing.jpg",
  },
  {
    id: "meta-ads-survival",
    title: "Meta Ads Survival Guide: How to maintain 98% uptime in restricted markets",
    excerpt:
      "Getting banned on Meta is inevitable for aggressive iGaming campaigns—but staying banned doesn't have to be. This comprehensive guide reveals our proprietary infrastructure that maintains 98% campaign uptime, including ad account rotation strategies, cloaking best practices, and the backup systems that keep you live when competitors go dark.",
    category: "iGaming",
    readTime: "12 mins",
    date: "November 28th, 2025",
    image: "/facebook-meta-ads-dashboard.jpg",
  },
  {
    id: "sports-betting-trends",
    title: "2025 Sports Betting Trends: Where the smart money is going in emerging markets",
    excerpt:
      "Latin America, Africa, and Southeast Asia are the new frontiers of sports betting growth. Our market analysis covers regulatory developments, payment preferences, and cultural factors driving adoption in Brazil, Nigeria, Philippines, and beyond. Plus: The specific acquisition strategies working in each region right now.",
    category: "American Sports",
    readTime: "10 mins",
    date: "November 25th, 2025",
    image: "/sports-betting-football-stadium.jpg",
  },
]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory ? blogPosts.filter((post) => post.category === selectedCategory) : blogPosts

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
          <DecorativeCurves position="top-right" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center pt-8 md:pt-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">News</h1>
              <p className="text-base md:text-lg text-muted-foreground px-4">
                Educational content that ranks, engages, and drives conversions
              </p>
            </div>

            {/* Category Filters - improved mobile scrolling */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-8 md:mt-10 px-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="text-xs md:text-sm"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs md:text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <DecorativeCurves position="bottom-left" />
        </section>

        {/* Blog Posts - Changed to 2-column grid for horizontal cards */}
        <section className="py-8 md:py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found in this category.</p>
                <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setSelectedCategory(null)}>
                  View all posts
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
