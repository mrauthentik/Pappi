"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectsProps {
  scrollY: number
}

export function Projects({ scrollY }: ProjectsProps) {
  const projects = [
    {
      title: "NEXA",
      description:
        "A comprehensive CBT-based platform designed specifically for students of NOUN University in Nigeria. Features include practice tests, progress tracking, and detailed analytics.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com/mrauthentik/CBT",
      live: "https://nexaedu.ng",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "GitHub Explorer",
      description:
        "An intuitive application for exploring GitHub repositories. View repos, check forks, analyze languages, and discover repository owners with a beautiful interface.",
      tech: ["React", "TypeScript", "GitHub API", "Material UI"],
      github: "https://github.com/mrauthentik/Github-repo-explorer",
      live: "https://github-repo-explorer-rust.vercel.app",
      gradient: "from-green-500 to-white-600",
    },
    {
      title: "Zenama Website",
      description:
        "An NGO website in Nigeria.",
      tech: ["React.js", "Framer Motion", "CSS"],
      github: "https://github.com/mrauthentik",
      live: "https://zenama.ng",
      gradient: "from-pink-500 to-red-600",
    },
     {
      title: "Alaran Africa",
      description:
        "A Fashion House website.",
      tech: ["React.js", "Framer Motion", "CSS"],
      github: "https://github.com/mrauthentik",
      live: "https://alaranafrica.com",
      gradient: "from-purple-500 to-cyan-600",
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div
          className="transform transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web technologies and user-centered design.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <CardHeader>
                  <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />
                  <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 flex-1"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
