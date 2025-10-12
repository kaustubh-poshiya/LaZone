"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const subtitleTwoRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const subtitleTwo = subtitleTwoRef.current
    const button = buttonRef.current

    if (title) {
      title.classList.add("animate-fade-in")
    }

    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add("animate-fade-in")
      }, 300)
    }

    if (subtitleTwo) {
      setTimeout(() => {
        subtitleTwo.classList.add("animate-fade-in")
      }, 600)
    }

    if (button) {
      setTimeout(() => {
        button.classList.add("animate-fade-in")
      }, 900)
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
        {/* Black overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Hero video */}
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

      <div className="relative top-[10vh] sm:top-[15vh] md:top-[17vh] lg:right-[32vw] md:right-[25vw] z-20 text-white px-4 max-w-4xl mx-auto md:mx-0">
        <h1
          ref={titleRef}
          className="text-center md:text-start max-w-xs text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 opacity-0 transition-opacity duration-1000 leading-[1.1]"
          style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)' }}
        >
          Curating Spaces, Shaping Standards.
        </h1>
        <p
          ref={subtitleRef}
          className="text-center md:text-start max-w-xs text-xl md:text-2xl lg:text-3xl font-light mb-8 opacity-0 transition-opacity duration-1000 text-white/95"
          style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.3)' }}
        >
          All in one zone.
        </p>
        <div ref={buttonRef} className="opacity-0 mt-8 transition-opacity duration-1000 delay-600 flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-lazone-orange text-white hover:bg-lazone-orange/90 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-lg" size="lg">
            <Link href="/contact">Book Your Consultation</Link>
          </Button>
          <Button asChild variant="outline" className="border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto hover:scale-105" size="lg">
            <Link href="/portfolio">Our Projects</Link>
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

