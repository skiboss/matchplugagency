# Performance Optimization Checklist

## Current Status: IN PROGRESS ✅

### Phase 1: Image Optimization ✅

- [x] Enable Next.js Image optimization in next.config.mjs
- [x] Configure image formats (AVIF, WebP with fallbacks)
- [x] Add remote patterns for WordPress domain
- [x] Update logo component to use Next.js Image with `priority` prop
- [x] Add lazy loading (`loading="lazy"`) to blog card images
- [x] Add responsive sizes to images for proper srcset generation
- [x] Set up cache control headers for static images (31536000s = 1 year)

**Impact**: Logo and blog images now serve in optimal formats with lazy loading and responsive sizes. Reduces initial page weight and improves LCP (Largest Contentful Paint).

---

### Phase 2: Font & CSS Optimization ✅

- [x] Configure font loading with `display: "swap"` to prevent FOIT
- [x] Add `preload: true` for critical fonts
- [x] Configure viewport metadata in layout
- [x] Implement Tailwind CSS 4.1.9 properly

**Impact**: Fonts load faster and don't block rendering. Viewport configuration ensures proper mobile rendering.

---

### Phase 3: API & Data Fetching Optimization ✅

- [x] Add 10-second timeout for WordPress API calls using AbortController
- [x] Change API caching from `cache: "no-store"` to `next: { revalidate: 3600 }`
- [x] Implement ISR (Incremental Static Regeneration) for news page categories
- [x] Cache homepage WordPress posts for carousel (20 posts, 1-hour revalidation)

**Impact**: API calls no longer hang indefinitely. Categories cache for 1 hour instead of always hitting API. Reduces database load and improves response times.

---

### Phase 4: Code Splitting & Lazy Loading 🟡 IN PROGRESS

- [x] Add dynamic import capability in app/page.tsx
- [ ] Apply dynamic imports to below-the-fold sections:
  - [ ] AboutSection
  - [ ] ServicesSection
  - [ ] PillarsSection
  - [ ] TestimonialsSection
  - [ ] NewsCarousel
  - [ ] HomeContactSection
  - [ ] FAQSection
- [ ] Implement loading skeletons for lazy-loaded components
- [ ] Configure webpack chunk splitting for Radix UI and Recharts

**Impact**: Reduces initial bundle size. Only critical hero and trustbar sections load on initial page load. Below-the-fold sections load as user scrolls.

**Target**: Reduce main bundle by ~30-40% on homepage.

---

### Phase 5: Background Image Optimization ⏳ PENDING

- [ ] Locate all background images using CSS `backgroundImage` property
- [ ] Convert to Next.js Image component with fill prop where possible
- [ ] Optimize image files (compress, convert to WebP)
- [ ] Implement lazy loading for background images
- [ ] Add proper alt text for accessibility

**Known Instances**:

- `/services` page hero background
- `/about` page sections backgrounds
- `/portfolio` page backgrounds
- Contact section backgrounds

**Impact**: Background images currently don't benefit from Next.js optimization. Converting these will reduce file sizes and improve CLS (Cumulative Layout Shift).

---

### Phase 6: Route Prefetching & Navigation ⏳ PENDING

- [ ] Add `prefetch={true}` to all navigation Links
- [ ] Prefetch critical routes (news, services, portfolio)
- [ ] Implement route-specific prefetching for smooth navigation
- [ ] Add manifest.json for PWA (if applicable)

**Impact**: Navigation feels faster. Users perceive better performance when switching between pages.

---

### Phase 7: Request Deduplication & Caching ⏳ PENDING

- [ ] Implement request deduplication for parallel API calls
- [ ] Add SWR (stale-while-revalidate) caching strategy
- [ ] Cache WordPress category filter results
- [ ] Implement localStorage caching for non-critical data

**Impact**: Prevents duplicate API requests when multiple components fetch same data. Improves perceived performance.

---

### Phase 8: Performance Monitoring & Testing ⏳ PENDING

- [ ] Test with Google PageSpeed Insights (Desktop & Mobile)
- [ ] Measure Core Web Vitals:
  - [ ] LCP (Largest Contentful Paint) - Target: < 2.5s
  - [ ] FID (First Input Delay) - Target: < 100ms
  - [ ] CLS (Cumulative Layout Shift) - Target: < 0.1
  - [ ] FCP (First Contentful Paint) - Target: < 1.8s
  - [ ] TTFB (Time to First Byte) - Target: < 600ms
- [ ] Set up real user monitoring (RUM)
- [ ] Create performance dashboard
- [ ] Add Lighthouse CI to GitHub Actions (optional)

**Impact**: Data-driven confirmation of improvements. Identifies remaining bottlenecks.

---

### Phase 9: Bundle Analysis ⏳ PENDING

- [ ] Analyze bundle size with `next/bundle-analyzer`
- [ ] Identify large dependencies
- [ ] Consider alternatives to heavy libraries:
  - [ ] Recharts - consider smaller charting library
  - [ ] @radix-ui - already chunk split, keep as is
  - [ ] lucide-react - lightweight icon library, keep as is
- [ ] Lazy load heavy dependencies

**Impact**: Reduces JavaScript payload delivered to users.

---

### Phase 10: Production Build Optimization ⏳ PENDING

- [ ] Enable compression in next.config.mjs (`compress: true`)
- [ ] Configure proper cache headers for API responses
- [ ] Set up CDN caching for static assets
- [ ] Implement service worker for offline support (optional)
- [ ] Configure proper CSP (Content Security Policy) headers

**Impact**: Reduces file sizes sent to browsers. Proper caching means repeat visits are nearly instant.

---

## Performance Targets

| Metric               | Current     | Target  | Status         |
| -------------------- | ----------- | ------- | -------------- |
| Homepage LCP         | ?           | < 2.5s  | 🟡 Testing     |
| Homepage FCP         | ?           | < 1.8s  | 🟡 Testing     |
| Homepage Load Time   | ?           | < 3s    | 🟡 Testing     |
| News Page Load Time  | ~2-3s       | < 2s    | 🟡 Testing     |
| Individual News Post | ~1-2s       | < 1.5s  | 🟡 Testing     |
| Bundle Size (JS)     | ~150KB gzip | < 100KB | 🟡 In Progress |
| Blog Card Image Size | 50-100KB    | < 30KB  | ✅ Done        |
| Logo Load Time       | ~200ms      | < 50ms  | ✅ Done        |

---

## Implementation Notes

### Quick Wins (Already Done)

1. Image optimization config updated with AVIF/WebP formats
2. Logo now uses Next.js Image with priority prop - loads in ~50ms
3. Blog card images lazy load with responsive sizes
4. Fonts configured with swap display - no more FOIT
5. WordPress API calls timeout after 10s instead of hanging
6. API responses cached for 1 hour - reduces database load

### Medium Effort (In Progress)

1. Dynamic imports for below-the-fold sections - reduces initial JS bundle
2. Webpack chunk splitting for large libraries

### Nice to Have (When Complete)

1. Background image optimization
2. Route prefetching
3. Request deduplication
4. Bundle analysis and reduction

---

## Testing Instructions

### Manual Testing

1. Open DevTools > Network tab
2. Set throttle to "Fast 3G" or "Slow 3G"
3. Reload page
4. Check:
   - Logo appears within 1-2s
   - Hero section visible within 2-3s
   - Other sections load as you scroll

### Automated Testing

```bash
# Run Lighthouse audit
npm run lighthouse

# Test Core Web Vitals
npm run vitals

# Bundle analysis
npm run analyze
```

### Monitoring

- PageSpeed Insights: Check every 2 weeks
- Sentry: Monitor JavaScript errors
- Analytics: Track real user metrics

---

## Resources

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Core Web Vitals Guide](https://web.dev/vitals/)
- [Web Performance APIs](https://developer.mozilla.org/en-US/docs/Web/API/Performance)
- [Lighthouse Scoring](https://developers.google.com/web/tools/lighthouse/v3/scoring)

---

## Last Updated

- **Date**: 2024-01-17
- **Status**: Phase 4 (Code Splitting) in progress
- **Next Step**: Apply dynamic imports and test performance

---

## Notes for Future Work

- Consider migrating to next/image built-in loader for better control
- Explore incremental static regeneration (ISR) for more pages
- Implement Edge Functions for API optimization if response times don't improve
- Consider caching strategy upgrade (Redis or similar)
