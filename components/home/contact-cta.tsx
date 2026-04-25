import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-accent-foreground mb-6 text-balance">
            Ready to Transform Your Space?
          </h2>
          <p className="text-accent-foreground/90 text-lg leading-relaxed mb-8">
            Let&apos;s collaborate to create a space that&apos;s uniquely yours. Schedule a 
            consultation to discuss your project and discover how we can bring your 
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
            >
              <Link href="/projects">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
