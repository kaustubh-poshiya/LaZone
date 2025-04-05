"use client"

import { useEffect, useState, useCallback } from "react"

const SPRING_STRENGTH = 0.1
const DAMPING = 0.8
const PRECISION = 0.01

export default function CustomCursor() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const [velocity, setVelocity] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  const updateSpring = useCallback(() => {
    // Calculate spring force
    const dx = dotPosition.x - circlePosition.x
    const dy = dotPosition.y - circlePosition.y
    
    // Apply spring physics
    let newVelocity = {
      x: velocity.x + dx * SPRING_STRENGTH,
      y: velocity.y + dy * SPRING_STRENGTH
    }
    
    // Apply damping
    newVelocity = {
      x: newVelocity.x * DAMPING,
      y: newVelocity.y * DAMPING
    }
    
    // Update position
    const newPosition = {
      x: circlePosition.x + newVelocity.x,
      y: circlePosition.y + newVelocity.y
    }

    // Only update if the movement is significant
    if (Math.abs(newVelocity.x) > PRECISION || Math.abs(newVelocity.y) > PRECISION) {
      setCirclePosition(newPosition)
      setVelocity(newVelocity)
      requestAnimationFrame(updateSpring)
    }
  }, [dotPosition, circlePosition, velocity])

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      // Update dot position immediately
      setDotPosition({ x: e.clientX, y: e.clientY })
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === "pointer")
    }

    window.addEventListener("mousemove", updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [])

  // Start spring animation when dot position changes
  useEffect(() => {
    requestAnimationFrame(updateSpring)
  }, [dotPosition, updateSpring])

  return (
    <>
      <div
        className="custom-cursor cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      <div
        className="custom-cursor cursor-circle"
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
    </>
  )
}
