/**
 * Performance Monitoring & Utilities
 * Tracks Core Web Vitals and provides performance metrics
 */

export interface PerformanceMetrics {
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  fcp?: number // First Contentful Paint
  ttfb?: number // Time to First Byte
}

/**
 * Report Web Vitals to analytics service
 * Uses next/web-vitals if available
 */
export function reportWebVitals(metric: {
  name: string
  value: number
  id: string
  label: string
  delta?: number
  rating?: string
}) {
  // Send to analytics service
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", metric.name, {
      value: Math.round(metric.value),
      event_category:
        metric.label === "web-vital" ? "Web Vitals" : "Next.js-hydration",
      event_label: metric.id,
      non_interaction: true,
    })
  }

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`${metric.name}: ${Math.round(metric.value)}ms`)
  }
}

/**
 * Preload critical routes for faster navigation
 */
export function prefetchRoute(href: string) {
  if (typeof window !== "undefined") {
    const link = document.createElement("link")
    link.rel = "prefetch"
    link.href = href
    link.as = "fetch"
    document.head.appendChild(link)
  }
}

/**
 * Image optimization hints
 */
export const imageOptimizationConfig = {
  // Priority images (load immediately)
  priority: ["mp_logo.png", "hero.png", "hero_mobile.png"],

  // Critical images above the fold
  aboveTheFold: [
    "mp_logo.png",
    "hero.png",
    "hero_mobile.png",
    "trustbar_logos",
  ],

  // Lazy load below the fold
  lazyLoad: true,

  // Responsive sizes for different breakpoints
  responsiveSizes: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
}

/**
 * API optimization hints
 */
export const apiOptimizationConfig = {
  // Cache durations in seconds
  cacheDuration: {
    posts: 3600, // 1 hour for blog posts
    categories: 3600, // 1 hour for categories
    pages: 86400, // 1 day for pages
  },

  // Request timeout in milliseconds
  requestTimeout: 10000,

  // Maximum retries for failed requests
  maxRetries: 2,

  // Request debounce delay in milliseconds
  debounceDelay: 500,
}

/**
 * Component lazy loading configuration
 */
export const lazyLoadedComponents = {
  // Components that should be lazy loaded
  sections: [
    "AboutSection",
    "ServicesSection",
    "PillarsSection",
    "TestimonialsSection",
    "NewsCarousel",
    "HomeContactSection",
    "FAQSection",
  ],

  // Components with heavy dependencies
  heavy: [
    "CaseStudyModal",
    "ContactForm",
    "TestimonialsSection",
  ],
}

/**
 * CSS and JavaScript bundle hints
 */
export const bundleOptimization = {
  // Libraries to chunk separately for better caching
  vendorChunks: [
    "@radix-ui",
    "recharts",
    "lucide-react",
  ],

  // CSS to inline (critical path CSS)
  inlineCss: ["globals.css"],

  // JavaScript to defer loading
  deferScripts: [],
}
