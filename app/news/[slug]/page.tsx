import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Home } from "lucide-react"
import { getWordPressPosts, stripHtml, WordPressPost } from "@/lib/wordpress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

async function getWordPressPostsSingle(): Promise<WordPressPost[]> {
  try {
    const response = await fetch("https://matchplugagency.com/blog/wp-json/wp/v2/posts?_embed&per_page=100", {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching WordPress posts:", error)
    return []
  }
}

export async function generateStaticParams() {
  const posts = await getWordPressPostsSingle()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = await getWordPressPostsSingle()
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: stripHtml(post.title.rendered),
    description: stripHtml(post.content.rendered).substring(0, 160),
  }
}

export default async function NewsPostPage({ params }: { params: { slug: string } }) {
  const posts = await getWordPressPostsSingle()
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]
  const cleanTitle = stripHtml(post.title.rendered)
  const formattedDate = format(new Date(post.date), "MMMM dd, yyyy")

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20 sm:pt-0\">
        {/* Navigation Buttons */}
        <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border\">
          <div className="max-w-5xl mx-auto px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              <Link href="/news">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Back to News
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full h-96 bg-muted">
            <Image
              src={featuredImage.source_url || "/placeholder.svg"}
              alt={featuredImage.alt_text || cleanTitle}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-5xl mx-auto px-4 lg:px-8 py-12">
          {/* Title and Metadata */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-4">
              {cleanTitle}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Footer with Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/news">
                <Button variant="outline" className="gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Back to News
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
