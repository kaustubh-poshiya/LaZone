"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

// Even smoother animation parameters
const SMOOTHING_FACTOR = 0.08 // Lower value for smoother motion

export default function CustomCursor() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isNavItem, setIsNavItem] = useState(false)
  const rafRef = useRef<number | null>(null)
  const prevTimeRef = useRef<number | null>(null)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const updateCursorPosition = useCallback((timestamp: number) => {
    if (prevTimeRef.current === null) {
      prevTimeRef.current = timestamp
    }
    
    // Calculate time delta for more consistent animation across different frame rates
    const deltaTime = timestamp - prevTimeRef.current
    const smoothingAdjusted = Math.min(1.0, SMOOTHING_FACTOR * (deltaTime / 16.67)) // Normalize to 60fps
    
    // Smooth follow using improved lerp (linear interpolation)
    setCirclePosition(prev => ({
      x: prev.x + (dotPosition.x - prev.x) * smoothingAdjusted,
      y: prev.y + (dotPosition.y - prev.y) * smoothingAdjusted
    }))
    
    prevTimeRef.current = timestamp
    // Continue animation
    rafRef.current = requestAnimationFrame(updateCursorPosition)
  }, [dotPosition])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update dot position immediately
      setDotPosition({ x: e.clientX, y: e.clientY })
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === "pointer")
      
      // Check if hovering over navbar items
      const isNavElement = 
        target.closest('header') !== null && 
        (target.tagName === 'A' || 
         target.tagName === 'BUTTON' || 
         target.closest('a') !== null || 
         target.closest('button') !== null ||
         target.closest('nav') !== null);
      
      setIsNavItem(isNavElement);
    }

    window.addEventListener("mousemove", handleMouseMove)
    
    // Start the animation loop
    rafRef.current = requestAnimationFrame(updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [updateCursorPosition])

  // Get logo image based on theme and nav hover state
  const logoSrc = isNavItem
    ? isDarkMode
      ? "/images/cursor/cursor-logo-light.png"
      : "/images/cursor/cursor-logo.png"
    : "/images/cursor/cursor-logo.png"

  // Determine filter style for logo
  const logoFilter = isNavItem ? "none" : "invert(1)"

  return (
    <>
      <div
        className="custom-cursor cursor-logo"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.2 : 1})`,
          transition: "transform 0.15s ease-out",
          pointerEvents: "none",
          mixBlendMode: isNavItem ? "normal" : "difference",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image 
          src={logoSrc}
          alt="LaZone Logo" 
          width={20} 
          height={50} 
          priority
          style={{ 
            filter: logoFilter,
            objectFit: "contain",
            objectPosition: "center"
          }}
        />
      </div>
      <div
        className="custom-cursor cursor-circle"
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          transition: "transform 0.15s ease-out",
          mixBlendMode: isNavItem ? "normal" : "difference",
          borderColor: isNavItem ? (isDarkMode ? "white" : "black") : "white",
          width: "40px",
          height: "40px"
        }}
      />
    </>
  )
}
