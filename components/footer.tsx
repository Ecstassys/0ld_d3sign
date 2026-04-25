import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-serif text-lg font-semibold">O</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Olive Design Lab</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Creating thoughtful, elegant spaces that harmonize beauty with functionality. 
              Based in Chennai, we bring your interior design dreams to life.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hindu-haridass-843494124/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@olivedesignlab.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5 shrink-0" />
                <span>hello@olivedesignlab.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5 shrink-0" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Anna Nagar, Chennai<br />Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Olive Design Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
