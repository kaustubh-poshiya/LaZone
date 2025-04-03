import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function ServicePreview() {
  const services = [
    {
      title: "Interior Design",
      description:
        "Creating harmonious interior spaces that balance aesthetics, functionality, and personal expression.",
      image: "/images/interior.jpg",
      link: "/services/interior-design",
    },
    {
      title: "Architecture",
      description:
        "Designing innovative structures that harmonize with their surroundings while pushing the boundaries of form and function.",
      image: "/images/architecture.png",
      link: "/services/architecture",
    },
    {
      title: "Lighting Design",
      description:
        "Enhancing spaces through thoughtful lighting solutions that create atmosphere, highlight architectural features, and improve functionality.",
      image: "/images/lobby.png",
      link: "/services/lighting-design",
    },
  ]

  return (
    <section className="py-16  md:pb-[5.3rem] md:pt-[10rem] lg:pt-[12rem] bg-[#121212] lg:pb-[7rem] md:min-h-[110vh]">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal animation="fade-bottom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl  text-bold font-serif font-light tracking-tight mb-6 text-white">Our Services</h2>
            <div className="w-20 h-0.5 bg-architect-vibrant mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-[#999999]">
              We offer a comprehensive suite of design services that work in harmony to create cohesive, thoughtful
              spaces that inspire and elevate the human experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="fade-zoom" delay={index * 100}>
              <div className="group text-white">
                <div className="relative h-[300px] overflow-hidden mb-6 rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-architect-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-serif mb-3 text-[#999999]">{service.title}</h3>
                <p className="mb-4 text-[#999999]">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#999999] font-semibold hover:text-architect-vibrant/80 transition-colors"
                >
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3 border duration-700 border-[#999999] text-[#999999] hover:bg-architect-vibrant hover:text-white transition-colors rounded-md"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

