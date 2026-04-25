import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects" // Importing your database!

export function FeaturedProjects() {
  // This automatically grabs just the first 3 projects from your list
  const featured = projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">
              Featured Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Curated Spaces
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-block pb-1 border-b-2 border-primary text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
          >
            View Full Portfolio
          </Link>
        </div>

        {/* Dynamic Grid mapped to your database */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`} // Automatically generates correct URLs
              className="group"
            >
              {/* Added w-full right here! */}
              {/* Added w-full so aspect ratio can actually calculate a height */}
<div 
  className="relative w-full rounded-xl overflow-hidden mb-4 bg-muted" 
  style={{ aspectRatio: '4/5', minHeight: '400px' }} // Manual CSS Override
>
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
    sizes="(max-width: 768px) 100vw, 33vw"
    priority={project.id <= 2} // Preloads the first two images
  />
</div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}