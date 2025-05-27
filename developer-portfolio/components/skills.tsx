"use client"

import { Code, Database, Palette, Cpu } from "lucide-react"

interface SkillsProps {
  scrollY: number
}

export function Skills({ scrollY }: SkillsProps) {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      color: "text-blue-400",
      skills: ["HTML", "CSS", "Tailwind CSS", "ShadCN", "Material UI", "JavaScript", "jQuery", "React", "TypeScript"],
    },
    {
      title: "Backend",
      icon: Database,
      color: "text-cyan-400",
      skills: ["Node.js", "Firebase", "Supabase"],
    },
    {
      title: "Tools & Others",
      icon: Code,
      color: "text-blue-400",
      skills: ["GitHub", "jQuery Mobile", "Arduino"],
    },
  ]

  const roadmapSteps = [
    { skill: "HTML", year: "2020", position: 10 },
    { skill: "CSS", year: "2020", position: 20 },
    { skill: "JavaScript", year: "2021", position: 30 },
    { skill: "jQuery", year: "2021", position: 40 },
    { skill: "Node.js", year: "2023", position: 50 },
    { skill: "React", year: "2024", position: 60 },
    { skill: "TypeScript", year: "2025", position: 70 },
    { skill: "Firebase", year: "2025", position: 80 },
    { skill: "Supabase", year: "2025", position: 90 },
    { skill: "Next.js", year: "2025", position: 100 },
  ]

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div
          className="transform transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Journey
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              My technical expertise and the roadmap of my learning journey in software development.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-6">
                    <Icon className={`h-8 w-8 ${category.color} mr-3`} />
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white rounded-lg text-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-200 transform hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Learning Roadmap */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Learning Roadmap
            </h3>

            <div className="relative">
              {/* Road path */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full opacity-30" />
              </div>

              {/* Roadmap steps */}
              <div className="relative flex justify-between items-center py-8 overflow-x-auto">
                {roadmapSteps.map((step, index) => (
                  <div
                    key={step.skill}
                    className="flex flex-col items-center min-w-0 flex-shrink-0 mx-2"
                    style={{
                      transform: `translateY(${index % 2 === 0 ? "-20px" : "20px"})`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 mb-4 animate-pulse" />
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-center min-w-[100px]">
                      <p className="text-white font-semibold text-sm">{step.skill}</p>
                      <p className="text-blue-300 text-xs">{step.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current learning indicator - positioned at the end */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30">
                <Cpu className="h-8 w-8 text-yellow-400 animate-pulse mr-3" />
                <span className="text-yellow-400 font-bold text-lg">Currently Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
