import Link from "next/link"
import { Instagram, Linkedin, Facebook, ArrowUpRight, MapPin, Phone, Mail } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-[-1px]">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <ScrollReveal animation="fade-bottom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image width={100} height={100} src="/images/logo-light.png" alt="LAZONE Logo" className="h-20 w-auto" />
              </Link>
              <p className="text-white/70 text-sm mb-6">
                Bold creativity. Minimal elegance.
                <br />
                Transforming spaces since 2010.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/lazone.ae/"
                  target="_blank"
                  className="text-white/70 hover:text-lazone-orange transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-7 w-7" />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-lazone-orange transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-7 w-7" />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-lazone-orange transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-7 w-7" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-lazone-orange">
                <Link
                  href="/services"
                  className="text-lazone-orange hover:text-lazone-orange transition-colors text-sm flex items-center group"
                >
                  Services
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/interior-design"
                    className="text-white/70 hover:text-lazone-orange transition-colors text-sm flex items-center group"
                  >
                    Interior Design
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/architecture"
                    className="text-white/70 hover:text-lazone-orange transition-colors text-sm flex items-center group"
                  >
                    Architecture
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/lighting-design"
                    className="text-white/70 hover:text-lazone-orange transition-colors text-sm flex items-center group"
                  >
                    Lighting Design
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/master-planning"
                    className="text-white/70 hover:text-lazone-orange transition-colors text-sm flex items-center group"
                  >
                    Master Planning
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/furnishings-product"
                    className="text-white/70 hover:text-lazone-orange transition-colors text-sm flex items-center group"
                  >
                    Furnishings Product
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/lifestyle-wellbeing"
                    className="text-white/70 hover:text-lazone-orange transition-colors text-sm flex items-center group"
                  >
                    Lifestyle & Wellbeing
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-lazone-orange">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-lazone-orange transition-colors text-sm flex items-center group"
                  >
                    About Us
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-white/70 hover:text-lazone-orange transition-colors text-sm flex items-center group"
                  >
                    Portfolio
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-lazone-orange transition-colors text-sm flex items-center group"
                  >
                    Contact
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-lazone-orange">Contact</h3>
              <address className="not-italic text-white/70 text-sm space-y-2">
                <div className="flex gap-1 items-center">
                  <MapPin className="h-5 w-5 text-neutral-400 mt-0.5" />
                  <p> P.O Box: 62137, Dubai, UAE</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Phone className="h-5 w-5 text-neutral-400 mt-0.5" />
                  <p className="pt-2">+971 4 553 3128</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Mail className="h-5 w-5 text-neutral-400 mt-0.5" />
                  <p>
                    <a href="mailto:contact@lazone.ae" className="hover:text-lazone-orange transition-colors">
                      contact@lazone.ae
                    </a>
                  </p>
                </div>
              </address>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} LAZONE Design Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/50 hover:text-lazone-orange transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-lazone-orange transition-colors text-xs">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/50 hover:text-lazone-orange transition-colors text-xs">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

