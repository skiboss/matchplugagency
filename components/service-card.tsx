import type { LucideIcon } from "lucide-react"
import { CheckCircle } from "lucide-react"

interface ServiceCardProps {
  service: {
    id: string
    icon: LucideIcon
    title: string
    subtitle: string
    roas: string
    markets: string
    description: string
    features: string[]
    bestFor: string
  }
  isReversed?: boolean
}

export function ServiceCard({ service, isReversed = false }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div
      id={service.id}
      className={`grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={isReversed ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-muted-foreground">{service.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            {service.roas}
          </span>
          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full border border-border">
            {service.markets}
          </span>
        </div>

        <p className="text-muted-foreground mb-6">{service.description}</p>

        <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
          <p className="text-sm">
            <span className="font-semibold">Best For:</span> {service.bestFor}
          </p>
        </div>
      </div>

      <div className={isReversed ? "lg:order-1" : ""}>
        <h3 className="text-lg font-semibold mb-4">What You Get:</h3>
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
