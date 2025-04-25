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
      bio: "With over 20 years of experience in the real estate and design industry, Yogesh has established himself as a visionary leader with a passion for excellence. His strategic direction has been instrumental in LAZONE's growth and success.",
    },
    {
      name: "KAIVAL DOSHI",
      role: "CEO",
      image: "/images/team/ceo.png",
      bio: "Kaival brings over 15 years of executive leadership to LAZONE. His expertise in business development and client relations has helped transform LAZONE into a premier design studio known for its innovative approach and client-centered philosophy.",
    },
    {
      name: "MITAL DOSHI",
      role: "DESIGN DIRECTOR",
      image: "/images/team/design-director.png",
      bio: "Mital's creative vision and technical expertise have been driving forces behind LAZONE's most acclaimed projects. Her approach combines bold creativity with meticulous attention to detail, resulting in spaces that are both functional and visually stunning.",
    },
    {
      name: "TULASI SUSHRA DOSHI",
      role: "MARKETING DIRECTOR",
      image: "/images/team/marketing-director.png",
      bio: "Tulasi's innovative marketing strategies have significantly enhanced LAZONE's brand presence in the industry. Her deep understanding of design trends and client needs allows her to effectively communicate the studio's unique value proposition.",
    },
    {
      name: "BAIJU MEHTA",
      role: "OPERATIONS DIRECTOR",
      image: "/images/team/operations-director.png",
      bio: "Baiju oversees the operational excellence that underpins LAZONE's project delivery. His systematic approach ensures that each project is executed with precision, efficiency, and the highest standards of quality control.",
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
              LAZONE unites design that transcends mere function, merging the essence of art with contemporary craftsmanship. Our curated approach reflects a philosophy rooted in integrity and simplicity—creating spaces that are timeless, purposeful, and free from excess.
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
                  Founded in 2010, LAZONE began as a small interior design studio with a passion for creating spaces that
                  inspire. Over the years, we've evolved into a comprehensive creative studio, expanding our services to
                  include architecture, lighting design, master planning, furnishings, and lifestyle experiences.
                </p>
                <p className="text-neutral-200 leading-relaxed">
                  Our journey has been defined by a commitment to excellence, innovation, and a deep understanding of how
                  spaces influence human experience. We believe that thoughtful design has the power to transform not just
                  physical environments, but the way people live, work, and interact.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-md border-2 border-transparent hover:border-lazone-orange transition-all duration-300 group">
                <Image
                  src="/images/master-planning.png"
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
                  At LAZONE, we are committed to creating spaces that seamlessly blend functionality with aesthetic excellence. 
                  We approach each project with a fresh perspective, embracing the unique challenges and opportunities it presents.
                </p>
                <p className="text-neutral-200 leading-relaxed">
                  Today, LAZONE is recognized for our distinctive approach that balances bold creativity with minimal
                  elegance, creating designs that are both timeless and contemporary. Our holistic design philosophy considers not just 
                  the visual appeal, but how spaces influence emotions, productivity, and well-being.
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
              <p className="text-neutral-800 dark:text-neutral-200">
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
              <p className="text-neutral-800 dark:text-neutral-200">
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
              <p className="text-neutral-800 dark:text-neutral-200">
                We design with people in mind, creating spaces that not only look beautiful but feel right, fostering
                meaningful connections and enhancing quality of life.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="group flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-full h-[400px] overflow-hidden mb-6 rounded-md bg-neutral-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 868px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">
              Bring Your Vision to Life
            </h2>
            <p className="text-lg md:text-xl mb-8 text-neutral-100">
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

