import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
  >
    {/* Make sure the path matches where you save your video */}
    <source src="/videos/hero-interior.mp4" type="video/mp4" />
    
    {/* Fallback text just in case the video fails to load */}
    Your browser does not support the video tag.
  </video>
  
  {/* This is your dark tint overlay - keep this so text stays readable! */}
  <div className="absolute inset-0 bg-foreground/40" />
</div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">
            Interior Design Studio
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-tight mb-6 text-balance">
            Designing Spaces That Tell Your Story
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            At Olive Design Lab, we transform ordinary spaces into extraordinary 
            experiences. Based in Chennai, we blend timeless elegance with modern functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/projects">
                View Our Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
