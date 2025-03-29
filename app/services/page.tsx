import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/services/service-card"

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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-neutral-700 leading-relaxed">
              At LAZONE, we offer a comprehensive suite of design services that work in harmony to create cohesive,
              thoughtful spaces. Whether you're looking for a single service or a complete design solution, our team
              brings expertise, creativity, and attention to detail to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Our Process</h2>
            <div className="w-20 h-px bg-neutral-300 mx-auto mb-6"></div>
            <p className="text-neutral-700 leading-relaxed">
              We follow a collaborative, iterative process that ensures your vision is realized with precision and
              creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center mx-auto mb-6 font-serif">
                1
              </div>
              <h3 className="text-xl font-serif mb-4">Discovery</h3>
              <p className="text-neutral-700">
                We begin by understanding your needs, preferences, and aspirations through in-depth consultation.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center mx-auto mb-6 font-serif">
                2
              </div>
              <h3 className="text-xl font-serif mb-4">Concept</h3>
              <p className="text-neutral-700">
                Our team develops creative concepts that align with your vision while pushing boundaries.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center mx-auto mb-6 font-serif">
                3
              </div>
              <h3 className="text-xl font-serif mb-4">Development</h3>
              <p className="text-neutral-700">
                We refine the selected concept, addressing all technical and aesthetic considerations.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center mx-auto mb-6 font-serif">
                4
              </div>
              <h3 className="text-xl font-serif mb-4">Realization</h3>
              <p className="text-neutral-700">
                We oversee implementation to ensure the design is executed with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

