import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function ContactCta() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#1a1a1a] via-[#080D13] to-black text-white">
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <ScrollReveal animation="fade-bottom">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">
            Ready to transform your space?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/70 mb-12">
            Get in touch to schedule a consultation and discover how we can bring your vision to life.
          </p>
          <Button 
            asChild 
            className="bg-lazone-orange hover:bg-lazone-orange/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105" 
            size="lg"
          >
            <Link href="/contact">Book Your Consultation</Link>
          </Button>
        </ScrollReveal>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none"></div>
    </section>
  )
}

