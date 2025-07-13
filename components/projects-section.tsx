"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Chat Application",
      description: "A real-time chat application with AI-powered message suggestions and sentiment analysis.",
      technologies: ["React", "Node.js", "Socket.io", "TensorFlow.js", "MongoDB"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Smart Campus Management System",
      description: "A comprehensive system for managing campus resources, student data, and academic workflows.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Computer Vision Object Detector",
      description: "Real-time object detection system using YOLO algorithm with custom training capabilities.",
      technologies: ["Python", "OpenCV", "PyTorch", "Flask", "Docker"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on Ethereum blockchain with smart contracts.",
      technologies: ["Solidity", "Web3.js", "React", "Truffle", "MetaMask"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "IoT Weather Monitoring",
      description: "IoT-based weather monitoring system with real-time data visualization and alerts.",
      technologies: ["Arduino", "Raspberry Pi", "Python", "MQTT", "InfluxDB"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Mobile Expense Tracker",
      description: "Cross-platform mobile app for tracking expenses with AI-powered categorization.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "ML Kit"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          A showcase of my technical skills and creative problem-solving through various projects
        </p>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-black/40 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-6xl text-cyan-400/30">{index === 0 ? "🤖" : "🏫"}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Other Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-black/40 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors text-lg">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="border-gray-500/50 text-gray-400 text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-2">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-2">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
