"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Service = {
  id: string
  title: string
  description: string
  image: string
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeService, setActiveService] = useState<string | null>(null)

  const services: Service[] = [
    {
      id: "interior-design",
      title: "INTERIOR DESIGN",
      description:
        "Crafting bespoke interior spaces that balance aesthetics, functionality, and personal expression to create environments that inspire and comfort.",
      image: "/images/interior.jpg",
    },
    {
      id: "architecture",
      title: "ARCHITECTURE",
      description:
        "Designing innovative structures that harmonize with their surroundings while pushing the boundaries of form, function, and sustainability.",
      image: "/images/architecture.png",
    },
    {
      id: "lobby-design",
      title: "LOBBY DESIGN",
      description:
        "Creating impactful first impressions through thoughtfully designed entrance spaces that set the tone for the entire building experience.",
      image: "/images/lobby.png",
    },
    {
      id: "master-planning",
      title: "MASTER PLANNING",
      description:
        "Developing comprehensive spatial strategies that optimize land use, connectivity, and community engagement for large-scale projects.",
      image: "/images/master-planning.png",
    },
    {
      id: "furnishing-product",
      title: "FURNISHING PRODUCT",
      description:
        "Curating and designing distinctive furniture and accessories that complement architectural spaces and enhance the overall design narrative.",
      image: "/images/furnishing-product.png",
    },
    {
      id: "lifestyle-wellbeing",
      title: "LIFESTYLE WELLBEING",
      description:
        "Integrating wellness principles into design to create spaces that promote physical health, mental clarity, and emotional balance.",
      image: "/images/lifestyle.png",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceCards = document.querySelectorAll(".service-card")
            serviceCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-lazone-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6">OUR SERVICES</h2>
          <div className="w-20 h-0.5 bg-lazone-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative h-[400px] overflow-hidden opacity-0 transition-all duration-500 ease-out cursor-pointer"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-light tracking-wider mb-2">{service.title}</h3>
                <div
                  className={cn(
                    "w-12 h-0.5 bg-lazone-orange mb-4 transition-all duration-500",
                    activeService === service.id ? "w-20" : "w-12",
                  )}
                ></div>
                <p
                  className={cn(
                    "text-sm leading-relaxed opacity-0 transform translate-y-4 transition-all duration-500",
                    activeService === service.id ? "opacity-100 transform-none" : "",
                  )}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

