"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  title: string
  category: string
  location: string
  image: string
}

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0)

  const projects: Project[] = [
    {
      id: "riverside-penthouse",
      title: "Riverside Penthouse",
      category: "Interior Design",
      location: "New York, USA",
      image: "/placeholder.svg?height=1200&width=1600",
    },
    {
      id: "glass-pavilion",
      title: "Glass Pavilion",
      category: "Architecture",
      location: "Los Angeles, USA",
      image: "/placeholder.svg?height=1200&width=1600",
    },
    {
      id: "waterfront-district",
      title: "Waterfront District",
      category: "Master Planning",
      location: "Singapore",
      image: "/placeholder.svg?height=1200&width=1600",
    },
    {
      id: "wellness-retreat",
      title: "Wellness Retreat",
      category: "Lifestyle & Wellbeing",
      location: "Bali, Indonesia",
      image: "/placeholder.svg?height=1200&width=1600",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Featured Projects</h2>
            <div className="w-20 h-px bg-neutral-300"></div>
          </div>
          <Link
            href="/portfolio"
            className="mt-4 md:mt-0 inline-flex items-center border-b border-neutral-900 pb-1 text-neutral-900 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
          >
            View all projects
          </Link>
        </div>

        <div className="relative">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
                )}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                  <div className="text-sm font-light tracking-wider mb-2">
                    {project.category} | {project.location}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-light">{project.title}</h3>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-block mt-4 border-b border-white pb-1 hover:opacity-80 transition-opacity"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 md:px-8 -mt-6 z-20">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-neutral-900 w-6" : "bg-neutral-300",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

