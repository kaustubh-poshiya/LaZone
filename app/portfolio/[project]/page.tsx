import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import RelatedProjects from "@/components/projects/related-projects"

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
        <div className="absolute inset-0 bg-black/30"></div>
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
              <div className="w-20 h-px bg-neutral-300"></div>
              <div className="space-y-4">
                {projectData.description.map((paragraph, index) => (
                  <p key={index} className="text-neutral-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-neutral-100 p-8">
              <h3 className="text-xl font-serif mb-6">Project Details</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-neutral-500">Client</span>
                  <span className="text-neutral-900">{projectData.client}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-500">Location</span>
                  <span className="text-neutral-900">{projectData.location}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-500">Year</span>
                  <span className="text-neutral-900">{projectData.year}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-500">Size</span>
                  <span className="text-neutral-900">{projectData.size}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-500">Services</span>
                  <span className="text-neutral-900">{projectData.services.join(", ")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-center mb-6">
            Project Gallery
          </h2>
          <div className="w-20 h-px bg-neutral-300 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.gallery.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${projectData.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">Design Approach</h2>
              <div className="w-20 h-px bg-neutral-300"></div>
              <div className="space-y-4">
                {projectData.approach.map((paragraph, index) => (
                  <p key={index} className="text-neutral-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative h-[500px]">
              <Image
                src={projectData.approachImage || "/placeholder.svg"}
                alt={`${projectData.title} - Design Approach`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <RelatedProjects currentProject={params.project} category={projectData.category} />

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
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
    },
  }

  return projects[projectSlug as keyof typeof projects]
}

