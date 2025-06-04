'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { 
  // ArrowRight, Box, Compass, Hexagon, Layers, Triangle, Circle, Square, 
  // Award, Home, Wind, Lightbulb, Sun, Star, Zap, Shield, Eye, Layout, 
  // PanelTop, Palette, Aperture, Sparkles, Construction
  Lightbulb, Leaf, Users, 
  Award, Target, Sparkles,
  Layout, Palette, Sun
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
    color: "bg-[#080D13]",
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
    color: "bg-[#080D13]",
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
    color: "bg-[#080D13]",
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

        // Create the horizontal scrolling animation with optimized settings
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${distanceToScroll * 0.6}`,
            pin: true,
            anticipatePin: 1,
            scrub: 0.5,
            pinSpacing: true,
            refreshPriority: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            preventOverlaps: true
          }
        })

        // The timeline animation that moves the content horizontally
        tl.to(horizontalRef.current, {
          x: -distanceToScroll,
          ease: "power1.inOut",
          force3D: true
        })

        // Create animations for each section's content with optimized settings
        gsap.utils.toArray(horizontalRef.current.children).forEach((panel, i) => {
          const contentEl = (panel as HTMLElement).querySelector('.content-wrapper')
          if (!contentEl) return

          // Adjust trigger points based on section index
          const startOffset = i === 1 ? "left-=40%" : "left-=20%"
          const endOffset = i === 1 ? "right-=80%" : "right-=70%"

          // Simplified content wrapper animation with longer duration
          gsap.fromTo(contentEl,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: panel as HTMLElement,
                containerAnimation: tl,
                start: startOffset + " center",
                end: endOffset + " center",
                scrub: 0.5,
                fastScrollEnd: true,
                toggleActions: "play none none reverse"
              }
            }
          )

          // Simplified subtitle animation with adjusted timing
          if (subtitleRefs.current[i]) {
            gsap.fromTo(subtitleRefs.current[i],
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: (i === 1 ? "left-=60%" : "left-=25%") + " center",
                  end: (i === 1 ? "left-=50%" : "left-=15%") + " center",
                  scrub: 0.5,
                  fastScrollEnd: true,
                  toggleActions: "play none none reverse"
                }
              }
            )
          }

          // Simplified title animations with adjusted timing
          if (titleRefs.current[i]) {
            gsap.fromTo(titleRefs.current[i],
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: (i === 1 ? "left-=60%" : "left-=25%") + " center",
                  end: (i === 1 ? "left-=45%" : "left-=10%") + " center",
                  scrub: 0.5,
                  fastScrollEnd: true,
                  toggleActions: "play none none reverse"
                }
              }
            )
          }

          if (secondaryTitleRefs.current[i]) {
            gsap.fromTo(secondaryTitleRefs.current[i],
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: (i === 1 ? "left-=55%" : "left-=20%") + " center",
                  end: (i === 1 ? "left-=40%" : "left-=5%") + " center",
                  scrub: 0.5,
                  fastScrollEnd: true,
                  toggleActions: "play none none reverse"
                }
              }
            )
          }

          if (accentTitleRefs.current[i]) {
            gsap.fromTo(accentTitleRefs.current[i],
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: (i === 1 ? "left-=50%" : "left-=15%") + " center",
                  end: (i === 1 ? "left-=35%" : "left") + " center",
                  scrub: 0.5,
                  fastScrollEnd: true,
                  toggleActions: "play none none reverse"
                }
              }
            )
          }

          // Simplified description animation with adjusted timing
          if (descriptionRefs.current[i]) {
            gsap.fromTo(descriptionRefs.current[i],
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: (i === 1 ? "left-=30%" : "left-=10%") + " center",
                  end: (i === 1 ? "left-=15%" : "left+=5%") + " center",
                  scrub: 0.5,
                  fastScrollEnd: true,
                  toggleActions: "play none none reverse"
                }
              }
            )
          }

          // Simplified content blocks animation with adjusted timing
          if (contentRefs.current[i]) {
            const items = contentRefs.current[i]?.querySelectorAll('.animate-item')
            if (items?.length) {
              gsap.fromTo(items,
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.2,
                  scrollTrigger: {
                    trigger: panel as HTMLElement,
                    containerAnimation: tl,
                    start: (i === 1 ? "left-=25%" : "left-=5%") + " center",
                    end: (i === 1 ? "left-=10%" : "left+=10%") + " center",
                    scrub: 0.5,
                    fastScrollEnd: true,
                    toggleActions: "play none none reverse"
                  }
                }
              )
            }
            
            // Optimized counter visibility handling with adjusted timing
            const counters = contentRefs.current[i]?.querySelectorAll('.counter-wrapper')
            if (counters?.length) {
              counters.forEach((counter) => {
                ScrollTrigger.create({
                  trigger: panel as HTMLElement,
                  containerAnimation: tl,
                  start: (i === 1 ? "left-=40%" : "left-=20%") + " center-=20%",
                  end: (i === 1 ? "right-=60%" : "right+=20%") + " center+=20%",
                  onEnter: () => counter.setAttribute('data-visible', 'true'),
                  onLeaveBack: () => counter.setAttribute('data-visible', 'false'),
                  onLeave: () => counter.setAttribute('data-visible', 'false'),
                  fastScrollEnd: true,
                  toggleActions: "play none none reverse"
                })
              })
            }
          }
        })

        // Add a marker for the last section to prevent overscrolling
        const lastSection = horizontalRef.current.children[contentSections.length - 1] as HTMLElement
        ScrollTrigger.create({
          trigger: lastSection,
          start: "right center",
          end: "right center",
          onEnter: () => {
            // Add a class to the last section to indicate it's fully visible
            lastSection.classList.add('last-section-visible')
          },
          onLeaveBack: () => {
            // Remove the class when moving back
            lastSection.classList.remove('last-section-visible')
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
      // For mobile: simplified animations
      const setupMobileAnimations = () => {
        contentSections.forEach((_, i) => {
          const sectionEl = document.getElementById(`mobile-section-${i}`)
          if (!sectionEl) return

          // Simplified mobile animations
          gsap.fromTo(sectionEl,
            { opacity: 0 },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: sectionEl,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
                fastScrollEnd: true
              }
            }
          )

          // Simplified item animations
          const items = sectionEl.querySelectorAll('.animate-item')
          if (items?.length) {
            gsap.fromTo(items,
              { opacity: 0 },
              {
                opacity: 1,
                stagger: 0.1,
                scrollTrigger: {
                  trigger: sectionEl,
                  start: "top 85%",
                  end: "top 65%",
                  scrub: 1,
                  fastScrollEnd: true
                }
              }
            )
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
          <div className="content-wrapper w-full flex flex-col justify-center transition-all duration-300 hover:scale-[1.02]">
            <h3
              ref={el => setSubtitleRef(el, index)}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 font-medium text-lazone-orange font-sans"
            >
              {section.subtitle}
            </h3>

            <div className="title-group mb-6 sm:mb-8">
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-none mt-1 text-lazone-orange"
              >
                {section.titleAccent}
              </h2>
            </div>

            <p
              ref={el => setDescriptionRef(el, index)}
              className="text-sm sm:text-base lg:text-lg max-w-xl text-white/80 leading-relaxed mb-6 font-sans"
            >
              {section.description}
            </p>

            <div ref={el => setContentRef(el, index)}>
              {section.points && (
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="animate-item flex items-start text-white/90 font-sans">
                      <span className="text-lazone-orange mr-2 text-lg">•</span>
                      <span className="text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      
      case "center":
        return (
          <div className="content-wrapper mt-10 w-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02]">
            <h3
              ref={el => setSubtitleRef(el, index)}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 font-medium text-lazone-orange text-center font-sans"
            >
              {section.subtitle}
            </h3>
            
            <div className="title-group mb-6 sm:mb-8 text-center">
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-none mt-1 text-lazone-orange"
              >
                {section.titleAccent}
              </h2>
            </div>
            
            <p
              ref={el => setDescriptionRef(el, index)}
              className="text-sm sm:text-base lg:text-lg max-w-2xl text-center text-white/80 leading-relaxed mb-8 font-sans"
            >
              {section.description}
            </p>
            
            <div ref={el => setContentRef(el, index)} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {section.stats?.map((stat, i) => {
                const getIcon = (label: string) => {
                  if (label.includes("Client")) return <Award className="w-6 h-6 text-lazone-orange group-hover:rotate-12 transition-transform duration-300" />;
                  if (label.includes("Design")) return <Sparkles className="w-6 h-6 text-lazone-orange group-hover:rotate-12 transition-transform duration-300" />;
                  return <Target className="w-6 h-6 text-lazone-orange group-hover:rotate-12 transition-transform duration-300" />;
                };

                return (
                  <div 
                    key={i} 
                    className="animate-item bg-lazone-black/40 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-lazone-orange/20 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:shadow-lazone-orange/10 transform hover:-translate-y-1 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-lazone-orange/0 via-lazone-orange/0 to-lazone-orange/0 group-hover:from-lazone-orange/5 group-hover:via-lazone-orange/10 group-hover:to-lazone-orange/5 transition-all duration-500 -translate-x-full group-hover:translate-x-0"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-lg bg-lazone-black/60 group-hover:bg-lazone-orange/10 transition-all duration-300 transform group-hover:scale-110">
                          {getIcon(stat.label)}
                        </div>
                      </div>
                      <div className="text-4xl font-serif font-bold text-lazone-orange mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                      <h4 className="text-lg font-serif font-medium text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">{stat.label}</h4>
                      <p className="text-white/70 text-sm font-sans group-hover:translate-x-1 transition-transform duration-300">{stat.description}</p>
                    </div>
                  </div>
                );
              })}
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
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-none mt-1 sm:mt-2 text-lazone-orange"
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
          <div className="content-wrapper w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-col justify-center">
              <h3
                ref={el => setSubtitleRef(el, index)}
                className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 font-medium text-lazone-orange font-sans"
              >
                {section.subtitle}
              </h3>
              
              <div className="title-group mb-6 sm:mb-8">
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
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-none mt-1 text-lazone-orange"
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
            </div>

            <div ref={el => setContentRef(el, index)} className="flex flex-col justify-center">
              <div className="space-y-4 sm:space-y-6">
                {section.features?.map((feature, i) => {
                  const getIcon = (title: string) => {
                    if (title.includes("Intelligent")) return <Layout className="w-6 h-6 text-lazone-orange group-hover:rotate-12 transition-transform duration-300" />;
                    if (title.includes("Premium")) return <Palette className="w-6 h-6 text-lazone-orange group-hover:rotate-12 transition-transform duration-300" />;
                    if (title.includes("Natural")) return <Sun className="w-6 h-6 text-lazone-orange group-hover:rotate-12 transition-transform duration-300" />;
                    return <Sparkles className="w-6 h-6 text-lazone-orange group-hover:rotate-12 transition-transform duration-300" />;
                  };

                  return (
                    <div 
                      key={i} 
                      className="animate-item bg-lazone-black/40 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-lazone-orange/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lazone-orange/10 transform hover:-translate-y-1 flex items-start group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-lazone-orange/0 via-lazone-orange/0 to-lazone-orange/0 group-hover:from-lazone-orange/5 group-hover:via-lazone-orange/10 group-hover:to-lazone-orange/5 transition-all duration-500 -translate-x-full group-hover:translate-x-0"></div>
                      <div className="mr-4 p-3 rounded-lg bg-lazone-black/60 group-hover:bg-lazone-orange/10 transition-all duration-300 transform group-hover:scale-110">
                        {getIcon(feature.title)}
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-xl font-serif font-bold mb-2 text-lazone-orange group-hover:translate-x-1 transition-transform duration-300">{feature.title}</h4>
                        <p className="text-base text-white/80 font-sans font-light leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                          {feature.description.length > 100 ? `${feature.description.substring(0, 100)}...` : feature.description}
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
              "min-h-screen w-full py-12 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16 lg:px-32 relative overflow-hidden",
              section.color
            )}
          >
            {/* Architectural SVG background placeholder */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-20">ARCHITECTURAL_SVG_PLACEHOLDER</div>
            <div className="relative z-10">
              {renderSectionContent(section, index)}
            </div>
          </div>
        ))}
      </section>
    )
  }

  // For desktop view - horizontal scrolling
  return (
    <section className="relative bg-[#080D13]" data-scroll-section ref={sectionRef}>
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
                "h-screen w-screen relative overflow-hidden py-8 sm:py-12 md:py-16",
                section.color
              )}
            >
              {/* Add a subtle pattern overlay for depth */}
              <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none z-0"></div>
              
              <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl h-full flex items-center">
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