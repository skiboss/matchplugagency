"use client"

import { X, TrendingUp, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

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
          <div className="flex items-start justify-between mb-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {study.industry}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold">{study.client}</h2>
              <p className="text-muted-foreground mt-1">{study.category}</p>
            </div>
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

          {/* Challenge */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">The Challenge</h3>
            <p className="text-muted-foreground">{study.challenge}</p>
          </div>

          {/* Strategy */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Our Strategy</h3>
            <ul className="space-y-2">
              {study.strategy.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results Grid */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(study.results).map(([key, value]) => (
                <div key={key} className="p-4 bg-secondary/50 rounded-lg text-center">
                  <div className="text-xl md:text-2xl font-bold text-primary">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize mt-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
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
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2">
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
