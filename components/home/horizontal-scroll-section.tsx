'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { 
  // ArrowRight, Box, Compass, Hexagon, Layers, Triangle, Circle, Square, 
  // Award, Home, Wind, Lightbulb, Sun, Star, Zap, Shield, Eye, Layout, 
  // PanelTop, Palette, Aperture, Sparkles, Construction
} from 'lucide-react'
import CountUp from '@/components/ui/count-up'
import Image from 'next/image'

type Counter = {
  value: number;
  label: string;
  suffix?: string;
}

type ContentSection = {
  id: number;
  title: string;
  titleSecondary: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  color: string;
  accentColor: string;
  layout: 'left' | 'center' | 'right' | 'split';
  points?: string[];
  stats?: { value: string; label: string; description: string }[];
  features?: { title: string; description: string }[];
  counters?: Counter[];
  decorativeElements?: { type: string; position: string; size: number; color: string; opacity: number }[];
}

const contentSections: ContentSection[] = [
  {
    id: 1,
    title: "Visionary",
    titleSecondary: "Spaces",
    titleAccent: "Redefined",
    subtitle: "DESIGN PHILOSOPHY",
    description: "We craft extraordinary spaces that transcend conventional architecture. Each project is a masterpiece where innovation meets functionality, creating environments that inspire and transform.",
    features: [
      { title: "Innovative Design Approach", description: "Pushing boundaries with cutting-edge architectural concepts and creative solutions" },
      { title: "Sustainable Integration", description: "Harmoniously blending eco-conscious materials with modern design principles" },
      { title: "Human-Centric Spaces", description: "Creating environments that enhance well-being and foster connection" }
    ],
    color: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
    accentColor: "text-lazone-orange",
    layout: "split",
    decorativeElements: []
  },
  {
    id: 2,
    title: "Precision",
    titleSecondary: "Meets",
    titleAccent: "Artistry",
    subtitle: "CRAFTSMANSHIP",
    description: "Our design process marries precision engineering with artistic vision, delivering spaces that are both functionally superior and aesthetically captivating.",
    stats: [
      { value: "98%", label: "Client Satisfaction", description: "Exceeding expectations through meticulous attention to detail" },
      { value: "100%", label: "Design Excellence", description: "Commitment to uncompromising quality in every project" }
    ],
    color: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
    accentColor: "text-lazone-orange",
    layout: "center",
    decorativeElements: []
  },
  {
    id: 3,
    title: "Timeless",
    titleSecondary: "Design",
    titleAccent: "Excellence",
    subtitle: "ENDURING BEAUTY",
    description: "We create spaces that stand the test of time, combining classic elegance with contemporary innovation to deliver lasting architectural impact.",
    features: [
      { title: "Intelligent Space Planning", description: "Optimizing flow and functionality while maximizing aesthetic appeal" },
      { title: "Premium Materials", description: "Selecting exceptional materials that enhance both beauty and durability" },
      { title: "Natural Integration", description: "Seamlessly incorporating natural light and environmental elements" }
    ],
    color: "bg-gradient-to-br from-black via-gray-900 to-black",
    accentColor: "text-lazone-orange",
    layout: "split",
    decorativeElements: []
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if current device is mobile (screen width less than 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(t => t.kill())

    // Only set up horizontal scroll for non-mobile devices
    if (!isMobile) {
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
            end: `+=${distanceToScroll * 0.6}`,
            pin: true,
            anticipatePin: 1,
            scrub: 0.05,
            pinSpacing: true,
            refreshPriority: 1,
            invalidateOnRefresh: true
          }
        })

        // The timeline animation that moves the content horizontally
        tl.to(horizontalRef.current, {
          x: -distanceToScroll,
          ease: "power1.out"
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
                start: "left-=20% center",
                end: "right-=70% center",
                scrub: 0.05,
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
                duration: 0.2,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: "left-=25% center",
                  end: "left-=15% center",
                  scrub: 0.05,
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
                duration: 0.4,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: "left-=25% center",
                  end: "left-=10% center",
                  scrub: 0.05,
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
                duration: 0.3,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: "left-=20% center",
                  end: "left-=5% center",
                  scrub: 0.05,
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
                duration: 0.3,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: "left-=15% center",
                  end: "left center",
                  scrub: 0.05,
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
                duration: 0.3,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: "left-=10% center",
                  end: "left+=5% center",
                  scrub: 0.05,
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
                    duration: 0.2,
                    delay: j * 0.05,
                    scrollTrigger: {
                      trigger: panel as HTMLElement,
                      containerAnimation: tl,
                      start: "left-=5% center",
                      end: "left+=10% center",
                      scrub: 0.05,
                    }
                  }
                )
              })
            }
            
            // Special handling for counters to trigger them at the right moment
            const counters = contentRefs.current[i]?.querySelectorAll('.counter-wrapper')
            if (counters?.length) {
              counters.forEach((counter) => {
                // Create a scroll trigger that will mark the counter as visible
                ScrollTrigger.create({
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: "left center-=20%",
                  end: "right center+=20%",
                  onEnter: () => {
                    counter.setAttribute('data-visible', 'true')
                  },
                  onLeaveBack: () => {
                    counter.setAttribute('data-visible', 'false')
                  },
                  onLeave: () => {
                    counter.setAttribute('data-visible', 'false')
                  }
                })
              })
            }
          }
        })
      }

      // Wait a moment for proper initialization
      const timer = setTimeout(() => {
        initScrollTrigger()
      }, 100)

      // Clean up
      return () => {
        clearTimeout(timer)
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    } else {
      // For mobile: set up simple scroll animations without horizontal scrolling
      const setupMobileAnimations = () => {
        contentSections.forEach((_, i) => {
          const sectionEl = document.getElementById(`mobile-section-${i}`)
          if (!sectionEl) return

          // Animate content with a fade in effect
          gsap.fromTo(sectionEl,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: sectionEl,
                start: "top 80%",
                end: "top 30%",
                scrub: 0.5,
              }
            }
          )

          // Animate items within each section
          const items = sectionEl.querySelectorAll('.animate-item')
          if (items?.length) {
            items.forEach((item, j) => {
              gsap.fromTo(item,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    end: "top 65%",
                    scrub: 0.3,
                  }
                }
              )
            })
          }
        })
      }

      const timer = setTimeout(() => {
        setupMobileAnimations()
      }, 200)

      return () => {
        clearTimeout(timer)
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [isMobile])

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
          <div className="content-wrapper h-full w-full flex flex-col justify-center px-4 sm:px-6 md:pl-12 md:pr-8 lg:pl-24 xl:pl-32 transition-all duration-300 hover:scale-[1.02] max-h-[90dvh] overflow-y-auto py-4">
            <h3
              ref={el => setSubtitleRef(el, index)}
              className="text-sm sm:text-md uppercase tracking-[0.2em] mb-2 font-medium text-lazone-orange font-sans"
            >
              {section.subtitle}
            </h3>

            <div className="title-group mb-4 sm:mb-6 lg:mb-8">
              <h2
                ref={el => setTitleRef(el, index)}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2
                ref={el => setSecondaryTitleRef(el, index)}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-none mt-1 text-white/80"
              >
                {section.titleSecondary}
              </h2>
              <h2
                ref={el => setAccentTitleRef(el, index)}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-none mt-1 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>

            <p
              ref={el => setDescriptionRef(el, index)}
              className="text-sm sm:text-base lg:text-lg max-w-lg text-white/80 leading-relaxed mb-6 font-sans"
            >
              {section.description}
            </p>

            <div ref={el => setContentRef(el, index)}>
              {section.points && (
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="animate-item flex items-start text-white/90 font-sans">
                      <span className="text-lazone-orange mr-3 text-xl sm:text-2xl">•</span>
                      <span className="text-base sm:text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      
      case "center":
        return (
          <div className="content-wrapper relative h-full w-full flex flex-col items-center justify-center px-4 transition-all duration-300 hover:scale-[1.02] max-h-[90dvh] overflow-y-auto py-4">
            <h3
              ref={el => setSubtitleRef(el, index)}
              className="text-sm sm:text-md uppercase tracking-[0.2em] mb-2 font-medium text-lazone-orange text-center font-sans flex items-center"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-4 sm:mb-6 lg:mb-8 text-center relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                {/* Placeholder for architectural SVG */}
              </div>
              <h2
                ref={el => setTitleRef(el, index)}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2
                ref={el => setSecondaryTitleRef(el, index)}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-none mt-1 text-white/80"
              >
                {section.titleSecondary}
              </h2>
              <h2
                ref={el => setAccentTitleRef(el, index)}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-none mt-1 ${section.accentColor} flex items-center justify-center`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p
              ref={el => setDescriptionRef(el, index)}
              className="text-sm sm:text-base lg:text-lg max-w-2xl text-center text-white/80 leading-relaxed mb-6 sm:mb-8 font-sans"
            >
              {section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl">
              {section.stats?.map((stat, i) => (
                <div key={i} className="animate-item bg-black/40 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:border-lazone-orange/20 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:shadow-lazone-orange/10 transform hover:-translate-y-1 group relative overflow-hidden">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-lazone-orange mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <h4 className="text-base sm:text-lg font-serif font-medium text-white mb-1">{stat.label}</h4>
                  <p className="text-white/70 text-xs sm:text-sm font-sans">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "right":
        return (
          <div className="content-wrapper h-full w-full flex flex-col justify-center items-end px-4 sm:px-6 md:pr-12 md:pl-8 lg:pr-24 xl:pr-32 transition-all duration-300 hover:scale-[1.02] max-h-[90dvh] overflow-y-auto py-4">
            <h3
              ref={el => setSubtitleRef(el, index)}
              className="text-sm sm:text-md uppercase tracking-[0.2em] mb-2 font-medium text-lazone-orange text-right font-sans"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-4 sm:mb-6 lg:mb-8 text-right">
              <h2
                ref={el => setTitleRef(el, index)}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2
                ref={el => setSecondaryTitleRef(el, index)}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-none mt-1 text-white/80"
              >
                {section.titleSecondary}
              </h2>
              <h2
                ref={el => setAccentTitleRef(el, index)}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-none mt-1 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p
              ref={el => setDescriptionRef(el, index)}
              className="text-sm sm:text-base lg:text-lg max-w-lg text-right text-white/80 leading-relaxed mb-6 font-sans"
            >
              {section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="flex flex-row space-x-4 sm:space-x-6 justify-end">
              {section.counters?.map((counter, i) => (
                <div key={i} className="counter-wrapper animate-item text-center">
                  <CountUp 
                    end={counter.value} 
                    suffix={counter.suffix} 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white" 
                  />
                  <p className="text-sm sm:text-base text-white/90 mt-1 font-sans">{counter.label}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "split":
        return (
          <div className="content-wrapper relative h-full w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] max-h-[90dvh] overflow-y-auto">
            <div className="flex flex-col justify-center md:pr-6 mb-6 md:mb-0 relative z-10">
              <h3
                ref={el => setSubtitleRef(el, index)}
                className="text-sm sm:text-md uppercase tracking-[0.2em] mb-2 font-medium text-lazone-orange font-sans flex items-center"
              >
                {section.subtitle}
              </h3>
              
              <div className="title-group mb-4 sm:mb-6 lg:mb-8">
                <h2
                  ref={el => setTitleRef(el, index)}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-none text-white"
                >
                  {section.title}
                </h2>
                <h2
                  ref={el => setSecondaryTitleRef(el, index)}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-none mt-1 text-white/80"
                >
                  {section.titleSecondary}
                </h2>
                <h2
                  ref={el => setAccentTitleRef(el, index)}
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-none mt-1 ${section.accentColor} flex items-center`}
                >
                  {section.titleAccent}
                </h2>
              </div>
              
              <p
                ref={el => setDescriptionRef(el, index)}
                className="text-sm sm:text-base text-white/80 leading-relaxed font-sans"
              >
                {section.description}
              </p>

              <div className="mt-4 sm:mt-6 flex items-center">
                <div className="bg-black/30 p-2 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
                  <Image 
                    src="/images/logo-light.png" 
                    alt="LaZone Logo" 
                    width={40} 
                    height={40} 
                    className="animate-item opacity-90 hover:opacity-100 transition-opacity sm:w-[50px] sm:h-[50px]"
                  />
                </div>
                <div className="ml-3 px-3 py-1 bg-gradient-to-r from-black/50 to-transparent rounded-full border border-white/5">
                  <span className="text-white/70 font-serif text-xs sm:text-sm">Design Excellence</span>
                </div>
              </div>
            </div>

            <div ref={el => setContentRef(el, index)} className="flex flex-col justify-center mt-0 relative z-10">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {section.features?.map((feature, i) => {
                  return (
                    <div key={i} className="animate-item bg-black/40 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:border-lazone-orange/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lazone-orange/10 transform hover:-translate-y-1 flex items-start group">
                      <div className={`mr-3 sm:mr-4 p-2 sm:p-3 rounded-lg bg-black/60 ${section.accentColor}/20 group-hover:${section.accentColor}/30 transition-all duration-300 transform group-hover:scale-110`}>
                        {/* Placeholder for feature icon */}
                      </div>
                      <div>
                        <h4 className={`text-lg sm:text-xl md:text-2xl font-serif font-bold mb-1 sm:mb-2 ${section.accentColor}`}>{feature.title}</h4>
                        <p className="text-sm sm:text-base md:text-lg text-white/80 font-sans font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
    }
  };

  // For mobile view - render sections vertically
  if (isMobile) {
    return (
      <section className="relative bg-white" data-scroll-section ref={sectionRef}>
        {contentSections.map((section, index) => (
          <div
            id={`mobile-section-${index}`}
            key={section.id}
            className={cn(
              "min-h-[100dvh] w-full py-12 px-4 sm:px-8 relative overflow-hidden",
              section.color
            )}
          >
            {/* Architectural SVG background placeholder */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-20">ARCHITECTURAL_SVG_PLACEHOLDER</div>
            <div className="relative z-10 py-8">
              <h3 className="text-sm sm:text-md uppercase tracking-[0.2em] mb-4 font-medium text-lazone-orange font-sans">
                {section.subtitle}
              </h3>
              
              <div className="title-group mb-6">
                <h2 className="text-5xl sm:text-6xl font-serif font-bold leading-none text-white">
                  {section.title}
                </h2>
                <h2 className="text-4xl sm:text-5xl font-serif font-bold leading-none mt-1 text-white/80">
                  {section.titleSecondary}
                </h2>
                <h2 className={`text-3xl sm:text-4xl font-serif font-bold leading-none mt-1 ${section.accentColor}`}>
                  {section.titleAccent}
                </h2>
              </div>
              
              <p className="text-base sm:text-lg max-w-xl text-white/80 leading-relaxed mb-8 font-sans">
                {section.description}
              </p>
              
              {/* Mobile-optimized content based on section layout */}
              <div className="animate-item">
                {section.features && (
                  <div className="space-y-4 mt-6">
                    {section.features.map((feature, i) => (
                      <div key={i} className="bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/5 shadow-lg flex items-start">
                        <div className={`mr-4 p-3 rounded-lg bg-black/60 ${section.accentColor}/20`}>
                          {/* Placeholder for feature icon */}
                        </div>
                        <div>
                          <h4 className={`text-xl font-serif font-bold mb-2 ${section.accentColor}`}>{feature.title}</h4>
                          <p className="text-base text-white/80 font-sans font-light leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.stats && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {section.stats.map((stat, i) => (
                      <div key={i} className="bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/5 text-center shadow-lg">
                        <div className="text-4xl font-serif font-bold text-lazone-orange mb-2">{stat.value}</div>
                        <h4 className="text-lg font-serif font-medium text-white mb-1">{stat.label}</h4>
                        <p className="text-white/70 text-sm font-sans">{stat.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.counters && (
                  <div className="flex flex-wrap gap-6 justify-center sm:justify-start mt-6">
                    {section.counters.map((counter, i) => (
                      <div key={i} className="counter-wrapper text-center" data-visible="true">
                        <CountUp 
                          end={counter.value} 
                          suffix={counter.suffix} 
                          className="text-3xl sm:text-4xl font-serif font-bold text-white" 
                        />
                        <p className="text-base text-white/90 mt-1 font-sans">{counter.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.points && (
                  <ul className="space-y-2 mt-6">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start text-white/90 font-sans">
                        <span className="text-lazone-orange mr-3 text-2xl">•</span>
                        <span className="text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    )
  }

  // For desktop view - horizontal scrolling
  return (
    <section className="relative bg-white" data-scroll-section ref={sectionRef}>
      {/* This wrapper is what gets pinned */}
      <div
        ref={triggerRef}
        className="relative h-[100dvh] overflow-hidden"
      >
        {/* This container holds all the horizontal panels */}
        <div
          ref={horizontalRef}
          className="absolute flex h-[100dvh] top-0 left-0 will-change-transform"
          style={{ width: `${contentSections.length * 100}vw` }}
        >
          {contentSections.map((section, index) => (
            <div
              key={section.id}
              className={cn(
                "h-[100dvh] w-screen relative overflow-auto py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24",
                section.color
              )}
            >
              {/* Architectural SVG background placeholder */}
              <div className="absolute inset-0 pointer-events-none z-0 opacity-20">ARCHITECTURAL_SVG_PLACEHOLDER</div>
              <div className="relative z-10 h-full flex items-center">
                {renderSectionContent(section, index)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Simple placeholder function for renderDecorativeElements
const renderDecorativeElements = (elements?: ContentSection['decorativeElements']) => {
  return null; // Return null to avoid rendering any decorative elements
};