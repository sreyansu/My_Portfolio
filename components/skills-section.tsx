"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Smartphone, Brain, Shield } from "lucide-react"

interface SkillBarProps {
  name: string
  level: number
}

function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-cyan-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 84 },
        { name: "Flask", level: 75 },
        
        
      ],
    },
    {
      icon: Brain,
      title: "AI/Machine Learning",
      skills: [
        { name: "Numpy", level: 70 },
        { name: "Pandas", level: 70 },
        { name: "OpenCV", level: 70 },
        { name: "Scikit-learn", level: 70 },
      ],
    },
    {
      icon: Shield,
      title: "Other Technologies",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "Git/GitHub", level: 90 },
      ],
    },
  ]

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Firebase",
    "Vercel",
    "Netlify",
    "Linux",
    "Jupyter",
  ]

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-black/40 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-colors px-4 py-2"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
