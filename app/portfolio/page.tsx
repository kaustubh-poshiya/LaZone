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
      id: "THE-SQUARE",
      title: "THE SQUARE",
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
        className="bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal animation="fade-bottom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Our Projects</h2>
              <div className="w-20 h-px bg-lazone-orange mx-auto mb-6"></div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
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

