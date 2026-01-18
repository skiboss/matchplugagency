import Image from "next/image"

interface OptimizedBackgroundProps {
  src: string
  alt: string
  children?: React.ReactNode
  className?: string
  priority?: boolean
}

/**
 * Optimized background image component using Next.js Image
 * Replaces inline style={{ backgroundImage: "url(...)" }} 
 * with properly optimized Image component
 * 
 * Usage:
 * <OptimizedBackground src="/hero.png" alt="Hero background">
 *   <div>Content here</div>
 * </OptimizedBackground>
 */
export function OptimizedBackground({
  src,
  alt,
  children,
  className = "",
  priority = false,
}: OptimizedBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        quality={85}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
