"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (textRef.current) textRef.current.classList.add("animate-fade-in")
            if (logoRef.current) logoRef.current.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background texture"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div ref={logoRef} className="mb-12 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image src="/placeholder.svg?height=160&width=160" alt="LAZONE Logo" fill className="object-contain" />
        </div>
      </div>

      <div ref={textRef} className="text-center space-y-6 opacity-0 transition-opacity duration-1000 ease-out">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-neutral-800">BOLDLY CREATIVE</h1>
        <p className="text-sm md:text-base font-light tracking-widest text-neutral-600 max-w-md mx-auto">
          Transforming spaces into extraordinary experiences through innovative design and meticulous craftsmanship.
        </p>
      </div>

      <button onClick={scrollToAbout} className="absolute bottom-10 animate-bounce" aria-label="Scroll down">
        <ChevronDown className="h-8 w-8 text-neutral-400" />
      </button>
    </section>
  )
}

