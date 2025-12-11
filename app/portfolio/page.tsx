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
    id: "european-sportsbook",
    category: "European Sportsbook Market Domination",
    title: "UK Market Entry",
    challenge: "Entering saturated UK market with established competitors holding 80% market share",
    timeline: "6 months",
    roas: "720%",
    tags: ["MetaAds", "Sports"],
    brandLogo: "96",
    client: "Licensed Sportsbook (UK-facing)",
    industry: "Sports Betting",
    strategy: [
      "Aggressive Google Search + Performance Max campaigns",
      "Meta retargeting for abandoned registrations",
      "Localized creative featuring UK sports events",
      "Influencer partnerships with football tipsters",
    ],
    results: {
      roas: "720%",
      ftds: "8,500+",
      marketShare: "12%",
      cpa: "-45%",
    },
    highlight: "From 0% to 12% market share in 6 months",
  },
  {
    id: "crypto-casino",
    category: "Crypto Casino Grey Market Scaling",
    title: "BC Games Style Platform",
    challenge: "Scaling in grey markets with constant ad account suspensions and 40% industry uptime",
    timeline: "4 months",
    roas: "580%",
    tags: ["Crypto", "Meta"],
    brandLogo: "BC",
    client: "BC Games Style Crypto Casino",
    industry: "Crypto Casino",
    strategy: [
      "Meta Ads with proprietary cloaking infrastructure",
      "Unlimited ad account rotation system",
      "Crypto-native creative targeting DeFi audiences",
      "Taboola native ads for brand awareness",
    ],
    results: {
      roas: "580%",
      ftds: "15,000+",
      uptime: "98%",
      geos: "12",
    },
    highlight: "98% campaign uptime vs 40% industry average",
  },
  {
    id: "african-sportsbook",
    category: "Pan-African Sportsbook Expansion",
    title: "Regional Growth Strategy",
    challenge: "Expanding from single geo to pan-African presence across 12 markets",
    timeline: "8 months",
    roas: "650%",
    tags: ["MetaAds", "Cappers"],
    brandLogo: "22",
    client: "Regional African Sportsbook",
    industry: "Sports Betting",
    strategy: [
      "Geo-specific campaigns for Nigeria, Kenya, Ghana, Tanzania",
      "Local payment integration messaging",
      "Cappers network activation in each market",
      "WhatsApp community building",
    ],
    results: {
      roas: "650%",
      ftds: "25,000+",
      geos: "4 → 12",
      growth: "340%",
    },
    highlight: "Expanded from 4 to 12 African markets",
  },
  {
    id: "crypto-exchange",
    category: "Crypto Exchange User Acquisition",
    title: "Trust Building Campaign",
    challenge: "Building trust and acquiring traders in competitive exchange market with skeptical users",
    timeline: "5 months",
    roas: "520%",
    tags: ["Crypto", "Google"],
    brandLogo: "EX",
    client: "Emerging Crypto Exchange",
    industry: "Crypto/Web3",
    strategy: [
      "Educational content marketing campaign",
      "Google Ads targeting competitor search terms",
      "Crypto influencer partnerships",
      "Retargeting with trust-building creatives",
    ],
    results: {
      roas: "520%",
      signups: "45,000+",
      tradingVolume: "$50M+",
      retention: "68%",
    },
    highlight: "$50M+ monthly trading volume achieved",
  },
  {
    id: "latam-casino",
    category: "LATAM Online Casino Launch",
    title: "Brazil & Mexico Entry",
    challenge: "Breaking into Brazil and Mexico with regulatory constraints and payment challenges",
    timeline: "6 months",
    roas: "480%",
    tags: ["iGaming", "Meta"],
    brandLogo: "BT",
    client: "LATAM Online Casino",
    industry: "Online Casino",
    strategy: [
      "Meta Ads with Brazil/Mexico localization",
      "Native advertising on local sports sites",
      "Portuguese and Spanish creative variations",
      "Local payment method focus (PIX, OXXO)",
    ],
    results: {
      roas: "480%",
      ftds: "18,000+",
      cpa: "-38%",
      retention: "55%",
    },
    highlight: "38% lower CPA than regional competitors",
  },
  {
    id: "b2b-igaming",
    category: "B2B iGaming Lead Generation",
    title: "Enterprise Software Sales",
    challenge: "Generating qualified leads for enterprise casino platform with long sales cycles",
    timeline: "12 months",
    roas: "487%",
    tags: ["B2B", "Google"],
    brandLogo: "SW",
    client: "iGaming Software Provider",
    industry: "B2B iGaming",
    strategy: [
      "LinkedIn + Google Search for decision-makers",
      "Content marketing with industry reports",
      "Conference and event targeting",
      "Lead nurturing with case study content",
    ],
    results: {
      leads: "340+",
      qualified: "85%",
      deals: "28",
      revenue: "$2.4M",
    },
    highlight: "28 enterprise deals worth $2.4M in revenue",
  },
]

// const filterTabs = ["All", "iGaming", "Crypto", "Meta"]
const filterTabs = ["iGaming", "Crypto", "Meta"]

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
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
          {/* <DecorativeCurves position="top-right" /> */}

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center pt-8 md:pt-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Proven Domination</h1>
              <p className="text-base md:text-lg text-muted-foreground px-4">
                See how we've helped iGaming and Web3 brands conquer their geos in 90 days or less.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === tab
                      ? "bg-secondary text-foreground"
                      : "bg-transparent text-muted-foreground hover:bg-secondary/50"
                  } border border-border`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-8 md:py-12 lg:py-16">
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
