import PageHeader from "@/components/page-header"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import ScrollReveal from "@/components/scroll-reveal"

type Project = {
  id: string
  title: string
  categories: string[]
  location: string
  year: string
  image: string
  featured: boolean
}

export default function PortfolioPage() {
  const categories = [
    "all",
    "Interior Design",
    "Architecture",
    "Lifestyle & Wellbeing",
    "Lobby Design",
    "Project Management",
    "Furnishing & Fit-Out",
  ]

  const projects: Project[] = [
    {
      id: "serene",
      year: "2023",
      featured: true,
      title: "Serene Residential Building",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Dubai South, DWC, Dubai",
      image: "/images/projects/serene.png",
    },
    {
      id: "the-wings",
      year: "2022",
      featured: true,
      title: "THE WINGS",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Arjan, AlBarsha South, Dubai",
      image: "/images/projects/wings.png",
    },
    {
      id: "the-harmony",
      title: "THE HARMONY",
      location: "Dubai South, DWC, Dubai",
      image: "/images/projects/harmony.png",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      year: "2022",
      featured: false,
    },
    {
      id: "majan-twin",
      title: "MAJAN TWIN",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Majan, Wadi AlSafa, Dubai ",
      year: "2021",
      image: "/images/projects/twin.png",
      featured: false,
    },
    {
      id: "square-I",
      title: "SQUARE I",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Business Bay, Dubai",
      year: "2022",
      image: "/images/projects/square-I.png",
      featured: true,
    },
    {
      id: "square-II",
      title: "SQUARE II",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Business Bay, Dubai",
      year: "2023",
      image: "/images/projects/square-II.png",
      featured: true,
    },
    {
      id: "cb10-villa",
      title: "CB10 Luxury Villa",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Palm Jumeirah, Dubai",
      year: "2024",
      image: "/images/projects/cb10-villa.jpg",
      featured: true,
    },
    {
      id: "ermax-residence",
      title: "ERMAX Modern Residence",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Downtown Dubai",
      year: "2024",
      image: "/images/projects/ermax-residence.jpg",
      featured: true,
    },
    {
      id: "terva-homes",
      title: "Terva Contemporary Living",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Dubai Hills Estate, Dubai",
      year: "2024",
      image: "/images/projects/terva-homes.jpg",
      featured: false,
    },
    {
      id: "square-III",
      title: "THE SQUARE III",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "D.I.C, Saih Shuaib, Dubai",
      year: "2026",
      image: "/images/projects/square-III.jpg",
      featured: true,
    },
    {
      id: "majan-plaza",
      title: "MAJAN PLAZA",
      categories: ["Lobby Design"],
      location: "Majan, Wadi AlSafa, Dubai",
      year: "2027",
      image: "/images/projects/majan-plaza.jpg",
      featured: true,
    },
    {
      id: "arjan-diamond",
      title: "ARJAN DIAMOND",
      categories: ["Lobby Design"],
      location: "Arjan, AlBarsha South, Dubai",
      year: "2026",
      image: "/images/projects/arjan-diamond.jpg",
      featured: false,
    },
    {
      id: "living-heaven",
      title: "LIVING HEAVEN",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Wadi Al Safa, Dubai",
      year: "2027",
      image: "/images/projects/living-heaven.jpg",
      featured: true,
    },
    {
      id: "yd-villa",
      title: "YD VILLA",
      categories: ["Interior Design"],
      location: "The Villa Community, Dubailand, Dubai",
      year: "2023",
      image: "/images/projects/yd-villa.jpg",
      featured: true,
    },
    {
      id: "mallorca",
      title: "MALLORCA",
      categories: ["Interior Design"],
      location: "The Villa Community, Dubailand, Dubai",
      year: "2023",
      image: "/images/projects/mallorca.jpg",
      featured: true,
    },
    {
      id: "black-pearl-villa",
      title: "BLACK PEARL VILLA",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "Pearl Jumeirah Island, Jumeirah First, Dubai",
      year: "2025",
      image: "/images/projects/black-pearl-villa.jpg",
      featured: true,
    },
    {
      id: "white-ponderosa",
      title: "WHITE PONDEROSA",
      categories: ["Furnishing & Fit-Out"],
      location: "The Villa Community, Dubailand, Dubai",
      year: "2024",
      image: "/images/projects/white-ponderosa.jpg",
      featured: true,
    },
    {
      id: "isha-island",
      title: "ISHA ISLAND",
      categories: [
        "Interior Design",
        "Architecture",
        "Lifestyle & Wellbeing",
        "Lobby Design",
        "Project Management",
        "Furnishing & Fit-Out",
      ],
      location: "World Islands, Dubai",
      year: "2028",
      image: "/images/projects/isha-island.jpg",
      featured: false,
    },
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

