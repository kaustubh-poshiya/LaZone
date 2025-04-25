import Image from "next/image"
import { cn } from "@/lib/utils"
import ScrollReveal from "@/components/scroll-reveal"

type StoryStep = {
  title: string
  description: string
  image?: string
}

type ProjectStoryProps = {
  title: string
  subtitle?: string
  steps: StoryStep[]
  className?: string
}

export default function ProjectStory({ title, subtitle, steps, className }: ProjectStoryProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal animation="fade-bottom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-4">{title}</h2>
            <div className="w-20 h-0.5 bg-architect-vibrant mx-auto mb-4"></div>
            {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        </ScrollReveal>

        <div className="timeline max-w-4xl mx-auto pl-10 md:pl-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} animation="fade-left" delay={index * 100}>
              <div className="timeline-item mb-16">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl md:text-2xl font-serif mb-2 text-lazone-orange">{step.title}</h3>
                  <p className="mb-6 text-muted-foreground">{step.description}</p>
                  {step.image && (
                    <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden">
                      <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

