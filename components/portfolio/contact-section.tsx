"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    }

    try {
      setIsSubmitting(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const errorMessage = (data && (data.error || data.message)) || "Failed to send message."
        toast({
          variant: "destructive",
          title: "Error sending message",
          description: String(errorMessage),
        })
        return
      }
      toast({ title: "Message sent", description: "Thank you for your message. I will contact you soon." })
      form.reset()
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Network error",
        description: "Try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Let's talk!</h3>
              <p className="text-muted-foreground mb-8">
                I am always open to new opportunities and interesting projects. Contact me through the channels below.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>leonardo.ribeiro.pereira.04@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Monção, Viana do Castelo, Portugal</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/leo04per" target="_blank">
                    <Github className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/leonardo-pereira-535088347/" target="_blank">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:leonardo.ribeiro.pereira.04@gmail.com">
                    <Mail className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>Fill in the form below and I will contact you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                        placeholder="Your name"
                        name="name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                        placeholder="your@email.com"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                      placeholder="Subject of the message"
                      name="subject"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      rows={4}
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                      placeholder="Your message..."
                      name="message"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 