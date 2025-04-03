import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function ContactCta() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <ScrollReveal animation="fade-bottom">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6">
            Ready to transform your space?
          </h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-10">
            Contact us to discuss your project and discover how our design expertise can bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-transparent border border-[#999] hover:bg-architect-vibrant/90 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}

