/**
 * WordPress API utilities for fetching blog posts
 * Connects to: https://matchplugagency.com/blog/wp-json/wp/v2/posts
 */

export interface WordPressPost {
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
  _embedded?: {
    "wp:featuredmedia": Array<{
      source_url: string
      alt_text: string
    }>
  }
}

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://matchplugagency.com/blog"
const REVALIDATION_TIME = 3600 // 1 hour in seconds

/**
 * Fetch all posts from WordPress with automatic revalidation
 * Uses ISR (Incremental Static Regeneration) to update content periodically
 */
export async function getWordPressPosts(): Promise<WordPressPost[]> {
  try {
    const url = `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&per_page=100`

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch(url, {
      // ISR: Revalidate every 1 hour (3600 seconds)
      next: { revalidate: REVALIDATION_TIME },
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status} ${response.statusText}`)
      return []
    }

    const posts: WordPressPost[] = await response.json()
    return posts
  } catch (error) {
    console.error("[WordPress] Error fetching posts:", error)
    return []
  }
}

/**
 * Fetch a single post by slug
 */
export async function getWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const posts = await getWordPressPosts()
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    console.error(`[WordPress] Error fetching post ${slug}:`, error)
    return null
  }
}

/**
 * Strip HTML tags from text
 * Safe for server-side use
 */
export function stripHtml(html: string): string {
  if (!html) return ""
  return html
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&nbsp;/g, " ") // Convert non-breaking spaces
    .replace(/&amp;/g, "&") // Decode HTML entities
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim()
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, limit = 150): string {
  if (!text || text.length <= limit) return text || ""
  return text.substring(0, limit) + "..."
}

/**
 * Get estimated reading time based on word count
 * Assumes ~200 words per minute
 */
export function getReadingTime(content: string): string {
  if (!content) return "1 min"
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min`
}
