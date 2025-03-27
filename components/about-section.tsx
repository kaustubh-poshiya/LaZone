"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (textRef.current) textRef.current.classList.add("animate-fade-in")
            if (imageRef.current) imageRef.current.classList.add("animate-slide-right")
          }
        })
      },
      { threshold: 0.2 },
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div ref={textRef} className="space-y-8 opacity-0 transition-opacity duration-1000 ease-out">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-neutral-800">HOW WE ZONE</h2>
            <div className="w-20 h-0.5 bg-neutral-300"></div>
            <p className="text-neutral-600 leading-relaxed">
              At LAZONE, we believe in the transformative power of design. Our approach combines artistic vision with
              technical precision to create spaces that inspire, comfort, and elevate the human experience.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Each project is a unique journey, guided by our commitment to understanding the essence of our clients'
              needs and aspirations. We blend innovative thinking with timeless principles to deliver designs that are
              both boldly creative and functionally exceptional.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-light tracking-wider text-neutral-800 mb-4">VISION</h3>
              <p className="text-neutral-600 leading-relaxed">
                To redefine spaces through design that harmonizes aesthetics, functionality, and sustainability,
                creating environments that enrich lives and stand the test of time.
              </p>
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative h-[500px] opacity-0 transform translate-x-10 transition-all duration-1000 ease-out"
          >
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="LAZONE Design Philosophy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

