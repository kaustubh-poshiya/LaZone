"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  title: string
  category: string
  image: string
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const projects: Project[] = [
    {
      id: "project-1",
      title: "Luxury Penthouse",
      category: "Interior Design",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "project-2",
      title: "Modern Office Complex",
      category: "Architecture",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "project-3",
      title: "Boutique Hotel Lobby",
      category: "Lobby Design",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "project-4",
      title: "Urban Development",
      category: "Master Planning",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "project-5",
      title: "Custom Furniture Collection",
      category: "Furnishing Product",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "project-6",
      title: "Wellness Retreat",
      category: "Lifestyle Wellbeing",
      image: "/placeholder.svg?height=800&width=1200",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 bg-neutral-900 text-white opacity-0 transition-opacity duration-1000 ease-out"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6">FEATURED PROJECTS</h2>
          <div className="w-20 h-0.5 bg-neutral-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Featured Project Slider */}
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
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <div className="text-sm font-light tracking-wider text-neutral-300 mb-2">{project.category}</div>
                  <h3 className="text-2xl md:text-3xl font-light tracking-wider">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
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

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-white w-6" : "bg-white/40",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {projects.map((project) => (
            <div key={`grid-${project.id}`} className="relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center">
                  <div className="text-sm font-light tracking-wider text-neutral-200 mb-1">{project.category}</div>
                  <h4 className="text-lg font-light tracking-wider text-white">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

