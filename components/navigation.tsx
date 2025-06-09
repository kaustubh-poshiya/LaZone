"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Project Management", href: "/services/project-management" },
        { name: "Architecture", href: "/services/architecture" },
        { name: "Interior Design", href: "/services/interior-design" },
        { name: "Furnishing & Fit-Out", href: "/services/furnishing-fitout" },
        { name: "Lifestyle & Wellbeing", href: "/services/lifestyle-wellbeing" },
        { name: "3D Rendering", href: "/services/3d-rendering" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <span className="text-2xl font-serif tracking-wider">LAZONE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    className="flex items-center text-sm uppercase tracking-wider font-light text-foreground hover:text-primary transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 mt-2 w-56 origin-top-left bg-background shadow-lg ring-1 ring-border focus:outline-none transition-all duration-200 ease-in-out",
                      servicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
                    )}
                  >
                    <div className="py-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
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
                  className="text-sm uppercase tracking-wider font-light text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-0 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="text-center">
                  {link.dropdown ? (
                    <>
                      <button
                        className="flex items-center text-lg uppercase tracking-wider font-light text-foreground hover:text-primary transition-colors"
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
                              className="block text-sm text-foreground hover:text-primary py-1"
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
                      className="text-lg uppercase tracking-wider font-light text-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

