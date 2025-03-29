import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import RelatedProjects from "@/components/projects/related-projects"
import ProjectStory from "@/components/projects/project-story"
import PanoramaViewer from "@/components/virtual-tour/panorama-viewer"
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

      {/* Virtual Tour */}
      {projectData.virtualTour && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollReveal animation="fade-bottom">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-4">Virtual Tour</h2>
                <div className="w-20 h-0.5 bg-architect-vibrant mx-auto mb-4"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore the space virtually and discover the key design features
                </p>
              </div>
            </ScrollReveal>

            <PanoramaViewer scenes={projectData.virtualTour} />
          </div>
        </section>
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

      {/* Client Testimonial */}
      {projectData.testimonial && (
        <section className="py-16 md:py-24 bg-architect-tertiary/10">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollReveal animation="fade-bottom">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-4">Client Feedback</h2>
                <div className="w-20 h-0.5 bg-architect-vibrant mx-auto"></div>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto testimonial-card">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={projectData.testimonial.image || "/placeholder.svg"}
                    alt={projectData.testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl italic mb-4">{projectData.testimonial.quote}</p>
                  <div>
                    <p className="font-medium text-lg">{projectData.testimonial.name}</p>
                    <p className="text-muted-foreground">
                      {projectData.testimonial.position}, {projectData.testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <RelatedProjects currentProject={params.project} category={projectData.category} />

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
    "riverside-penthouse": {
      title: "Riverside Penthouse",
      category: "Interior Design",
      client: "Private Client",
      location: "New York, USA",
      year: "2023",
      size: "450 m²",
      services: ["Interior Design", "Furnishings Product", "Lighting Design"],
      heroImage: "/placeholder.svg?height=1200&width=2000",
      description: [
        "This luxury penthouse overlooking the Hudson River required a complete interior redesign to maximize the spectacular views while creating a sophisticated, comfortable living environment.",
        "Our approach balanced contemporary elegance with warmth, using a neutral palette accented with carefully selected materials and textures. The open-plan layout was designed to enhance flow between spaces while maintaining distinct functional zones.",
        "Custom furnishings and lighting solutions were developed specifically for the project, ensuring each element contributed to the cohesive design narrative while meeting the client's practical needs.",
      ],
      approach: [
        "The design concept centered on creating a dialogue between the interior and the dramatic city and river views. Large windows were left unobstructed, with seating arranged to capitalize on the vistas.",
        "Materials were selected for their tactile qualities and visual subtlety, with natural stone, warm woods, and soft textiles creating layers of interest without competing with the views.",
        "Lighting was carefully considered to transition from day to night, with a scheme that adapts to different moods and activities while highlighting architectural features and art pieces.",
      ],
      approachImage: "/placeholder.svg?height=800&width=1200",
      gallery: [
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
      ],
      story: [
        {
          title: "Client Brief & Inspiration",
          description:
            "The client, a well-traveled art collector, sought a space that would showcase their collection while providing a serene retreat from city life. Inspired by Japanese minimalism and Scandinavian warmth, we developed a concept that balanced openness with intimacy.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Space Planning & Flow",
          description:
            "The original layout compartmentalized the space, blocking natural light and views. We removed non-structural walls to create an open floor plan that follows the natural circulation patterns while defining zones through subtle architectural elements and material changes.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Material Selection",
          description:
            "We selected a palette of natural materials that would age gracefully: limestone flooring, walnut paneling, and bronze accents. Each material was chosen not only for its aesthetic qualities but also for how it interacts with the changing natural light throughout the day.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Custom Furnishings",
          description:
            "Several key pieces were custom designed for the space, including a floating credenza in the dining area and built-in seating in the living room. These elements were crafted by local artisans, emphasizing our commitment to quality craftsmanship.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Lighting Design",
          description:
            "The lighting scheme was developed to enhance the architecture and art while creating atmosphere. Recessed lighting provides ambient illumination, while targeted fixtures highlight art pieces and architectural features. All lighting is controllable via a smart home system.",
          image: "/placeholder.svg?height=600&width=900",
        },
      ],
      virtualTour: [
        {
          id: "living-room",
          title: "Living Room",
          image: "/placeholder.svg?height=1200&width=2400",
          hotspots: [
            {
              id: "hotspot-1",
              x: 35,
              y: 45,
              title: "Custom Sofa",
              description:
                "Bespoke modular sofa designed specifically for this space, upholstered in Italian wool bouclé.",
            },
            {
              id: "hotspot-2",
              x: 65,
              y: 40,
              title: "Sculptural Coffee Table",
              description:
                "Hand-carved marble coffee table by sculptor James Chen, combining functionality with artistic expression.",
            },
            {
              id: "hotspot-3",
              x: 50,
              y: 25,
              title: "Statement Lighting",
              description:
                "Custom brass and glass chandelier designed to create a focal point without obstructing the view.",
            },
          ],
        },
        {
          id: "dining-area",
          title: "Dining Area",
          image: "/placeholder.svg?height=1200&width=2400",
          hotspots: [
            {
              id: "hotspot-4",
              x: 45,
              y: 50,
              title: "Dining Table",
              description: "Solid walnut dining table with live edge, showcasing the natural beauty of the wood.",
            },
            {
              id: "hotspot-5",
              x: 70,
              y: 45,
              title: "Floating Credenza",
              description: "Custom-designed floating credenza with integrated wine storage and serving area.",
            },
            {
              id: "hotspot-6",
              x: 30,
              y: 30,
              title: "Art Installation",
              description: "Site-specific art installation commissioned for this space, responding to the river views.",
            },
          ],
        },
        {
          id: "master-bedroom",
          title: "Master Bedroom",
          image: "/placeholder.svg?height=1200&width=2400",
          hotspots: [
            {
              id: "hotspot-7",
              x: 40,
              y: 55,
              title: "Platform Bed",
              description: "Custom platform bed with integrated nightstands and subtle lighting.",
            },
            {
              id: "hotspot-8",
              x: 65,
              y: 40,
              title: "Reading Nook",
              description: "Comfortable reading area positioned to capture morning light and river views.",
            },
            {
              id: "hotspot-9",
              x: 25,
              y: 35,
              title: "Textile Wall",
              description: "Acoustic wall treatment using handwoven textiles to add warmth and improve sound quality.",
            },
          ],
        },
      ],
      testimonial: {
        quote:
          "LAZONE transformed our vision into a stunning reality. Their attention to detail and innovative approach created a space that perfectly balances aesthetics and functionality. The team's ability to understand our needs and translate them into design was exceptional.",
        name: "Alexandra Reynolds",
        position: "Homeowner",
        company: "Riverside Penthouse",
        image: "/placeholder.svg?height=400&width=400",
      },
    },
    "glass-pavilion": {
      title: "Glass Pavilion",
      category: "Architecture",
      client: "Arts Foundation",
      location: "Los Angeles, USA",
      year: "2022",
      size: "850 m²",
      services: ["Architecture", "Interior Design", "Landscape Design"],
      heroImage: "/placeholder.svg?height=1200&width=2000",
      description: [
        "The Glass Pavilion was designed as a multipurpose cultural space set within a sculpture garden. The brief called for a transparent structure that would showcase art while maintaining a strong connection to the surrounding landscape.",
        "Our architectural solution features expansive glass walls supported by a minimal steel framework, creating the impression of a floating roof plane. The boundary between interior and exterior is deliberately blurred, allowing nature to become part of the exhibition experience.",
        "The pavilion includes flexible gallery spaces, a small auditorium, and support facilities, all designed with adaptability in mind to accommodate various types of exhibitions and events.",
      ],
      approach: [
        "The design process began with careful site analysis to determine optimal orientation, views, and relationship to existing landscape features. The building's footprint and form were developed to minimize disruption to the natural environment.",
        "Technical challenges of creating a predominantly glass structure in a seismically active region were addressed through innovative structural solutions and advanced glazing systems that ensure safety while maintaining visual lightness.",
        "Sustainability was integrated throughout, with passive cooling strategies, photovoltaic panels embedded in the roof, and a rainwater harvesting system that supplies irrigation for the surrounding gardens.",
      ],
      approachImage: "/placeholder.svg?height=800&width=1200",
      gallery: [
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
      ],
      story: [
        {
          title: "Concept Development",
          description:
            "The concept for the Glass Pavilion emerged from the client's desire to create a space where art and nature could coexist and enhance one another. Drawing inspiration from modernist glass houses and Japanese pavilions, we developed a design that prioritizes transparency, lightness, and connection to the landscape.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Site Integration",
          description:
            "The site, a former private estate with mature trees and natural topography, presented both opportunities and constraints. We positioned the pavilion to preserve existing specimen trees while capturing key views and optimizing natural light. The building seems to emerge from the landscape rather than imposing upon it.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Structural Innovation",
          description:
            "Creating a predominantly glass structure in a seismic zone required innovative engineering solutions. We collaborated with structural engineers to develop a system of slender steel columns and a lightweight roof structure that could withstand seismic forces while maintaining the desired aesthetic of transparency and lightness.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Environmental Strategies",
          description:
            "Despite the extensive glazing, the pavilion achieves high energy efficiency through carefully designed overhangs, high-performance glass, and natural ventilation systems. The roof incorporates photovoltaic panels that generate electricity while providing necessary shade to prevent overheating.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Interior Flexibility",
          description:
            "The interior spaces were designed with maximum flexibility to accommodate changing exhibitions and events. Movable partition systems, adjustable lighting tracks, and integrated technology allow the space to transform from open gallery to intimate auditorium or workshop space as needed.",
          image: "/placeholder.svg?height=600&width=900",
        },
      ],
      virtualTour: [
        {
          id: "main-gallery",
          title: "Main Gallery",
          image: "/placeholder.svg?height=1200&width=2400",
          hotspots: [
            {
              id: "hotspot-1",
              x: 45,
              y: 50,
              title: "Floating Ceiling",
              description:
                "The ceiling plane appears to float above the space, concealing structural elements and mechanical systems while providing flexible lighting options.",
            },
            {
              id: "hotspot-2",
              x: 70,
              y: 45,
              title: "Glass Wall System",
              description:
                "Frameless glass walls with minimal structural supports create a seamless connection between interior and exterior spaces.",
            },
            {
              id: "hotspot-3",
              x: 25,
              y: 40,
              title: "Movable Display System",
              description:
                "Custom-designed display panels can be reconfigured to create different exhibition layouts and spatial experiences.",
            },
          ],
        },
        {
          id: "auditorium",
          title: "Auditorium",
          image: "/placeholder.svg?height=1200&width=2400",
          hotspots: [
            {
              id: "hotspot-4",
              x: 50,
              y: 55,
              title: "Acoustic Treatment",
              description:
                "Perforated wood panels provide acoustic control while maintaining the aesthetic warmth of natural materials.",
            },
            {
              id: "hotspot-5",
              x: 30,
              y: 45,
              title: "Retractable Seating",
              description:
                "Seating system can be fully retracted to transform the space for different uses and configurations.",
            },
            {
              id: "hotspot-6",
              x: 65,
              y: 35,
              title: "Projection System",
              description: "State-of-the-art projection and sound systems integrated discreetly into the architecture.",
            },
          ],
        },
        {
          id: "sculpture-garden",
          title: "Sculpture Garden",
          image: "/placeholder.svg?height=1200&width=2400",
          hotspots: [
            {
              id: "hotspot-7",
              x: 40,
              y: 60,
              title: "Water Feature",
              description:
                "Reflecting pool creates a dialogue between the architecture, landscape, and sky through reflection and movement.",
            },
            {
              id: "hotspot-8",
              x: 60,
              y: 50,
              title: "Pavilion View",
              description:
                "From this vantage point, the pavilion appears to dissolve into the landscape, with reflections and transparency blurring the boundaries.",
            },
            {
              id: "hotspot-9",
              x: 25,
              y: 45,
              title: "Sculpture Platform",
              description:
                "Raised platform provides a stage for rotating sculpture exhibitions, with integrated lighting for nighttime viewing.",
            },
          ],
        },
      ],
      testimonial: {
        quote:
          "Working with LAZONE on the Glass Pavilion was a truly collaborative experience. They listened carefully to our vision and translated it into a building that exceeds our expectations. The pavilion has transformed our programming capabilities and created a unique cultural destination that our visitors love.",
        name: "Michael Chen",
        position: "Director",
        company: "Arts Foundation",
        image: "/placeholder.svg?height=400&width=400",
      },
    },
    "wellness-retreat": {
      title: "Wellness Retreat",
      category: "Lifestyle & Wellbeing",
      client: "Wellness Group International",
      location: "Bali, Indonesia",
      year: "2022",
      size: "2,500 m²",
      services: ["Architecture", "Interior Design", "Landscape Design", "Lifestyle & Wellbeing"],
      heroImage: "/placeholder.svg?height=1200&width=2000",
      description: [
        "This comprehensive wellness retreat was designed to provide an immersive healing environment that harmonizes with its tropical setting. The project encompasses accommodation pavilions, treatment spaces, meditation areas, and communal facilities.",
        "Our design approach emphasized biophilic principles, creating spaces that foster connection with nature while providing comfort, privacy, and opportunities for both solitude and community. Local materials and building traditions were reinterpreted in a contemporary context.",
        "Each element of the retreat was considered from both functional and experiential perspectives, ensuring that the environment actively contributes to guests' wellbeing journey through thoughtful spatial design, natural ventilation, and sensory engagement.",
      ],
      approach: [
        "The master plan was developed to respect the existing topography and vegetation, with buildings nestled among trees and oriented to capture prevailing breezes and optimal views. Circulation paths were designed as journeys through the landscape.",
        "Material selection prioritized natural, local, and sustainable options, with an emphasis on craftsmanship and tactile qualities. The palette draws from the surrounding environment, creating a sense of harmony and belonging.",
        "Wellness principles informed every aspect of the design, from the quality of natural light to acoustic considerations, air flow, and the integration of water features that provide both aesthetic value and cooling effects.",
      ],
      approachImage: "/placeholder.svg?height=800&width=1200",
      gallery: [
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
      ],
      story: [
        {
          title: "Wellness Philosophy",
          description:
            "The project began with a deep exploration of the client's wellness philosophy, which emphasizes the integration of mind, body, and spirit with nature. This holistic approach informed every aspect of the design, from master planning to material selection and sensory experiences.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Site Sensitivity",
          description:
            "The 5-acre site features a dramatic topography with lush tropical vegetation and natural water sources. Rather than imposing a rigid design on the landscape, we worked with the existing contours and ecosystems, positioning buildings to minimize disruption to mature trees and natural drainage patterns.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Pavilion Architecture",
          description:
            "The retreat consists of a series of pavilions rather than a single large structure, allowing guests to experience the journey between spaces as part of their wellness experience. Each pavilion is designed with cross-ventilation, optimal daylight, and framed views of nature, creating spaces that breathe with the landscape.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Material Authenticity",
          description:
            "We sourced local materials including reclaimed teak, volcanic stone, and handmade terracotta tiles, working with local craftspeople to incorporate traditional techniques in contemporary ways. These materials connect the architecture to its place while providing rich sensory experiences through texture, scent, and acoustic qualities.",
          image: "/placeholder.svg?height=600&width=900",
        },
        {
          title: "Sensory Design",
          description:
            "Every space was designed with attention to all senses. Gardens feature aromatic plants, water features provide soothing sounds, natural materials offer tactile richness, and carefully framed views create visual harmony. These sensory elements support the retreat's therapeutic goals.",
          image: "/placeholder.svg?height=600&width=900",
        },
      ],
      virtualTour: [
        {
          id: "reception-pavilion",
          title: "Reception Pavilion",
          image: "/placeholder.svg?height=1200&width=2400",
          hotspots: [
            {
              id: "hotspot-1",
              x: 50,
              y: 45,
              title: "Living Roof",
              description:
                "The planted roof provides natural insulation, absorbs rainwater, and visually connects the building to the surrounding landscape.",
            },
            {
              id: "hotspot-2",
              x: 30,
              y: 50,
              title: "Water Feature",
              description:
                "The arrival sequence includes crossing over a reflecting pool, symbolizing the transition from everyday life to the retreat experience.",
            },
            {
              id: "hotspot-3",
              x: 70,
              y: 40,
              title: "Open-Air Design",
              description:
                "The pavilion has no solid walls, allowing breezes to flow through and blurring the boundary between inside and outside.",
            },
          ],
        },
        {
          id: "meditation-space",
          title: "Meditation Space",
          image: "/placeholder.svg?height=1200&width=2400",
          hotspots: [
            {
              id: "hotspot-4",
              x: 45,
              y: 55,
              title: "Acoustic Design",
              description:
                "The circular space is designed with specific acoustic properties to enhance meditation practices, with a perfect balance of sound absorption and reflection.",
            },
            {
              id: "hotspot-5",
              x: 60,
              y: 40,
              title: "Oculus",
              description:
                "The circular opening in the center of the ceiling creates a column of light that moves through the space throughout the day, connecting occupants to the rhythm of the sun.",
            },
            {
              id: "hotspot-6",
              x: 25,
              y: 45,
              title: "Natural Materials",
              description:
                "The floor is made of polished local stone that feels cool to bare feet, while bamboo screens filter light and create gentle shadows.",
            },
          ],
        },
        {
          id: "treatment-pavilion",
          title: "Treatment Pavilion",
          image: "/placeholder.svg?height=1200&width=2400",
          hotspots: [
            {
              id: "hotspot-7",
              x: 40,
              y: 50,
              title: "Private Gardens",
              description:
                "Each treatment room opens onto a private walled garden, allowing treatments to take place indoors or outdoors depending on weather and preference.",
            },
            {
              id: "hotspot-8",
              x: 65,
              y: 45,
              title: "Natural Ventilation",
              description:
                "Louvered walls can be adjusted to control airflow and privacy while maintaining connection to the surrounding environment.",
            },
            {
              id: "hotspot-9",
              x: 30,
              y: 40,
              title: "Integrated Water Elements",
              description:
                "Soaking tubs are built into the floor, with views to private gardens, creating a sense of bathing in nature.",
            },
          ],
        },
      ],
      testimonial: {
        quote:
          "LAZONE's holistic approach to wellness design has transformed our retreat into a sanctuary of peace and rejuvenation. Their understanding of how space affects wellbeing is unparalleled, creating environments that nurture both body and mind. Our guests consistently praise the sense of harmony and tranquility they experience here.",
        name: "Sophia Patel",
        position: "Founder",
        company: "Wellness Group International",
        image: "/placeholder.svg?height=400&width=400",
      },
    },
  }

  return projects[projectSlug as keyof typeof projects]
}

