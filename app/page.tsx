import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { HomeContactSection } from "@/components/sections/home-contact-section"
import { FAQSection } from "@/components/faq-section"
import { Trustbar } from "@/components/sections/trustbar"
import { NewsCarousel } from "@/components/sections/news-carousel"
import { getWordPressPosts } from "@/lib/wordpress"

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
  _embedded?: {
    "wp:featuredmedia": Array<{
      source_url: string
      alt_text: string
    }>
  }
}

export default async function HomePage() {
  // Fetch WordPress posts for carousel
  let wordPressPosts: WordPressPost[] = []
  try {
    const response = await fetch(
      "https://matchplugagency.com/blog/wp-json/wp/v2/posts?_embed&per_page=20&orderby=date&order=desc",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    )
    if (response.ok) {
      wordPressPosts = await response.json()
    }
  } catch (error) {
    console.error("Error fetching posts for carousel:", error)
  }

  // Transform posts for carousel
  const carouselPosts = wordPressPosts.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    date: post.date,
    slug: post.slug,
    _embedded: post._embedded,
  }))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Trustbar />
        <AboutSection />
        <ServicesSection />
        <PillarsSection />
        <TestimonialsSection />
        {carouselPosts.length > 0 && <NewsCarousel posts={carouselPosts} />}
        <HomeContactSection />
        <FAQSection />
        
      </main>
      <Footer />
    </div>
  )
}
