import PageHeader from "@/components/page-header"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import ScrollReveal from "@/components/scroll-reveal"

type Project = {
  id: string
  title: string
  category: string
  location: string
  year: string
  image: string
  featured: boolean
}

export default function PortfolioPage() {
  const projects: Project[] = [
    {
      id: "riverside-penthouse",
      title: "Riverside Penthouse",
      category: "Interior Design",
      location: "New York, USA",
      year: "2023",
      image: "/images/projects.png",
      featured: true,
    },
    {
      id: "glass-pavilion",
      title: "Glass Pavilion",
      category: "Architecture",
      location: "Los Angeles, USA",
      year: "2022",
      image: "/images/pent-house.png",
      featured: true,
    },
    {
      id: "minimalist-villa",
      title: "Minimalist Villa",
      category: "Interior Design",
      location: "Santorini, Greece",
      year: "2022",
      image: "/images/vila.png",
      featured: false,
    },
    {
      id: "coastal-residence",
      title: "Coastal Residence",
      category: "Architecture",
      location: "Sydney, Australia",
      year: "2021",
      image: "/images/projects.png",
      featured: false,
    },
    {
      id: "luxury-retail-space",
      title: "Luxury Retail Space",
      category: "Lighting Design",
      location: "Paris, France",
      year: "2022",
      image: "/images/luxury-retail.png",
      featured: false,
    },
    {
      id: "university-campus",
      title: "University Campus",
      category: "Master Planning",
      location: "Boston, USA",
      year: "2020",
      image: "/images/projects.png",
      featured: false,
    },
    {
      id: "modular-lounge-system",
      title: "Modular Lounge System",
      category: "Furnishings Product",
      location: "Copenhagen, Denmark",
      year: "2023",
      image: "/images/projects.png",
      featured: false,
    },
    {
      id: "mindful-office",
      title: "Mindful Office",
      category: "Lifestyle & Wellbeing",
      location: "Tokyo, Japan",
      year: "2022",
      image: "/images/projects.png",
      featured: false,
    },
  ]

  const categories = [
    "all",
    "Interior Design",
    "Architecture",
    "Lighting Design",
    "Master Planning",
    "Furnishings Product",
    "Lifestyle & Wellbeing",
  ]

  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Explore our selected works across various disciplines"
        className="bg-gradient-to-r from-architect-neutral to-architect-neutral"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal animation="fade-bottom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-foreground/80 leading-relaxed">
                Our portfolio showcases a diverse range of projects that reflect our commitment to innovative design,
                functionality, and aesthetic excellence. Each project represents a unique collaboration between our
                creative vision and our clients' aspirations.
              </p>
            </div>
          </ScrollReveal>

          <PortfolioGrid projects={projects} categories={categories} />
        </div>
      </section>
    </>
  )
}

