import Link from "next/link"

export default function ContactCta() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6">
          Ready to transform your space?
        </h2>
        <p className="max-w-2xl mx-auto text-neutral-300 mb-10">
          Contact us to discuss your project and discover how our design expertise can bring your vision to life.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

