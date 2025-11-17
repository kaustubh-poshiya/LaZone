import PageHeader from "@/components/page-header"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import ScrollReveal from "@/components/scroll-reveal"
import { projects, categories } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Explore our selected works across various disciplines"
        className="bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800"
        action={
          <Button
            asChild
            size="lg"
            className="bg-lazone-orange text-white hover:bg-lazone-orange/90 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <a href="/sample.pdf" download="portfolio.pdf" aria-label="Download portfolio PDF">
              <Download className="mr-2" />
              Download Portfolio
            </a>
          </Button>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal animation="fade-bottom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">Our Projects</h2>
              <div className="w-20 h-px bg-lazone-orange mx-auto mb-6"></div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Explore our selected works across various disciplines.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Each project reflects our commitment to innovative design, functionality, and aesthetic excellence through unique collaboration.
              </p>
            </div>
          </ScrollReveal>

          <PortfolioGrid projects={projects} categories={categories} />
        </div>
      </section>
    </>
  )
}

