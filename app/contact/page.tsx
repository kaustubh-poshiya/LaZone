"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get in touch to discuss your project or inquire about our services" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Get In Touch</h2>
                <div className="w-20 h-px bg-neutral-300 mb-6"></div>
                <p className="text-neutral-700 leading-relaxed">
                  We'd love to hear about your project. Contact us to schedule a consultation or to learn more about our
                  services.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-neutral-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">LOCATION</h4>
                    <p className="text-neutral-700">
                      123 Design Avenue, Creative District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-neutral-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">PHONE</h4>
                    <p className="text-neutral-700">+1 (212) 555-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-neutral-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">EMAIL</h4>
                    <p className="text-neutral-700">info@lazone.design</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-sm font-medium text-neutral-800 mb-4">FOLLOW US</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-neutral-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-neutral-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-neutral-600" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-light text-neutral-800">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="border-neutral-200 focus:border-neutral-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-light text-neutral-800">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="border-neutral-200 focus:border-neutral-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-light text-neutral-800">
                    Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className="border-neutral-200 focus:border-neutral-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-light text-neutral-800">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="border-neutral-200 focus:border-neutral-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-light text-neutral-800">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="min-h-[150px] border-neutral-200 focus:border-neutral-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className={cn(
                    "w-full bg-neutral-900 hover:bg-neutral-800 text-white",
                    isSubmitting && "opacity-70 cursor-not-allowed",
                  )}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872426698!3d40.74076987138443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1710856542996!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LAZONE Studio Location"
          className="absolute inset-0"
        ></iframe>
      </section>
    </>
  )
}

