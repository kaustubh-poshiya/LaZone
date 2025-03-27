"use client"

import { useState } from "react"
import PageHeader from "@/components/page-header"
import ProjectCard from "@/components/projects/project-card"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  title: string
  category: string
  location: string
  year: string
  image: string
  featured: boolean
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("all")

  const projects: Project[] = [
    {
      id: "riverside-penthouse",
      title: "Riverside Penthouse",
      category: "Interior Design",
      location: "New York, USA",
      year: "2023",
      image: "/placeholder.svg?height=800&width=600",
      featured: true,
    },
    {
      id: "glass-pavilion",
      title: "Glass Pavilion",
      category: "Architecture",
      location: "Los Angeles, USA",
      year: "2022",
      image: "/placeholder.svg?height=800&width=600",
      featured: true,
    },
    {
      id: "museum-gallery",
      title: "Museum Gallery",
      category: "Lighting Design",
      location: "London, UK",
      year: "2023",
      image: "/placeholder.svg?height=800&width=600",
      featured: false,
    },
    {
      id: "waterfront-district",
      title: "Waterfront District",
      category: "Master Planning",
      location: "Singapore",
      year: "2021",
      image: "/placeholder.svg?height=800&width=600",
      featured: true,
    },
    {
      id: "sculptural-dining-collection",
      title: "Sculptural Dining Collection",
      category: "Furnishings Product",
      location: "Milan, Italy",
      year: "2023",
      image: "/placeholder.svg?height=800&width=600",
      featured: false,
    },
    {
      id: "wellness-retreat",
      title: "Wellness Retreat",
      category: "Lifestyle & Wellbeing",
      location: "Bali, Indonesia",
      year: "2022",
      image: "/placeholder.svg?height=800&width=600",
      featured: true,
    },
    {
      id: "minimalist-villa",
      title: "Minimalist Villa",
      category: "Interior Design",
      location: "Santorini, Greece",
      year: "2022",
      image: "/placeholder.svg?height=800&width=600",
      featured: false,
    },
    {
      id: "coastal-residence",
      title: "Coastal Residence",
      category: "Architecture",
      location: "Sydney, Australia",
      year: "2021",
      image: "/placeholder.svg?height=800&width=600",
      featured: false,
    },
    {
      id: "luxury-retail-space",
      title: "Luxury Retail Space",
      category: "Lighting Design",
      location: "Paris, France",
      year: "2022",
      image: "/placeholder.svg?height=800&width=600",
      featured: false,
    },
    {
      id: "university-campus",
      title: "University Campus",
      category: "Master Planning",
      location: "Boston, USA",
      year: "2020",
      image: "/placeholder.svg?height=800&width=600",
      featured: false,
    },
    {
      id: "modular-lounge-system",
      title: "Modular Lounge System",
      category: "Furnishings Product",
      location: "Copenhagen, Denmark",
      year: "2023",
      image: "/placeholder.svg?height=800&width=600",
      featured: false,
    },
    {
      id: "mindful-office",
      title: "Mindful Office",
      category: "Lifestyle & Wellbeing",
      location: "Tokyo, Japan",
      year: "2022",
      image: "/placeholder.svg?height=800&width=600",
      featured: false,
    },
  ]

  const categories = [
    "all",
    "Interior Design",
    "Architecture",
    "Lighting Design",
    "Master Planning",
    "Furnishings Product",
    "Lifestyle & Wellbeing",
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <>
      <PageHeader title="Portfolio" subtitle="Explore our selected works across various disciplines" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 mx-2 mb-2 text-sm transition-colors",
                  filter === category
                    ? "bg-neutral-900 text-white"
                    : "bg-transparent text-neutral-600 hover:text-neutral-900",
                )}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                href={`/portfolio/${project.id}`}
                location={project.location}
                year={project.year}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

