import HeroSection from "@/components/home/hero-section"
import FeaturedProjects from "@/components/home/featured-projects"
import ServicePreview from "@/components/home/service-preview"
import StudioPhilosophy from "@/components/home/studio-philosophy"
import ContactCta from "@/components/home/contact-cta"
import WhyChooseUs from "@/components/home/why-choose-us";
import TestimonialSection from "@/components/home/testimonial-section"

export default function Home() {

  return (
    <>
      <HeroSection />
      <StudioPhilosophy />
      <ServicePreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <TestimonialSection />
      <ContactCta />
    </>
  )
}

