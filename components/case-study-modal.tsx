"use client"

import { X, TrendingUp, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"


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

interface CaseStudyModalProps {
  study: CaseStudy | null
  isOpen: boolean
  onClose: () => void
}

export function CaseStudyModal({ study, isOpen, onClose }: CaseStudyModalProps) {
  if (!isOpen || !study) return null


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-background rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow border">
                <Image
                  src={study.brandLogo}
                  alt={study.client}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div>
                <Badge variant="secondary" className="mb-1">
                  {study.industry}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">{study.client}</h2>
                <p className="text-muted-foreground text-sm">{study.category}</p>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold mb-1">Case Study</h3>
            <div className="text-xl font-medium text-foreground mb-1">{study.title}</div>
          </div>

          {/* Objective */}
          {study.objective && (
            <div className="mb-4">
              <h4 className="text-base font-semibold mb-1">Objective</h4>
              <p className="text-muted-foreground text-sm">{study.objective}</p>
            </div>
          )}

          {/* Challenge */}
          <div className="mb-4">
            <h4 className="text-base font-semibold mb-1">The Challenge</h4>
            <p className="text-muted-foreground text-sm">{study.challenge}</p>
          </div>

          {/* Strategy */}
          <div className="mb-6">
            <h4 className="text-base font-semibold mb-2">Our Strategy</h4>
            <ul className="space-y-2">
              {study.strategy.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results Grid */}
          <div className="mb-6">
            <h4 className="text-base font-semibold mb-2">Results</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(study.results).map(([key, value]) => (
                <div key={key} className="p-4 bg-secondary/50 rounded-lg text-center">
                  <div className="text-xl md:text-2xl font-bold text-primary">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize mt-1">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight */}
          <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20 mb-6">
            <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
            <span className="font-medium">{study.highlight}</span>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Timeline: <span className="font-semibold text-foreground">{study.timeline}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
