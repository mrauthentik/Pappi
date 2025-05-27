"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
}

interface ParallaxStarsProps {
  scrollY: number
}

export function ParallaxStars({ scrollY }: ParallaxStarsProps) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 2 + 1,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none parallax-stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: `translateY(${scrollY * 0.1}px)`,
            animationDuration: `${star.twinkleSpeed}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      <div
        className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-ping"
        style={{ animationDelay: "2s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping"
        style={{ animationDelay: "5s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-60 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping"
        style={{ animationDelay: "8s", animationDuration: "2s" }}
      />
    </div>
  )
}
