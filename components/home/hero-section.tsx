"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        {/* Hero video  */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="/images/thumbnail.png"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
    
      <div className="relative top-[23vh] md:top-[17vh] lg:right-[32vw] md:right-[25vw]  z-10 text-center text-white px-4 max-w-4xl">
        <h1
          ref={titleRef}
          className="text-start max-w-xs text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 opacity-0 transition-opacity duration-1000"
        >
          Your Imagination, Our Canvas
        </h1>
        <div ref={buttonRef} className="opacity-0 transition-opacity duration-1000 delay-600 space-x-4">
          <Button asChild className="bg-architect-vibrant text-white hover:bg-architect-vibrant/90" size="lg">
            <Link href="/portfolio">Explore Our Work</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-neutral-700 hover:bg-white/10 hover:text-gray-200" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  )
}

