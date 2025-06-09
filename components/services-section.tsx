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
    // {
    //   id: "lobby-design",
    //   title: "LOBBY DESIGN",
    //   description:
    //     "Unleash lobby artistry with our experts. From grand hotels to corporate hubs, we create captivating first impressions. Embracing trends and innovations, we infuse lobbies with your brand, elevating experiences for all who enter.",
    //   image: "/images/lobby.png",
    // },
    {
      id: "project-management",
      title: "PROJECT MANAGEMENT",
      description:
        "Comprehensive oversight from architectural design to interior design, ensuring seamless coordination, quality, and timely delivery across all project phases.",
      image: "/images/project-management.png",
    },
    {
      id: "furnishing-fitout",
      title: "Furnishing & Fit-Out",
      description:
        "Experience the art of perfecting spaces with our bespoke furnishing and fit-out services. From concept to reality, we create spaces that embody comfort, style, and sophistication.",
      image: "/images/furnishing-fitout.png",
    },
    {
      id: "lifestyle-wellbeing",
      title: "LIFESTYLE WELLBEING",
      description:
        "Integrating wellness principles into design to create spaces that promote physical health, mental clarity, and emotional balance.",
      image: "/images/lifestyle.png",
    },
    {
      id: "3d-rendering",
      title: "3D Rendering",
      description:
        "Transforming design concepts into realistic 3D visualizations to help clients visualize and understand the final project.",
      image: "/images/3d-rendering.png",
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

