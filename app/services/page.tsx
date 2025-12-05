import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DecorativeCurves } from "@/components/decorative-curves"
import { ServiceCard } from "@/components/service-card"
import { CTASection } from "@/components/sections/cta-section"
import { Globe, Search, BarChart3, Newspaper, Users, FileText, Bitcoin, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Matchplug Agency",
  description:
    "Full-stack acquisition solutions for iGaming and Web3 brands. Meta Ads, Google Ads, Bing, Taboola, Crypto Marketing, and more.",
}

const services = [
  {
    id: "meta-ads",
    icon: Globe,
    title: "Meta Ads Domination",
    subtitle: "Facebook/Instagram",
    roas: "300-500% ROAS",
    markets: "Licensed & Unlicensed Markets",
    description:
      "Proprietary link cloaking technology with unlimited Meta assets (ad accounts, profiles, pixels) keeps your campaigns alive indefinitely while competitors face constant bans.",
    features: [
      "Unlimited ad account redundancy (never go dark)",
      "Advanced cloaking for grey market operation",
      "40-150+ creative assets per campaign",
      "Daily optimization for maximum FTD volume",
      "Survival rates 5x higher than industry standard",
    ],
    bestFor: "Aggressive volume in competitive or restricted geos",
  },
  {
    id: "google-ads",
    icon: Search,
    title: "Google Ads Authority",
    subtitle: "Search & Performance Max",
    roas: "500-800% ROAS",
    markets: "Licensed Markets Only",
    description:
      "Dominate high-intent search traffic, Performance Max and display networks with campaigns engineered for maximum conversion in regulated markets.",
    features: [
      "Search campaigns targeting bottom-funnel users",
      "Performance Max for scale across all Google properties",
      "YouTube brand-building campaigns",
      "Integrated SEO strategy to rank your brand organically",
      "Compliance-first approach for licensed operators",
    ],
    bestFor: "Regulated markets with search and high intent players = immediate FTDs",
  },
  {
    id: "bing-ads",
    icon: BarChart3,
    title: "Microsoft Bing Ads",
    subtitle: "Search & Display",
    roas: "400-600% ROAS",
    markets: "Licensed Markets",
    description:
      "Underutilized by competitors, Bing delivers high-quality FTDs at 30-40% lower CPA than Google in most geos.",
    features: [
      "Search and display campaigns",
      "Microsoft Audience Network reach",
      "Lower competition = better positioning",
      "Older, higher-value demographic",
    ],
    bestFor: "Mature markets where user acquisition costs are inflated on other platforms",
  },
  {
    id: "taboola",
    icon: Newspaper,
    title: "Taboola Native Advertising",
    subtitle: "Premium Publishers",
    roas: "400-500% ROAS",
    markets: "Licensed & Unlicensed Markets",
    description:
      "Native content distribution across premium publisher networks drives high-intent traffic that converts.",
    features: [
      "Premium publisher placements",
      "Content-style ads that bypass ad blindness",
      "Retargeting capabilities",
      "Works in restricted markets",
    ],
    bestFor: "Building awareness while driving conversions in competitive spaces",
  },
  {
    id: "cappers-network",
    icon: Users,
    title: "Cappers Network Traffic",
    subtitle: "High-Intent Sports Betting Traffic",
    roas: "High-Intent Traffic",
    markets: "Sports Betting",
    description:
      "Access our exclusive network of verified sports betting influencers (Tipsters / cappers) with engaged, ready-to-deposit audiences.",
    features: [
      "Immediate FTD delivery while paid campaigns scale",
      "Layered audience data for precision targeting",
      "Pre-qualified sports bettors actively seeking new platforms",
      "Performance-based traffic with tracked conversions",
    ],
    bestFor: "Sportsbooks needing instant volume or testing new geos before heavy ad investment",
  },
  {
    id: "content-services",
    icon: FileText,
    title: "iGaming & Web3 Content Services",
    subtitle: "Strategic Content That Converts",
    roas: "SEO-Optimized",
    markets: "All Markets",
    description:
      "Most iGaming and Web3 brands fail at content because they treat it like a blog. We create conversion-focused content that ranks, educates, engages, and drives conversions.",
    features: [
      "SEO-optimized landing pages for paid campaigns",
      "Educational content that builds trust (how-to guides, game strategies, crypto tutorials)",
      "Comparison articles that position your brand as the top choice",
      "Native ad content for Taboola campaigns",
    ],
    bestFor: "Brands needing content infrastructure",
  },
  {
    id: "crypto-acquisition",
    icon: Bitcoin,
    title: "Crypto Exchange & Web3 Acquisition",
    subtitle: "Global Markets | Compliant & Grey",
    roas: "400-700% ROAS",
    markets: "Global Markets",
    description:
      "The crypto and Web3 space moves at lightning speed. We already figured the needs of the market and can produce results with regulatory navigation expertise.",
    features: [
      "Regulatory Navigation Expertise: Compliant campaign structures for regulated markets",
      "Advanced cloaking infrastructure for restricted geos",
      "High-Intent User Targeting: DeFi wallet holders, NFT purchasers, yield farmers",
      "Trust-Building creatives for skeptical crypto audiences",
      "Rapid Scaling: 5-10x within 48 hours to capture market momentum",
    ],
    bestFor: "Crypto exchanges and Web3 platforms seeking aggressive growth",
  },
  {
    id: "b2b-lead-gen",
    icon: Building2,
    title: "B2B iGaming & Web3 Lead Generation",
    subtitle: "Enterprise Leads",
    roas: "High-Intent Leads",
    markets: "B2B iGaming & Web3",
    description:
      "High-intent lead generation for B2B software platforms, payment processors, and Web3 infrastructure providers.",
    features: [
      "Search campaigns targeting decision-makers",
      "Performance Max for enterprise reach",
      "Link Google ads to your CRM for better conversion",
      "Lead qualification and nurturing systems",
    ],
    bestFor: "B2B brands needing qualified enterprise leads, not just clicks",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
          <DecorativeCurves position="top-right" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center pt-8 md:pt-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Our Services</h1>
              <p className="text-base md:text-lg text-muted-foreground px-4">
                Full-stack acquisition solutions engineered for iGaming and Web3 domination. Every service is designed
                to deliver measurable FTDs and market share.
              </p>
            </div>
          </div>

          <DecorativeCurves position="bottom-left" />
        </section>

        {/* Services List */}
        <section className="py-8 md:py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-8 md:space-y-12">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} isReversed={index % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
