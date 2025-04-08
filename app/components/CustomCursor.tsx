"use client"

import { useEffect, useState, useCallback, useRef } from "react"

// Even smoother animation parameters
const SMOOTHING_FACTOR = 0.08 // Lower value for smoother motion

export default function CustomCursor() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const rafRef = useRef<number | null>(null)
  const prevTimeRef = useRef<number | null>(null)

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

  return (
    <>
      <div
        className="custom-cursor cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          transition: "transform 0.15s ease-out"
        }}
      />
      <div
        className="custom-cursor cursor-circle"
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          transition: "transform 0.15s ease-out"
        }}
      />
    </>
  )
}
