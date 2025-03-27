import Image from "next/image"
import Link from "next/link"

export default function StudioPhilosophy() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">Our Philosophy</h2>
            <div className="w-20 h-px bg-neutral-300"></div>
            <p className="text-neutral-700 leading-relaxed">
              At LAZONE, we believe that exceptional design emerges from the perfect balance of form, function, and
              feeling. Our approach is guided by a commitment to bold creativity, minimal elegance, and human
              connection.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Each project is a unique journey, guided by our understanding of the client's needs and aspirations. We
              blend innovative thinking with timeless principles to deliver designs that are both boldly creative and
              functionally exceptional.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center border-b border-neutral-900 pb-1 text-neutral-900 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
              >
                Learn more about our studio
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px]">
            <Image
              src="/placeholder.svg?height=1200&width=800"
              alt="LAZONE Design Philosophy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

