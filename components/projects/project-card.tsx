import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ProjectCardProps = {
  title: string
  category: string
  image: string
  href: string
  location?: string
  year?: string
}

export default function ProjectCard({ title, category, image, href, location, year }: ProjectCardProps) {
  return (
    <Link href={href} className="project-card block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="project-card-image object-cover" />
        <div className="project-card-overlay"></div>
        <div className="project-card-content">
          <p className="text-sm font-light tracking-wider mb-1 text-architect-secondary">
            {category}
            {location && year && ` | ${location}, ${year}`}
            {location && !year && ` | ${location}`}
            {!location && year && ` | ${year}`}
          </p>
          <h3 className="text-lg font-serif mb-2">{title}</h3>
          <div className="flex items-center text-sm text-white/80 group">
            <span>View Project</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}

