'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const contentSections = [
  {
    id: 1,
    title: "Innovative",
    titleSecondary: "Provocative",
    titleAccent: "Immersive",
    subtitle: "ARTISTRY BEYOND BOUNDARIES",
    description: "We bring architectural design solutions that harmonize with your lifestyle, infusing sublime touches through innovative approaches.",
    points: [
      "Poetically evocative designs",
      "Timelessly elegant solutions",
      "Seamless charm of luxury spaces"
    ],
    color: "bg-lazone-black",
    accentColor: "text-lazone-orange",
    layout: "left"
  },
  {
    id: 2,
    title: "Meticulous",
    titleSecondary: "Craftsmanship",
    titleAccent: "Excellence",
    subtitle: "ATTENTION TO DETAIL",
    description: "Our design process combines craftsmanship, technology and artistic vision to create contemporary spaces with minimalist elegance.",
    stats: [
      { value: "60%", label: "Design Sensitivities", description: "Distinct design philosophies with non-negotiable quality standards" },
      { value: "100%", label: "Originality", description: "Guaranteed genuineness with established craftsmanship" }
    ],
    color: "bg-lazone-black",
    accentColor: "text-lazone-orange",
    layout: "center"
  },
  {
    id: 4, 
    title: "Nurturing",
    titleSecondary: "Design",
    titleAccent: "Excellence",
    subtitle: "WITH RESPECT AND PASSION",
    description: "We offer distinctive design approaches with unique sensibilities, ensuring quality and originality throughout.",
    features: [
      { title: "Flexibility", description: "Diversified aesthetics that transform contemporary living" },
      { title: "Originality", description: "Genuine designs with established craftsmanship" },
      { title: "Quality", description: "Combining technology and design for contemporary elegance" }
    ],
    color: "bg-lazone-black",
    accentColor: "text-lazone-orange",
    layout: "split"
  },
  {
    id: 3,
    title: "Distinctive",
    titleSecondary: "Design",
    titleAccent: "Aesthetics",
    subtitle: "WHY CHOOSE US",
    description: "Experience seamless charm that breathes luxury into your spaces while maintaining authenticity and character.",
    counters: [
      { value: "15+", label: "Design Approaches" },
      { value: "1500+", label: "Projects" },
      { value: "20+", label: "Years Experience" }
    ],
    color: "bg-lazone-black",
    accentColor: "text-lazone-orange",
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
          end: `+=${distanceToScroll}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          pinSpacing: true,
          refreshPriority: 1,
          invalidateOnRefresh: true
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
              opacity: 0.7,
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
              className="text-sm sm:text-md uppercase tracking-[0.2em] mb-4 font-medium text-lazone-orange"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-8 sm:mb-10 lg:mb-12">
              <h2 
                ref={el => setTitleRef(el, index)} 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-white"
              >
                {section.title} <ArrowRight className="inline-block ml-4 h-10 w-10" />
              </h2>
              <h2 
                ref={el => setSecondaryTitleRef(el, index)} 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mt-1 sm:mt-2 text-white/80"
              >
                {section.titleSecondary}
              </h2>
              <h2 
                ref={el => setAccentTitleRef(el, index)} 
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p 
              ref={el => setDescriptionRef(el, index)} 
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-10 sm:mb-12 lg:mb-16 text-white/80 font-light leading-relaxed"
            >
              {section.description.length > 150 ? `${section.description.substring(0, 150)}...` : section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              {section.points?.map((point, i) => (
                <div key={i} className="animate-item flex items-center space-x-4">
                  <div className="h-3 w-3 bg-lazone-orange rounded-full flex-shrink-0"></div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light">{point}</p>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="decorative-element absolute top-1/4 right-1/4 w-48 h-48 border-8 border-lazone-orange/20 rotate-45"></div>
            <div className="decorative-element absolute bottom-1/3 right-1/6 w-32 h-32 border-4 border-lazone-orange/15 rounded-full"></div>
            <div className="decorative-element absolute top-1/3 left-1/4 w-24 h-24 border-[6px] border-lazone-orange/10 rounded-full"></div>
          </div>
        );
        
      case "center":
        return (
          <div className="content-wrapper h-full w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 overflow-y-auto pt-20 sm:pt-16 md:pt-0">
            <h3 
              ref={el => setSubtitleRef(el, index)} 
              className="text-sm sm:text-md uppercase tracking-[0.2em] mb-4 font-medium text-center text-lazone-orange"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-8 sm:mb-10 lg:mb-12 text-center">
              <h2 
                ref={el => setTitleRef(el, index)} 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2 
                ref={el => setSecondaryTitleRef(el, index)} 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mt-1 sm:mt-2 text-white/80"
              >
                {section.titleSecondary}
              </h2>
              <h2 
                ref={el => setAccentTitleRef(el, index)} 
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p 
              ref={el => setDescriptionRef(el, index)} 
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-10 sm:mb-12 lg:mb-16 text-center text-white/80 font-light leading-relaxed"
            >
              {section.description.length > 150 ? `${section.description.substring(0, 150)}...` : section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full max-w-5xl">
              {section.stats?.map((stat, i) => (
                <div key={i} className="animate-item bg-lazone-black/50 p-8 sm:p-10 lg:p-12 rounded-xl shadow-lg backdrop-blur-sm border border-lazone-orange/20 hover:border-lazone-orange/40 transition-all duration-300">
                  <div className={`text-6xl sm:text-7xl lg:text-8xl font-bold ${section.accentColor} mb-6 sm:mb-8`}>{stat.value}</div>
                  <h4 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-5 text-white">{stat.label}</h4>
                  <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
                    {stat.description.length > 100 ? `${stat.description.substring(0, 100)}...` : stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="decorative-element absolute top-1/5 left-1/5 w-48 h-48 border-8 border-lazone-orange/20 rotate-12"></div>
            <div className="decorative-element absolute bottom-1/4 right-1/4 w-32 h-32 border-4 border-lazone-orange/15 rounded-full"></div>
            <div className="decorative-element absolute top-1/2 right-1/5 w-24 h-24 border-[6px] border-lazone-orange/10 rotate-45"></div>
          </div>
        );
        
      case "right":
        return (
          <div className="content-wrapper h-full w-full flex flex-col justify-center items-end px-6 sm:px-10 md:pr-16 md:pl-12 lg:pr-32 xl:pr-48 overflow-y-auto pt-20 sm:pt-16 md:pt-0">
            <h3 
              ref={el => setSubtitleRef(el, index)} 
              className="text-sm sm:text-md uppercase tracking-[0.2em] mb-4 font-medium text-right text-lazone-orange"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-8 sm:mb-10 lg:mb-12 text-right">
              <h2 
                ref={el => setTitleRef(el, index)} 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2 
                ref={el => setSecondaryTitleRef(el, index)} 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mt-1 sm:mt-2 text-white/80"
              >
                {section.titleSecondary}
              </h2>
              <h2 
                ref={el => setAccentTitleRef(el, index)} 
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p 
              ref={el => setDescriptionRef(el, index)} 
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-10 sm:mb-12 lg:mb-16 text-right text-white/80 font-light leading-relaxed"
            >
              {section.description.length > 150 ? `${section.description.substring(0, 150)}...` : section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full max-w-3xl">
              {section.counters?.map((counter, i) => (
                <div key={i} className="animate-item text-center bg-lazone-black/50 p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-sm border border-lazone-orange/20 hover:border-lazone-orange/40 transition-all duration-300">
                  <div className={`text-6xl sm:text-7xl lg:text-8xl font-bold ${section.accentColor} mb-4 sm:mb-5`}>{counter.value}</div>
                  <div className="text-md sm:text-lg lg:text-xl uppercase tracking-wider text-white/80">{counter.label}</div>
                </div>
              ))}
            </div>
            
            <a 
              href="/contact" 
              className="animate-item mt-10 sm:mt-12 inline-flex items-center justify-center rounded-md px-8 py-4 text-lg font-medium transition-colors bg-lazone-orange text-white hover:bg-lazone-orange/90 shadow-lg"
            >
              Contact Us
              <ArrowRight className="h-6 w-6 ml-3" />
            </a>

            {/* Decorative elements */}
            <div className="decorative-element absolute top-1/4 left-1/4 w-48 h-48 border-8 border-lazone-orange/20 rotate-12"></div>
            <div className="decorative-element absolute bottom-1/3 left-1/6 w-32 h-32 border-4 border-lazone-orange/15 rounded-md"></div>
            <div className="decorative-element absolute top-1/3 right-1/4 w-24 h-24 border-[6px] border-lazone-orange/10 rounded-full"></div>
          </div>
        );
        
      case "split":
      default:
        return (
          <div className="content-wrapper h-full w-full flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 px-6 sm:px-10 md:px-16 overflow-y-auto py-20 sm:py-16 md:py-4 lg:py-0 items-center justify-center">
            <div className="flex flex-col justify-center">
              <h3 
                ref={el => setSubtitleRef(el, index)} 
                className="text-sm sm:text-md uppercase tracking-[0.2em] mb-4 font-medium text-lazone-orange"
              >
                {section.subtitle}
              </h3>
              
              <div className="title-group mb-8 sm:mb-10 lg:mb-12">
                <h2 
                  ref={el => setTitleRef(el, index)} 
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-white"
                >
                  {section.title}
                </h2>
                <h2 
                  ref={el => setSecondaryTitleRef(el, index)} 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mt-1 sm:mt-2 text-white/80"
                >
                  {section.titleSecondary}
                </h2>
                <h2 
                  ref={el => setAccentTitleRef(el, index)} 
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
                >
                  {section.titleAccent}
                </h2>
              </div>
              
              <p 
                ref={el => setDescriptionRef(el, index)} 
                className="text-lg sm:text-xl md:text-2xl max-w-xl text-white/80 font-light leading-relaxed"
              >
                {section.description.length > 150 ? `${section.description.substring(0, 150)}...` : section.description}
              </p>
            </div>
            
            <div ref={el => setContentRef(el, index)} className="flex flex-col justify-center mt-2 sm:mt-0">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {section.features?.map((feature, i) => (
                  <div key={i} className="animate-item bg-lazone-black/50 p-8 sm:p-10 rounded-xl backdrop-blur-sm border border-lazone-orange/20 hover:border-lazone-orange/40 transition-all duration-300 shadow-lg">
                    <h4 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${section.accentColor}`}>{feature.title}</h4>
                    <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed">
                      {feature.description.length > 100 ? `${feature.description.substring(0, 100)}...` : feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="decorative-element absolute top-1/6 right-1/6 w-48 h-48 border-8 border-lazone-orange/20 rounded-full"></div>
            <div className="decorative-element absolute bottom-1/5 left-1/4 w-32 h-32 border-4 border-lazone-orange/15 rotate-45"></div>
            <div className="decorative-element absolute top-1/2 left-1/6 w-24 h-24 border-[6px] border-lazone-orange/10 rounded-full"></div>
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
                "bg-lazone-orange/20"
              )}></div>
              
              <div className={cn(
                "absolute bottom-[15%] left-[10%] w-64 h-64 rounded-full blur-3xl opacity-20",
                "bg-lazone-orange/20"
              )}></div>
              
              {/* Geometric shapes */}
              {section.layout === "left" && (
                <>
                  <div className="absolute top-[25%] right-[25%] w-32 h-32 border-8 border-lazone-orange/20 rotate-45"></div>
                  <div className="absolute bottom-[30%] right-[15%] w-16 h-16 border-4 border-lazone-orange/20 rounded-full"></div>
                  <div className="absolute top-[15%] left-[15%] w-24 h-24 border-4 border-dashed border-lazone-orange/15 rounded-full"></div>
                </>
              )}
              
              {section.layout === "center" && (
                <>
                  <div className="absolute top-[20%] left-[20%] w-32 h-32 border-8 border-lazone-orange/20 rotate-12"></div>
                  <div className="absolute bottom-[25%] right-[25%] w-20 h-20 border-4 border-lazone-orange/20 rounded-full"></div>
                  <div className="absolute top-[30%] right-[20%] w-24 h-24 border-4 border-dashed border-lazone-orange/15 rounded-md rotate-45"></div>
                </>
              )}
              
              {section.layout === "split" && (
                <>
                  <div className="absolute top-[15%] right-[15%] w-32 h-32 border-8 border-lazone-orange/20 rounded-full"></div>
                  <div className="absolute bottom-[20%] left-[25%] w-24 h-24 border-4 border-lazone-orange/20 rotate-45"></div>
                  <div className="absolute top-[30%] left-[15%] w-20 h-20 border-4 border-dashed border-lazone-orange/15 rounded-md"></div>
                </>
              )}
              
              {section.layout === "right" && (
                <>
                  <div className="absolute top-[25%] left-[25%] w-32 h-32 border-8 border-lazone-orange/20 rotate-12"></div>
                  <div className="absolute bottom-[30%] left-[15%] w-16 h-16 border-4 border-lazone-orange/20 rounded-md"></div>
                  <div className="absolute top-[15%] right-[15%] w-24 h-24 border-4 border-dashed border-lazone-orange/15 rounded-full"></div>
                </>
              )}
              
              {/* Floating dots */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="h-full w-full flex items-center justify-center">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute w-2 h-2 rounded-full bg-lazone-orange opacity-20"
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