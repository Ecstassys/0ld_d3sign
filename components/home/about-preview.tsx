import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
  src="/images/founder_0.png"
  alt="Hindu Haridass"
  fill
  className="object-cover"
  priority // <--- Add this! It's the same as loading="eager"
/>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mt-8">
                <Image
                  src="/images/about-2.jpg"
                  alt="Design materials and samples"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              Crafting Spaces with Passion & Purpose
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Olive Design Lab was born from a deep love for creating spaces that 
                feel both beautiful and deeply personal. Founded in Chennai, we believe 
                that great design should enhance the way you live, work, and dream.
              </p>
              <p>
                Our approach combines timeless aesthetics with thoughtful functionality, 
                ensuring every project reflects the unique personality and lifestyle of 
                our clients. From cozy apartments to expansive villas, we bring the same 
                dedication and attention to detail to every space we touch.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">50+</p>
                <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">8+</p>
                <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-primary">100%</p>
                <p className="text-muted-foreground text-sm mt-1">Client Satisfaction</p>
              </div>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
