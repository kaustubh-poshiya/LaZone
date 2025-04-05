'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

const contentSections = [
  {
    id: 1,
    title: "Innovative",
    titleSecondary: "Provocative",
    titleAccent: "Immersive",
    subtitle: "ARTISTRY BEYOND BOUNDARIES",
    description: "We bring the finest architectural design solutions to create spaces that harmonize with your lifestyle, infusing a touch of sublime to every corner through innovative approaches that represent different forms and dimensions of architectural legacy.",
    points: [
      "Poetically evocative designs",
      "Timelessly elegant solutions",
      "Seamless charm of luxury spaces"
    ],
    color: "bg-neutral-900/90 dark:bg-neutral-950/90",
    accentColor: "text-neutral-200 dark:text-neutral-100",
    layout: "left"
  },
  {
    id: 2,
    title: "Meticulous",
    titleSecondary: "Craftsmanship",
    titleAccent: "Excellence",
    subtitle: "ATTENTION TO DETAIL",
    description: "Our design process combines craftsmanship, technology, and artistic vision to create contemporary spaces that value minimalism and elegance, prioritizing timelessness and purpose over unnecessary extravagance.",
    stats: [
      { value: "60%", label: "Varying Design Sensitivities", description: "Although our selection is based on good design and non-negotiable quality, we express distinct philosophies and unique sensibilities." },
      { value: "100%", label: "Originality", description: "A promise of originality is never amiss. We guarantee the genuineness of all our designs with established craftsmanship and technology." }
    ],
    color: "bg-neutral-800/90 dark:bg-neutral-900/90",
    accentColor: "text-neutral-300 dark:text-neutral-200",
    layout: "center"
  },
  {
    id: 4, 
    title: "Nurturing",
    titleSecondary: "Design",
    titleAccent: "Excellence",
    subtitle: "WITH RESPECT AND PASSION",
    description: "We offer a range of design approaches with distinct philosophies and unique sensibilities, allowing you to pick the right aesthetic for your space while ensuring non-negotiable quality and originality throughout the process.",
    features: [
      { title: "Flexibility", description: "We offer diversified aesthetics and influences for individuals to choose from, making significant contributions to changing the dynamics of contemporary living." },
      { title: "Originality", description: "A promise of originality is never amiss when it comes to our designs. We guarantee the genuineness of all our products with established craftsmanship." },
      { title: "Quality", description: "We use a combination of craftsmanship, technology, and design to cater to a contemporary audience that values minimalism and elegance." }
    ],
    color: "bg-neutral-900/90 dark:bg-neutral-950/90",
    accentColor: "text-neutral-200 dark:text-neutral-100",
    layout: "split"
  },
  {
    id: 3,
    title: "Distinctive",
    titleSecondary: "Design",
    titleAccent: "Aesthetics",
    subtitle: "WHY CHOOSE US",
    description: "From living spaces to outdoor environments, experience seamless charm that breathes luxury living into your spaces while maintaining authenticity and character. We value integrity and honesty in designs, prioritizing timelessness over unnecessary extravagance.",
    counters: [
      { value: "15+", label: "Best Design Approaches" },
      { value: "1500+", label: "Projects" },
      { value: "20+", label: "Years of Experience" }
    ],
    color: "bg-neutral-800/90 dark:bg-neutral-900/90",
    accentColor: "text-neutral-300 dark:text-neutral-200",
    layout: "right"
  },
]

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const secondaryTitleRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const accentTitleRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const subtitleRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    const initScrollTrigger = () => {
      if (!horizontalRef.current || !triggerRef.current) return
      
      // Calculate the width of all panels combined minus one screen width
      const panelsWidth = horizontalRef.current.scrollWidth
      const distanceToScroll = panelsWidth - window.innerWidth
      
      // Create the horizontal scrolling animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top", 
          end: `+=${distanceToScroll}`, // Removed extra 100px to eliminate white space at end
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          pinSpacing: true, // This ensures the section is pinned and takes space
          refreshPriority: 1, // Higher priority for this ScrollTrigger
          invalidateOnRefresh: true // Recalculate on window resize
        }
      })
      
      // The timeline animation that moves the content horizontally
      tl.to(horizontalRef.current, {
        x: -distanceToScroll,
        ease: "none"
      })
      
      // Create animations for each section's content
      gsap.utils.toArray(horizontalRef.current.children).forEach((panel, i) => {
        const contentEl = (panel as HTMLElement).querySelector('.content-wrapper')
        if (!contentEl) return
        
        // Animate the entire content wrapper with a subtle scale effect
        gsap.fromTo(contentEl,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: panel as HTMLElement,
              containerAnimation: tl,
              start: "left center",
              end: "right center", 
              scrub: 0.5,
            }
          }
        )
        
        // Animate subtitle with a slide-up and fade
        if (subtitleRefs.current[i]) {
          gsap.fromTo(subtitleRefs.current[i], 
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              scrollTrigger: {
                trigger: panel as HTMLElement,
                containerAnimation: tl,
                start: "left center-=10%",
                end: "left center+=10%", 
                scrub: 0.3,
              }
            }
          )
        }
        
        // Animate main title with a larger scale and slide effect
        if (titleRefs.current[i]) {
          gsap.fromTo(titleRefs.current[i], 
            { y: -80, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: panel as HTMLElement,
                containerAnimation: tl,
                start: "left center-=15%",
                end: "left center+=10%", 
                scrub: 0.4,
              }
            }
          )
        }
        
        // Animate secondary title with a slide effect
        if (secondaryTitleRefs.current[i]) {
          gsap.fromTo(secondaryTitleRefs.current[i], 
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              scrollTrigger: {
                trigger: panel as HTMLElement,
                containerAnimation: tl,
                start: "left center-=10%",
                end: "left center+=15%", 
                scrub: 0.4,
              }
            }
          )
        }
        
        // Animate accent title with a slide effect
        if (accentTitleRefs.current[i]) {
          gsap.fromTo(accentTitleRefs.current[i], 
            { x: 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              scrollTrigger: {
                trigger: panel as HTMLElement,
                containerAnimation: tl,
                start: "left center-=5%",
                end: "left center+=20%", 
                scrub: 0.4,
              }
            }
          )
        }
        
        // Animate description with a slide-up and fade
        if (descriptionRefs.current[i]) {
          gsap.fromTo(descriptionRefs.current[i], 
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              scrollTrigger: {
                trigger: panel as HTMLElement,
                containerAnimation: tl,
                start: "left center",
                end: "left center+=20%", 
                scrub: 0.5,
              }
            }
          )
        }
        
        // Animate content blocks with staggered effect
        if (contentRefs.current[i]) {
          const items = contentRefs.current[i]?.querySelectorAll('.animate-item')
          if (items?.length) {
            items.forEach((item, j) => {
              gsap.fromTo(item, 
                { y: 30, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.4,
                  delay: j * 0.1,
                  scrollTrigger: {
                    trigger: panel as HTMLElement,
                    containerAnimation: tl,
                    start: "left center+=5%",
                    end: "left center+=35%", 
                    scrub: 0.3,
                  }
                }
              )
            })
          }
        }

        // Animate decorative elements
        const decorativeElements = (panel as HTMLElement).querySelectorAll('.decorative-element')
        decorativeElements.forEach((element, j) => {
          gsap.fromTo(element,
            { scale: 0.8, opacity: 0, rotate: -45 },
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.8,
              delay: j * 0.2,
              scrollTrigger: {
                trigger: panel as HTMLElement,
                containerAnimation: tl,
                start: "left center",
                end: "left center+=30%",
                scrub: 0.5,
              }
            }
          )
        })
      })
    }
    
    // Wait a moment for proper initialization
    const timer = setTimeout(() => {
      initScrollTrigger()
    }, 200)
    
    // Clean up
    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  // Function to set refs for each type of element
  const setTitleRef = (el: HTMLHeadingElement | null, index: number) => {
    titleRefs.current[index] = el
  }
  
  const setSecondaryTitleRef = (el: HTMLHeadingElement | null, index: number) => {
    secondaryTitleRefs.current[index] = el
  }
  
  const setAccentTitleRef = (el: HTMLHeadingElement | null, index: number) => {
    accentTitleRefs.current[index] = el
  }
  
  const setSubtitleRef = (el: HTMLHeadingElement | null, index: number) => {
    subtitleRefs.current[index] = el
  }
  
  const setDescriptionRef = (el: HTMLParagraphElement | null, index: number) => {
    descriptionRefs.current[index] = el
  }
  
  const setContentRef = (el: HTMLDivElement | null, index: number) => {
    contentRefs.current[index] = el
  }

  // Render different layouts based on section configuration
  const renderSectionContent = (section: typeof contentSections[0], index: number) => {
    switch(section.layout) {
      case "left":
        return (
          <div className="content-wrapper h-full w-full flex flex-col justify-center px-6 sm:px-10 md:pl-16 md:pr-12 lg:pl-32 xl:pl-48 pt-20 sm:pt-16 md:pt-0">
            <h3 
              ref={el => setSubtitleRef(el, index)} 
              className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3 font-medium text-neutral-400"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-4 sm:mb-6 lg:mb-8">
              <h2 
                ref={el => setTitleRef(el, index)} 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2 
                ref={el => setSecondaryTitleRef(el, index)} 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-none mt-1 sm:mt-2 text-neutral-300"
              >
                {section.titleSecondary}
              </h2>
              <h2 
                ref={el => setAccentTitleRef(el, index)} 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p 
              ref={el => setDescriptionRef(el, index)} 
              className="text-sm sm:text-base md:text-lg max-w-3xl mb-6 sm:mb-8 lg:mb-12 text-neutral-400"
            >
              {section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="mt-4 sm:mt-6 space-y-2 sm:space-y-4">
              {section.points?.map((point, i) => (
                <div key={i} className="animate-item flex items-center space-x-3">
                  <div className="h-2 w-2 bg-neutral-400 rounded-full flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg text-neutral-300">{point}</p>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="decorative-element absolute top-1/4 right-1/4 w-32 h-32 border-8 border-neutral-700/40 dark:border-neutral-800/30 rotate-45"></div>
            <div className="decorative-element absolute bottom-1/3 right-1/6 w-16 h-16 border-4 border-neutral-700/30 dark:border-neutral-800/30 rounded-full"></div>
          </div>
        );
        
      case "center":
        return (
          <div className="content-wrapper h-full w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 overflow-y-auto pt-20 sm:pt-16 md:pt-0">
            <h3 
              ref={el => setSubtitleRef(el, index)} 
              className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3 font-medium text-center text-neutral-400"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-4 sm:mb-6 lg:mb-8 text-center">
              <h2 
                ref={el => setTitleRef(el, index)} 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2 
                ref={el => setSecondaryTitleRef(el, index)} 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-none mt-1 sm:mt-2 text-neutral-300"
              >
                {section.titleSecondary}
              </h2>
              <h2 
                ref={el => setAccentTitleRef(el, index)} 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p 
              ref={el => setDescriptionRef(el, index)} 
              className="text-sm sm:text-base md:text-lg max-w-3xl mb-6 sm:mb-8 lg:mb-12 text-center text-neutral-400"
            >
              {section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 w-full max-w-5xl">
              {section.stats?.map((stat, i) => (
                <div key={i} className="animate-item bg-neutral-800/50 dark:bg-neutral-900/50 p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm backdrop-blur-sm border border-neutral-700/20">
                  <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${section.accentColor} mb-2 sm:mb-3`}>{stat.value}</div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neutral-200">{stat.label}</h4>
                  <p className="text-sm sm:text-base text-neutral-400">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="decorative-element absolute top-1/5 left-1/5 w-24 h-24 border-8 border-neutral-700/30 dark:border-neutral-800/30 rotate-12"></div>
            <div className="decorative-element absolute bottom-1/4 right-1/4 w-20 h-20 border-4 border-neutral-700/30 dark:border-neutral-800/30 rounded-full"></div>
          </div>
        );
        
      case "right":
        return (
          <div className="content-wrapper h-full w-full flex flex-col justify-center items-end px-6 sm:px-10 md:pr-16 md:pl-12 lg:pr-32 xl:pr-48 overflow-y-auto pt-20 sm:pt-16 md:pt-0">
            <h3 
              ref={el => setSubtitleRef(el, index)} 
              className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3 font-medium text-right text-neutral-400"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-4 sm:mb-6 lg:mb-8 text-right">
              <h2 
                ref={el => setTitleRef(el, index)} 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2 
                ref={el => setSecondaryTitleRef(el, index)} 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-none mt-1 sm:mt-2 text-neutral-300"
              >
                {section.titleSecondary}
              </h2>
              <h2 
                ref={el => setAccentTitleRef(el, index)} 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p 
              ref={el => setDescriptionRef(el, index)} 
              className="text-sm sm:text-base md:text-lg max-w-3xl mb-6 sm:mb-8 lg:mb-12 text-right text-neutral-400"
            >
              {section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-3xl">
              {section.counters?.map((counter, i) => (
                <div key={i} className="animate-item text-center">
                  <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${section.accentColor} mb-2 sm:mb-3`}>{counter.value}</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-neutral-400">{counter.label}</div>
                </div>
              ))}
            </div>
            
            <a 
              href="/contact" 
              className="animate-item mt-8 sm:mt-10 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700/20"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Decorative elements */}
            <div className="decorative-element absolute top-1/4 left-1/4 w-32 h-32 border-8 border-neutral-700/30 dark:border-neutral-800/30 rotate-12"></div>
            <div className="decorative-element absolute bottom-1/3 left-1/6 w-16 h-16 border-4 border-neutral-700/30 dark:border-neutral-800/30 rounded-md"></div>
          </div>
        );
        
      case "split":
      default:
        return (
          <div className="content-wrapper h-full w-full flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 px-6 sm:px-10 md:px-16 overflow-y-auto py-20 sm:py-16 md:py-4 lg:py-0 items-center justify-center">
            <div className="flex flex-col justify-center">
              <h3 
                ref={el => setSubtitleRef(el, index)} 
                className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3 font-medium text-neutral-400"
              >
                {section.subtitle}
              </h3>
              
              <div className="title-group mb-4 sm:mb-6 lg:mb-8">
                <h2 
                  ref={el => setTitleRef(el, index)} 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-none text-white"
                >
                  {section.title}
                </h2>
                <h2 
                  ref={el => setSecondaryTitleRef(el, index)} 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-none mt-1 sm:mt-2 text-neutral-300"
                >
                  {section.titleSecondary}
                </h2>
                <h2 
                  ref={el => setAccentTitleRef(el, index)} 
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
                >
                  {section.titleAccent}
                </h2>
              </div>
              
              <p 
                ref={el => setDescriptionRef(el, index)} 
                className="text-sm sm:text-base md:text-lg max-w-xl text-neutral-400"
              >
                {section.description}
              </p>
            </div>
            
            <div ref={el => setContentRef(el, index)} className="flex flex-col justify-center mt-2 sm:mt-0">
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {section.features?.map((feature, i) => (
                  <div key={i} className="animate-item bg-neutral-800/50 dark:bg-neutral-900/50 p-4 sm:p-5 rounded-xl backdrop-blur-sm border border-neutral-700/20">
                    <h4 className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${section.accentColor}`}>{feature.title}</h4>
                    <p className="text-sm sm:text-base text-neutral-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="decorative-element absolute top-1/6 right-1/6 w-28 h-28 border-8 border-neutral-700/30 dark:border-neutral-800/30 rounded-full"></div>
            <div className="decorative-element absolute bottom-1/5 left-1/4 w-20 h-20 border-4 border-neutral-700/30 dark:border-neutral-800/30 rotate-45"></div>
          </div>
        );
    }
  };

  return (
    <section className="relative" data-scroll-section ref={sectionRef}>
      {/* This wrapper is what gets pinned */}
      <div 
        ref={triggerRef} 
        className="relative h-screen overflow-hidden"
      >
        {/* This container holds all the horizontal panels */}
        <div 
          ref={horizontalRef}
          className="absolute flex h-screen top-0 left-0 will-change-transform"
          style={{ width: `${contentSections.length * 100}vw` }}
        >
          {contentSections.map((section, index) => (
            <div 
              key={section.id}
              className={cn(
                "h-screen w-screen relative", 
                section.color
              )}
            >
              {/* Enhanced decorative elements */}
              <div className={cn(
                "absolute top-[10%] right-[10%] w-64 h-64 rounded-full blur-3xl opacity-30",
                section.layout === "left" ? "bg-architect-primary/10 dark:bg-architect-navy/30" :
                section.layout === "center" ? "bg-architect-tertiary/10 dark:bg-architect-tertiary/30" :
                section.layout === "split" ? "bg-architect-accent/10 dark:bg-architect-accent/30" :
                "bg-architect-emerald/10 dark:bg-architect-emerald/30"
              )}></div>
              
              <div className={cn(
                "absolute bottom-[15%] left-[10%] w-48 h-48 rounded-full blur-xl opacity-20",
                section.layout === "left" ? "bg-architect-primary/20 dark:bg-architect-navy/40" :
                section.layout === "center" ? "bg-architect-tertiary/20 dark:bg-architect-tertiary/40" : 
                section.layout === "split" ? "bg-architect-accent/20 dark:bg-architect-accent/40" :
                "bg-architect-emerald/20 dark:bg-architect-emerald/40"
              )}></div>
              
              {/* Geometric shapes */}
              {section.layout === "left" && (
                <>
                  <div className="absolute top-[25%] right-[25%] w-32 h-32 border-8 border-architect-primary/40 dark:border-architect-navy/30 rotate-45"></div>
                  <div className="absolute bottom-[30%] right-[15%] w-16 h-16 border-4 border-architect-primary/30 dark:border-architect-navy/30 rounded-full"></div>
                  <div className="absolute top-[15%] left-[15%] w-24 h-24 border-4 border-dashed border-architect-primary/20 dark:border-architect-navy/20 rounded-full"></div>
                </>
              )}
              
              {section.layout === "center" && (
                <>
                  <div className="absolute top-[20%] left-[20%] w-24 h-24 border-8 border-architect-tertiary/30 dark:border-architect-tertiary/30 rotate-12"></div>
                  <div className="absolute bottom-[25%] right-[25%] w-20 h-20 border-4 border-architect-tertiary/30 dark:border-architect-tertiary/30 rounded-full"></div>
                  <div className="absolute top-[30%] right-[20%] w-16 h-16 border-4 border-dashed border-architect-tertiary/20 dark:border-architect-tertiary/20 rounded-md rotate-45"></div>
                </>
              )}
              
              {section.layout === "split" && (
                <>
                  <div className="absolute top-[15%] right-[15%] w-28 h-28 border-8 border-architect-accent/30 dark:border-architect-accent/30 rounded-full"></div>
                  <div className="absolute bottom-[20%] left-[25%] w-20 h-20 border-4 border-architect-accent/30 dark:border-architect-accent/30 rotate-45"></div>
                  <div className="absolute top-[30%] left-[15%] w-16 h-16 border-4 border-dashed border-architect-accent/20 dark:border-architect-accent/20 rounded-md"></div>
                </>
              )}
              
              {section.layout === "right" && (
                <>
                  <div className="absolute top-[25%] left-[25%] w-32 h-32 border-8 border-architect-emerald/30 dark:border-architect-emerald/30 rotate-12"></div>
                  <div className="absolute bottom-[30%] left-[15%] w-16 h-16 border-4 border-architect-emerald/30 dark:border-architect-emerald/30 rounded-md"></div>
                  <div className="absolute top-[15%] right-[15%] w-24 h-24 border-4 border-dashed border-architect-emerald/20 dark:border-architect-emerald/20 rounded-full"></div>
                </>
              )}
              
              {/* Floating dots */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="h-full w-full flex items-center justify-center">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "absolute w-2 h-2 rounded-full opacity-20",
                        section.layout === "left" ? "bg-architect-primary dark:bg-architect-navy" :
                        section.layout === "center" ? "bg-architect-tertiary dark:bg-architect-tertiary" :
                        section.layout === "split" ? "bg-architect-accent dark:bg-architect-accent" :
                        "bg-architect-emerald dark:bg-architect-emerald"
                      )}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        transform: `scale(${Math.random() * 1.5 + 0.5})`,
                        opacity: Math.random() * 0.3 + 0.1
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {renderSectionContent(section, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 