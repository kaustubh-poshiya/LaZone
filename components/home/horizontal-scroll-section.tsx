'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import CountUp from '@/components/ui/count-up'

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
    layout: "split"
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
    layout: "center"
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
    layout: "split"
  },
  
  // {
  //   id: 3,
  //   title: "Distinctive",
  //   titleSecondary: "Design",
  //   titleAccent: "Aesthetics",
  //   subtitle: "OUR LEGACY OF EXCELLENCE",
  //   description: "With decades of experience, we've mastered the art of creating spaces that inspire, comfort, and endure. Our portfolio speaks of our commitment to architectural excellence.",
  //   counters: [
  //     { value: 250, label: "Completed Projects", suffix: "+" },
  //     { value: 15, label: "Design Awards", suffix: "+" },
  //     { value: 25, label: "Years of Excellence", suffix: "+" }
  //   ],
  //   color: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
  //   accentColor: "text-lazone-orange",
  //   layout: "right"
  // },
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
      setIsMobile(window.innerWidth < 768)
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
          <div className="content-wrapper h-full w-full flex flex-col justify-center px-6 sm:px-10 md:pl-16 md:pr-12 lg:pl-32 xl:pl-48 pt-20 sm:pt-16 md:pt-0 transition-all duration-300 hover:scale-[1.02]">
            <h3
              ref={el => setSubtitleRef(el, index)}
              className="text-sm sm:text-md uppercase tracking-[0.2em] mb-4 font-medium text-lazone-orange font-sans"
            >
              {section.subtitle}
            </h3>

            <div className="title-group mb-8 sm:mb-10 lg:mb-12">
              <h2
                ref={el => setTitleRef(el, index)}
                className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-none text-white"
              >
                {section.title} <ArrowRight className="inline-block ml-4 h-10 w-10" />
              </h2>
              <h2
                ref={el => setSecondaryTitleRef(el, index)}
                className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-none mt-1 sm:mt-2 text-white/80"
              >
                {section.titleSecondary}
              </h2>
              <h2
                ref={el => setAccentTitleRef(el, index)}
                className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>

            <p
              ref={el => setDescriptionRef(el, index)}
              className="text-base sm:text-lg lg:text-xl max-w-lg text-white/80 leading-relaxed mb-8 font-sans"
            >
              {section.description}
            </p>

            <div ref={el => setContentRef(el, index)}>
              {section.points && (
                <ul className="space-y-3">
                  {section.points.map((point, i) => (
                    <li key={i} className="animate-item flex items-start text-white/90 font-sans">
                      <span className="text-lazone-orange mr-3 text-2xl">•</span>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      
      case "center":
        return (
          <div className="content-wrapper h-full w-full flex flex-col items-center justify-center px-6 transition-all duration-300 hover:scale-[1.02]">
            <h3
              ref={el => setSubtitleRef(el, index)}
              className="text-sm sm:text-md uppercase tracking-[0.2em] mb-4 font-medium text-lazone-orange text-center font-sans"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-8 sm:mb-10 lg:mb-12 text-center">
              <h2
                ref={el => setTitleRef(el, index)}
                className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2
                ref={el => setSecondaryTitleRef(el, index)}
                className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-none mt-1 sm:mt-2 text-white/80"
              >
                {section.titleSecondary}
              </h2>
              <h2
                ref={el => setAccentTitleRef(el, index)}
                className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p
              ref={el => setDescriptionRef(el, index)}
              className="text-lg max-w-2xl text-center text-white/80 leading-relaxed mb-12 font-sans"
            >
              {section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {section.stats?.map((stat, i) => (
                <div key={i} className="animate-item bg-black/30 p-8 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 text-center">
                  <div className="text-5xl font-serif font-bold text-lazone-orange mb-3">{stat.value}</div>
                  <h4 className="text-xl font-serif font-medium text-white mb-2">{stat.label}</h4>
                  <p className="text-white/70 text-sm font-sans">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "right":
        return (
          <div className="content-wrapper h-full w-full flex flex-col justify-center items-end px-6 sm:px-10 md:pr-16 md:pl-12 lg:pr-32 xl:pr-48 pt-20 sm:pt-16 md:pt-0 transition-all duration-300 hover:scale-[1.02]">
            <h3
              ref={el => setSubtitleRef(el, index)}
              className="text-sm sm:text-md uppercase tracking-[0.2em] mb-4 font-medium text-lazone-orange text-right font-sans"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-8 sm:mb-10 lg:mb-12 text-right">
              <h2
                ref={el => setTitleRef(el, index)}
                className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold leading-none text-white"
              >
                {section.title}
              </h2>
              <h2
                ref={el => setSecondaryTitleRef(el, index)}
                className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-none mt-1 sm:mt-2 text-white/80"
              >
                {section.titleSecondary}
              </h2>
              <h2
                ref={el => setAccentTitleRef(el, index)}
                className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p
              ref={el => setDescriptionRef(el, index)}
              className="text-lg max-w-lg text-right text-white/80 leading-relaxed mb-8 font-sans"
            >
              {section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="flex flex-row space-x-6 justify-end">
              {section.counters?.map((counter, i) => (
                <div key={i} className="counter-wrapper animate-item text-center">
                  <CountUp 
                    end={counter.value} 
                    suffix={counter.suffix} 
                    className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white" 
                  />
                  <p className="text-base md:text-lg text-white/90 mt-2 font-sans">{counter.label}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "split":
        return (
          <div className="content-wrapper h-full w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 p-6 sm:p-10 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-col justify-center md:pr-8 mb-8 md:mb-0">
              <h3
                ref={el => setSubtitleRef(el, index)}
                className="text-sm sm:text-md uppercase tracking-[0.2em] mb-4 font-medium text-lazone-orange font-sans"
              >
                {section.subtitle}
              </h3>
              
              <div className="title-group mb-8 sm:mb-10 lg:mb-12">
                <h2
                  ref={el => setTitleRef(el, index)}
                  className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-none text-white"
                >
                  {section.title}
                </h2>
                <h2
                  ref={el => setSecondaryTitleRef(el, index)}
                  className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-none mt-1 sm:mt-2 text-white/80"
                >
                  {section.titleSecondary}
                </h2>
                <h2
                  ref={el => setAccentTitleRef(el, index)}
                  className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-none mt-1 sm:mt-2 ${section.accentColor}`}
                >
                  {section.titleAccent}
                </h2>
              </div>
              
              <p
                ref={el => setDescriptionRef(el, index)}
                className="text-base sm:text-lg text-white/80 leading-relaxed font-sans"
              >
                {section.description}
              </p>
            </div>

            <div ref={el => setContentRef(el, index)} className="flex flex-col justify-center mt-2 sm:mt-0">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {section.features?.map((feature, i) => (
                  <div key={i} className="animate-item bg-black/30 p-8 sm:p-10 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lazone-orange/5">
                    <h4 className={`text-2xl sm:text-3xl font-serif font-bold mb-3 sm:mb-4 ${section.accentColor}`}>{feature.title}</h4>
                    <p className="text-lg sm:text-xl text-white/80 font-sans font-light leading-relaxed">
                      {feature.description.length > 100 ? `${feature.description.substring(0, 100)}...` : feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none"></div>
          </div>
        );
    }
  };

  // For mobile view - render sections vertically
  if (isMobile) {
    return (
      <section className="relative bg-black" data-scroll-section ref={sectionRef}>
        {contentSections.map((section, index) => (
          <div
            id={`mobile-section-${index}`}
            key={section.id}
            className={cn(
              "min-h-screen w-full py-16 px-4 relative",
              section.color
            )}
          >
            {renderSectionContent(section, index)}
          </div>
        ))}
      </section>
    )
  }

  // For desktop view - horizontal scrolling
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
              {renderSectionContent(section, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}