"use client"

import { GraduationCap, Briefcase, Award } from "lucide-react"

interface ExperienceProps {
  scrollY: number
}

export function Experience({ scrollY }: ExperienceProps) {
  const experiences = [
    {
      title: "Software Engineer Tutor",
      company: "Clique Software and More & EBS Institute",
      period: "2024 - Present",
      description:
        "Teaching modern web development technologies and mentoring aspiring developers in their coding journey.",
      icon: GraduationCap,
      color: "text-blue-400",
    },
    {
      title: "Licensed Instructor",
      company: "CISCO NetAcad",
      period: "2022 - 2024",
      description: "Certified instructor delivering networking, JavaScript, IOT and cybersecurity courses to students worldwide.",
      icon: Award,
      color: "text-cyan-400",
    },
    {
      title: "Front-End Developer",
      company: "Freelance",
      period: "2021 - Present",
      description: "Creating pixel-perfect, responsive web applications for clients across various industries.",
      icon: Briefcase,
      color: "text-blue-400",
    },
  ]

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div
          className="transform transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              My journey as an educator and developer, sharing knowledge and building amazing digital experiences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 rounded-full" />

              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <div
                    key={exp.title}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center mb-4">
                          <Icon className={`h-8 w-8 ${exp.color} mr-3`} />
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <p className="text-blue-400 font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        <p className="text-sm text-cyan-400 mb-3 font-medium">{exp.period}</p>
                        <p className="text-white/70 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
