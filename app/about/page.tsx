"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Lightbulb, Diamond, Users } from "lucide-react"
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
      name: "YOGESH DOSHI",
      role: "CHAIRMAN",
      image: "/images/team/chairman.png",
      bio: "With over 20 years in real estate and design, Yogesh leads LAZONE with vision and passion for excellence.",
    },
    {
      name: "MITAL DOSHI",
      role: "DESIGN DIRECTOR",
      image: "/images/team/design-director.png",
      bio: "Mital's creative vision and technical expertise drive our most celebrated projects. She combines bold ideas with meticulous detail.",
    },
    {
      name: "BAIJU MEHTA",
      role: "OPERATIONS DIRECTOR",
      image: "/images/team/operations-director.png",
      bio: "Baiju ensures operational excellence across every project with precision, efficiency, and uncompromising quality standards.",
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
            <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
              LAZONE designs with purpose. We merge art with contemporary craftsmanship, creating spaces that are timeless, intentional, and free from clutter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-32 bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          {/* First subsection - Text left, Image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-white">Our Story</h2>
                <div className="w-20 h-1 bg-lazone-orange mb-6"></div>
                <p className="text-neutral-200 leading-relaxed">
                  Founded in 2023, LAZONE started as a small interior design studio with one goal: create spaces that inspire.
                  We've grown into a comprehensive creative studio offering architecture, project management, and lifestyle design.
                </p>
                <p className="text-neutral-200 leading-relaxed">
                What drives us? A belief that thoughtful design transforms not just spaces, but how people live and work.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-md border-2 border-transparent hover:border-lazone-orange transition-all duration-300 group">
                <Image
                  src="/images/project-management.png"
                  alt="LAZONE Studio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollReveal>
          </div>

          {/* Second subsection - Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:mt-32">
            <ScrollReveal animation="fade-right">
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-md border-2 border-transparent hover:border-lazone-orange transition-all duration-300 group order-2 lg:order-1">
                <Image
                  src="/images/architecture.png"
                  alt="LAZONE Architecture"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200} className="order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-white">Our Vision</h2>
                <div className="w-20 h-1 bg-lazone-orange mb-6"></div>
                <p className="text-neutral-200 leading-relaxed">
                  We create spaces where functionality meets beauty. Each project brings fresh challenges, and we embrace them with a perspective that balances bold ideas with refined execution.
                </p>
                <p className="text-neutral-200 leading-relaxed">
                  LAZONE is known for designs that feel both timeless and contemporary. We consider more than aesthetics—we think about how spaces affect emotions, productivity, and well-being.
                </p>
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
              <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
                Exceptional design requires three things:
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
              <p className="text-neutral-800 dark:text-neutral-200">
                We explore, experiment, and push boundaries to find solutions that make an impact.
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
              <p className="text-neutral-800 dark:text-neutral-200">
                True luxury is in the details. We curate carefully, letting each element contribute to the whole.
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
              <p className="text-neutral-800 dark:text-neutral-200">
                Beautiful spaces should feel right. We design for the people who will live and work in them.
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-lazone-orange to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight mb-6 text-white">Meet Our Team</h2>
              <div className="w-20 h-px bg-lazone-orange mx-auto mb-6"></div>
              <p className="text-neutral-100 leading-relaxed">
                Meet the talented individuals who bring our vision to life. Our diverse team combines expertise, creativity, and passion to deliver exceptional design solutions.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12 max-w-7xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="group flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden mb-6 rounded-md bg-neutral-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-1 text-white tracking-wide">{member.name}</h3>
                <p className="text-sm text-lazone-orange font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-[#080D13] to-black text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">
              Bring Your Vision to Life
            </h2>
            <p className="text-lg md:text-xl mb-8 text-neutral-100/80">
              Your vision, our expertise. Let's create extraordinary spaces together.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-lazone-orange text-white text-lg hover:bg-white hover:text-lazone-orange transition-all duration-300 rounded-sm hover:scale-105"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none"></div>
      </section>
    </>
  )
}

