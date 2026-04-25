import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { projects } from "@/lib/projects" // BOOM! Importing from the single source of truth

export const metadata: Metadata = {
  title: "Projects | Olive Designlab",
  description: "Explore our portfolio of interior design projects in Chennai. From residential homes to commercial spaces, see how we transform spaces.",
}

const categories = ["All", "Residential", "Commercial"]

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">
              Our Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Spaces We&apos;ve Transformed
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each project tells a unique story. Explore our collection of residential 
              and commercial spaces that showcase our commitment to thoughtful, 
              beautiful design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter Tabs */}
          <div className="flex gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={`group ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <article className="overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-lg transition-shadow">
                  {/* Added w-full here to fix the height 0 warning */}
                  <div className={`relative w-full overflow-hidden ${index === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-accent text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {project.location}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}