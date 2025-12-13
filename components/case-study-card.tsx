"use client"

import Image from "next/image"
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
    <div className="bg-[#ECEDFF]/2 border border-[#EBEBEB] shadow-[inset_1px_2px_8px_0px_rgba(0,0,0,0.08)]
 rounded-3xl p-5 md:py-6 md:px-5 hover:shadow-md transition-shadow">
      {/* Header row - Category and Brand Logo */}
      <div className="flex items-start justify-between mb-2">
        <span className="text-base text-muted-foreground">{study.category}</span>
        <div className="w-8 h-8 flex items-center justify-center">
          <Image 
            src={study.brandLogo} 
            alt={study.client} 
            width={32} 
            height={32} 
            className="h-8 w-8 object-contain"
          />
        </div>
      </div>

      {/* Challenge/Title */}
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-12 leading-tight">{study.challenge}</h3>

      {/* View Case Study Button and Timeline */}
      <div className="flex items-center justify-between mb-4">
        <Button size="sm" onClick={() => onViewCaseStudy(study)} className="text-base font-medium px-6 py-3 rounded-full">
          View Case Study
        </Button>
        <span className="text-base font-normal text-muted-foreground">Timeline: {study.timeline}</span>
      </div>

      {/* Tags and ROAS */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 pl-2">
          {study.tags.map((tag, index) => (
            <span key={tag} className="text-sm font-normal text-muted-foreground">
              #{tag}
              {index < study.tags.length - 1 && <span className="ml-1.5">·</span>}
            </span>
          ))}
        </div>
        <span className="text-sm font-medium py-2 px-4 rounded-full bg-[#EEF8F1]/50 text-[#02DC3B]">ROAS : {study.roas}</span>
      </div>
    </div>
  )
}
