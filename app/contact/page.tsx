import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Olive Design Lab",
  description: "Get in touch with Olive Design Lab. Schedule a consultation for your interior design project in Chennai.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "reacholivedesignlab@gmail.com",
    href: "mailto:reacholivedesignlab@gmail.com",
  },
  // {
  //   icon: Phone,      
  //   title: "Phone",
  //   value: "+91 0000000",
  //   href: "tel:+910000000",
  // },
  {
    icon: MapPin,
    title: "Location",
    value: "Anna Nagar, Chennai, Tamil Nadu",
    href: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 10:00 AM - 7:00 PM",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Let&apos;s Create Something Beautiful Together
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready to transform your space? We&apos;d love to hear about your project. 
              Fill out the form below or reach out directly, and we&apos;ll get back to 
              you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video rounded-lg bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Villivakam, Chennai</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your project and we&apos;ll get back to you with ideas and a quote.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
