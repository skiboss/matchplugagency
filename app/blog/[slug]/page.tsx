import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { getWordPressPosts, stripHtml, WordPressPost } from "@/lib/wordpress"

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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = await getWordPressPostsSingle()
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      {featuredImage && (
        <div className="relative w-full h-96 bg-muted">
          <Image
            src={featuredImage.source_url || "/placeholder.svg"}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title and Metadata */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">{stripHtml(post.title.rendered)}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.date}>{format(new Date(post.date), "MMMM dd, yyyy")}</time>
          </div>
        </div>

        {/* Article Body */}
        <div
          className="prose prose-sm dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </article>
    </main>
  )
}
