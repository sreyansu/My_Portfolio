"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Aerotech Website",
      description: "The AeroTech VSSUT website is a modern, responsive web application built using React, TypeScript, and Vite for fast performance and modular development. Styled with Tailwind CSS, it features smooth animations and interactive UI using Framer Motion. The site includes dynamic sections like Team Showcase, Events Timeline, and About the Club, organized through a component-based structure. It supports dark/light mode, has SEO-friendly routing with React Router, and is deployed on Netlify for reliable hosting.A website showcasing Aerotech's innovative solutions and services.",
      technologies: ["React.js", "Tailwind CSS", "TypeScript"],
      demo: "https://aerotechvssut.com/",
      featured: true,
    },
    {
      title: "Weathora - Weather App",
      description: "Weathora is a modern weather web application built using React, TypeScript, and Vite, focused on performance and sleek user experience. It fetches real-time weather data from WeatherAPI and carbon footprint data from CarbonAPI, presenting information with a clean, animated, and adaptive UI. The design dynamically changes based on current weather conditions (e.g., sun, rain, haze) using Framer Motion and conditional styling. The app is fully responsive, optimized for mobile and desktop, and deployed on Netlify with fast loading and smooth UI transitions.",
      technologies: ["React.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/sreyansu/weathora.git",
      demo: "https://weathoraapp.netlify.app/",
      featured: true,
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
              className="bg-black/60 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                <img
                  src={index === 0 ? "/aerotech-preview.jpg" : "/weathora-preview.jpg"}
                  alt={index === 0 ? "Aerotech Website Preview" : "Weathora Weather App Preview"}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500 ease-out"
                />
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
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <>
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
                  {project.github && (
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-cyan-400 hover:text-cyan-300 p-2"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-cyan-400 hover:text-cyan-300 p-2"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
