import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ServicePreview() {
  const services = [
    {
      title: "Interior Design",
      description:
        "Creating harmonious interior spaces that balance aesthetics, functionality, and personal expression.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/interior-design",
    },
    {
      title: "Architecture",
      description:
        "Designing innovative structures that harmonize with their surroundings while pushing the boundaries of form and function.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/architecture",
    },
    {
      title: "Lighting Design",
      description:
        "Enhancing spaces through thoughtful lighting solutions that create atmosphere, highlight architectural features, and improve functionality.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/services/lighting-design",
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Our Services</h2>
          <div className="w-20 h-px bg-neutral-300 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700">
            We offer a comprehensive suite of design services that work in harmony to create cohesive, thoughtful spaces
            that inspire and elevate the human experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative h-[300px] overflow-hidden mb-6">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif mb-3">{service.title}</h3>
              <p className="text-neutral-700 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                Explore
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

