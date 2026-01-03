"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DecorativeCurves } from "@/components/decorative-curves"
import { CaseStudyCard } from "@/components/case-study-card"
import { CaseStudyModal } from "@/components/case-study-modal"
import { CTASection } from "@/components/sections/cta-section"

const caseStudies = [
  {
    id: "legacy-arcade",
    category: "US User Acquisition",
    title: "Scaling Legacy Arcade’s US User Acquisition with Meta Ads",
    client: "Legacy Arcade",
    brandLogo: "/partners/legacy_logo.png",
    industry: "Social Sweepstakes Casino",
    objective: "Expand Meta Ads from 4 to 38 states while keeping CPUR at $4–5",
    challenge: "Regional inconsistency, fierce competition, strict Meta policies",
    strategy: [
      "Phased state rollout",
      "20+ creative tests",
      "Lookalikes + dynamic LPs",
      "Compliance-first structure",
    ],
    results: {
      registrations: "13,050+ (+512%)",
      cpur: "$4.20 (best $3.10)",
      ctr: "9.2%",
      roas: "4.5x",
      retention: "25% in new states",
    },
    highlight: "Meta Ads scaled to 38 states with 512% growth",
    tags: ["MetaAds", "US", "Casino"],
    timeline: "6 months",
  },
  {
    id: "betboro-africa",
    category: "Africa Sportsbook",
    title: "Betboro: Turning Volatile Growth into Steady FTDs in Africa",
    client: "Betboro",
    brandLogo: "/partners/bet_logo.png",
    industry: "Sportsbook & Casino",
    objective: "Stabilize registrations & boost purchase conversion monthly Meta budget",
    challenge: "Seasonal dips, high CPUR ($12–15), low reg-to-purchase rate (22%)",
    strategy: [
      "Urgency creatives",
      "High-intent soccer and casino cashback targeting",
      "Pixel-driven optimization",
      "Retargeting abandoners",
    ],
    results: {
      registrations: "3,200+",
      ftds: "1,100+ FTDs Monthly",
      cpa: "$5.80",
      regToPurchase: "34%",
      roas: "3.8x",
      ftdSpike: "+312% FTD spike (Oct 2025)",
    },
    highlight: "+312% FTD spike in October 2025",
    tags: ["MetaAds", "Africa", "Sportsbook"],
    timeline: "2025",
  },
  {
    id: "alibabet-crypto",
    category: "Crypto Betting",
    title: "Alibabet – Crypto Betting Adoption in Emerging Markets",
    client: "Alibabet",
    brandLogo: "/partners/alibabet_logo.png",
    industry: "Crypto Sportsbook & Casino",
    objective: "Scale from 500+ to 2,000+ Monthly FTDs in Asia/Europe/GCC",
    challenge: "Low awareness, crypto onboarding friction, heavy competition",
    strategy: [
      "Crypto-lifestyle creatives",
      "Localized CTAs",
      "One-click deposit LPs",
      "Meta + Taboola PPC mix",
    ],
    results: {
      ftds: "2,150+ (+189%)",
      cpur: "$5.60",
      depositConversion: "32%",
      roas: "4.2x",
      ltv: "+25%",
    },
    highlight: "189% FTD growth, 32% deposit conversion",
    tags: ["Crypto", "Asia", "Europe", "GCC"],
    timeline: "2025",
  },
  {
    id: "marketbhai-trading",
    category: "Multi Asset Trading",
    title: "MarketBhai.com – Hyper-Local Conquest of Multi Asset Trading Market",
    client: "MarketBhai.com",
    brandLogo: "/partners/legacy_logo.png",
    industry: "Trading Platform",
    objective: "Slash CPA from ₹220–280 to sub–₹120 while 5x-ing active trading accounts in Tier-2/3",
    challenge: "High competition from Zerodha, Grow, and Binance; creative fatigue during low-volatility periods; vernacular targeting gaps in semi-urban areas.",
    strategy: [
      "200+ pin-code ad sets",
      "120+ vernacular short videos",
      "₹100 se shuru, unlimited trades hooks",
      "Instant LPI linked account opening",
      "Off-season volatility mini campaigns",
    ],
    results: {
      fundedAccounts: "68,500+",
      cpa: "₹112 (best 78)",
      roas: "6.8x",
      accountToFunding: "38%",
      mau: "180K to 920K",
    },
    highlight: "68,500+ funded accounts, 6.8x ROAS",
    tags: ["Trading", "India", "MultiAsset"],
    timeline: "2025",
  },
  {
    id: "96com-casino",
    category: "Crypto Casino Domination",
    title: "96.com – Zero-KYC Crypto Casino Domination in Southeast Asia, NA and Europe",
    client: "96.com",
    brandLogo: "/partners/96_logo.png",
    industry: "Crypto Casino & Sportsbook",
    objective: "Drop CPA from $180+ to single digits in Google-blocked markets",
    challenge: "Meta creative rejections, PPC bans in target countries",
    strategy: [
      "Lifestyle–angle videos",
      "Interest stacking",
      "Telegram-bot funnel",
    ],
    results: {
      depositors: "28,300+",
      cpa: "$9.40 (Indonesia $6.20)",
      roas: "5.4x",
      firstDepositValue: "+42%",
    },
    highlight: "CPA dropped to $9.40, 28,300+ depositors",
    tags: ["Crypto", "Casino", "Asia", "Europe", "NA"],
    timeline: "2025",
  },
  {
    id: "rivalry-esports",
    category: "Esports Betting Revival",
    title: "Rivalry.com – Canada’s #1 Esports Betting Brand Revival",
    client: "Rivalry.com",
    brandLogo: "/partners/rivalry_logo.png",
    industry: "Esports Sportsbook",
    objective: "Reclaim Gen-Z leadership & drop CPA from CAD $180–220",
    challenge: "Outdated creatives, summer off-season, competitive market",
    strategy: [
      "Meme-native videos",
      "Tipster collabs",
      "Multi Channel penetration through Google Ads Restructure and scaling, Bing Ads, Meta and Taboola PPC Ads with 7 day retargeting sequels",
    ],
    results: {
      registrations: "13,050+ (+512%)",
      cpur: "$4.20 (best $3.10)",
      ctr: "9.2%",
      roas: "4.5x",
      retention: "25% in new states",
    },
    highlight: "Gen-Z leadership reclaimed, CPA dropped to $4.20",
    tags: ["Esports", "Canada", "Sportsbook"],
    timeline: "2025",
  },
]

// const filterTabs = ["All", "iGaming", "Crypto", "Meta"]
const filterTabs = ["IGaming", "Crypto", "Meta"]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedStudy, setSelectedStudy] = useState<(typeof caseStudies)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter(
          (study) =>
            study.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase())) ||
            study.industry.toLowerCase().includes(activeFilter.toLowerCase()),
        )

  const handleViewCaseStudy = (study: (typeof caseStudies)[0]) => {
    setSelectedStudy(study)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 lg:py-24 md:mt-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/blooper.png')" }}>
          <div className="absolute inset-0 bg-white/40"></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="max-w-2xl bg-white/5 inner-shadow-2xl rounded-4xl backdrop-blur-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 md:mb-8 text-foreground">Proven Domination</h1>
                <p className="text-base md:text-lg font-normal text-muted-foreground md:w-5/7 mx-auto">
                  See how we've helped iGaming and Web3 brands conquer their geos in 90 days or less.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-4 md:py-6">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 md:gap-8">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2 rounded-full cursor-pointer text-sm md:text-xl font-medium transition-colors ${
                    activeFilter === tab
                      ? "bg-primary text-primary-foreground hover:bg-primary hover:text-white"
                      : "bg-black/2 text-foreground outline outline-[#2A38FD]/8 hover:bg-secondary/50"
                  } border border-border`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-8 md:py-10 lg:py-12 lg:mb-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {filteredStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} onViewCaseStudy={handleViewCaseStudy} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* Case Study Modal */}
      <CaseStudyModal study={selectedStudy} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
