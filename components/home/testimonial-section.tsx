"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
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
      name: "Amir Khan",
      position: "Creative Director",
      company: "Avita",
      image: "/placeholder.svg?height=400&width=400",
      rating: 5,
      text: "LaZone's artistic vision is evident in every project they undertake. They infuse creativity and passion into their designs, resulting in spaces that are truly works of art.",
    },
  ]

  useEffect(() => {
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current)
      }
    }
  }, [])

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
      <Star
        key={i}
        className={cn(
          "w-4 h-4 transition-all duration-300", 
          i < rating ? "text-lazone-orange fill-lazone-orange" : "text-neutral-300 dark:text-neutral-600"
        )}
      />
    ))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-[#0a0a0a] dark:via-neutral-900 dark:to-[#0a0a0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-lazone-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-lazone-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-6 leading-tight">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-lazone-orange to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div 
          ref={containerRef} 
          className="relative" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="grid grid-cols-12 gap-5 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Featured testimonial - large */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 md:col-span-6 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border-t-2 border-lazone-orange"
            >
              <Quote className="w-10 h-10 text-lazone-orange/20 mb-2" />
              <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-5 leading-relaxed">
                {testimonials[0].text}
              </p>
              
              <div className="flex items-start gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                  <span className="text-xl font-medium text-neutral-600 dark:text-neutral-300">{testimonials[0].name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-white">{testimonials[0].name}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonials[0].position}, <span className="text-lazone-orange">{testimonials[0].company}</span>
                  </p>
                  <div className="flex mt-1">{renderStars(testimonials[0].rating)}</div>
                </div>
              </div>
            </motion.div>
            
            {/* Featured testimonial - medium */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 md:col-span-6 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border-t-2 border-lazone-orange"
            >
              <Quote className="w-10 h-10 text-lazone-orange/20 mb-2" />
              <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-5 leading-relaxed">
                {testimonials[1].text}
              </p>
              
              <div className="flex items-start gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                  <span className="text-xl font-medium text-neutral-600 dark:text-neutral-300">{testimonials[1].name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-white">{testimonials[1].name}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonials[1].position}, <span className="text-lazone-orange">{testimonials[1].company}</span>
                  </p>
                  <div className="flex mt-1">{renderStars(testimonials[1].rating)}</div>
                </div>
              </div>
            </motion.div>

            {/* Standard testimonials - row 1 */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 md:col-span-4 bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-md"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                  <span className="text-md font-medium text-neutral-600 dark:text-neutral-300">{testimonials[2].name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-white text-sm">{testimonials[2].name}</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {testimonials[2].position}, <span className="text-lazone-orange">{testimonials[2].company}</span>
                  </p>
                  <div className="flex mt-1">{renderStars(testimonials[2].rating)}</div>
                </div>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                {testimonials[2].text}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="col-span-12 md:col-span-4 bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-md"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                  <span className="text-md font-medium text-neutral-600 dark:text-neutral-300">{testimonials[3].name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-white text-sm">{testimonials[3].name}</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {testimonials[3].position}, <span className="text-lazone-orange">{testimonials[3].company}</span>
                  </p>
                  <div className="flex mt-1">{renderStars(testimonials[3].rating)}</div>
                </div>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                {testimonials[3].text}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="col-span-12 md:col-span-4 bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-md"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                  <span className="text-md font-medium text-neutral-600 dark:text-neutral-300">{testimonials[4].name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-white text-sm">{testimonials[4].name}</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {testimonials[4].position}, <span className="text-lazone-orange">{testimonials[4].company}</span>
                  </p>
                  <div className="flex mt-1">{renderStars(testimonials[4].rating)}</div>
                </div>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                {testimonials[4].text}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

