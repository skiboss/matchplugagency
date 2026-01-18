// app/components/performance-monitor.tsx
'use client'

import { useEffect } from 'react'

/**
 * Performance Monitor Component
 * Tracks and reports Core Web Vitals metrics
 * Add this to your layout to enable real-time performance monitoring
 */

export function PerformanceMonitor() {
  useEffect(() => {
    // Import web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Track Cumulative Layout Shift (CLS)
      getCLS((metric) => {
        console.log('📊 Core Web Vitals - CLS:', metric.value)
        reportMetric(metric)
      })

      // Track First Input Delay (FID)
      getFID((metric) => {
        console.log('📊 Core Web Vitals - FID:', metric.value)
        reportMetric(metric)
      })

      // Track First Contentful Paint (FCP)
      getFCP((metric) => {
        console.log('📊 Core Web Vitals - FCP:', metric.value)
        reportMetric(metric)
      })

      // Track Largest Contentful Paint (LCP)
      getLCP((metric) => {
        console.log('📊 Core Web Vitals - LCP:', metric.value)
        reportMetric(metric)
      })

      // Track Time to First Byte (TTFB)
      getTTFB((metric) => {
        console.log('📊 Core Web Vitals - TTFB:', metric.value)
        reportMetric(metric)
      })
    })
  }, [])

  return null
}

/**
 * Report metric to analytics service
 * Integrates with Google Analytics, Sentry, or custom backend
 */
function reportMetric(metric: any) {
  // Option 1: Send to Google Analytics
  if ((window as any).gtag) {
    ;(window as any).gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    })
  }

  // Option 2: Send to custom backend
  if (navigator.sendBeacon) {
    const body = JSON.stringify(metric)
    navigator.sendBeacon('/api/metrics', body)
  }

  // Option 3: Log in development
  if (process.env.NODE_ENV === 'development') {
    console.table({
      Name: metric.name,
      Value: Math.round(metric.value),
      Rating: metric.rating,
      ID: metric.id,
    })
  }
}

export default PerformanceMonitor
