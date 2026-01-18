"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DecorativeCurves } from "@/components/decorative-curves"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { stripHtml, getReadingTime } from "@/lib/wordpress"

// Types for WordPress data
interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  date: string
  featured_media: number
  slug: string
  categories: number[] // Array of category IDs
  _embedded?: {
    "wp:featuredmedia": Array<{
      source_url: string
      alt_text: string
    }>
  }
}

interface WordPressCategory {
  id: number
  name: string
  slug: string
}

// Categories to exclude from the filter list (add category slugs here)
const EXCLUDED_CATEGORIES = ["case studies", "events"]

// Fetch categories from WordPress
async function getWordPressCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(
      "https://matchplugagency.com/blog/wp-json/wp/v2/categories?per_page=100",
      { 
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )
    if (!response.ok) return []
    const allCategories = await response.json()
    
    // Filter out excluded categories
    const filteredCategories = allCategories.filter(
      (cat: WordPressCategory) => !EXCLUDED_CATEGORIES.includes(cat.slug)
    )
    return filteredCategories || []
  } catch (error) {
    console.error("Error fetching WordPress categories:", error)
    return []
  }
}

// Transform WordPress post to local format for BlogCard
function transformWordPressPost(post: WordPressPost, categoryMap: Map<number, string>) {
  // Get the first category name, or default to "News"
  const categoryId = post.categories?.[0]
  const categoryName = categoryId ? categoryMap.get(categoryId) || "News" : "News"

  return {
    id: post.id,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    category: categoryName,
    readTime: getReadingTime(post.content.rendered),
    date: post.date,
    slug: post.slug,
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg",
    _embedded: post._embedded,
  }
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [blogPosts, setBlogPosts] = useState<ReturnType<typeof transformWordPressPost>[]>([])
  const [categories, setCategories] = useState<WordPressCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 6

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories first
        const wpCategories = await getWordPressCategories()
        setCategories(wpCategories)

        // Create a map for quick category lookup
        const categoryMap = new Map<number, string>()
        wpCategories.forEach((cat) => categoryMap.set(cat.id, cat.name))

        // Fetch posts
        const response = await fetch(
          "https://matchplugagency.com/blog/wp-json/wp/v2/posts?_embed&per_page=100",
          { cache: "no-store" }
        )

        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }

        const posts: WordPressPost[] = await response.json()
        const transformedPosts = posts.map((post) => transformWordPressPost(post, categoryMap))
        setBlogPosts(transformedPosts)
      } catch (error) {
        console.error("Error fetching WordPress data:", error)
        setBlogPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredPosts = selectedCategory ? blogPosts.filter((post) => post.category === selectedCategory) : blogPosts

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage)
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 lg:py-24 md:mt-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/blooper.png')" }}>
          <div className="absolute inset-0 bg-white/40"></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="max-w-2xl bg-white/35 inner-shadow-2xl rounded-4xl backdrop-blur-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 md:mb-8 text-foreground">News</h1>
                <p className="text-base md:text-lg font-normal text-muted-foreground md:w-5/7 mx-auto">
                  Educational content that ranks, engages, and drives conversions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters - improved mobile scrolling */}
        <section className="py-4 md:py-6">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center  gap-4 md:gap-8">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(null)}
                className={`text-sm md:text-xl font-normal rounded-full md:px-7 md:py-5 ${
                  selectedCategory === null
                    ? "bg-primary text-white hover:bg-primary hover:text-white"
                    : "bg-black/2 outline-[#2A38FD]/8 text-secondary-foreground hover:text-primary-foreground"
                }`}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category.name)}
                  className={`text-sm md:text-xl font-normal rounded-full md:px-7 md:py-5 ${
                    selectedCategory === category.name
                      ? "bg-primary text-white hover:bg-primary hover:text-white"
                      : "bg-black/2 outline-[#2A38FD]/8 text-secondary-foreground hover:text-primary-foreground"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts - Changed to 2-column grid for horizontal cards */}
        <section className="pb-8 md:pb-12 lg:pb-20 pt-4 lg:pt-6">
          <div className="container mx-auto px-4 lg:px-8">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading posts...</p>
              </div>
            ) : paginatedPosts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
                  {paginatedPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-12">
                    <Button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      variant="outline"
                    >
                      Previous
                    </Button>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                            currentPage === i + 1
                              ? "bg-primary text-white"
                              : "bg-muted text-muted-foreground hover:bg-secondary"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    <Button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      variant="outline"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found in this category.</p>
                <Button variant="outline" className="mt-4 bg-transparent" onClick={() => handleCategoryChange(null)}>
                  View all posts
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
