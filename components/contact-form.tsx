"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

const projectTypes = [
  "Residential - Full Home",
  "Residential - Single Room",
  "Commercial - Office",
  "Commercial - Retail",
  "Consultation Only",
  "Other",
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
    } catch {
      setError("Failed to send message. Please try again or contact us directly via WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form suppressHydrationWarning onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name <span className="text-accent">*</span>
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address <span className="text-accent">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="projectType" className="text-sm font-medium text-foreground">
            Project Type <span className="text-accent">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-sm font-medium text-foreground">
          Estimated Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Select your budget range</option>
          <option value="under-5">Under 5 Lakhs</option>
          <option value="5-10">5 - 10 Lakhs</option>
          <option value="10-25">10 - 25 Lakhs</option>
          <option value="25-50">25 - 50 Lakhs</option>
          <option value="above-50">Above 50 Lakhs</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Tell Us About Your Project <span className="text-accent">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Describe your space, your vision, and any specific requirements..."
          rows={5}
          className="bg-background resize-none"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 p-4 rounded-md bg-destructive/10 text-destructive">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to be contacted about your project.
      </p>
    </form>
  )
}