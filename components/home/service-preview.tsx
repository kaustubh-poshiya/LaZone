import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function ServicePreview() {
  const services = [
    {
      title: "Project Management",
      description:
        "From concept to completion, we coordinate every phase to deliver quality on time.",
      image: "/images/project-management.png",
      link: "/services/project-management",
    },
    {
      title: "Architecture",
      description:
        "We design structures that fit their environment while exploring new possibilities in form and function.",
      image: "/images/architecture.png",
      link: "/services/architecture",
    },
    {
      title: "Interior Design",
      description:
        "Spaces that balance beauty, practicality, and personality.",
      image: "/images/interior.jpg",
      link: "/services/interior-design",
    },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <ScrollReveal animation="fade-bottom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-6 text-white leading-tight">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-lazone-orange to-transparent mx-auto mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
              We bring together architecture, interiors, and project management to create spaces that inspire and elevate the human experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="fade-zoom" delay={index * 100}>
              <div className="group text-white bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-lazone-orange/30 hover:shadow-2xl hover:shadow-lazone-orange/10">
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-lazone-orange/0 group-hover:bg-lazone-orange/10 transition-all duration-500"></div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-lazone-orange transition-colors duration-300">{service.title}</h3>
                  <p className="mb-6 text-white/70 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-white/90 font-medium hover:text-lazone-orange transition-colors group/link"
                  >
                    Explore Service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-block px-10 py-4 border-2 border-white/30 text-white/90 hover:bg-lazone-orange hover:border-lazone-orange hover:text-white transition-all duration-300 rounded-xl font-medium hover:shadow-lg hover:shadow-lazone-orange/20 hover:scale-105"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

