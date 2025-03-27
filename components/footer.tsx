import Link from "next/link"
import { Instagram, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-serif tracking-wider">LAZONE</span>
            </Link>
            <p className="text-neutral-400 text-sm mb-6">
              Bold creativity. Minimal elegance.
              <br />
              Transforming spaces since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/interior-design"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/architecture"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/services/lighting-design"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Lighting Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/master-planning"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Master Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/furnishings-product"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Furnishings Product
                </Link>
              </li>
              <li>
                <Link
                  href="/services/lifestyle-wellbeing"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Lifestyle & Wellbeing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h3>
            <address className="not-italic text-neutral-400 text-sm space-y-2">
              <p>123 Design Avenue</p>
              <p>Creative District</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">+1 (212) 555-7890</p>
              <p>
                <a href="mailto:info@lazone.design" className="hover:text-white transition-colors">
                  info@lazone.design
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} LAZONE Design Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors text-xs">
              Terms of Service
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors text-xs">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

