import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import ProjectStory from "@/components/projects/project-story"
import ScrollReveal from "@/components/scroll-reveal"

type ProjectPageProps = {
  params: {
    project: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectData = getProjectData(params.project)

  if (!projectData) {
    notFound()
  }

  return (
    <>
      <section className="relative h-[70vh]">
        <Image
          src={projectData.heroImage || "/placeholder.svg"}
          alt={projectData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4">{projectData.title}</h1>
            <p className="text-xl opacity-90">{projectData.category}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">Project Overview</h2>
              <div className="w-20 h-0.5 bg-architect-vibrant"></div>
              <div className="space-y-4">
                {projectData.description.map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-serif mb-6">Project Details</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Client</span>
                  <span className="font-medium">{projectData.client}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">{projectData.location}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">{projectData.year}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-medium">{projectData.size}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Services</span>
                  <span className="font-medium">{projectData.services.join(", ")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story Timeline */}
      {projectData.story && (
        <ProjectStory
          title="Design Journey"
          subtitle="Explore the creative process behind this project"
          steps={projectData.story}
          className="bg-muted/30"
        />
      )}

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal animation="fade-bottom">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-center mb-6">
              Project Gallery
            </h2>
            <div className="w-20 h-0.5 bg-architect-vibrant mx-auto mb-16"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.gallery.map((image, index) => (
              <ScrollReveal key={index} animation="fade-zoom" delay={index * 100}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${projectData.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">Design Approach</h2>
                <div className="w-20 h-0.5 bg-architect-vibrant"></div>
                <div className="space-y-4">
                  {projectData.approach.map((paragraph, index) => (
                    <p key={index} className="text-foreground/80 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={projectData.approachImage || "/placeholder.svg"}
                  alt={`${projectData.title} - Design Approach`}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* <RelatedProjects currentProject={params.project} category={projectData.category} /> */}

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>
    </>
  )
}

function getProjectData(projectSlug: string) {
  const projects = {
    "Serene": {
      title: "Serene Residential Building",
      category: "Interior Design",
      client: "Private Client",
      location: "Dubai South, DWC, Dubai",
      year: "2023",
      size: "14,500 m²",
      services: ["Interior Design", "Furnishings Product", "Lighting Design"],
      heroImage: "/images/projects/serene.png",
      description: [
        "Serene Residential Building is a luxurious development designed to provide a tranquil living environment amidst the bustling city of Dubai.",
        "Our approach balanced contemporary elegance with functionality, using a neutral palette accented with carefully selected materials and textures. The open-plan layouts were designed to enhance flow between spaces while maintaining distinct functional zones.",
        "Custom furnishings and lighting solutions were developed specifically for the project, ensuring each element contributed to the cohesive design narrative while meeting the residents' practical needs.",
      ],
      approach: [
        "The design concept centered on creating a dialogue between the interior and the exterior views, with large windows that frame the Dubai skyline.",
        "Materials were selected for their tactile qualities and visual subtlety, with natural stone, warm woods, and soft textiles creating layers of interest without overwhelming the senses.",
        "Lighting was carefully considered to transition from day to night, with a scheme that adapts to different moods and activities while highlighting architectural features and design elements.",
      ],
      approachImage: "/assets/the-serene/b.jpg",
      gallery: [
        "/assets/the-serene/a.jpg",
        "/assets/the-serene/b.jpg",
        "/assets/the-serene/c.jpg",
        "/assets/the-serene/d.jpg",
        "/assets/the-serene/01.jpg",
        "/assets/the-serene/02.jpg",
      ],
      story: [
        {
          title: "Client Brief & Inspiration",
          description:
            "The client sought to create a residential building that would stand out in Dubai's competitive real estate market while providing residents with a sense of serenity and well-being.",
          image: "/assets/the-serene/a.jpg",
        },
        {
          title: "Space Planning & Flow",
          description:
            "We developed floor plans that maximize space efficiency while creating a natural flow between living areas, with special attention to the relationship between private and communal spaces.",
          image: "/assets/the-serene/b.jpg",
        },
        {
          title: "Material Selection",
          description:
            "We selected a palette of premium materials that would age gracefully: marble flooring, wood paneling, and metal accents. Each material was chosen for its aesthetic qualities and durability in Dubai's climate.",
          image: "/assets/the-serene/c.jpg",
        },
        {
          title: "Custom Furnishings",
          description:
            "Several key pieces were custom designed for the common areas, including reception furniture and lounge seating. These elements were crafted by skilled artisans, emphasizing our commitment to quality craftsmanship.",
          image: "/assets/the-serene/d.jpg",
        },
        {
          title: "Lighting Design",
          description:
            "The lighting scheme was developed to enhance the architecture while creating atmosphere. Recessed lighting provides ambient illumination, while targeted fixtures highlight design features. Smart lighting systems allow for energy efficiency and scene setting.",
          image: "/assets/the-serene/01.jpg",
        },
      ],
      testimonial: {
        quote:
          "LAZONE transformed our vision into a stunning reality. Their attention to detail and innovative approach created a residential building that perfectly balances aesthetics and functionality. The team's ability to understand our needs and translate them into design was exceptional.",
        name: "Mohammed Al Farsi",
        position: "Development Director",
        company: "Serene Properties",
        image: "/placeholder.svg?height=400&width=400",
      },
      virtualTour: [],
    },
    "THE-WINGS": {
      title: "THE WINGS",
      category: "Architecture",
      client: "Dubai Properties",
      location: "Arjan, AlBarsha South, Dubai",
      year: "2022",
      size: "22,000 m²",
      services: ["Architecture", "Master Planning", "Landscape Design"],
      heroImage: "/images/projects/wings.png",
      description: [
        "THE WINGS is an architectural landmark in Arjan, designed to make a bold statement while providing functional living spaces for residents.",
        "The distinctive wing-shaped facades give the building its unique identity, while also serving to optimize natural light and views from the residences.",
        "This project demonstrates our ability to create architecture that is both visually striking and practically responsive to the needs of its users and context.",
      ],
      approach: [
        "The design process began with extensive site analysis to determine optimal orientation, views, and relationship to the surrounding urban context of Arjan.",
        "Technical challenges of creating the wing-shaped facades in Dubai's climate were addressed through innovative structural solutions and advanced building systems.",
        "Sustainability was integrated throughout, with passive cooling strategies, energy-efficient systems, and thoughtful material selection to reduce environmental impact.",
      ],
      approachImage: "/images/projects/wings.png",
      gallery: [
        "/images/projects/wings.png",
        "/images/projects/wings.png",
        "/images/projects/wings.png",
        "/images/projects/wings.png",
        "/images/projects/wings.png",
        "/images/projects/wings.png",
      ],
      story: [
        {
          title: "Concept Development",
          description:
            "The concept for THE WINGS emerged from the desire to create a building that would stand out in Dubai's architectural landscape while providing optimal living conditions for residents.",
          image: "/images/projects/wings.png",
        },
        {
          title: "Form Finding",
          description:
            "The distinctive wing-shaped form was developed through multiple iterations, balancing aesthetic goals with practical considerations of construction and interior space planning.",
          image: "/images/projects/wings.png",
        },
        {
          title: "Structural Innovation",
          description:
            "Creating the dynamic form required innovative structural engineering solutions. We collaborated with engineers to develop a system that could realize the design vision while ensuring safety and buildability.",
          image: "/images/projects/wings.png",
        },
        {
          title: "Facade Design",
          description:
            "The facade system was carefully designed to manage Dubai's intense sunlight, with elements providing shade while maintaining views and allowing natural light into the interior spaces.",
          image: "/images/projects/wings.png",
        },
        {
          title: "Spatial Experience",
          description:
            "Interior spaces were designed to maximize the benefits of the building's unique form, with living areas positioned to capture views and create a sense of connection to the surrounding city.",
          image: "/images/projects/wings.png",
        },
      ],
      virtualTour: [],
    },
    "THE-HARMONY": {
      title: "THE HARMONY",
      category: "Interior Design",
      client: "Dubai South Developments",
      location: "Dubai South, DWC, Dubai",
      year: "2022",
      size: "18,000 m²",
      services: ["Interior Design", "Furnishings Product"],
      heroImage: "/images/projects/harmony.png",
      description: [
        "THE HARMONY is a residential development in Dubai South that emphasizes balanced living environments through thoughtful interior design.",
        "Our interior design strategy focused on creating spaces that promote wellbeing, with careful attention to spatial flow, natural light, and material selection.",
        "The project demonstrates our approach to creating interiors that feel both luxurious and livable, with a timeless quality that will endure beyond passing trends.",
      ],
      approach: [
        "We began with a deep understanding of how residents would use the spaces, developing interior layouts that support daily activities while creating moments of delight.",
        "Material and color palettes were selected to create a sense of harmony and cohesion throughout the building, with subtle variations defining different zones and functions.",
        "Custom design elements were integrated throughout to give the project a unique identity and create a sense of place specific to Dubai South.",
      ],
      approachImage: "/assets/the-harmony/02.jpg",
      gallery: [
        "/assets/the-harmony/01.jpg",
        "/assets/the-harmony/02.jpg",
        "/assets/the-harmony/03.jpg",
        "/assets/the-harmony/Cl1.jpg",
        "/assets/the-harmony/05.jpg",
        "/assets/the-harmony/07.jpg",
      ],
      story: [
        {
          title: "Design Vision",
          description:
            "The vision for THE HARMONY was to create interior spaces that balance aesthetic refinement with practical functionality, supporting residents' lifestyles while elevating their daily experience.",
          image: "/assets/the-harmony/01.jpg",
        },
        {
          title: "Spatial Planning",
          description:
            "We developed floor plans that create a natural progression from public to private spaces, with careful consideration of proportions and relationships between different functional areas.",
          image: "/assets/the-harmony/02.jpg",
        },
        {
          title: "Material Palette",
          description:
            "The material palette combines warm and cool elements - stone, wood, glass, and metal - creating a balanced composition that feels simultaneously sophisticated and welcoming.",
          image: "/assets/the-harmony/03.jpg",
        },
        {
          title: "Custom Elements",
          description:
            "Bespoke design elements, from built-in cabinetry to decorative features, were developed to give THE HARMONY its distinctive character while addressing specific functional requirements.",
          image: "/assets/the-harmony/Cl1.jpg",
        },
        {
          title: "Lighting Strategy",
          description:
            "The lighting design integrates natural and artificial light sources to create spaces that feel vibrant during the day and intimate at night, with scene-setting capabilities for different activities and moods.",
          image: "/assets/the-harmony/05.jpg",
        },
      ],
      testimonial: {
        quote:
          "LAZONE's interior design for THE HARMONY perfectly captures our vision of creating living spaces that feel both luxurious and comfortable. Their attention to detail and thoughtful approach to materials, lighting, and spatial design has resulted in interiors that our residents truly appreciate and enjoy.",
        name: "Fatima Al Zaabi",
        position: "Design Director",
        company: "Dubai South Developments",
        image: "/placeholder.svg?height=400&width=400",
      },
      virtualTour: [],
    },
    "MAJAN-TWIN": {
      title: "MAJAN TWIN",
      category: "Lifestyle & Wellbeing",
      client: "Wadi AlSafa Development",
      location: "Majan, Wadi AlSafa, Dubai",
      year: "2021",
      size: "25,000 m²",
      services: [ "Interior Design", "Lifestyle & Wellbeing"],
      heroImage: "/images/projects/twin.png",
      description: [
        "MAJAN TWIN is a dual-tower residential development that prioritizes resident wellbeing through thoughtful design of both architecture and amenity spaces.",
        "The project incorporates extensive wellness facilities, including fitness centers, spa areas, meditation rooms, and outdoor recreation spaces designed to promote physical and mental health.",
        "Our integrated approach to lifestyle design ensures that wellness isn't just an add-on amenity but is woven into the fabric of the entire residential experience.",
      ],
      approach: [
        "We approached this project with a holistic view of wellbeing, considering how design decisions at every scale - from master planning to material selection - impact resident health and happiness.",
        "Biophilic design principles informed many aspects of the project, with abundant natural light, ventilation, views to nature, and natural materials creating spaces that support human wellbeing.",
        "Community and social connection were prioritized through the design of shared spaces that encourage interaction while still providing opportunities for privacy and solitude when desired.",
      ],
      approachImage: "/images/projects/twin.png",
      gallery: [
        "/images/projects/twin.png",
        "/images/projects/twin.png",
        "/images/projects/twin.png",
        "/images/projects/twin.png",
        "/images/projects/twin.png",
        "/images/projects/twin.png",
      ],
      story: [
        {
          title: "Wellness Vision",
          description:
            "The vision for MAJAN TWIN was to create a residential development that goes beyond providing shelter to actively support residents' physical, mental, and social wellbeing through thoughtful design.",
          image: "/images/projects/twin.png",
        },
        {
          title: "Twin Tower Concept",
          description:
            "The twin tower design creates a visual dialogue between the buildings while allowing for efficient organization of units and amenities, with each tower having its own distinct character within a unified overall design.",
          image: "/images/projects/twin.png",
        },
        {
          title: "Wellness Amenities",
          description:
            "Extensive wellness facilities were integrated throughout the development, from rooftop yoga decks to spa facilities, fitness centers, and quiet contemplation spaces designed to support diverse wellbeing practices.",
          image: "/images/projects/twin.png",
        },
        {
          title: "Outdoor Spaces",
          description:
            "Landscaped areas between and around the towers provide opportunities for outdoor exercise, social gatherings, or quiet relaxation, with a variety of spaces supporting different activities and preferences.",
          image: "/images/projects/twin.png",
        },
        {
          title: "Healthy Materials",
          description:
            "Interior materials were selected not only for their aesthetic qualities but also for their health impacts, with a focus on low-VOC finishes, natural materials, and good indoor air quality throughout the development.",
          image: "/images/projects/twin.png",
        },
      ],
      testimonial: {
        quote:
          "LAZONE brought our vision for a wellness-focused residential development to life in MAJAN TWIN. Their integrated approach to wellbeing through design has created a living environment that truly supports our residents' health and happiness. The project has set a new standard for lifestyle-oriented residential design in Dubai.",
        name: "Khalid Almarzooqi",
        position: "President",
        company: "Wadi AlSafa Development",
        image: "/placeholder.svg?height=400&width=400",
      },
      virtualTour: [],
    },
    "luxury-retail-space": {
      title: "Luxury Retail Space",
      category: "Lighting Design",
      client: "Maison de Luxe",
      location: "Paris, France",
      year: "2022",
      size: "750 m²",
      services: ["Lighting Design", "Interior Design"],
      heroImage: "/images/luxury-retail.png",
      description: [
        "This high-end retail environment in Paris required sophisticated lighting design to showcase luxury products while creating an immersive brand experience for customers.",
        "Our lighting concept focused on highlighting merchandise with precision while establishing atmosphere and guiding the customer journey through the space.",
        "The result is a retail environment where lighting plays a central role in brand storytelling and product presentation, enhancing the perceived value of merchandise through careful illumination.",
      ],
      approach: [
        "We began with a detailed analysis of the merchandise categories, display strategies, and brand identity to develop a lighting concept that would support specific retail goals.",
        "Technical lighting solutions were balanced with atmospheric considerations, creating a space that functions effectively for retail while maintaining an emotional connection with customers.",
        "Energy efficiency and flexibility were integrated into the system, with programmable scenes allowing the space to transform for different events and seasonal displays.",
      ],
      approachImage: "/images/luxury-retail.png",
      gallery: [
        "/images/luxury-retail.png",
        "/images/luxury-retail.png",
        "/images/luxury-retail.png",
        "/images/luxury-retail.png",
        "/images/luxury-retail.png",
        "/images/luxury-retail.png",
      ],
      story: [
        {
          title: "Brand Analysis",
          description:
            "The project began with a deep dive into the brand's identity, history, and target customer, ensuring that the lighting design would support and enhance the overall brand experience.",
          image: "/images/luxury-retail.png",
        },
        {
          title: "Zoning Strategy",
          description:
            "The lighting plan divides the space into distinct zones—entrance, main retail floor, feature displays, fitting rooms, and point of sale—each with lighting characteristics appropriate to its function.",
          image: "/images/luxury-retail.png",
        },
        {
          title: "Product Illumination",
          description:
            "Special attention was paid to merchandise lighting, with custom fixtures developed to highlight the specific materials, textures, and colors of different product categories.",
          image: "/images/luxury-retail.png",
        },
        {
          title: "Control Systems",
          description:
            "An advanced lighting control system allows staff to adjust settings throughout the day, respond to changing natural light conditions, and create special effects for events or seasonal displays.",
          image: "/images/luxury-retail.png",
        },
        {
          title: "Integration with Architecture",
          description:
            "Lighting elements were carefully integrated with the historic building's architecture, respecting its character while introducing contemporary technology in an unobtrusive way.",
          image: "/images/luxury-retail.png",
        },
      ],
      testimonial: {
        quote:
          "LAZONE's lighting design has transformed our Paris flagship store. They understood exactly how to use light to enhance our products and create the sophisticated atmosphere our brand demands. The flexibility of the system allows us to continually refresh the space, keeping the experience exciting for our customers.",
        name: "Jean-Pierre Moreau",
        position: "Creative Director",
        company: "Maison de Luxe",
        image: "/placeholder.svg?height=400&width=400",
      },
      virtualTour: [],
    },
  }

  return projects[projectSlug as keyof typeof projects]
}

