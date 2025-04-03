"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"

type Testimonial = {
  id: string
  quote: string
  name: string
  position: string
  company: string
  image: string
  projectId?: string
  projectName?: string
}

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      quote:
        "LAZONE transformed our vision into a stunning reality. Their attention to detail and innovative approach created a space that perfectly balances aesthetics and functionality. The team's ability to understand our needs and translate them into design was exceptional.",
      name: "Alexandra Reynolds",
      position: "CEO",
      company: "Horizon Innovations",
      image: "images/testimonials.png",
      projectId: "riverside-penthouse",
      projectName: "Riverside Penthouse",
    },
    {
      id: "testimonial-2",
      quote:
        "Working with LAZONE was a seamless experience from concept to completion. Their creative vision and technical expertise resulted in a space that exceeded our expectations. The team's collaborative approach made the entire process enjoyable and stress-free.",
      name: "Michael Chen",
      position: "Director",
      company: "Vertex Architecture",
      image: "images/testimonials.png",
      projectId: "glass-pavilion",
      projectName: "Glass Pavilion",
    },
    {
      id: "testimonial-3",
      quote:
        "LAZONE's holistic approach to wellness design has transformed our retreat into a sanctuary of peace and rejuvenation. Their understanding of how space affects wellbeing is unparalleled, creating environments that nurture both body and mind.",
      name: "Sophia Patel",
      position: "Founder",
      company: "Serenity Wellness Group",
      image: "images/testimonials.png",
      projectId: "wellness-retreat",
      projectName: "Wellness Retreat",
    },
  ]

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3)
      else if (window.innerWidth >= 768) setItemsPerView(2)
      else setItemsPerView(1)
    }
    
    window.addEventListener('resize', updateItemsPerView)
    updateItemsPerView()
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-architect-tertiary/10">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal animation="fade-bottom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-4">Client Testimonials</h2>
            <div className="w-20 h-0.5 bg-architect-vibrant mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden px-4 py-8">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `-${activeIndex * (100 / itemsPerView)}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <Quote className="text-architect-vibrant h-6 w-6 mb-4 opacity-50" />
                    <p className="text-lg italic mb-6">{testimonial.quote}</p>
                    {testimonial.projectId && (
                      <a
                        href={`/portfolio/${testimonial.projectId}`}
                        className="inline-flex items-center text-architect-vibrant hover:underline"
                      >
                        View Project <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={prevSlide}
              size="icon"
              variant="outline"
              className="rounded-full border-architect-tertiary hover:bg-architect-tertiary/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={nextSlide}
              size="icon"
              variant="outline"
              className="rounded-full border-architect-tertiary hover:bg-architect-tertiary/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

