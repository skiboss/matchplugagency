import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"

interface BlogCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    category: string
    readTime: string
    date: string
    image: string
  }
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/news/${post.id}`} className="group block">
      <article className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
        {/* Image - Left side */}
        <div className="relative w-full sm:w-48 md:w-58 h-40 sm:h-36 md:h-54 shrink-0 rounded-lg md:rounded-none overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 md:rounded-tl-2xl md:rounded-tr-2xl"
          />
        </div>

        {/* Content - Right side */}
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <div className="flex uppercase items-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 text-sm font-medium text-[#5B606B]">
              {/* <Clock className="h-4 w-4" /> */}
              <span>{post.readTime} read</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm font-medium text-[#5B606B]">{post.category}</span>
          </div>

          <h3 className="font-normal text-xl mb-23 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* <p className="text-sm text-muted-foreground line-clamp-2 mb-3 hidden sm:block">{post.excerpt}</p> */}

          <p className="text-sm font-normal text-muted-foreground">{post.date}</p>
        </div>
      </article>
    </Link>
  )
}
