import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ServiceCardProps = {
  id: string
  title: string
  description: string
  image: string
}

export default function ServiceCard({ id, title, description, image }: ServiceCardProps) {
  return (
    <div className="group">
      <div className="relative h-[250px] overflow-hidden mb-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-serif mb-3">{title}</h3>
      <p className="text-neutral-700 mb-4">{description}</p>
      <Link
        href={`/services/${id}`}
        className="inline-flex items-center text-neutral-900 hover:text-neutral-600 transition-colors"
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

