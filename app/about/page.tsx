import Image from "next/image"
import PageHeader from "@/components/page-header"
import TeamMember from "@/components/about/team-member"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alexandra Reynolds",
      role: "Founder & Creative Director",
      image: "/placeholder.svg?height=600&width=600",
      bio: "With over 15 years of experience in architecture and interior design, Alexandra founded LAZONE with a vision to create spaces that inspire and transform.",
    },
    {
      name: "Marcus Chen",
      role: "Lead Architect",
      image: "/placeholder.svg?height=600&width=600",
      bio: "Marcus brings a unique perspective to architectural design, blending innovative techniques with timeless principles to create structures that are both functional and visually striking.",
    },
    {
      name: "Sophia Patel",
      role: "Interior Design Director",
      image: "/placeholder.svg?height=600&width=600",
      bio: "Sophia's approach to interior design focuses on creating harmonious spaces that reflect the client's personality while maintaining a sense of elegance and sophistication.",
    },
    {
      name: "David Kowalski",
      role: "Lighting Design Specialist",
      image: "/placeholder.svg?height=600&width=600",
      bio: "David's expertise in lighting design adds depth and dimension to our projects, enhancing the overall experience and atmosphere of each space.",
    },
  ]

  return (
    <>
      <PageHeader title="About Us" subtitle="Our story, philosophy, and creative vision" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">Our Story</h2>
              <div className="w-20 h-px bg-neutral-300"></div>
              <p className="text-neutral-700 leading-relaxed">
                Founded in 2010, LAZONE began as a small interior design studio with a passion for creating spaces that
                inspire. Over the years, we've evolved into a comprehensive creative studio, expanding our services to
                include architecture, lighting design, master planning, furnishings, and lifestyle experiences.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Our journey has been defined by a commitment to excellence, innovation, and a deep understanding of how
                spaces influence human experience. We believe that thoughtful design has the power to transform not just
                physical environments, but the way people live, work, and interact.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Today, LAZONE is recognized for our distinctive approach that balances bold creativity with minimal
                elegance, creating designs that are both timeless and contemporary.
              </p>
            </div>

            <div className="relative h-[500px] md:h-[600px]">
              <Image src="/placeholder.svg?height=1200&width=800" alt="LAZONE Studio" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Our Philosophy</h2>
            <div className="w-20 h-px bg-neutral-300 mx-auto mb-6"></div>
            <p className="text-neutral-700 leading-relaxed">
              At LAZONE, we believe that exceptional design emerges from the perfect balance of form, function, and
              feeling. Our approach is guided by three core principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-serif mb-4">Bold Creativity</h3>
              <p className="text-neutral-700">
                We embrace innovative thinking and creative exploration, pushing boundaries to discover unique solutions
                that make a statement while serving a purpose.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-serif mb-4">Minimal Elegance</h3>
              <p className="text-neutral-700">
                We value simplicity and refinement, believing that true luxury lies in the careful curation of elements,
                where each detail contributes to a harmonious whole.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-serif mb-4">Human Connection</h3>
              <p className="text-neutral-700">
                We design with people in mind, creating spaces that not only look beautiful but feel right, fostering
                meaningful connections and enhancing quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-center mb-6">Our Team</h2>
          <div className="w-20 h-px bg-neutral-300 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} name={member.name} role={member.role} image={member.image} bio={member.bio} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Our Vision</h2>
            <div className="w-20 h-px bg-neutral-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              "To create spaces that inspire, comfort, and elevate the human experience through thoughtful design that
              balances innovation with timelessness."
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

