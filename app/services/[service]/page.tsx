import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Lightbulb, Diamond, Users } from "lucide-react"
import PageHeader from "@/components/page-header"
import ProjectCard from "@/components/projects/project-card"
import ScrollReveal from "@/components/scroll-reveal"

// Import project data from portfolio
type Project = {
  id: string
  title: string
  category: string
  location: string
  year: string
  image: string
  featured: boolean
}

// Define projects data
const projects: Project[] = [
  {
    id: "Serene",
    year: "2023",
    featured: true,
    title: "Serene Residential Building",
    category: "Interior Design",
    location: "Dubai South, DWC, Dubai",
    image: "/images/projects/serene.png",
  },
  {
    id: "THE-WINGS",
    year: "2022",
    featured: true,
    title: "THE WINGS",
    category: "Architecture",
    location: "Arjan, AlBarsha South, Dubai",
    image: "/images/projects/wings.png",
  },
  {
    id: "THE-HARMONY",
    title: "THE HARMONY",
    location: "Dubai South, DWC, Dubai",
    image: "/images/projects/harmony.png",
    category: "Interior Design",
    year: "2022",
    featured: false,
  },
  {
    id: "MAJAN-TWIN",
    title: "MAJAN TWIN",
    category: "Lifestyle & Wellbeing",
    location: "Majan, Wadi AlSafa, Dubai ",
    year: "2021",
    image: "/images/projects/twin.png",
    featured: false,
  },
  {
    id: "SQUARE-I",
    title: "SQUARE I",
    category: "Residential Architecture",
    location: "Business Bay, Dubai",
    year: "2022",
    image: "/images/projects/square-I.png",
    featured: true,
  },
  {
    id: "SQUARE-II",
    title: "SQUARE II",
    category: "Interior Design",
    location: "Business Bay, Dubai",
    year: "2023",
    image: "/images/projects/square-II.png",
    featured: true,
  },
  {
    id: "CB10-VILLA",
    title: "CB10 Luxury Villa",
    category: "Lighting Design",
    location: "Palm Jumeirah, Dubai",
    year: "2024",
    image: "/images/projects/cb10-villa.jpg",
    featured: true,
  },
  {
    id: "ERMAX-RESIDENCE",
    title: "ERMAX Modern Residence",
    category: "Master Planning",
    location: "Downtown Dubai",
    year: "2024",
    image: "/images/projects/ermax-residence.jpg",
    featured: true,
  },
  {
    id: "TERVA-HOMES",
    title: "Terva Contemporary Living",
    category: "Furnishings Product",
    location: "Dubai Hills Estate, Dubai",
    year: "2024",
    image: "/images/projects/terva-homes.jpg",
    featured: false,
  },
];

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

  // Assign appropriate icons to approach items
  const getIconForIndex = (index: number) => {
    const icons = [
      <Lightbulb key="lightbulb" className="text-lazone-orange h-6 w-6" />,
      <Diamond key="diamond" className="text-lazone-orange h-6 w-6" />,
      <Users key="users" className="text-lazone-orange h-6 w-6" />
    ];
    return icons[index % icons.length];
  };

  return (
    <>
      <PageHeader title={serviceData.title} subtitle={serviceData.subtitle} />

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">Overview</h2>
                <div className="w-20 h-px bg-lazone-orange"></div>
                <div className="space-y-4">
                  {serviceData.description.map((paragraph, index) => (
                    <p key={index} className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-md border-2 border-transparent hover:border-lazone-orange transition-all duration-300">
                <Image
                  src={serviceData.mainImage || "/placeholder.svg"}
                  alt={serviceData.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-center mb-6">Our Approach</h2>
            <div className="w-20 h-px bg-lazone-orange mx-auto mb-16"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {serviceData.approach.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white dark:bg-neutral-800 p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-lazone-orange rounded-md group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-lazone-orange/10 flex items-center justify-center mr-4 group-hover:bg-lazone-orange/20 transition-all duration-300">
                      {getIconForIndex(index)}
                    </div>
                    <h3 className="text-xl font-serif text-lazone-orange">{item.title}</h3>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">{item.description}</p>
                  <div className="w-full h-0.5 bg-gradient-to-r from-lazone-orange to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-center mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-px bg-lazone-orange mx-auto mb-16"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.featuredProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <ProjectCard
                  title={project.title}
                  category={serviceData.title}
                  image={project.image}
                  href={`/portfolio/${project.id}`}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-lazone-orange hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
            >
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 to-black text-white">
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
              className="group inline-flex items-center px-8 py-3 bg-lazone-orange text-white text-lg hover:bg-white hover:text-lazone-orange transition-colors duration-300 rounded-sm"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function getServiceData(serviceSlug: string) {
  // Filter projects for each service category
  const getProjectsByCategory = (category: string, limit: number = 3) => {
    return projects
      .filter(project => project.category === category)
      .slice(0, limit)
      .map(project => ({
        title: project.title,
        id: project.id,
        image: project.image
      }));
  };

  // Get projects for related categories (Architecture and Residential Architecture)
  const getArchitectureProjects = (limit: number = 3) => {
    return projects
      .filter(project => project.category === "Architecture" || project.category === "Residential Architecture")
      .slice(0, limit)
      .map(project => ({
        title: project.title,
        id: project.id,
        image: project.image
      }));
  };

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
      featuredProjects: getProjectsByCategory("Interior Design"),
    },
    architecture: {
      title: "Architecture",
      subtitle: "Designing innovative structures that harmonize with their surroundings",
      mainImage: "/images/architecture.png",
      description: [
        "Our architectural design service creates buildings and structures that balance form, function, and context. We believe that successful architecture goes beyond visual appeal to address practical needs, environmental concerns, and human experience.",
        "Our team of architects brings expertise in spatial design, building technology, sustainable practices, and regulatory compliance to create structures that are both beautiful and buildable.",
        "From concept development to construction administration, we provide comprehensive architectural services for projects of various types and scales, ensuring that each design is realized with integrity and attention to detail.",
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
      featuredProjects: getArchitectureProjects(),
    },
    "lighting-design": {
      title: "Lighting Design",
      subtitle: "Enhancing spaces through thoughtful lighting solutions",
      mainImage: "/images/lobby.png",
      description: [
        "Our lighting design service creates illumination strategies that enhance architectural features, establish atmosphere, and support the functionality of spaces. We believe that lighting is a crucial element that can transform a well-designed space into an extraordinary experience.",
        "Our lighting specialists understand the technical and artistic aspects of illumination, including fixture selection, light quality, energy efficiency, and control systems.",
        "We develop comprehensive lighting designs for interiors and exteriors, considering both natural and artificial light sources to create cohesive and engaging environments throughout the day and night.",
      ],
      approach: [
        {
          title: "Layered Illumination",
          description:
            "We combine ambient, task, and accent lighting to create depth, interest, and functionality in every space.",
        },
        {
          title: "Mood Engineering",
          description:
            "We use light quality, color temperature, and intensity to establish the desired emotional response and atmosphere.",
        },
        {
          title: "Energy Consciousness",
          description:
            "We select efficient fixtures and smart control systems to minimize energy consumption while maximizing lighting effectiveness.",
        },
      ],
      featuredProjects: getProjectsByCategory("Lighting Design"),
    },
    "master-planning": {
      title: "Master Planning",
      subtitle: "Developing comprehensive spatial strategies for large-scale projects",
      mainImage: "/images/master-planning.png",
      description: [
        "Our master planning service develops comprehensive frameworks for the development of sites, campuses, and communities. We create cohesive plans that address land use, circulation, infrastructure, open space, and built form.",
        "Our planners bring expertise in urban design, landscape architecture, infrastructure systems, and stakeholder engagement to create visions that are both aspirational and implementable.",
        "We develop master plans at various scales, from individual properties to urban districts, guiding growth and change while reinforcing identity and enhancing quality of life.",
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
      featuredProjects: getProjectsByCategory("Master Planning"),
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
      featuredProjects: getProjectsByCategory("Furnishings Product"),
    },
    "lifestyle-wellbeing": {
      title: "Lifestyle & Wellbeing",
      subtitle: "Integrating wellness principles into design for balanced living",
      mainImage: "/images/lifestyle.png",
      description: [
        "Our lifestyle and wellbeing service integrates wellness principles into architectural and interior design to create environments that support physical health, mental clarity, and emotional balance. We believe that thoughtfully designed spaces can positively impact the quality of life of their occupants.",
        "Our wellness specialists understand the scientific and experiential aspects of healthy environments, including air quality, natural light, acoustics, ergonomics, and biophilic design.",
        "We develop comprehensive wellness strategies for residential, commercial, and institutional projects, creating spaces that nurture wellbeing and enhance performance.",
      ],
      approach: [
        {
          title: "Biophilic Connection",
          description:
            "We incorporate elements of nature into design to reduce stress, enhance creativity, and improve cognitive function.",
        },
        {
          title: "Sensory Balance",
          description:
            "We carefully consider the full sensory experience of spaces, from acoustics and lighting to texture and scent.",
        },
        {
          title: "Adaptive Flexibility",
          description:
            "We create environments that can evolve with changing needs, supporting various activities and states of being.",
        },
      ],
      featuredProjects: getProjectsByCategory("Lifestyle & Wellbeing"),
    },
  }

  return services[serviceSlug as keyof typeof services] || null
}

