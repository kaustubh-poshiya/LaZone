import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/services/service-card"
import ScrollReveal from "@/components/scroll-reveal"
import { Search, Lightbulb, PenTool, CheckSquare } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "interior-design",
      title: "Interior Design",
      description:
        "Creating harmonious interior spaces that balance aesthetics, functionality, and personal expression.",
      image: "/images/interior.jpg",
    },
    {
      id: "architecture",
      title: "Architecture",
      description:
        "Designing innovative structures that harmonize with their surroundings while pushing the boundaries of form and function.",
      image: "/images/architecture.png",
    },
    {
      id: "lighting-design",
      title: "Lighting Design",
      description:
        "Enhancing spaces through thoughtful lighting solutions that create atmosphere, highlight architectural features, and improve functionality.",
      image: "/images/lobby.png",
    },
    {
      id: "master-planning",
      title: "Master Planning",
      description:
        "Developing comprehensive spatial strategies that optimize land use, connectivity, and community engagement for large-scale projects.",
      image: "/images/master-planning.png",
    },
    {
      id: "furnishings-product",
      title: "Furnishings Product",
      description:
        "Curating and designing distinctive furniture and accessories that complement architectural spaces and enhance the overall design narrative.",
      image: "/images/furnishing-product.png",
    },
    {
      id: "lifestyle-wellbeing",
      title: "Lifestyle & Wellbeing",
      description:
        "Integrating wellness principles into design to create spaces that promote physical health, mental clarity, and emotional balance.",
      image: "/images/lifestyle.png",
    },
  ]

  return (
    <>
      <PageHeader title="Our Services" subtitle="Comprehensive design solutions for every aspect of your space" />

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">What We Offer</h2>
              <div className="w-20 h-px bg-lazone-orange mx-auto mb-6"></div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                At LAZONE, we offer a comprehensive suite of design services that work in harmony to create cohesive,
                thoughtful spaces. Whether you're looking for a single service or a complete design solution, our team
                brings expertise, creativity, and attention to detail to every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 100}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Our Process</h2>
              <div className="w-20 h-px bg-lazone-orange mx-auto mb-6"></div>
              <p className="text-neutral-300 leading-relaxed">
                Our design process is structured yet flexible, allowing us to tailor our approach to each client's unique needs while ensuring consistent quality and attention to detail.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="relative p-6 pt-12 border border-neutral-800 rounded-md group hover:border-lazone-orange transition-all duration-300 hover:bg-neutral-800/30 h-full min-h-[250px] flex flex-col items-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-lazone-orange rounded-full flex items-center justify-center font-serif text-xl shadow-lg">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif mb-3 mt-2 text-white text-center">Discovery</h3>
                <p className="text-neutral-400 text-center">We begin by understanding your vision, requirements, and constraints through in-depth consultation and site analysis.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-right" delay={200}>
              <div className="relative p-6 pt-12 border border-neutral-800 rounded-md group hover:border-lazone-orange transition-all duration-300 hover:bg-neutral-800/30 h-full min-h-[250px] flex flex-col items-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-lazone-orange rounded-full flex items-center justify-center font-serif text-xl shadow-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif mb-3 mt-2 text-white text-center">Concept Development</h3>
                <p className="text-neutral-400 text-center">We create preliminary designs that translate your requirements into spatial and aesthetic solutions.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-right" delay={300}>
              <div className="relative p-6 pt-12 border border-neutral-800 rounded-md group hover:border-lazone-orange transition-all duration-300 hover:bg-neutral-800/30 h-full min-h-[250px] flex flex-col items-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-lazone-orange rounded-full flex items-center justify-center font-serif text-xl shadow-lg">
                  <PenTool className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif mb-3 mt-2 text-white text-center">Refinement</h3>
                <p className="text-neutral-400 text-center">We refine the design based on your feedback, developing detailed plans and specifications for implementation.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-right" delay={400}>
              <div className="relative p-6 pt-12 border border-neutral-800 rounded-md group hover:border-lazone-orange transition-all duration-300 hover:bg-neutral-800/30 h-full min-h-[250px] flex flex-col items-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-lazone-orange rounded-full flex items-center justify-center font-serif text-xl shadow-lg">
                  <CheckSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif mb-3 mt-2 text-white text-center">Realization</h3>
                <p className="text-neutral-400 text-center">We oversee the implementation of the design, ensuring that every detail is executed according to plan.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}

