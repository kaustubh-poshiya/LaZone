"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

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
      image: "/images/pent-house.png",
    },
    {
      id: "project-2",
      title: "Modern Office Complex",
      category: "Architecture",
      image: "/images/architecture.png",
    },
    {
      id: "project-3",
      title: "Boutique Hotel Lobby",
      category: "Lobby Design",
      image: "/images/lobby.png",
    },
    {
      id: "project-4",
      title: "Urban Development",
      category: "Master Planning",
      image: "/images/master-planning.png",
    },
    {
      id: "project-5",
      title: "Custom Furniture Collection",
      category: "Furnishing Product",
      image: "/images/furnishing-product.png",
    },
    {
      id: "project-6",
      title: "Wellness Retreat",
      category: "Lifestyle Wellbeing",
      image: "/images/lifestyle.png",
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
      className="py-24 md:py-32 bg-lazone-black text-white opacity-0 transition-opacity duration-1000 ease-out"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6">FEATURED PROJECTS</h2>
            <ArrowRight className="ml-4 h-8 w-8 text-lazone-orange" />
          </div>
          <Link href="/portfolio" className="text-lg hover:text-lazone-orange transition-colors">
            View all projects
          </Link>
        </div>
        <div className="w-full h-0.5 bg-lazone-orange/30 mb-16"></div>

        <div className="relative">
          {/* Featured Project Slider */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
                )}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <div className="text-md md:text-lg font-medium tracking-wider text-lazone-orange mb-3">{project.category}</div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6">{project.title}</h3>
                  <Link 
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center bg-lazone-orange text-white px-6 py-3 rounded hover:bg-lazone-orange/90 transition-colors"
                  >
                    View Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 md:px-8 -mt-6 z-20">
            <button
              onClick={prevSlide}
              className="bg-lazone-orange/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-lazone-orange transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-lazone-orange/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-lazone-orange transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-lazone-orange w-10" : "bg-white/40 w-3",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {projects.map((project) => (
            <div key={`grid-${project.id}`} className="relative aspect-square overflow-hidden group cursor-pointer rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <div>
                  <div className="text-md font-medium tracking-wider text-lazone-orange mb-2">{project.category}</div>
                  <h4 className="text-2xl font-bold tracking-wider text-white mb-4">{project.title}</h4>
                  <Link 
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center text-white hover:text-lazone-orange transition-colors"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

