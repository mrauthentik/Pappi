"use client"

import { useEffect, useState } from "react"
import { Download, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroProps {
  scrollY: number
}

const titles = [
  "Pixel Perfect Front-End Developer",
  "Creativity at its Peak",
  "React & TypeScript Bound",
  "Ideas to Life",
  "FireLord 🔥",
  "Clean Codes",
]


export function Hero({ scrollY }: HeroProps) {

   const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 1800)
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length)
        setFade(false)
      }, 200)
    }, 2500)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
               Hi am Uche,
              </h1>

               <p
                className={`text-xl md:text-5xl text-white/80 transition-opacity duration-2000 ${fade ? "opacity-0" : "opacity-100"}`}
                key={titles[index]}
              >
                {titles[index]}
              </p>

              <p className="text-lg text-white/60 max-w-lg animate-fade-in-delay-2">
                Software Developer Tutor | Licensed CISCO NetAcad Instructor
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <a href="/files/Umoke Uchenna Praise CV.pdf" download="Umoke_Uchenna_Praise_CV.pdf">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
          </a>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transform hover:scale-110 transition-all duration-200"
                  asChild
                >
                  <a href="https://github.com/mrauthentik" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transform hover:scale-110 transition-all duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transform hover:scale-110 transition-all duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl shadow-blue-500/25 relative z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uche%20potrait.jpg-bx840Ymck544BqChHf4CgKD7qiau6W.jpeg"
                  alt="Uche - Software Developer"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-20 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
