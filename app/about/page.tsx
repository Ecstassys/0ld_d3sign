import Image from "next/image"
import type { Metadata } from "next"
import { Heart, Eye, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Olive Design Lab",
  description: "Learn about Olive Design Lab, a premier interior design studio in Chennai. Meet our team and discover our design philosophy.",
}

const values = [
  {
    icon: Heart,
    title: "Passion for Design",
    description: "We pour our hearts into every project, treating each space as a canvas for creative expression and functional beauty.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "From the perfect shade of paint to the ideal furniture placement, we obsess over every detail to achieve perfection.",
  },
  {
    icon: Sparkles,
    title: "Client-Centered Approach",
    description: "Your vision is our blueprint. We listen, collaborate, and create spaces that truly reflect who you are.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">
                About Us
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
                Designing Dreams, Building Realities
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Olive Design Lab is a Chennai-based interior design studio dedicated 
                to creating spaces that inspire, comfort, and delight. With a passion 
                for thoughtful design and a commitment to excellence, we transform 
                houses into homes and spaces into experiences.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/studio.jpg"
                  alt="Olive Design Lab studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8 text-balance">
              A Journey of Creativity and Purpose
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-left">
              <p>
                Olive Design Lab was founded with a simple yet powerful vision: to create 
                spaces that enhance the way people live. What started as a small studio in 
                Chennai has grown into a trusted name in interior design, known for our 
                attention to detail and client-focused approach.
              </p>
              <p>
                Our journey has been shaped by the incredible clients who have trusted us 
                with their most personal spaces. Each project has taught us something new 
                and reinforced our belief that great design is about understanding people 
                as much as it is about aesthetics.
              </p>
              <p>
                Today, we continue to push boundaries while staying true to our roots. 
                We believe in sustainable practices, local craftsmanship, and designs 
                that stand the test of time. Whether it&apos;s a cozy apartment or an 
                expansive villa, we approach every project with the same dedication and 
                passion that has defined us from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">
              Our Values
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-lg bg-background"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-3/4 rounded-lg overflow-hidden max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder of Olive Design Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">
                Meet the Founder
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
                The Vision Behind Olive Design Lab
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 8 years of experience in interior design, our founder, <strong> Hindu Haridass </strong> 
                   established Olive Design Lab with a vision to bring world-class 
                  design sensibilities to homes and businesses in Chennai.
                </p>
                <p>
                  Trained in both traditional Indian design principles and contemporary 
                  international aesthetics, she brings a unique perspective that honors 
                  heritage while embracing modernity. Her approach is deeply personal, 
                  believing that every space should tell the story of the people who 
                  inhabit it.
                </p>
                <p>
                  When not designing, she can be found exploring local markets for 
                  unique finds, experimenting with new color combinations, or sharing 
                  design insights with the next generation of designers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl md:text-5xl font-semibold mb-2">50+</p>
              <p className="text-primary-foreground/80">Projects Completed</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-semibold mb-2">8+</p>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-semibold mb-2">40+</p>
              <p className="text-primary-foreground/80">Happy Clients</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-semibold mb-2">3</p>
              <p className="text-primary-foreground/80">Design Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
