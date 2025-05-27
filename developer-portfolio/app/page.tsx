"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ParallaxStars } from "@/components/parallax-stars"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 light:from-gray-50 light:via-blue-50 light:to-gray-100">
        <ParallaxStars scrollY={scrollY} />
        <Navigation />

        <main className="relative z-10">
          <Hero scrollY={scrollY} />
          <About scrollY={scrollY} />
          <Projects scrollY={scrollY} />
          <Experience scrollY={scrollY} />
          <Skills scrollY={scrollY} />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}
