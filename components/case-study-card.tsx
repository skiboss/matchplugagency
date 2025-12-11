"use client"

import { Button } from "@/components/ui/button"

interface CaseStudy {
  id: string
  category: string
  title: string
  challenge: string
  timeline: string
  roas: string
  tags: string[]
  brandLogo: string
  client: string
  industry: string
  strategy: string[]
  results: Record<string, string>
  highlight: string
}

interface CaseStudyCardProps {
  study: CaseStudy
  onViewCaseStudy: (study: CaseStudy) => void
}

export function CaseStudyCard({ study, onViewCaseStudy }: CaseStudyCardProps) {
  return (
    <div className="bg-background border border-border rounded-xl p-5 md:p-6 hover:shadow-md transition-shadow">
      {/* Header row - Category and Brand Logo */}
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm text-muted-foreground">{study.category}</span>
        <span className="text-2xl font-bold text-green-500">{study.brandLogo}</span>
      </div>

      {/* Challenge/Title */}
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-12 leading-tight">{study.challenge}</h3>

      {/* View Case Study Button and Timeline */}
      <div className="flex items-center justify-between mb-4">
        <Button size="sm" onClick={() => onViewCaseStudy(study)} className="text-sm rounded-full">
          View Case Study
        </Button>
        <span className="text-sm text-muted-foreground">Timeline: {study.timeline}</span>
      </div>

      {/* Tags and ROAS */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {study.tags.map((tag, index) => (
            <span key={tag} className="text-sm text-muted-foreground">
              #{tag}
              {index < study.tags.length - 1 && <span className="ml-2">·</span>}
            </span>
          ))}
        </div>
        <span className="text-xs font-medium py-1 px-2.5 rounded-full bg-[#EEF8F1]/50 text-green-500">ROAS : {study.roas}</span>
      </div>
    </div>
  )
}
