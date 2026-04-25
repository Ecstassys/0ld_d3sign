import { Home, Building2, Palette, Lightbulb, Sofa, Ruler } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Transform your home into a sanctuary that reflects your personal style and enhances daily living.",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Create inspiring workplaces and retail environments that elevate your brand and boost productivity.",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert guidance on color palettes that set the perfect mood and complement your space.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Strategic lighting solutions that enhance ambiance and highlight your space&apos;s best features.",
  },
  {
    icon: Sofa,
    title: "Furniture Selection",
    description: "Curated furniture pieces that balance comfort, aesthetics, and functionality for your lifestyle.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Optimize your layout for flow, functionality, and visual harmony in any room.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase mb-3 text-sm">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From concept to completion, we offer comprehensive interior design services 
            tailored to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
