import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesSection } from "@/components/home/services-section"
import { ContactCTA } from "@/components/home/contact-cta"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <ServicesSection />
      <ContactCTA />
    </>
  )
}
