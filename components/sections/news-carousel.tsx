"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { stripHtml, getReadingTime, WordPressPost } from "@/lib/wordpress"
import { format } from "date-fns"

interface NewsCarouselProps {
  posts: Array<{
    id: number
    title: string
    excerpt?: string
    content?: string
    date: string
    slug?: string
    image?: string
    _embedded?: {
      "wp:featuredmedia": Array<{
        source_url: string
        alt_text: string
      }>
    }
  }>
}

export function NewsCarousel({ posts }: NewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(4)
  const [isMobile, setIsMobile] = useState(false)

  // Determine items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1)
        setIsMobile(true)
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2)
        setIsMobile(false)
      } else {
        setItemsPerSlide(4)
        setIsMobile(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, posts.length - itemsPerSlide)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const visiblePosts = posts.slice(currentIndex, currentIndex + itemsPerSlide)

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-linear-to-b from-background to-background/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">Latest News</h2>
          <p className="text-lg text-muted-foreground">Stay updated with the latest insights and trends</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* News Cards Grid */}
          <div
            className={`grid gap-6 transition-all duration-300 ${
              itemsPerSlide === 1
                ? "grid-cols-1"
                : itemsPerSlide === 2
                  ? "grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {visiblePosts.map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]
              const cleanTitle = stripHtml(post.title)
              const readingTime = post.content ? getReadingTime(post.content) : "5 min"

              return (
                <Link key={post.id} href={`/news/${post.slug}`}>
                  <div className="group h-full flex flex-col rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    {/* Image */}
                    {featuredImage && (
                      <div className="relative w-full h-48 overflow-hidden bg-muted">
                        <Image
                          src={featuredImage.source_url || "/placeholder.svg"}
                          alt={cleanTitle}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-4 md:p-5">
                      {/* Metadata */}
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3">
                        <span>{readingTime}</span>
                        <span>•</span>
                        <span>{format(new Date(post.date), "MMM dd, yyyy")}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base md:text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-3 flex-1">
                        {cleanTitle}
                      </h3>

                      {/* Read More */}
                      <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-1 transition-all">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          {posts.length > itemsPerSlide && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(posts.length / itemsPerSlide) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i * itemsPerSlide)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      Math.floor(currentIndex / itemsPerSlide) === i
                        ? "bg-primary w-6"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/news">
            <Button size="lg" className="rounded-full px-8">
              View All News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
