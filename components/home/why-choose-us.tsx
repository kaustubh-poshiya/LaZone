"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, Award, Users, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function WhyChooseUs() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, 100])

  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "10+", label: "Years of Experience" },
    { icon: <Users className="h-6 w-6" />, value: "200+", label: "Happy Clients" },
    { icon: <CheckCircle className="h-6 w-6" />, value: "150+", label: "Projects Completed" },
    { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "Customer Support" },
  ]

  return (
    <section id="about" ref={containerRef} className="flex items-center justify-center flex-col py-20 md:py-24 overflow-hidden bg-[#121212] min-h-[110vh]">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 uppercase text-white">Why choose us</h2>
        <div className=" flex items-start w-20 h-0.5 bg-architect-vibrant mb-6"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <motion.div style={{ y: y1 }} className="relative z-10 rounded-lg overflow-hidden">
              <Image
                src="/images/lobby.png"
                alt="About Lazone"
                width={600}
                height={800}
                className="object-fir"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute top-1/4 -right-12 w-2/3 h-2/3 rounded-lg overflow-hidden border-8 border-background shadow-xl z-20"
            >
              <Image
                src="/images/interior.jpg"
                alt="Lazone Design Process"
                width={400}
                height={600}
                className="object-cover h-full w-full"
              />
            </motion.div>
          </div>

          <div className="md:mt-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}

            >
              <p className="mb-6 font-sans text-lg text-[#999999]">
                Lazone is a premier interior design and architecture firm based in the UAE. We specialize in creating
                bespoke designs that reflect our clients' unique personalities and lifestyles.
              </p>
              <p className="mb-8 font-sans text-lg text-[#999999]">
                Our team of experienced designers and architects work collaboratively to deliver innovative solutions
                that transform spaces into extraordinary experiences. We believe that great design should not only be
                beautiful but also functional and sustainable.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 border border-[#999999] rounded-full bg-primary/10 text-[#999999] mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-[#999999]">{stat.value}</div>
                    <div className="text-sm  text-[#999999]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <Link href="/about">
                <Button size="lg" className="mt-16 group flex px-8 py-3 border bg-transparent border-[#999999] text-[#999999] hover:bg-architect-vibrant hover:text-white transition-colors duration-700 rounded-full">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 " />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

