"use client"

import { useState } from "react"
import ProjectCard from "@/components/projects/project-card"
import { cn } from "@/lib/utils"
import ScrollReveal from "@/components/scroll-reveal"

type Project = {
  id: string
  title: string
  categories: string[]
  location: string
  year: string
  image: string
  featured: boolean
}

type PortfolioGridProps = {
  projects: Project[]
  categories?: string[]
  showFilter?: boolean
}

export default function PortfolioGrid({ projects, categories = ["all"], showFilter = true }: PortfolioGridProps) {
  const [filter, setFilter] = useState<string>("all")
  const [layout, setLayout] = useState<"grid" | "masonry">("grid")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.categories.includes(filter))

  return (
    <div className="space-y-8">
      {showFilter && (
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex flex-wrap justify-center mb-6 md:mb-0 md:mr-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 mx-2 mb-2 text-sm transition-colors rounded-md",
                  filter === category
                    ? "bg-lazone-orange text-white border border-lazone-orange"
                    : "bg-transparent text-foreground hover:border-lazone-orange border border-transparent",
                )}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
          {/* <div className="flex items-center space-x-2">
            <button
              onClick={() => setLayout("grid")}
              className={cn("p-2 rounded-md transition-colors", layout === "grid" ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50")}
              aria-label="Grid layout"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  className={layout === "grid" ? "fill-lazone-orange" : "fill-foreground"}
                />
                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  className={layout === "grid" ? "fill-lazone-orange" : "fill-foreground"}
                />
                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                  className={layout === "grid" ? "fill-lazone-orange" : "fill-foreground"}
                />
                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                  className={layout === "grid" ? "fill-lazone-orange" : "fill-foreground"}
                />
              </svg>
            </button>
            <button
              onClick={() => setLayout("masonry")}
              className={cn(
                "p-2 rounded-md transition-colors",
                layout === "masonry" ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50",
              )}
              aria-label="Masonry layout"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="10"
                  rx="1"
                  className={layout === "masonry" ? "fill-lazone-orange" : "fill-foreground"}
                />
                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  className={layout === "masonry" ? "fill-lazone-orange" : "fill-foreground"}
                />
                <rect
                  x="3"
                  y="17"
                  width="7"
                  height="4"
                  rx="1"
                  className={layout === "masonry" ? "fill-lazone-orange" : "fill-foreground"}
                />
                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                  className={layout === "masonry" ? "fill-lazone-orange" : "fill-foreground"}
                />
              </svg>
            </button>
          </div> */}
        </div>
      )}

      <div
        className={cn(
          "grid gap-6",
          layout === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto",
        )}
      >
        {filteredProjects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            animation="fade-zoom"
            delay={index * 100}
            className={layout === "masonry" && index % 3 === 1 ? "md:mt-12" : ""}
          >
            <ProjectCard
              title={project.title}
              category={project.categories[0]}
              image={project.image}
              href={`/portfolio/${project.id}`}
              location={project.location}
              year={project.year}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

