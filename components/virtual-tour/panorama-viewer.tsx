"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, Info, Maximize, Minimize, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Hotspot = {
  id: string
  x: number
  y: number
  title: string
  description: string
}

type PanoramaScene = {
  id: string
  title: string
  image: string
  hotspots: Hotspot[]
}

type PanoramaViewerProps = {
  scenes: PanoramaScene[]
  initialScene?: string
  className?: string
}

export default function PanoramaViewer({ scenes, initialScene, className }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentScene, setCurrentScene] = useState<PanoramaScene | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    // Set initial scene
    const scene = initialScene ? scenes.find((s) => s.id === initialScene) : scenes[0]

    if (scene) {
      setCurrentScene(scene)
    }
  }, [scenes, initialScene])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const newX = e.clientX - startPosition.x
    const newY = Math.max(-100, Math.min(100, e.clientY - startPosition.y))

    setPosition({ x: newX, y: newY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }

    setIsFullscreen(!isFullscreen)
  }

  const nextScene = () => {
    if (!currentScene) return

    const currentIndex = scenes.findIndex((s) => s.id === currentScene.id)
    const nextIndex = (currentIndex + 1) % scenes.length
    setCurrentScene(scenes[nextIndex])
    setPosition({ x: 0, y: 0 })
  }

  const prevScene = () => {
    if (!currentScene) return

    const currentIndex = scenes.findIndex((s) => s.id === currentScene.id)
    const prevIndex = currentIndex === 0 ? scenes.length - 1 : currentIndex - 1
    setCurrentScene(scenes[prevIndex])
    setPosition({ x: 0, y: 0 })
  }

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2))
  }

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 1))
  }

  if (!currentScene) {
    return <div className="flex items-center justify-center h-[400px] bg-muted">Loading panorama...</div>
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "panorama-container relative select-none",
        isFullscreen ? "fixed inset-0 z-50 h-screen w-screen rounded-none" : "",
        className,
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${currentScene.image})`,
          transform: `translateX(${position.x}px) translateY(${position.y}px) scale(${zoom})`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      />

      {/* Hotspots */}
      {currentScene.hotspots.map((hotspot) => (
        <div
          key={hotspot.id}
          className="hotspot"
          style={{
            left: `${hotspot.x}%`,
            top: `${hotspot.y}%`,
          }}
        >
          <Info className="h-4 w-4" />
          <div className="hotspot-content">
            <h4 className="font-medium text-foreground mb-1">{hotspot.title}</h4>
            <p className="text-muted-foreground text-xs">{hotspot.description}</p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevScene}
          className="text-white hover:bg-white/20"
          aria-label="Previous scene"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={zoomOut}
          className="text-white hover:bg-white/20"
          aria-label="Zoom out"
        >
          <Minus className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={zoomIn}
          className="text-white hover:bg-white/20"
          aria-label="Zoom in"
        >
          <Plus className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFullscreen}
          className="text-white hover:bg-white/20"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextScene}
          className="text-white hover:bg-white/20"
          aria-label="Next scene"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Scene title */}
      <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-md">
        <h3 className="text-sm font-medium">{currentScene.title}</h3>
      </div>
    </div>
  )
}

