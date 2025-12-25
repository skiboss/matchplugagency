"use client"

export function OurLegacySection() {
  const stats = [
    { value: "79+", label: "Geos with proven campaign success" },
    { value: "12,000+", label: "FTDs delivered monthly across all clients" },
    { value: "98%", label: "Campaign uptime vs. 40% industry average" },
    { value: "400-800%", label: "Average ROAS across verticals" },
    { value: "90", label: "Day market share guarantee" },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">Our Legacy</h2>
          </div>
          <div className="flex items-center">
            <p className="text-base md:text-2xl font-light text-muted-foreground">
              Deliver measurable market share through aggressive, compliant FTD generation in regulated and grey markets
              worldwide.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm md:text-2xl font-medium uppercase tracking-wider text-muted-foreground">
            THE MATCHPLUG DIFFERENCE IN NUMBERS:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 bg-muted/50 px-4 py-6 rounded-2xl">
              <div className="text-4xl md:text-5xl lg:text-5xl font-medium text-foreground mb-6">{stat.value}</div>
              <div className="text-sm md:text-lg font-light text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}