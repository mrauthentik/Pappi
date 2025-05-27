"use client"

import { Code, Palette, Zap } from "lucide-react"

interface AboutProps {
  scrollY: number
}

export function About({ scrollY }: AboutProps) {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-4">
        <div
          className="transform transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">Crafting Digital Experiences</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                I'm not just passionate, but a <span className="text-blue-400 font-semibold">Pixel Perfect Front-End Developer</span>{" "}
                with a keen eye for detail and a love for creating stunning, responsive web applications. My journey in
                software development has been driven by curiosity and a commitment to excellence.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                As a <span className="text-cyan-400 font-semibold">Software Developer Tutor</span>, I enjoy sharing
                knowledge and helping others grow in their coding journey. I believe in writing clean, maintainable code
                and staying up-to-date with the latest technologies and best practices.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Currently working as a tutor at <span className="text-blue-400 font-semibold">Clique and EBS</span>, and
                proudly serving as a licensed instructor at{" "}
                <span className="text-cyan-400 font-semibold">CISCO NetAcad</span>.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                <Code className="h-12 w-12 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Clean Code</h4>
                <p className="text-white/70">
                  Writing maintainable, scalable, and efficient code that stands the test of time.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <Palette className="h-12 w-12 text-pink-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Pixel Perfect</h4>
                <p className="text-white/70">
                  Attention to detail in every pixel, ensuring designs come to life exactly as envisioned.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Performance</h4>
                <p className="text-white/70">
                  Optimizing applications for speed, accessibility, and exceptional user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
