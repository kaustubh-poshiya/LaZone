"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12  bg-architect-tertiary/10">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal animation="fade-bottom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-4">Client Testimonials</h2>
            <div className="w-20 h-0.5 bg-architect-vibrant mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[400px] md:min-h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row items-center gap-8",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
                )}
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Quote className="text-architect-vibrant h-8 w-8 mb-4 opacity-50" />
                  <p className="text-lg md:text-xl italic mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                    {testimonial.projectId && (
                      <p className="text-sm mt-2">
                        Project:{" "}
                        <a
                          href={`/portfolio/${testimonial.projectId}`}
                          className="text-architect-vibrant hover:underline"
                        >
                          {testimonial.projectName}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-20 space-x-4">
            <Button
              onClick={prevSlide}
              size="icon"
              variant="outline"
              className="rounded-full border-architect-tertiary hover:bg-architect-tertiary/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-architect-vibrant w-6" : "bg-architect-tertiary/50",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              onClick={nextSlide}
              size="icon"
              variant="outline"
              className="rounded-full border-architect-tertiary hover:bg-architect-tertiary/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

