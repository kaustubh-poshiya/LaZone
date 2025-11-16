import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export default function StudioPhilosophy() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <ScrollReveal animation="fade-right">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-tight">Our Philosophy</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-lazone-orange to-lazone-orange/50 rounded-full"></div>
              <p className="text-foreground/80 leading-relaxed text-lg md:text-xl">
                At LAZONE, exceptional design happens when form, function, and feeling come together. We're driven by bold creativity,
                refined simplicity, and the belief that spaces should connect with the people who use them.
              </p>
              <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
                Every project tells its own story. We listen, innovate, and deliver designs that look striking and work beautifully.
              </p>
              <div className="pt-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-lazone-orange text-white rounded-lg hover:bg-lazone-orange/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Learn more about our studio 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/assets/the-serene/01.jpg" 
                alt="LAZONE Design Team at Work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lazone-black/40 via-transparent to-transparent"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

