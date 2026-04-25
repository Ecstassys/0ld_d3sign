import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/lib/projects" 

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound(); 

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        <div className="mb-12">
          <p className="text-accent font-medium tracking-widest uppercase mb-2 text-sm">
            {project.category} Design
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            {project.title}
          </h1>
        </div>

        <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-muted mb-8">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
            <p>{project.description}</p>
          </div>
          
          <div className="bg-card p-6 rounded-xl border">
            <h3 className="font-serif text-xl font-medium mb-4 text-foreground">Project Details</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-muted-foreground mb-1">Client</span>
                <span className="font-medium text-foreground">{project.client}</span>
              </li>
              <li>
                <span className="block text-muted-foreground mb-1">Location</span>
                <span className="font-medium text-foreground">{project.location}</span>
              </li>
              <li>
                <span className="block text-muted-foreground mb-1">Budget</span>
                <span className="font-medium text-foreground">{project.budget}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  )
}