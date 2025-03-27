"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const button = buttonRef.current

    if (title) {
      title.classList.add("animate-fade-in")
    }

    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add("animate-fade-in")
      }, 500)
    }

    if (button) {
      setTimeout(() => {
        button.classList.add("animate-fade-in")
      }, 1000)
    }
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="LAZONE Design Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight mb-6 opacity-0 transition-opacity duration-1000"
        >
          BOLDLY CREATIVE
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl font-light tracking-wide mb-8 opacity-0 transition-opacity duration-1000 delay-500"
        >
          Transforming spaces into extraordinary experiences through innovative design and meticulous craftsmanship.
        </p>
        <div ref={buttonRef} className="opacity-0 transition-opacity duration-1000 delay-1000">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors"
          >
            Explore Our Work
          </Link>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  )
}

