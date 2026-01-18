"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"


interface CaseStudy {
  id: string
  category: string
  title: string
  client: string
  brandLogo: string
  industry: string
  objective: string
  challenge: string
  strategy: string[]
  results: Record<string, any>
  highlight: string
  tags: string[]
  timeline: string
}

interface CaseStudyCardProps {
  study: CaseStudy
  onViewCaseStudy: (study: CaseStudy) => void
}


export function CaseStudyCard({ study, onViewCaseStudy }: CaseStudyCardProps) {
  // Find a key result to highlight (ROAS, CPA, FTDs, etc.)
  const keyResults = [
    study.results.roas && { label: 'ROAS', value: study.results.roas },
    study.results.cpa && { label: 'CPA', value: study.results.cpa },
    study.results.cpur && { label: 'CPUR', value: study.results.cpur },
    study.results.ftds && { label: 'FTDs', value: study.results.ftds },
    study.results.registrations && { label: 'Registrations', value: study.results.registrations },
    study.results.depositors && { label: 'Depositors', value: study.results.depositors },
    study.results.fundedAccounts && { label: 'Funded Accounts', value: study.results.fundedAccounts },
  ].filter(Boolean);

  return (
    <div className="bg-[#ECEDFF]/2 border border-[#EBEBEB] shadow-[inset_1px_2px_8px_0px_rgba(0,0,0,0.08)] rounded-3xl p-5 md:py-6 md:px-5 hover:shadow-md transition-shadow">
      {/* Header row - Category and Brand Logo */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary/80 bg-primary/10 rounded px-2 py-1 mr-2">{study.category}</span>
        </div>
        <div className="w-16 h-16 flex items-center justify-center">
          <Image 
            src={study.brandLogo} 
            alt={study.client} 
            width={64} 
            height={64} 
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-2 leading-tight">{study.title}</h3>
      {/* Objective */}
      {study.objective && <div className="text-sm text-muted-foreground mb-2"><span className="font-semibold">Objective:</span> {study.objective}</div>}
      {/* Challenge */}
      <div className="text-sm text-muted-foreground mb-4"><span className="font-semibold">Challenge:</span> {study.challenge}</div>

      {/* Key Results */}
      <div className="flex flex-wrap gap-2 mb-4">
        {keyResults.map((kr) => (
          <span key={kr.label} className="text-xs font-medium py-1 px-3 rounded-full bg-[#EEF8F1]/50 text-[#02DC3B] border border-[#02DC3B]/20">
            {kr.label}: {kr.value}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 pl-2 flex-wrap mt-2">
        {study.tags.map((tag, index) => (
          <span key={tag} className="text-xs font-normal text-muted-foreground">
            #{tag}
            {index < study.tags.length - 1 && <span className="ml-1.5">·</span>}
          </span>
        ))}
      </div>

      {/* View Case Study Button */}
      <div className="flex justify-end mt-4">
        <Button size="sm" onClick={() => onViewCaseStudy(study)} className="text-base font-medium px-6 py-2 rounded-full">
          View Case Study
        </Button>
      </div>
    </div>
  )
}
