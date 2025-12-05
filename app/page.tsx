import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { HomeContactSection } from "@/components/sections/home-contact-section"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PillarsSection />
        <TestimonialsSection />
        <HomeContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
