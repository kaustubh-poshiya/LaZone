"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { FaWhatsapp } from "react-icons/fa"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const theme  = useTheme()

  // current mode
  const isDarkMode = theme.theme === "dark"

  // Determine if current page has a light background header
  // Add more paths here if needed 
  const hasLightBackground = ['/contact', '/about', '/services', '/portfolio', '/services/interior-design', '/services/architecture', '/services/lighting-design', '/services/master-planning', '/services/furnishings-product', '/services/lifestyle-wellbeing'].includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
      // Don't reset scroll position
    } else {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Interior Design", href: "/services/interior-design" },
        { name: "Architecture", href: "/services/architecture" },
        { name: "Lighting Design", href: "/services/lighting-design" },
        { name: "Master Planning", href: "/services/master-planning" },
        { name: "Furnishings Product", href: "/services/furnishings-product" },
        { name: "Lifestyle & Wellbeing", href: "/services/lifestyle-wellbeing" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  // Determine WhatsApp icon color based on scroll state and background
  const whatsappIconColor = !isDarkMode && (isScrolled || hasLightBackground) ? "black" : "white"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent py-5 ",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <Image
              src={isDarkMode ? "/images/logo-light.png" :"/images/logo.png"}
              alt="LAZONE Logo"
              width={100}
              height={100}
              priority
              className="h-14 w-auto transition-transform duration-300 ease-in-out"
              style={{ transform: isScrolled ? "scale(0.9)" : "scale(1)" }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    className={`flex mt-2 items-center text-sm uppercase tracking-wider font-light transition-colors ${
                      isScrolled || hasLightBackground
                        ? "text-foreground hover:text-lazone-vibrantOrange"
                        : "text-white hover:text-white/80"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    aria-controls="services-dropdown"
                    aria-label="Services dropdown"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="h-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}>
                  </div>
                  <div
                    id="services-dropdown"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className={cn(
                      "absolute left-0 w-56 origin-top-left bg-background/95 backdrop-blur-md shadow-lg ring-1 ring-border focus:outline-none rounded-md overflow-hidden transition-all duration-200 ease-in-out",
                      servicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
                    )}
                  >
                    <div className="py-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-lazone-vibrantOrange transition-colors border-l-2 border-transparent hover:border-lazone-vibrantOrange"
                          onClick={() => setServicesOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm uppercase tracking-wider font-light transition-colors ${
                    isScrolled || hasLightBackground
                      ? "text-foreground hover:text-lazone-vibrantOrange"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="https://wa.me/+97145533128?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20services.%20Please%20call%20me%20back.%20Thanks"
            target="_blank"
            className="transition-transform hover:scale-110 cursor-pointer flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp size={24} color={whatsappIconColor} />
          </Link>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-around gap-2">
          <Link
            href="https://wa.me/+97145533128?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20services.%20Please%20call%20me%20back.%20Thanks"
            target="_blank"
            className="transition-transform hover:scale-110 cursor-pointer flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp size={24} color={whatsappIconColor} />
          </Link>
          <div className="flex items-center justify-center">
            <ThemeToggle />
          </div>
          <button
            className="relative z-10"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              if (!mobileMenuOpen) {
                setServicesOpen(false)
              }
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ?
              <X className="h-6 w-6 text-foreground" /> :
              <Menu className={`h-6 w-6 ${isScrolled || hasLightBackground ? "text-foreground" : "text-white"}`} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center overflow-y-auto" style={{ height: '100vh', top: 0 }}>
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
            <nav className="flex flex-col items-center space-y-6 py-16 max-h-screen">
              {navLinks.map((link) => (
                <div key={link.name} className="text-center">
                  {link.dropdown ? (
                    <>
                      <button
                        className="flex items-center text-lg uppercase tracking-wider font-light text-foreground hover:text-lazone-vibrantOrange transition-colors"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            servicesOpen ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="mt-4 space-y-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-sm text-foreground hover:text-lazone-vibrantOrange py-1"
                              onClick={() => {
                                setServicesOpen(false)
                                setMobileMenuOpen(false)
                              }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-lg uppercase tracking-wider font-light text-foreground hover:text-lazone-vibrantOrange transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
