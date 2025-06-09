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

export default async function ProjectPage({ params }: ProjectPageProps) {
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
                  <span className="font-medium flex text-end">{projectData.location}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">{projectData.year}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-medium">{projectData.size}</span>
                </li>
                {/* <li className="flex justify-between">
                  <span className="text-muted-foreground">Services</span>
                  <span className="font-medium">{projectData.services.join(", ")}</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story Timeline */}
      {/* {projectData.story && (
        <ProjectStory
          title="Design Journey"
          subtitle="Explore the creative process behind this project"
          steps={projectData.story}
          className="bg-muted/30"
        />
      )} */}

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
    "serene": {
      title: "Serene Residential Building",
      category: "Interior Design",
      client: "Private Client",
      location: "Dubai South, DWC, Dubai",
      year: "2023",
      size: "14,500 m²",
      services: ["Interior Design", "Furnishing & Fit-Out", "Lobby Design"],
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
    "the-wings": {
      title: "THE WINGS",
      category: "Architecture",
      client: "Dubai Properties",
      location: "Arjan, AlBarsha South, Dubai",
      year: "2022",
      size: "22,000 m²",
      services: ["Architecture", "Project Management"],
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
      approachImage: "/assets/the-wings/wings.png",
      gallery: [
        "/assets/the-wings/image38.jpeg",
        "/assets/the-wings/image36.jpeg",
        "/assets/the-wings/Lobby-A.jpg",
        "/assets/the-wings/POOL1-NIGHT-2A4.jpg",
        "/assets/the-wings/image36.jpeg",
        "/assets/the-wings/image38.jpeg",
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
          image: "/assets/the-wings/image38.jpeg",
        },
        {
          title: "Structural Innovation",
          description:
            "Creating the dynamic form required innovative structural engineering solutions. We collaborated with engineers to develop a system that could realize the design vision while ensuring safety and buildability.",
          image: "/assets/the-wings/wings.png",
        },
        {
          title: "Facade Design",
          description:
            "The facade system was carefully designed to manage Dubai's intense sunlight, with elements providing shade while maintaining views and allowing natural light into the interior spaces.",
          image: "/assets/the-wings/image36.jpeg",
        },
        {
          title: "Spatial Experience",
          description:
            "Interior spaces were designed to maximize the benefits of the building's unique form, with living areas positioned to capture views and create a sense of connection to the surrounding city.",
          image: "/assets/the-wings/interior.jpg",
        },
      ],
      virtualTour: [],
    },
    "the-harmony": {
      title: "THE HARMONY",
      category: "Interior Design",
      client: "Dubai South Developments",
      location: "Dubai South, DWC, Dubai",
      year: "2022",
      size: "18,000 m²",
      services: ["Interior Design", "Furnishing & Fit-Out"],
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
    "square-I": {
      title: "SQUARE I",
      category: "Architecture",
      client: "Business Bay Development",
      location: "Business Bay, Dubai",
      year: "2022",
      size: "32,000 m²",
      services: ["Architecture", "Interior Design", "Project Management"],
      heroImage: "/images/projects/square-I.png",
      description: [
        "SQUARE I is a modern residential development in Business Bay that combines elegant architecture with practical living spaces.",
        "The project features a distinctive façade that creates a strong identity within the urban context, while interior spaces are designed to maximize views and natural light.",
        "Our comprehensive design approach considered both the aesthetic impact of the building in its setting and the quality of life for residents within their homes.",
      ],
      approach: [
        "The architectural concept responds to the dense urban context of Business Bay, creating a distinctive presence while optimizing unit layouts for views of the Dubai skyline.",
        "Interior spaces were designed with flexibility in mind, accommodating diverse lifestyles while maintaining a cohesive design language throughout the building.",
        "Material selections balance durability with luxury, creating spaces that will retain their appeal over time while meeting the practical needs of residents.",
      ],
      approachImage: "/assets/square-1/living-2.jpg",
      gallery: [
        "/assets/square-1/living.jpg",
        "/assets/square-1/lobby.jpg",
        "/assets/square-1/bed-2.jpg",
        "/assets/square-1/living-3.jpg",
        "/assets/square-1/plan.jpg",
        "/assets/square-1/bedroom.jpg",
      ],
      story: [
        {
          title: "Urban Integration",
          description:
            "The design process began with careful analysis of the Business Bay context, identifying opportunities to create a building that would stand out while harmonizing with surrounding developments.",
          image: "/images/projects/square-I.png",
        },
        {
          title: "Spatial Organization",
          description:
            "Floor plans were optimized to create efficient unit layouts with logical flow between spaces, maximizing usable area while ensuring generous proportions in key living areas.",
          image: "/assets/square-1/plan.jpg",
        },
        {
          title: "Common Areas",
          description:
            "Lobbies and amenity spaces were designed to create an immediate impression of quality and sophistication, with carefully selected materials and lighting creating a welcoming atmosphere.",
          image: "/assets/square-1/lobby.jpg",
        },
        {
          title: "Interior Design",
          description:
            "Residential interiors feature neutral palettes that serve as perfect backgrounds for residents' personal styles, with subtle details adding interest and quality throughout.",
          image: "/assets/square-1/bed-2.jpg",
        },
        {
          title: "Living Spaces",
          description:
            "Living areas were designed to balance openness with definition, creating spaces that flow together while maintaining clear functional zones for different activities.",
          image: "/assets/square-1/interior-2.jpg",
        },
      ],
      testimonial: {
        quote:
          "LAZONE delivered a residential development that exceeds expectations in both architectural design and interior quality. Their attention to detail and understanding of the premium residential market created a building that has been exceptionally well-received by buyers and residents alike.",
        name: "Ahmed Al Mansouri",
        position: "Managing Director",
        company: "Business Bay Development",
        image: "/placeholder.svg?height=400&width=400",
      },
      virtualTour: [],
    },
    "square-II": {
      title: "SQUARE II",
      category: "Interior Design",
      client: "Business Bay Properties",
      location: "Business Bay, Dubai",
      year: "2023",
      size: "28,000 m²",
      services: ["Interior Design", "Furnishing & Fit-Out", "Lobby Design"],
      heroImage: "/assets/square-2/main-view.jpg",
      description: [
        "SQUARE II represents an evolution in residential interior design, with a focus on creating versatile living spaces that adapt to residents' changing needs.",
        "Our design strategy emphasizes spacious layouts, premium finishes, and thoughtful details that elevate everyday living experiences.",
        "Each residence features carefully considered material palettes that balance visual warmth with durability, creating spaces that feel both luxurious and livable.",
      ],
      approach: [
        "Interior layouts were developed to maximize spatial efficiency while maintaining generous proportions in key living areas, with particular attention to natural light and flow between spaces.",
        "Material and finish selections were guided by principles of longevity and timelessness, avoiding trends in favor of enduring quality and visual appeal.",
        "Lighting design was integrated from the beginning of the process, with layered solutions that adapt to different activities and times of day.",
      ],
      approachImage: "/assets/square-2/living.jpg",
      gallery: [
        "/assets/square-2/main-view.jpg",
        "/assets/square-2/living.jpg",
        "/assets/square-2/kitchen.jpg",
        "/assets/square-2/bedroom.jpg",
        "/assets/square-2/balcony.jpg",
        "/assets/square-2/dining.jpg",
        "/images/projects/square-II.png",
      ],
      story: [
        {
          title: "Design Vision",
          description:
            "The vision for SQUARE II was to create residential interiors that feel both sophisticated and comfortable, with a timeless quality that would transcend changing trends.",
          image: "/assets/square-2/main-view.jpg",
        },
        {
          title: "Living Spaces",
          description:
            "Open-plan living areas were designed with flexibility in mind, allowing residents to adapt spaces to their changing needs while maintaining clear functional zones.",
          image: "/assets/square-2/living.jpg",
        },
        {
          title: "Kitchen Design",
          description:
            "Kitchens feature clean lines and innovative storage solutions, with premium appliances integrated into cabinetry for a sleek, cohesive appearance.",
          image: "/assets/square-2/kitchen.jpg",
        },
        {
          title: "Bedroom Retreats",
          description:
            "Bedrooms were conceived as tranquil retreats, with careful attention to proportions, storage, and lighting creating spaces that promote rest and relaxation.",
          image: "/assets/square-2/bedroom.jpg",
        },
        {
          title: "Outdoor Connection",
          description:
            "Terraces and balconies were designed as natural extensions of interior spaces, with durable materials and thoughtful detailing creating comfortable outdoor living environments.",
          image: "/assets/square-2/balcony.jpg",
        },
      ],
      testimonial: {
        quote:
          "LAZONE's interior design for SQUARE II has set a new standard in the residential market. Their thoughtful approach to space planning and material selection has created homes that truly enhance residents' daily lives. The attention to detail and quality is evident in every aspect of the design.",
        name: "Fatima Rahman",
        position: "Creative Director",
        company: "Business Bay Properties",
        image: "/placeholder.svg?height=400&width=400",
      },
      virtualTour: [],
    },
    "majan-twin": {
      title: "MAJAN TWIN",
      category: "Lifestyle & Wellbeing",
      client: "Wadi AlSafa Development",
      location: "Majan, Wadi AlSafa, Dubai",
      year: "2021",
      size: "25,000 m²",
      services: ["Interior Design", "Lifestyle & Wellbeing"],
      heroImage: "/images/projects/twin.png",
      description: [
        "MAJAN TWIN is a dual-tower residential development that prioritizes resident wellbeing through thoughtful design of both architecture and amenity spaces.",
        "The project incorporates extensive wellness facilities, including fitness centers, spa areas, meditation rooms, and outdoor recreation spaces designed to promote physical and mental health.",
        "Our integrated approach to lifestyle design ensures that wellness isn't just an add-on amenity but is woven into the fabric of the entire residential experience.",
      ],
      approach: [
        "We approached this project with a holistic view of wellbeing, considering how design decisions at every scale - from project management to material selection - impact resident health and happiness.",
        "Biophilic design principles informed many aspects of the project, with abundant natural light, ventilation, views to nature, and natural materials creating spaces that support human wellbeing.",
        "Community and social connection were prioritized through the design of shared spaces that encourage interaction while still providing opportunities for privacy and solitude when desired.",
      ],
      approachImage: "/images/projects/twin.png",
      gallery: [
        "/assets/majan-twin/image61.jpeg",
        "/assets/majan-twin/image69.jpeg",
        "/assets/majan-twin/image70.jpeg",
        "/assets/majan-twin/image69.jpeg",
        "/assets/majan-twin/image70.jpeg",
        "/assets/majan-twin/image61.jpeg",
      ],
      story: [
        {
          title: "Wellness Vision",
          description:
            "The vision for MAJAN TWIN was to create a residential development that goes beyond providing shelter to actively support residents' physical, mental, and social wellbeing through thoughtful design.",
          image: "/assets/majan-twin/image61.jpeg",
        },
        {
          title: "Twin Tower Concept",
          description:
            "The twin tower design creates a visual dialogue between the buildings while allowing for efficient organization of units and amenities, with each tower having its own distinct character within a unified overall design.",
          image: "/assets/majan-twin/image69.jpeg",
        },
        {
          title: "Wellness Amenities",
          description:
            "Extensive wellness facilities were integrated throughout the development, from rooftop yoga decks to spa facilities, fitness centers, and quiet contemplation spaces designed to support diverse wellbeing practices.",
          image: "/assets/majan-twin/image70.jpeg",
        },
        {
          title: "Outdoor Spaces",
          description:
            "Landscaped areas between and around the towers provide opportunities for outdoor exercise, social gatherings, or quiet relaxation, with a variety of spaces supporting different activities and preferences.",
          image: "/assets/majan-twin/image61.jpeg",
        },
        {
          title: "Healthy Materials",
          description:
            "Interior materials were selected not only for their aesthetic qualities but also for their health impacts, with a focus on low-VOC finishes, natural materials, and good indoor air quality throughout the development.",
          image: "/assets/majan-twin/image69.jpeg",
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
    "cb10-villa": {
      title: "CB10 Luxury Villa",
      category: "Interior Design",
      client: "Private Client",
      location: "Palm Jumeirah, Dubai",
      year: "2024",
      size: "1,200 m²",
      services: ["Interior Design", "Furnishing & Fit-Out", "Lobby Design"],
      heroImage: "/images/projects/cb10-villa.jpg",
      description: [
        "CB10 Luxury Villa represents the pinnacle of contemporary luxury living, seamlessly blending sophisticated design with comfortable functionality.",
        "Our design approach focused on creating fluid spaces that transition effortlessly between indoor and outdoor living areas, taking full advantage of the Palm Jumeirah location.",
        "Each room was carefully curated with bespoke furnishings and unique design elements that reflect the client's refined taste while maintaining a warm, inviting atmosphere.",
      ],
      approach: [
        "The interior design concept revolves around creating a harmonious balance between luxury and comfort, using a carefully selected palette of premium materials and textures.",
        "Special attention was paid to the lighting design, incorporating both natural and artificial light sources to enhance the architectural features and create different moods throughout the day.",
        "Custom furniture pieces were designed specifically for key spaces, ensuring perfect proportions and optimal functionality while maintaining the overall design aesthetic.",
      ],
      approachImage: "/images/projects/cb10-villa.jpg",
      gallery: [
        "/images/projects/cb10-villa.jpg",
        "/assets/cb10-villa/ex1.jpg",
        "/assets/cb10-villa/ex2.jpg",
        "/assets/cb10-villa/guest01.jpg",
        "/assets/cb10-villa/guest02.jpg",
        "/assets/cb10-villa/cinema2.jpg",
      ],
      story: [
        {
          title: "Client Vision",
          description: "The project began with a clear vision from our client: to create a contemporary luxury villa that would serve as both a private retreat and an entertainment space.",
          image: "/images/projects/cb10-villa.jpg",
        },
        {
          title: "Space Planning",
          description: "The layout was carefully planned to optimize flow between spaces while maintaining privacy where needed, with particular attention to the master suite and entertainment areas.",
          image: "/assets/cb10-villa/ex1.jpg",
        },
        {
          title: "Material Selection",
          description: "We selected a sophisticated palette of materials including natural stone, exotic woods, and premium textiles to create a luxurious yet welcoming atmosphere.",
          image: "/assets/cb10-villa/ex2.jpg",
        },
        {
          title: "Lighting Design",
          description: "A comprehensive lighting scheme was developed to enhance the architecture and create ambiance, combining natural light with carefully positioned artificial lighting.",
          image: "/assets/cb10-villa/guest01.jpg",
        },
      ],
    },
    "ermax-residence": {
      title: "ERMAX Modern Residence",
      category: "Architecture",
      client: "ERMAX Development",
      location: "Downtown Dubai",
      year: "2024",
      size: "18,000 m²",
      services: ["Architecture", "Interior Design", "Project Management"],
      heroImage: "/images/projects/ermax-residence.jpg",
      description: [
        "ERMAX Modern Residence is a striking architectural masterpiece that redefines luxury living in Downtown Dubai.",
        "The design emphasizes clean lines and bold geometries while maintaining a strong connection to the surrounding urban context.",
        "Sustainability and innovation are key features of the project, with smart home technology and energy-efficient systems integrated throughout.",
      ],
      approach: [
        "The architectural concept focuses on creating a dynamic form that responds to both environmental conditions and urban context.",
        "Advanced building technologies and sustainable materials were incorporated to minimize environmental impact while maximizing comfort.",
        "The facade design creates an ever-changing play of light and shadow throughout the day, while providing optimal thermal performance.",
      ],
      approachImage: "/images/projects/ermax-residence.jpg",
      gallery: [
        "/images/projects/ermax-residence.jpg",
        "/assets/ermax/1.jpg",
        "/assets/ermax/2.jpg",
        "/assets/ermax/3.jpg",
        "/assets/ermax/5.jpg",
        "/assets/ermax/9.jpg",
      ],
      story: [
        {
          title: "Concept Development",
          description: "The initial concept was inspired by the dynamic energy of Downtown Dubai, with a design that would stand out while complementing the urban fabric.",
          image: "/images/projects/ermax-residence.jpg",
        },
        {
          title: "Sustainable Design",
          description: "Environmental considerations were integrated from the start, with passive solar design and smart systems reducing energy consumption.",
          image: "/assets/ermax/2.jpg",
        },
        {
          title: "Construction Innovation",
          description: "Advanced construction techniques and materials were employed to achieve the complex geometries while ensuring structural integrity.",
          image: "/assets/ermax/3.jpg",
        },
        {
          title: "Interior Integration",
          description: "The interior design was developed in parallel with the architecture to ensure a seamless flow between indoor and outdoor spaces.",
          image: "/assets/ermax/4.jpg",
        },
      ],
    },
    "terva-homes": {
      title: "Terva Contemporary Living",
      category: "Architecture",
      client: "Terva Development Group",
      location: "Dubai Hills Estate, Dubai",
      year: "2024",
      size: "25,000 m²",
      services: ["Architecture", "Interior Design", "Project Management"],
      heroImage: "/images/projects/terva-homes.jpg",
      description: [
        "Terva Contemporary Living is a collection of modern residential units that redefine community living in Dubai Hills Estate.",
        "The project combines contemporary architecture with sustainable design principles to create homes that are both beautiful and environmentally conscious.",
        "Each residence is thoughtfully designed to maximize space and natural light while providing privacy and comfort for residents.",
      ],
      approach: [
        "The design approach focused on creating a harmonious balance between private spaces and community areas, fostering a sense of belonging.",
        "Natural materials and native landscaping were integrated throughout the development to create a sustainable and low-maintenance environment.",
        "Each home was designed with flexibility in mind, allowing for customization while maintaining the overall architectural integrity.",
      ],
      approachImage: "/images/projects/terva-homes.jpg",
      gallery: [
        "/images/projects/terva-homes.jpg",
        "/assets/terva-homes/1.jpg",
        "/assets/terva-homes/2.jpg",
        "/assets/terva-homes/4.jpg",
        "/assets/terva-homes/5.jpg",
        "/assets/terva-homes/bath.jpg",
      ],
      story: [
        {
          title: "Community Planning",
          description: "The project began with comprehensive project management to create a development that would foster social interaction while respecting privacy.",
          image: "/assets/terva-homes/1.jpg",
        },
        {
          title: "Sustainable Integration",
          description: "Sustainable features were integrated into every aspect of the design, from material selection to energy systems.",
          image: "/assets/terva-homes/2.jpg",
        },
        {
          title: "Landscape Design",
          description: "The landscape design creates a seamless connection between built and natural environments, with careful consideration for local climate.",
          image: "/assets/terva-homes/5.jpg",
        },
        {
          title: "Interior Spaces",
          description: "Interior spaces were designed to be flexible and adaptable, with high-quality finishes and attention to detail throughout.",
          image: "/assets/terva-homes/4.jpg",
        },
      ],
    },
    "square-III": {
      title: "THE SQUARE III",
      category: "Architecture",
      client: "D.I.C Development",
      location: "D.I.C, Saih Shuaib, Dubai",
      year: "2026",
      size: "216,751 sqft",
      services: ["Architecture", "Retail Design", "Project Management"].filter(s => ["Interior Design", "Architecture", "Lifestyle & Wellbeing", "Lobby Design", "Project Management", "Furnishing & Fit-Out"].includes(s)),
      heroImage: "/images/projects/square-III.jpg",
      description: [
        "THE SQUARE III is a sophisticated G+6F+R residential and retail building that combines modern living spaces with commercial opportunities.",
        "The project features a carefully planned unit mix of 1BR, 2BR, and 3BR apartments, complemented by retail spaces on the ground floor.",
        "The design emphasizes functionality and comfort while maintaining a strong visual presence in the Saih Shuaib area.",
      ],
      approach: [
        "The architectural concept focuses on creating a balanced relationship between residential and retail spaces, ensuring both functions complement each other.",
        "Special attention was paid to the building's orientation and massing to optimize views and natural light for residential units.",
        "The retail spaces were designed with flexibility in mind, accommodating various commercial needs while maintaining visual coherence.",
      ],
      approachImage: "/images/projects/square-III.jpg",
      gallery: [
        "/assets/square-3/image63.jpeg",
        "/assets/square-3/image64.jpeg",
        "/assets/square-3/image63.jpeg",
        "/assets/square-3/image64.jpeg",
        "/assets/square-3/image63.jpeg",
        "/assets/square-3/image64.jpeg",
      ],
      story: [
        {
          title: "Site Analysis",
          description: "The project began with a thorough analysis of the site context and surrounding urban fabric to ensure the building would integrate seamlessly with its environment.",
          image: "/assets/square-3/image63.jpeg",
        },
        {
          title: "Unit Planning",
          description: "Residential units were carefully planned to maximize space efficiency while providing comfortable living environments for different family sizes.",
          image: "/assets/square-3/image64.jpeg",
        },
        {
          title: "Retail Integration",
          description: "The retail spaces were designed to create an engaging street presence while maintaining privacy for residential units above.",
          image: "/assets/square-3/image63.jpeg",
        },
        {
          title: "Facade Design",
          description: "The building's facade was developed to create visual interest while responding to Dubai's climate and providing appropriate shading and privacy.",
          image: "/assets/square-3/image64.jpeg",
        },
      ],
    },
    "majan-plaza": {
      title: "MAJAN PLAZA",
      category: "Architecture",
      client: "Majan Development",
      location: "Majan, Wadi AlSafa, Dubai",
      year: "2027",
      size: "806,000 sqft",
      services: ["Architecture", "Project Management"],
      heroImage: "/images/projects/majan-plaza.jpg",
      description: [
        "MAJAN PLAZA is a landmark mixed-use development featuring a 2B+6+29F tower that combines residential, retail, and office spaces.",
        "The project offers a diverse unit mix including 2BR, 3BR, 4BR Duplex, and 5BR Duplex apartments, complemented by a shopping mall and office spaces.",
        "The design creates a vibrant urban environment that serves both residents and visitors while maintaining a strong architectural presence.",
      ],
      approach: [
        "The architectural concept emphasizes vertical connectivity and spatial efficiency, creating a seamless flow between different programmatic elements.",
        "The design incorporates sustainable features and smart building technologies to ensure long-term efficiency and comfort.",
        "Public spaces were carefully planned to encourage social interaction while maintaining privacy for residential areas.",
      ],
      approachImage: "/images/projects/majan-plaza.jpg",
      gallery: [
        "/assets/majan-plaza/image65.jpeg",
        "/assets/majan-plaza/image66.jpeg",
        "/assets/majan-plaza/image67.jpeg",
        "/assets/majan-plaza/image65.jpeg",
        "/assets/majan-plaza/image66.jpeg",
        "/assets/majan-plaza/image67.jpeg",
      ],
      story: [
        {
          title: "Master Planning",
          description: "The project began with comprehensive project management to create a balanced mix of uses while ensuring efficient circulation and access.",
          image: "/assets/majan-plaza/image65.jpeg",
        },
        {
          title: "Residential Design",
          description: "Residential units were designed to offer luxury living with panoramic views, incorporating flexible layouts to accommodate various lifestyles.",
          image: "/assets/majan-plaza/image66.jpeg",
        },
        {
          title: "Commercial Spaces",
          description: "The shopping mall and office spaces were planned to create an engaging retail experience while maintaining operational efficiency.",
          image: "/assets/majan-plaza/image67.jpeg",
        },
        {
          title: "Public Realm",
          description: "The public spaces were designed to create a welcoming environment that encourages social interaction and community engagement.",
          image: "/assets/majan-plaza/image65.jpeg",
        },
      ],
    },
    "arjan-diamond": {
      title: "ARJAN DIAMOND",
      category: "Architecture",
      client: "Arjan Development",
      location: "Arjan, AlBarsha South, Dubai",
      year: "2026",
      size: "128,914 sqft",
      services: ["Architecture", "Project Management"],
      heroImage: "/images/projects/arjan-diamond.jpg",
      description: [
        "ARJAN DIAMOND is a sophisticated B+G+4F+R commercial building that combines retail and office spaces in a modern architectural setting.",
        "The project features a carefully planned mix of shopping mall and office spaces, creating a dynamic commercial environment.",
        "The design emphasizes functionality and flexibility while maintaining a strong visual identity in the Arjan area.",
      ],
      approach: [
        "The architectural concept focuses on creating an efficient and engaging commercial environment that serves both retail and office users.",
        "Special attention was paid to circulation and wayfinding, ensuring easy navigation through the building's various spaces.",
        "The design incorporates sustainable features and smart building technologies to ensure optimal performance and user comfort.",
      ],
      approachImage: "/images/projects/arjan-diamond.jpg",
      gallery: [
        "/assets/arjan-diamond/image71.jpeg",
        "/assets/arjan-diamond/image49.jpeg",
        "/assets/arjan-diamond/image53.jpeg",
        "/assets/arjan-diamond/image49.jpeg",
        "/assets/arjan-diamond/image53.jpeg",
        "/assets/arjan-diamond/image71.jpeg",
      ],
      story: [
        {
          title: "Commercial Planning",
          description: "The project began with careful analysis of commercial requirements and market needs to create spaces that would serve both retail and office users effectively.",
          image: "/assets/arjan-diamond/image71.jpeg",
        },
        {
          title: "Retail Design",
          description: "The shopping mall was designed to create an engaging retail experience with flexible spaces that can accommodate various tenant needs.",
          image: "/assets/arjan-diamond/image49.jpeg",
        },
        {
          title: "Office Spaces",
          description: "Office spaces were planned to provide efficient layouts while maintaining flexibility for different business requirements.",
          image: "/assets/arjan-diamond/image53.jpeg",
        },
        {
          title: "Facade Development",
          description: "The building's facade was designed to create a distinctive presence while responding to Dubai's climate and providing appropriate shading.",
          image: "/assets/arjan-diamond/image71.jpeg",
        },
      ],
    },
    "living-heaven": {
      title: "LIVING HEAVEN",
      category: "Architecture",
      client: "Wadi Al Safa Development",
      location: "Wadi Al Safa, Dubai",
      year: "2027",
      size: "681,290 sqft",
      services: ["Architecture", "Project Management", "Landscape Design"].filter(s => ["Interior Design", "Architecture", "Lifestyle & Wellbeing", "Lobby Design", "Project Management", "Furnishing & Fit-Out"].includes(s)),
      heroImage: "/images/projects/living-heaven.jpg",
      description: [
        "LIVING HEAVEN is a comprehensive residential development featuring 6+13F+R and G+20F+R buildings that offer diverse living options.",
        "The project provides a wide range of unit types from 1BR to 6BR Triplex, catering to various family sizes and lifestyles.",
        "The design creates a harmonious living environment that combines modern architecture with thoughtful amenities and landscaping.",
      ],
      approach: [
        "The architectural concept emphasizes creating a balanced community with diverse housing options and shared amenities.",
        "Special attention was paid to the relationship between buildings and outdoor spaces, creating a cohesive living environment.",
        "The design incorporates sustainable features and smart building technologies to ensure long-term efficiency and comfort.",
      ],
      approachImage: "/images/projects/living-heaven.jpg",
      gallery: [
        "/assets/living-heaven/image72.jpeg",
        "/assets/living-heaven/image72.jpeg",
        "/assets/living-heaven/image72.jpeg",
        "/assets/living-heaven/image72.jpeg",
        "/assets/living-heaven/image72.jpeg",
        "/assets/living-heaven/image72.jpeg",
      ],
      story: [
        {
          title: "Master Planning",
          description: "The project began with comprehensive project management to create a balanced community with diverse housing options and shared amenities.",
          image: "/assets/living-heaven/image72.jpeg",
        },
        {
          title: "Unit Design",
          description: "Residential units were carefully planned to maximize space efficiency while providing comfortable living environments for different family sizes.",
          image: "/assets/living-heaven/image72.jpeg",
        },
        {
          title: "Amenity Spaces",
          description: "Shared amenities were designed to create opportunities for social interaction while maintaining privacy for residents.",
          image: "/assets/living-heaven/image72.jpeg",
        },
        {
          title: "Landscape Integration",
          description: "The landscape design creates a seamless connection between buildings and outdoor spaces, enhancing the overall living experience.",
          image: "/assets/living-heaven/image72.jpeg",
        },
      ],
    },
    "yd-villa": {
      title: "YD VILLA",
      category: "Architecture",
      client: "Private Client",
      location: "The Villa Community, Dubailand, Dubai",
      year: "2023",
      size: "11,144 sqft",
      services: ["Architecture", "Interior Design", "Project Management"],
      heroImage: "/images/projects/yd-villa.jpg",
      description: [
        "YD VILLA is a luxurious G+1F residential villa that combines sophisticated design with comfortable living spaces.",
        "The project features a spacious 6BR layout designed to accommodate extended family living while maintaining privacy and comfort.",
        "The design emphasizes the connection between indoor and outdoor spaces, creating a seamless living experience.",
      ],
      approach: [
        "The architectural concept focuses on creating a harmonious balance between private and shared spaces within the villa.",
        "Special attention was paid to natural light and ventilation, ensuring comfortable living conditions throughout the year.",
        "The design incorporates sustainable features and smart home technologies to enhance the living experience.",
      ],
      approachImage: "/images/projects/yd-villa.jpg",
      gallery: [
        "/assets/yd-villa/image81.png",
        "/assets/yd-villa/image89.jpeg",
        "/assets/yd-villa/image90.jpeg",
        "/assets/yd-villa/image81.png",
        "/assets/yd-villa/image89.jpeg",
        "/assets/yd-villa/image90.jpeg",
      ],
      story: [
        {
          title: "Client Vision",
          description: "The project began with understanding the client's vision for a family home that would accommodate their specific needs and lifestyle.",
          image: "/assets/yd-villa/image81.png",
        },
        {
          title: "Space Planning",
          description: "The villa's layout was carefully planned to create a natural flow between spaces while maintaining privacy where needed.",
          image: "/assets/yd-villa/image89.jpeg",
        },
        {
          title: "Material Selection",
          description: "Materials were selected for their durability and aesthetic qualities, creating a timeless and sophisticated appearance.",
          image: "/assets/yd-villa/image90.jpeg",
        },
        {
          title: "Landscape Design",
          description: "The outdoor spaces were designed to extend the living areas and create a seamless connection with nature.",
          image: "/assets/yd-villa/image81.png",
        },
      ],
    },
    "mallorca": {
      title: "MALLORCA",
      category: "Architecture",
      client: "Private Client",
      location: "The Villa Community, Dubailand, Dubai",
      year: "2023",
      size: "12,574 sqft",
      services: ["Architecture", "Interior Design", "Project Management"],
      heroImage: "/images/projects/mallorca.jpg",
      description: [
        "MALLORCA is an elegant G+1F residential villa that combines Mediterranean-inspired design with modern luxury.",
        "The project features a spacious 7BR layout designed to accommodate extended family living while maintaining privacy and comfort.",
        "The design emphasizes the connection between indoor and outdoor spaces, creating a resort-like living experience.",
      ],
      approach: [
        "The architectural concept draws inspiration from Mediterranean architecture while incorporating modern design elements.",
        "Special attention was paid to creating a seamless flow between indoor and outdoor living spaces.",
        "The design incorporates sustainable features and smart home technologies to enhance the living experience.",
      ],
      approachImage: "/images/projects/mallorca.jpg",
      gallery: [
        "/assets/mallorca/image86.jpeg",
        "/assets/mallorca/image87.jpeg",
        "/assets/mallorca/image88.jpeg",
        "/assets/mallorca/image86.jpeg",
        "/assets/mallorca/image87.jpeg",
        "/assets/mallorca/image88.jpeg",
      ],
      story: [
        {
          title: "Design Inspiration",
          description: "The project began with exploring Mediterranean architectural elements and adapting them to Dubai's climate and context.",
          image: "/assets/mallorca/image86.jpeg",
        },
        {
          title: "Space Planning",
          description: "The villa's layout was carefully planned to create a natural flow between spaces while maintaining privacy where needed.",
          image: "/assets/mallorca/image87.jpeg",
        },
        {
          title: "Material Selection",
          description: "Materials were selected to reflect Mediterranean aesthetics while ensuring durability in Dubai's climate.",
          image: "/assets/mallorca/image88.jpeg",
        },
        {
          title: "Outdoor Living",
          description: "The outdoor spaces were designed to create a resort-like atmosphere with various entertainment and relaxation areas.",
          image: "/assets/mallorca/image86.jpeg",
        },
      ],
    },
    "black-pearl-villa": {
      title: "BLACK PEARL VILLA",
      category: "Architecture",
      client: "Private Client",
      location: "Pearl Jumeirah Island, Jumeirah First, Dubai",
      year: "2025",
      size: "16,544 sqft",
      services: ["Architecture", "Interior Design", "Project Management"],
      heroImage: "/images/projects/black-pearl-villa.jpg",
      description: [
        "BLACK PEARL VILLA is a luxurious B+G+1F+R residential villa that combines sophisticated design with waterfront living.",
        "The project features a spacious 5BR layout designed to maximize views of the surrounding water while maintaining privacy.",
        "The design emphasizes the connection between indoor and outdoor spaces, creating a seamless living experience with the water.",
      ],
      approach: [
        "The architectural concept focuses on creating a harmonious relationship between the villa and its waterfront setting.",
        "Special attention was paid to maximizing views and creating outdoor spaces that take advantage of the water frontage.",
        "The design incorporates sustainable features and smart home technologies to enhance the living experience.",
      ],
      approachImage: "/images/projects/black-pearl-villa.jpg",
      gallery: [
        "/assets/black-pearl-villa/image80.jpeg",
        "/assets/black-pearl-villa/image84.jpeg",
        "/assets/black-pearl-villa/image85.jpeg",
        "/assets/black-pearl-villa/image80.jpeg",
        "/assets/black-pearl-villa/image84.jpeg",
        "/assets/black-pearl-villa/image85.jpeg",
      ],
      story: [
        {
          title: "Site Analysis",
          description: "The project began with careful analysis of the waterfront site to maximize views and create a strong connection with the water.",
          image: "/assets/black-pearl-villa/image80.jpeg",
        },
        {
          title: "Space Planning",
          description: "The villa's layout was carefully planned to create a natural flow between spaces while maximizing water views.",
          image: "/assets/black-pearl-villa/image84.jpeg",
        },
        {
          title: "Material Selection",
          description: "Materials were selected for their durability in a marine environment while maintaining a luxurious aesthetic.",
          image: "/assets/black-pearl-villa/image85.jpeg",
        },
        {
          title: "Waterfront Design",
          description: "The waterfront spaces were designed to create various opportunities for water-based activities and relaxation.",
          image: "/assets/black-pearl-villa/image80.jpeg",
        },
      ],
    },
    "white-ponderosa": {
      title: "WHITE PONDEROSA",
      category: "Furnishing & Fit-Out",
      client: "Private Client",
      location: "The Villa Community, Dubailand, Dubai",
      year: "2024",
      size: "8,948 sqft",
      services: ["Interior Design", "Project Management", "Furnishing & Fit-Out"],
      heroImage: "/images/projects/white-ponderosa.jpg",
      description: [
        "WHITE PONDEROSA is an elegant G+1F residential villa that combines contemporary design with comfortable family living.",
        "The project features a spacious 6BR layout designed to accommodate extended family living while maintaining privacy and comfort.",
        "The design emphasizes the connection between indoor and outdoor spaces, creating a seamless living experience.",
      ],
      approach: [
        "The architectural concept focuses on creating a harmonious balance between private and shared spaces within the villa.",
        "Special attention was paid to natural light and ventilation, ensuring comfortable living conditions throughout the year.",
        "The design incorporates sustainable features and smart home technologies to enhance the living experience.",
      ],
      approachImage: "/images/projects/white-ponderosa.jpg",
      gallery: [
        "/assets/white-ponderosa/image79.jpeg",
        "/assets/white-ponderosa/image82.jpeg",
        "/assets/white-ponderosa/image83.jpeg",
        "/assets/white-ponderosa/image79.jpeg",
        "/assets/white-ponderosa/image82.jpeg",
        "/assets/white-ponderosa/image83.jpeg",
      ],
      story: [
        {
          title: "Client Vision",
          description: "The project began with understanding the client's vision for a family home that would accommodate their specific needs and lifestyle.",
          image: "/assets/white-ponderosa/image79.jpeg",
        },
        {
          title: "Space Planning",
          description: "The villa's layout was carefully planned to create a natural flow between spaces while maintaining privacy where needed.",
          image: "/assets/white-ponderosa/image82.jpeg",
        },
        {
          title: "Material Selection",
          description: "Materials were selected for their durability and aesthetic qualities, creating a timeless and sophisticated appearance.",
          image: "/assets/white-ponderosa/image83.jpeg",
        },
        {
          title: "Landscape Design",
          description: "The outdoor spaces were designed to extend the living areas and create a seamless connection with nature.",
          image: "/assets/white-ponderosa/image79.jpeg",
        },
      ],
    },
    "isha-island": {
      title: "ISHA ISLAND",
      category: "Architecture",
      client: "World Islands Development",
      location: "World Islands, Dubai",
      year: "2028",
      size: "-",
      services: ["Architecture", "Project Management"],
      heroImage: "/images/projects/isha-island.jpg",
      description: [
        "ISHA ISLAND is an exclusive beach-front development featuring 30 luxury villas and a clubhouse on the World Islands.",
        "The project offers a range of villa types from 3BR to 5BR, each designed to maximize views and connection with the water.",
        "The design creates a unique island living experience that combines luxury with natural beauty.",
      ],
      approach: [
        "The architectural concept emphasizes creating a harmonious relationship between the villas and their natural island setting.",
        "Special attention was paid to maximizing views and creating outdoor spaces that take advantage of the beach frontage.",
        "The design incorporates sustainable features and smart technologies to ensure long-term efficiency and comfort.",
      ],
      approachImage: "/images/projects/isha-island.jpg",
      gallery: [
        "/assets/isha-island/image74.jpeg",
        "/assets/isha-island/image75.jpeg",
        "/assets/isha-island/image76.jpeg",
        "/assets/isha-island/image77.jpeg",
        "/assets/isha-island/image74.jpeg",
        "/assets/isha-island/image75.jpeg",
      ],
      story: [
        {
          title: "Island Planning",
          description: "The project began with comprehensive project management of the island's development, considering environmental factors and creating a sustainable community.",
          image: "/assets/isha-island/image74.jpeg",
        },
        {
          title: "Villa Design",
          description: "Each villa was carefully designed to maximize views and create a strong connection with the surrounding water and natural environment.",
          image: "/assets/isha-island/image75.jpeg",
        },
        {
          title: "Clubhouse Development",
          description: "The clubhouse was designed to serve as a central gathering space for residents while offering various amenities and services.",
          image: "/assets/isha-island/image76.jpeg",
        },
        {
          title: "Landscape Integration",
          description: "The landscape design creates a seamless connection between the built environment and the natural island setting.",
          image: "/assets/isha-island/image77.jpeg",
        },
      ],
    },
  }

  return projects[projectSlug as keyof typeof projects]
}

