import ProjectCard from "./project-card"

type RelatedProjectsProps = {
  currentProject: string
  category: string
}

export default function RelatedProjects({ currentProject, category }: RelatedProjectsProps) {
  // This is a simplified version - in a real app, you would fetch related projects from a database
  const relatedProjects = [
    {
      id: "riverside-penthouse",
      title: "Riverside Penthouse",
      category: "Interior Design",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "glass-pavilion",
      title: "Glass Pavilion",
      category: "Architecture",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "wellness-retreat",
      title: "Wellness Retreat",
      category: "Lifestyle & Wellbeing",
      image: "/placeholder.svg?height=600&width=800",
    },
  ].filter((project) => project.id !== currentProject)

  // Only show up to 3 related projects
  const projectsToShow = relatedProjects.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-center mb-6">Related Projects</h2>
        <div className="w-20 h-px bg-neutral-300 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsToShow.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              href={`/portfolio/${project.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

