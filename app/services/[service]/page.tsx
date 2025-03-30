import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageHeader from "@/components/page-header"
import ProjectCard from "@/components/projects/project-card"

type ServicePageProps = {
  params: {
    service: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const serviceData = getServiceData(params.service)

  if (!serviceData) {
    notFound()
  }

  return (
    <>
      <PageHeader title={serviceData.title} subtitle={serviceData.subtitle} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">Overview</h2>
              <div className="w-20 h-px bg-neutral-300"></div>
              <div className="space-y-4">
                {serviceData.description.map((paragraph, index) => (
                  <p key={index} className="text-neutral-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] md:h-[600px]">
              <Image
                src={serviceData.mainImage || "/placeholder.svg"}
                alt={serviceData.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-center mb-6">Our Approach</h2>
          <div className="w-20 h-px bg-neutral-300 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {serviceData.approach.map((item, index) => (
              <div key={index} className="bg-white p-8 md:p-10 shadow-sm">
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-neutral-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-center mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-px bg-neutral-300 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={serviceData.title}
                image={project.image}
                href={`/portfolio/${project.slug}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center border-b border-neutral-900 pb-1 text-neutral-900 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">
              Ready to start your project?
            </h2>
            <p className="text-neutral-300 mb-8">
              Contact us to discuss how our {serviceData.title.toLowerCase()} services can transform your space.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link
          href="/services"
          className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </div>
    </>
  )
}

function getServiceData(serviceSlug: string) {
  const services = {
    "interior-design": {
      title: "Interior Design",
      subtitle: "Creating harmonious spaces that inspire and comfort",
      mainImage: "/images/interior.jpg",
      description: [
        "Our interior design service transforms spaces into environments that reflect your personality, meet your functional needs, and create the desired atmosphere. We believe that a well-designed interior should not only be beautiful but should enhance the way you live, work, or play.",
        "Our team of experienced designers brings a wealth of knowledge in spatial planning, material selection, color theory, and custom furnishings to create interiors that are both aesthetically pleasing and highly functional.",
        "Whether you're looking to redesign a single room or an entire property, we work closely with you to understand your vision and bring it to life with creativity, precision, and attention to detail.",
      ],
      approach: [
        {
          title: "Spatial Harmony",
          description:
            "We create balanced, proportional spaces that flow naturally and make optimal use of available area.",
        },
        {
          title: "Material Authenticity",
          description:
            "We select materials that not only look beautiful but feel right, aging gracefully and contributing to the space's character.",
        },
        {
          title: "Personalized Design",
          description:
            "We ensure each interior reflects the unique personality, lifestyle, and needs of its inhabitants.",
        },
      ],
      featuredProjects: [
        {
          title: "Riverside Penthouse",
          slug: "riverside-penthouse",
          image: "/images/projects.png",
        },
        {
          title: "Minimalist Villa",
          slug: "minimalist-villa",
          image: "/images/vila.png",
        },
        {
          title: "Urban Loft",
          slug: "urban-loft",
          image: "/images/luxury-retail.png",
        },
      ],
    },
    architecture: {
      title: "Architecture",
      subtitle: "Designing innovative structures that harmonize with their surroundings",
      mainImage: "/images/architecture.png",
      description: [
        "Our architectural services encompass the complete design process, from initial concept to final construction. We create buildings that are not only visually striking but also functional, sustainable, and contextually appropriate.",
        "Our architects combine technical expertise with creative vision to design structures that respond to their environment, fulfill their purpose, and stand the test of time. We believe that great architecture should enhance the lives of its users while contributing positively to its surroundings.",
        "Whether you're planning a new build, an extension, or a renovation, we work collaboratively with you to develop a design that exceeds your expectations while addressing practical considerations such as budget, timeline, and regulations.",
      ],
      approach: [
        {
          title: "Contextual Response",
          description:
            "We design buildings that respond thoughtfully to their physical, cultural, and historical context.",
        },
        {
          title: "Functional Excellence",
          description:
            "We ensure our structures work perfectly for their intended purpose, with careful attention to flow, accessibility, and usability.",
        },
        {
          title: "Sustainable Innovation",
          description:
            "We incorporate environmentally responsible practices and materials to create buildings that minimize their ecological footprint.",
        },
      ],
      featuredProjects: [
        {
          title: "Glass Pavilion",
          slug: "glass-pavilion",
          image: "/images/projects.png",
        },
        {
          title: "Coastal Residence",
          slug: "coastal-residence",
          image: "/images/luxury-retail.png",
        },
        {
          title: "Urban Office Tower",
          slug: "urban-office-tower",
          image: "/images/vila.png",
        },
      ],
    },
    "lighting-design": {
      title: "Lighting Design",
      subtitle: "Enhancing spaces through thoughtful illumination",
      mainImage: "/images/lobby.png",
      description: [
        "Our lighting design service creates illumination schemes that enhance architectural features, establish atmosphere, and support the functionality of spaces. We understand that lighting is a powerful tool that can transform the perception and experience of an environment.",
        "Our lighting designers combine technical knowledge with artistic sensibility to develop lighting solutions that address practical needs while creating the desired mood and aesthetic. We work with natural light, artificial light, and the interplay between them to achieve optimal results.",
        "From residential interiors to commercial spaces, we create lighting designs that are energy-efficient, adaptable to different uses, and aligned with the overall design concept.",
      ],
      approach: [
        {
          title: "Layered Illumination",
          description:
            "We create depth and dimension through multiple layers of light, combining ambient, task, and accent lighting.",
        },
        {
          title: "Circadian Consideration",
          description:
            "We design lighting systems that support natural human rhythms, enhancing wellbeing and comfort.",
        },
        {
          title: "Technical Integration",
          description:
            "We seamlessly incorporate lighting technology into architectural elements for clean, elegant solutions.",
        },
      ],
      featuredProjects: [
        {
          title: "Museum Gallery",
          slug: "museum-gallery",
          image: "/images/projects.png",
        },
        {
          title: "Luxury Retail Space",
          slug: "luxury-retail-space",
          image: "/images/luxury-retail.png",
        },
        {
          title: "Boutique Hotel",
          slug: "boutique-hotel",
          image: "/images/vila.png",        },
      ],
    },
    "master-planning": {
      title: "Master Planning",
      subtitle: "Developing comprehensive spatial strategies for large-scale projects",
      mainImage: "/images/master-planning.png",
      description: [
        "Our master planning service provides a comprehensive framework for the development of large-scale projects, ensuring cohesive, functional, and sustainable outcomes. We create plans that optimize land use, circulation, and the relationship between different elements.",
        "Our planners take a holistic approach, considering environmental factors, social dynamics, economic viability, and long-term flexibility. We believe that successful master plans should provide clear direction while allowing for adaptation over time.",
        "Whether for urban developments, campus designs, or residential communities, we create master plans that balance immediate needs with future possibilities, creating places that thrive over generations.",
      ],
      approach: [
        {
          title: "Integrated Systems",
          description:
            "We ensure all components of the plan work together harmoniously, from infrastructure to open spaces.",
        },
        {
          title: "Phased Implementation",
          description:
            "We develop strategies that allow for logical, manageable implementation over time while maintaining coherence.",
        },
        {
          title: "Community Connection",
          description: "We create plans that foster social interaction, cultural expression, and a sense of belonging.",
        },
      ],
      featuredProjects: [
        {
          title: "Waterfront District",
          slug: "waterfront-district",
          image: "/images/vila.png",
        },
        {
          title: "University Campus",
          slug: "university-campus",
          image: "/images/pent-house.png",
        },
        {
          title: "Mixed-Use Development",
          slug: "mixed-use-development",
          image: "/images/projects.png",
        },
      ],
    },
    "furnishings-product": {
      title: "Furnishings Product",
      subtitle: "Curating and designing distinctive furniture and accessories",
      mainImage: "/images/furnishing-product.png",
      description: [
        "Our furnishings product service encompasses both the curation of existing pieces and the design of custom furniture and accessories. We select and create items that complement architectural spaces while expressing the unique character of a project.",
        "Our product designers and specialists have extensive knowledge of materials, manufacturing techniques, and design history. We believe that furnishings should be both beautiful and functional, enhancing the overall experience of a space.",
        "Whether you're looking for a single statement piece or a complete collection, we provide furnishing solutions that align with your aesthetic vision, practical requirements, and budget considerations.",
      ],
      approach: [
        {
          title: "Bespoke Creation",
          description:
            "We design custom pieces that perfectly fit your space and requirements when standard options won't suffice.",
        },
        {
          title: "Material Excellence",
          description:
            "We select materials of the highest quality that offer both beauty and durability for lasting enjoyment.",
        },
        {
          title: "Cohesive Curation",
          description:
            "We carefully select pieces that work together harmoniously while adding interest through thoughtful contrast.",
        },
      ],
      featuredProjects: [
        {
          title: "Sculptural Dining Collection",
          slug: "sculptural-dining-collection",
          image: "/images/pent-house.png",
        },
        {
          title: "Modular Lounge System",
          slug: "modular-lounge-system",
          image: "/images/projects.png",
        },
        {
          title: "Artisanal Lighting Series",
          slug: "artisanal-lighting-series",
          image: "/images/vila.png",
        },
      ],
    },
    "lifestyle-wellbeing": {
      title: "Lifestyle & Wellbeing",
      subtitle: "Integrating wellness principles into design for balanced living",
      mainImage: "/images/lifestyle.png",
      description: [
        "Our lifestyle and wellbeing service integrates principles of health, comfort, and balance into the design of spaces. We create environments that support physical wellness, mental clarity, and emotional equilibrium through thoughtful design choices.",
        "Our specialists combine knowledge of biophilic design, ergonomics, air quality, acoustics, and lighting to develop holistic solutions. We believe that well-designed spaces should contribute positively to the health and happiness of their occupants.",
        "From residential wellness rooms to corporate wellness programs, we provide design solutions that promote wellbeing while maintaining aesthetic excellence and functional efficiency.",
      ],
      approach: [
        {
          title: "Biophilic Connection",
          description:
            "We incorporate natural elements and patterns to satisfy the innate human need for connection with nature.",
        },
        {
          title: "Sensory Balance",
          description:
            "We create environments that provide appropriate stimulation across all senses for comfort and engagement.",
        },
        {
          title: "Adaptable Spaces",
          description:
            "We design flexible areas that can accommodate different activities and states of mind throughout the day.",
        },
      ],
      featuredProjects: [
        {
          title: "Wellness Retreat",
          slug: "wellness-retreat",
          image: "/images/luxury-retail.png",
        },
        {
          title: "Mindful Office",
          slug: "mindful-office",
          image: "/images/vila.png",
        },
        {
          title: "Biophilic Residence",
          slug: "biophilic-residence",
          image: "/images/projects.png",
        },
      ],
    },
  }

  return services[serviceSlug as keyof typeof services]
}

