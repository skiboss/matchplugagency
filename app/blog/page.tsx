import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { getWordPressPosts, stripHtml, truncateText } from "@/lib/wordpress"

export const metadata = {
  title: "Blog",
  description: "Read our latest articles and insights",
}

export default async function BlogPage() {
  const posts = await getWordPressPosts()

  return (
    <main className="min-h-screen bg-background pt-20 pb-12 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">Latest articles and insights from our team</p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {posts.map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]
              const excerpt = post.excerpt.rendered
              const cleanExcerpt = stripHtml(excerpt)

              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="grid md:grid-cols-3 gap-0 h-full">
                      {/* Featured Image */}
                      {featuredImage && (
                        <div className="md:col-span-1 relative bg-muted min-h-64 md:min-h-auto">
                          <Image
                            src={featuredImage.source_url || "/placeholder.svg"}
                            alt={featuredImage.alt_text || post.title.rendered}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className={`md:col-span-${featuredImage ? "2" : "3"} p-6 flex flex-col justify-between`}>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                            {stripHtml(post.title.rendered)}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                            {truncateText(cleanExcerpt)}
                          </p>
                        </div>

                        {/* Metadata */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <time className="text-sm text-muted-foreground">
                            {format(new Date(post.date), "MMM dd, yyyy")}
                          </time>
                          <span className="text-sm font-medium text-primary">Read More →</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
