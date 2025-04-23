'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

interface CountUpProps {
  end: number
  duration?: number
  delay?: number
  suffix?: string
  className?: string
  startOnView?: boolean
  start?: number
  scrollTrigger?: any
}

export default function CountUp({
  end,
  duration = 2,
  delay = 0,
  suffix = '',
  className = '',
  startOnView = true,
  start = 1,
  scrollTrigger = null
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)
  const tweenRef = useRef<any>(null)

  useEffect(() => {
    if (hasAnimated.current) return

    const startAnimation = () => {
      if (hasAnimated.current) return

      // Create a GSAP tween to animate the count
      const tween = gsap.to({}, {
        duration,
        delay,
        onStart: () => {
          hasAnimated.current = true
        },
        onUpdate: function() {
          // Calculate the current value based on the progress of the tween
          const progress = this.progress()
          const currentValue = Math.round(start + (end - start) * progress)
          setCount(currentValue)
        },
        scrollTrigger: scrollTrigger
      })

      tweenRef.current = tween
    }

    if (startOnView && !scrollTrigger) {
      // Create an intersection observer to start animation when element is in view
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation()
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )

      if (elementRef.current) {
        observer.observe(elementRef.current)
      }

      return () => {
        observer.disconnect()
      }
    } else {
      // Start animation immediately if not waiting for view or using scrollTrigger
      startAnimation()
    }

    return () => {
      // Clean up the tween when component unmounts
      if (tweenRef.current) {
        tweenRef.current.kill()
      }
    }
  }, [end, duration, delay, startOnView, start, scrollTrigger])

  return (
    <div ref={elementRef} className={className}>
      {count}{suffix}
    </div>
  )
}
