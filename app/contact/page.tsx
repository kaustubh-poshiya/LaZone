"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { MapPin, Phone, Mail, User, AtSign, MessageSquare, Check, AlertCircle, Instagram, Linkedin, Facebook } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Define form validation schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("")


  // Refs for GSAP animations
  const headerRef = useRef(null)
  const introTextRef = useRef(null)
  const contactInfoRef = useRef(null)
  const formRef = useRef(null)
  const mapRef = useRef(null)

  // Initialize react-hook-form with zod validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const { formState } = form
  const { isSubmitting } = formState

  // Form submission handler
  const onSubmit = async (data: ContactFormValues) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", data)
    setIsSubmitted(true)
    form.reset()

    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
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
        autoAlpha: 0,
        clearProps: "all"
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
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed animate-text">
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
                    <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1">LOCATION</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      P.O Box: 62137, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 contact-item hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="p-3 rounded-full bg-lazone-vibrantOrange/10">
                    <Phone className="h-5 w-5 text-lazone-vibrantOrange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1">PHONE</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">+971 4 553 3128</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 contact-item hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="p-3 rounded-full bg-lazone-vibrantOrange/10">
                    <Mail className="h-5 w-5 text-lazone-vibrantOrange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1">EMAIL</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">contact@lazone.ae</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4">FOLLOW US</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/lazone.ae/"
                    className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-full transition-all duration-300 social-icon hover:scale-110"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-full transition-all duration-300 social-icon hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-full transition-all duration-300 social-icon hover:scale-110"
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

              <div className="bg-white dark:bg-neutral-800 p-6 md:p-8 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-700 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-lazone-vibrantOrange/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-lazone-vibrantOrange/5 rounded-full blur-3xl"></div>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200">Message Sent!</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_ACCESS_KEY} />
                      <input type="hidden" name="redirect" value={redirectUrl} />
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem className="space-y-2 form-field">
                              <FormLabel className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                                Name
                              </FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input
                                    placeholder="Your name"
                                    className="border-neutral-200 dark:border-neutral-700 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30 pl-10 transition-all duration-200"
                                    {...field}
                                  />
                                  <User className="h-4 w-4 text-neutral-400 dark:text-neutral-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                </div>
                              </FormControl>
                              <FormMessage className="text-xs font-medium text-red-500 flex items-center gap-1">
                                <span></span>
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-2 form-field">
                              <FormLabel className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                                Email
                              </FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input
                                    type="email"
                                    placeholder="Your email address"
                                    className="border-neutral-200 dark:border-neutral-700 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30 pl-10 transition-all duration-200"
                                    {...field}
                                  />
                                  <AtSign className="h-4 w-4 text-neutral-400 dark:text-neutral-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                </div>
                              </FormControl>
                              <FormMessage className="text-xs font-medium text-red-500 flex items-center gap-1">
                                <span></span>
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="space-y-2 form-field">
                            <FormLabel className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                              Phone (optional)
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type="tel"
                                  placeholder="Your phone number"
                                  className="border-neutral-200 dark:border-neutral-700 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30 pl-10 transition-all duration-200"
                                  {...field}
                                />
                                <Phone className="h-4 w-4 text-neutral-400 dark:text-neutral-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs font-medium text-red-500 flex items-center gap-1">
                              <span></span>
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem className="space-y-2 form-field">
                            <FormLabel className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                              Subject
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  placeholder="What is your message about?"
                                  className="border-neutral-200 dark:border-neutral-700 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30 pl-10 transition-all duration-200"
                                  {...field}
                                />
                                <MessageSquare className="h-4 w-4 text-neutral-400 dark:text-neutral-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs font-medium text-red-500 flex items-center gap-1">
                              <span></span>
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="space-y-2 form-field">
                            <FormLabel className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                              Message
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Textarea
                                  placeholder="Tell us about your project or inquiry"
                                  className="min-h-[150px] border-neutral-200 dark:border-neutral-700 focus:border-lazone-vibrantOrange focus:ring-1 focus:ring-lazone-vibrantOrange/30 pl-10 pt-3 transition-all duration-200"
                                  {...field}
                                />
                                <MessageSquare className="h-4 w-4 text-neutral-400 dark:text-neutral-500 absolute left-3 top-[14px]" />
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs font-medium text-red-500 flex items-center gap-1">
                              <span></span>
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <div className="mt-10 mb-4">
                        <Button
                          type="submit"
                          className={cn(
                            "w-full h-10 text-lg font-normal bg-lazone-vibrantOrange hover:bg-lazone-vibrantOrange/90 text-white transition-all duration-300 shadow-lg shadow-lazone-vibrantOrange/20 hover:shadow-lazone-vibrantOrange/30 relative overflow-hidden group",
                            isSubmitting && "opacity-70 cursor-not-allowed",
                          )}
                          disabled={isSubmitting}
                        >
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                          <span className="relative z-10">
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </span>
                            ) : "Send Message"}
                          </span>
                        </Button>
                      </div>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[500px] relative" ref={mapRef}>
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background to-transparent z-10"></div>
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

