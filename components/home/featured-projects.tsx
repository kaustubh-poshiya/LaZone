"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import ScrollReveal from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

type Project = {
  id: string
  title: string
  location: string
  image: string
}

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

// use the images from /image/projects folder
  const projects: Project[] = [
    {
      id: "serene",
      title: "Serene Residential Building",
      location: "Dubai South, DWC, Dubai",
      image: "/images/projects/serene.png",
    },
    // {
    //   id: "THE-WINGS",
    //   title: "THE WINGS",
    //   location: "Arjan, AlBarsha South, Dubai",
    //   image: "/images/projects/wings.png",
    // },
    {
      id: "the-harmony",
      title: "THE HARMONY",
      location: "Dubai South, DWC, Dubai",
      image: "/images/projects/harmony.png",
    },
    {
      id: "majan-twin",
      title: "MAJAN TWIN",
      location: "Majan, Wadi AlSafa, Dubai ",
      image: "/images/projects/twin.png",
    },
    {
      id:"isha-island",
      title: "ISHA ISLAND",
      location: "World Islands, Dubai",
      image: "/images/projects/isha-island.jpg",
    },
    {
      id:"white-ponderosa",
      title: "WHITE PONDEROSA",
      location: "The Villa Community, Dubailand, Dubai",
      image: "/images/projects/white-ponderosa.jpg",
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal animation="fade-bottom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-4 leading-tight">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-lazone-orange to-lazone-orange/50 rounded-full"></div>
            </div>
            <Link
              href="/portfolio"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-lazone-orange text-white rounded-lg hover:bg-lazone-orange/90 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              View all projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="relative" ref={sliderRef}>
          <div className="relative h-[550px] md:h-[650px] lg:h-[700px] overflow-hidden rounded-2xl shadow-2xl">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
                )}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 text-white max-w-2xl">
                  <div className="text-sm md:text-base font-medium tracking-wider mb-3 text-lazone-orange uppercase">
                    {project.location}
                  </div>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)' }}>{project.title}</h3>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 text-base md:text-lg px-8 py-6 hover:scale-105 hover:shadow-xl"
                  >
                    <Link href={`/portfolio/${project.id}`}>View Project Details</Link>
                  </Button>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 md:px-4 -mt-6 z-20">
            <Button
              onClick={prevSlide}
              size="icon"
              variant="outline"
              className="border-2 border-white/80 bg-black/30 backdrop-blur-sm text-white hover:bg-white hover:text-black hover:border-white rounded-full h-14 w-14 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextSlide}
              size="icon"
              variant="outline"
              className="border-2 border-white/80 bg-black/30 backdrop-blur-sm text-white hover:bg-white hover:text-black hover:border-white rounded-full h-14 w-14 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-full transition-all duration-500 hover:scale-110",
                  index === activeIndex 
                    ? "bg-lazone-orange w-12 h-3 shadow-lg shadow-lazone-orange/50" 
                    : "bg-muted hover:bg-muted-foreground/50 w-3 h-3",
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

