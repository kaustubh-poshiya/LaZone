import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function ContactCta() {
  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-gradient-to-b from-[#0a0a0a] via-[#080D13] to-black text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-lazone-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lazone-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <ScrollReveal animation="fade-bottom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-lazone-orange to-transparent mx-auto mb-10 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/80 mb-14 leading-relaxed">
              Get in touch to schedule a consultation and discover how we can bring your vision to life with exceptional design and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                className="bg-lazone-orange hover:bg-lazone-orange/90 text-white px-10 py-7 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lazone-orange/30 rounded-xl" 
                size="lg"
              >
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black px-10 py-7 text-lg font-medium transition-all duration-300 hover:scale-105 rounded-xl" 
                size="lg"
              >
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

