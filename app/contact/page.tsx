"use client"

import type React from "react"
import { useEffect, useState, useRef, type FormEvent } from "react"
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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
  const [redirectUrl, setRedirectUrl] = useState("")

  // Refs for GSAP animations
  const headerRef = useRef(null)
  const introTextRef = useRef(null)
  const contactInfoRef = useRef(null)
  const formRef = useRef(null)
  const socialRef = useRef(null)
  const mapRef = useRef(null)

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

  useEffect(() => {
    // Set the redirect URL after the component mounts
    if (typeof window !== "undefined") {
      setRedirectUrl(window.location.href)
    }

    // GSAP animations
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // Staggered animations for text elements
      gsap.from(".animate-text", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      })

      // Contact info animation
      gsap.from(".contact-item", {
        x: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.6,
      })

      // Form fields animation
      gsap.from(".form-field", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.8,
      })

      // Social icons animation
      gsap.from(".social-icon", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(2)",
        delay: 1.2,
      })

      // Map animation
      gsap.from(mapRef.current, {
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 1,
      })
    })

    return () => ctx.revert() // Cleanup
  }, [])

  return (
    <>
      <div ref={headerRef}>
        <PageHeader title="Contact Us" subtitle="Get in touch to discuss your project or inquire about our services" />
      </div>

      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lazone-vibrantOrange/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-lazone-vibrantOrange/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-8" ref={introTextRef}>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6 animate-text">Get In Touch</h2>
                <div className="w-32 h-1 bg-lazone-vibrantOrange mb-6 animate-text"></div>
                <p className="text-neutral-700 leading-relaxed animate-text">
                  We'd love to hear about your project. Contact us to schedule a consultation or to 
                  learn more about our services.
                </p>
              </div>

              <div className="space-y-6 pt-4" ref={contactInfoRef}>
                <div className="flex items-start space-x-4 contact-item hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="p-3 rounded-full bg-lazone-vibrantOrange/10">
                    <MapPin className="h-5 w-5 text-lazone-vibrantOrange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">LOCATION</h4>
                    <p className="text-neutral-700">
                      P.O Box: 62137, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 contact-item hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="p-3 rounded-full bg-lazone-vibrantOrange/10">
                    <Phone className="h-5 w-5 text-lazone-vibrantOrange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">PHONE</h4>
                    <p className="text-neutral-700">+971 4 553 3128</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 contact-item hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="p-3 rounded-full bg-lazone-vibrantOrange/10">
                    <Mail className="h-5 w-5 text-lazone-vibrantOrange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">EMAIL</h4>
                    <p className="text-neutral-700">contact@lazone.ae</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-sm font-medium text-neutral-800 mb-4">FOLLOW US</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/lazone.ae/"
                    className="p-3 border border-neutral-200 rounded-full hover:bg-lazone-vibrantOrange hover:border-lazone-vibrantOrange hover:text-white transition-all duration-300 social-icon"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 border border-neutral-200 rounded-full hover:bg-lazone-vibrantOrange hover:border-lazone-vibrantOrange hover:text-white transition-all duration-300 social-icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 border border-neutral-200 rounded-full hover:bg-lazone-vibrantOrange hover:border-lazone-vibrantOrange hover:text-white transition-all duration-300 social-icon"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div ref={formRef} className="relative">
              {/* Decorative accent */}
              <div className="absolute -top-10 -right-10 w-20 h-20 hidden lg:block">
                <div className="absolute w-full h-full border-t-2 border-r-2 border-lazone-vibrantOrange/50"></div>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-neutral-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_ACCESS_KEY} />
                  <input type="hidden" name="redirect" value={redirectUrl} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 form-field">
                      <label htmlFor="name" className="text-sm font-medium text-neutral-800">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="border-neutral-200 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30"
                        required
                      />
                    </div>
                    <div className="space-y-2 form-field">
                      <label htmlFor="email" className="text-sm font-medium text-neutral-800">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="border-neutral-200 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 form-field">
                    <label htmlFor="phone" className="text-sm font-medium text-neutral-800">
                      Phone (optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className="border-neutral-200 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30"
                    />
                  </div>

                  <div className="space-y-2 form-field">
                    <label htmlFor="subject" className="text-sm font-medium text-neutral-800">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="border-neutral-200 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30"
                      required
                    />
                  </div>

                  <div className="space-y-2 form-field">
                    <label htmlFor="message" className="text-sm font-medium text-neutral-800">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className="min-h-[150px] border-neutral-200 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className={cn(
                      "w-full bg-lazone-vibrantOrange hover:bg-lazone-vibrantOrange/90 text-white form-field transition-all duration-300 shadow-lg shadow-lazone-vibrantOrange/20 hover:shadow-lazone-vibrantOrange/30",
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
        </div>
      </section>

      <section className="h-[500px] relative" ref={mapRef}>
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d55.123456789012!3d25.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f123456789abc%3A0x1234567890abcdef!2sP.O%20Box%3A%2062137%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sus!4v1710856542996!5m2!1sen!2sus"
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

