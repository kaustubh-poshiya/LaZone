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
    <div className="group bg-white dark:bg-neutral-800 rounded-md shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-t-4 border-transparent hover:border-lazone-orange">
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-neutral-900/0 dark:bg-neutral-900/0 group-hover:bg-neutral-900/20 dark:group-hover:bg-neutral-900/40 transition-colors duration-500"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-neutral-900 dark:text-white mb-3">{title}</h3>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">{description}</p>
        <div className="w-full h-0.5 bg-gradient-to-r from-lazone-orange to-transparent mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Link
          href={`/services/${id}`}
          className="inline-flex items-center text-lazone-orange hover:text-neutral-900 dark:hover:text-white transition-colors group-hover:translate-x-1 duration-300"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

