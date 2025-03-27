import Image from "next/image"
import Link from "next/link"

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
    <Link href={href} className="group block">
      <div className="relative h-[350px] overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>
      <h3 className="text-lg font-serif mb-1">{title}</h3>
      <p className="text-sm text-neutral-500">
        {category}
        {location && year && ` | ${location}, ${year}`}
        {location && !year && ` | ${location}`}
        {!location && year && ` | ${year}`}
      </p>
    </Link>
  )
}

