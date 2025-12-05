import { X, Check } from "lucide-react"

const comparison = {
  others: [
    "Run 'safe' campaigns that never get banned (and never scale)",
    "Treat every geo the same",
    "Optimize for clicks and impressions instead of FTDs",
    "Disappear when ad accounts get suspended",
    "Charge for activity, not results",
  ],
  matchplug: [
    "Go aggressive - We push campaigns to the edge of what's possible",
    "Creative Diversity - We provide the right creatives required to convert",
    "Stay live - Proprietary technology keeps campaigns running 98% of the time",
    "Geo specialization - Every campaign is localized for maximum resonance",
    "Measure what matters - FTDs and market share, period",
  ],
}

const stats = [
  { value: "79+", label: "Geos with proven success" },
  { value: "12,000+", label: "FTDs delivered monthly" },
  { value: "98%", label: "Campaign uptime" },
  { value: "90-day", label: "Market share guarantee" },
]

export function WhyChooseSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Matchplug</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">The Matchplug Difference</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* What Others Do */}
          <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">What Most Agencies Do</h3>
            <ul className="space-y-4">
              {comparison.others.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What Matchplug Does */}
          <div className="p-6 rounded-2xl bg-primary/5 border-2 border-primary">
            <h3 className="text-xl font-semibold mb-6 text-primary">What Matchplug Does</h3>
            <ul className="space-y-4">
              {comparison.matchplug.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-secondary/30 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
