import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Clock } from "lucide-react"
import { stripHtml, getReadingTime } from "@/lib/wordpress"

interface BlogCardProps {
  post: {
    id: string | number
    title: string
    excerpt?: string
    content?: string
    category?: string
    readTime?: string
    date: string
    image?: string
    slug?: string
    featured_media?: number
    _embedded?: {
      "wp:featuredmedia": Array<{
        source_url: string
        alt_text: string
      }>
    }
  }
}

export function BlogCard({ post }: BlogCardProps) {
  // Handle both WordPress posts and legacy post format
  const isWordPressPost = typeof post.id === "number" && post.slug
  const slug = isWordPressPost ? post.slug : post.id
  const title = typeof post.title === "string" ? post.title : stripHtml(post.title as any)
  const cleanTitle = stripHtml(title)
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]
  const image = featuredImage?.source_url || post.image || "/placeholder.svg"
  const readTime = post.readTime || (post.content ? getReadingTime(post.content as string) : "5 min")
  const formattedDate = format(new Date(post.date), "MMMM do, yyyy")

  return (
    <Link href={`/news/${slug}`} className="group block">
      <article className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
        {/* Image - Left side */}
        <div className="relative w-full sm:w-48 md:w-58 h-40 sm:h-36 md:h-50 shrink-0 rounded-lg md:rounded-none overflow-hidden">
          <Image
            src={image}
            alt={cleanTitle}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 md:rounded-tl-2xl md:rounded-tr-2xl"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 192px, 232px"
          />
        </div>

        {/* Content - Right side */}
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <div className="flex uppercase items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 text-sm font-medium text-[#5B606B]">
              {/* <Clock className="h-4 w-4" /> */}
              <span>{readTime}</span>
            </div>
            <span className="text-muted-foreground">•</span>
            {post.category && <span className="text-sm font-medium text-[#5B606B]">{post.category}</span>}
          </div>

          <h3 className="font-normal text-xl mb-15 md:mb-18 line-clamp-2 group-hover:text-primary transition-colors">
            {cleanTitle}
          </h3>

          {/* <p className="text-sm text-muted-foreground line-clamp-2 mb-3 hidden sm:block">{post.excerpt}</p> */}

          <p className="text-sm font-normal text-muted-foreground">{formattedDate}</p>
        </div>
      </article>
    </Link>
  )
}
