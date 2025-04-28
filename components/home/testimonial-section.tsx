"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

type Testimonial = {
  id: string
  name: string
  position: string
  company: string
  image: string
  rating: number
  text: string
  featured?: boolean
}

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Ethan Wilson",
      position: "Interior Decorator",
      company: "Reviora",
      image: "/placeholder.svg?height=400&width=400",
      rating: 5,
      text: "LaZone is known for their innovative solutions that push the boundaries of traditional design. They fearlessly experiment with new ideas to deliver truly original spaces that exceed expectations.",
      featured: true,
    },
    {
      id: "2",
      name: "Olivia Brown",
      position: "Interior Stylist",
      company: "Quentro",
      image: "/placeholder.svg?height=400&width=400",
      rating: 5,
      text: "LaZone's designs exude timeless elegance. They have a keen eye for classic aesthetics and a knack for incorporating modern elements to create spaces that stand the test of time.",
      featured: true,
    },
    {
      id: "3",
      name: "Noah Garcia",
      position: "Home Stager",
      company: "Cyfuse",
      image: "/placeholder.svg?height=400&width=400",
      rating: 5,
      text: "LaZone takes a personalized approach to every project, ensuring that each space reflects the unique personality and preferences of the client. Their tailored designs leave a lasting impression.",
      featured: true,
    },
    {
      id: "4",
      name: "Isabella Rodriguez",
      position: "Interior Consultant",
      company: "Velion",
      image: "/placeholder.svg?height=400&width=400",
      rating: 5,
      text: "LaZone's expertise in color theory shines through in their harmonious color schemes. They masterfully combine hues to create spaces that evoke the desired mood and atmosphere.",
    },
    {
      id: "5",
      name: "Mason Lee",
      position: "Senior Designer",
      company: "Reviora",
      image: "/placeholder.svg?height=400&width=400",
      rating: 5,
      text: "LaZone prioritizes functional layouts that optimize space usage and enhance the overall flow of a room. Their thoughtful arrangements ensure that every corner serves a purpose.",
    },
    {
      id: "6",
      name: "Emily Smith",
      position: "Creative Artist",
      company: "Orbital",
      image: "/placeholder.svg?height=400&width=400",
      rating: 5,
      text: "LaZone's artistic vision is evident in every project they undertake. They infuse creativity and passion into their designs, resulting in spaces that are truly works of art.",
    },
  ]

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3))
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index * 3)
  }

  const totalSlides = Math.ceil(testimonials.length / 3)

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setTimeout(() => {
        nextSlide()
      }, 6000)
    }

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current)
      }
    }
  }, [activeIndex, autoplay])

  const handleMouseEnter = () => {
    setAutoplay(false)
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
    }
  }

  const handleMouseLeave = () => {
    setAutoplay(true)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={cn("w-5 h-5", i < rating ? "text-lazone-orange" : "text-neutral-300 dark:text-neutral-600")}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-4">What Our Clients Say</h2>
          <div className="w-20 h-px bg-lazone-orange mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div ref={containerRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeIndex}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className={cn(
                  "bg-white dark:bg-neutral-800 rounded-md shadow-sm p-6 transition-all duration-300 hover:shadow-md border-t-4 border-transparent hover:border-lazone-orange",
                )}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-neutral-200 dark:border-neutral-700">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.position}, <span className="text-lazone-orange">{testimonial.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-lazone-orange/10" />
                  <p className="text-neutral-700 dark:text-neutral-300 relative z-10 pl-4">{testimonial.text}</p>
                </div>

                {testimonial.featured && (
                  <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                    <span className="inline-block px-3 py-1 bg-lazone-orange/10 text-lazone-orange text-xs font-medium rounded-full">
                      Featured Testimonial
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-300 group-hover:text-lazone-orange" />
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex / 3 === index ? "bg-lazone-orange" : "bg-neutral-300 dark:bg-neutral-600",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors group"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-neutral-700 dark:text-neutral-300 group-hover:text-lazone-orange" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

