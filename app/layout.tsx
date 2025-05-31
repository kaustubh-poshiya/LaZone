import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "./components/CustomCursor"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: 'LAZONE | Creative Design Studio',
  description: 'Architecture, Interior Design & Lifestyle Experiences',
  openGraph: {
    url: 'https://la-zone.vercel.app/',
    type: 'website',
    title: 'LAZONE | Creative Design Studio',
    description: 'Architecture, Interior Design & Lifestyle Experiences',
    images: ['/images/lobby.png'],
  },
  twitter: {
    card: 'summary_large_image',
    domain: 'la-zone.vercel.app',
    url: 'https://la-zone.vercel.app/',
    title: 'LAZONE | Creative Design Studio',
    description: 'Architecture, Interior Design & Lifestyle Experiences',
    images: ['/images/lobby.png'],
  },
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/images/logo.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/images/logo.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo.png',
        color: '#000000'
      }
    ]
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
