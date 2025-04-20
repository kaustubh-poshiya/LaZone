"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Compass, Star, Coffee, Eye, ArrowRight, Lightbulb, Diamond, Users } from "lucide-react"
import PageHeader from "@/components/page-header"
import ScrollReveal from "@/components/scroll-reveal"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
    } 
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

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
      <PageHeader title="About Us" subtitle="Creating spaces that reflect luxury, innovation and timeless design" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-8 text-gradient">
              Shaping design narratives through spaces that evoke the essence of art
            </h1>
            <div className="w-24 h-px bg-lazone-orange mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              LAZONE unites design that transcends mere function, merging the essence of art with contemporary craftsmanship. Our curated approach reflects a philosophy rooted in integrity and simplicity—creating spaces that are timeless, purposeful, and free from excess.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">Our Story</h2>
                <div className="w-20 h-px bg-lazone-orange"></div>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Founded in 2010, LAZONE began as a small interior design studio with a passion for creating spaces that
                  inspire. Over the years, we've evolved into a comprehensive creative studio, expanding our services to
                  include architecture, lighting design, master planning, furnishings, and lifestyle experiences.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Our journey has been defined by a commitment to excellence, innovation, and a deep understanding of how
                  spaces influence human experience. We believe that thoughtful design has the power to transform not just
                  physical environments, but the way people live, work, and interact.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Today, LAZONE is recognized for our distinctive approach that balances bold creativity with minimal
                  elegance, creating designs that are both timeless and contemporary.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-md border-2 border-transparent hover:border-lazone-orange transition-all duration-300">
                  <Image 
                    src="/images/master-planning.png" 
                    alt="LAZONE Studio" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
                <div className="relative h-[300px] md:h-[400px] mt-8 overflow-hidden rounded-md border-2 border-transparent hover:border-lazone-orange transition-all duration-300">
                  <Image 
                    src="/images/interior-design.png" 
                    alt="LAZONE Interior Design" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
                <div className="relative h-[300px] md:h-[400px] -mt-8 overflow-hidden rounded-md border-2 border-transparent hover:border-lazone-orange transition-all duration-300">
                  <Image 
                    src="/images/architecture.png" 
                    alt="LAZONE Architecture" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-md border-2 border-transparent hover:border-lazone-orange transition-all duration-300">
                  <Image 
                    src="/images/lighting-design.png" 
                    alt="LAZONE Lighting Design" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Our Philosophy</h2>
              <div className="w-20 h-px bg-lazone-orange mx-auto mb-6"></div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                At LAZONE, we believe that exceptional design emerges from the perfect balance of form, function, and
                feeling. Our approach is guided by three core principles:
              </p>
            </div>
          </ScrollReveal>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            <motion.div 
              variants={itemVariant} 
              className="bg-white dark:bg-neutral-800 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-md border-t-4 border-lazone-orange group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-lazone-orange/20 flex items-center justify-center mr-4 group-hover:bg-lazone-orange/40 transition-all duration-300">
                  <Lightbulb className="text-lazone-orange h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif text-lazone-orange">Bold Creativity</h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                We embrace innovative thinking and creative exploration, pushing boundaries to discover unique solutions
                that make a statement while serving a purpose.
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-lazone-orange to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            <motion.div 
              variants={itemVariant} 
              className="bg-white dark:bg-neutral-800 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-md border-t-4 border-lazone-orange group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-lazone-orange/20 flex items-center justify-center mr-4 group-hover:bg-lazone-orange/40 transition-all duration-300">
                  <Diamond className="text-lazone-orange h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif text-lazone-orange">Minimal Elegance</h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                We value simplicity and refinement, believing that true luxury lies in the careful curation of elements,
                where each detail contributes to a harmonious whole.
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-lazone-orange to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            <motion.div 
              variants={itemVariant} 
              className="bg-white dark:bg-neutral-800 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-md border-t-4 border-lazone-orange group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-lazone-orange/20 flex items-center justify-center mr-4 group-hover:bg-lazone-orange/40 transition-all duration-300">
                  <Users className="text-lazone-orange h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif text-lazone-orange">Human Connection</h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                We design with people in mind, creating spaces that not only look beautiful but feel right, fostering
                meaningful connections and enhancing quality of life.
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-lazone-orange to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">
              Bring Your Vision to Life
            </h2>
            <p className="text-lg md:text-xl mb-8 text-neutral-300">
              Your Vision, Our Expertise: Let's Create Extraordinary Spaces Together
            </p>
            <a 
              href="/contact" 
              className="group inline-flex items-center px-8 py-3 bg-lazone-orange text-white text-lg hover:bg-white hover:text-lazone-orange transition-colors duration-300 rounded-sm"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

