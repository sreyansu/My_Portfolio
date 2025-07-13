"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Brain, Rocket } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science Engineering Student",
      details: "Currently pursuing B.Tech in CSE with focus on AI/ML and Software Development",
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-Stack Developer",
      details: "Experienced in modern web technologies and mobile app development",
    },
    {
      icon: Brain,
      title: "AI/ML",
      description: "Machine Learning Enthusiast",
      details: "Working on projects involving deep learning, computer vision, and NLP",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Problem Solver",
      details: "Passionate about creating innovative solutions to real-world problems",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          A passionate computer science engineering student with a love for technology, innovation, and creating
          solutions that make a difference.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-black/40 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-cyan-400 font-medium mb-3">{item.description}</p>
                <p className="text-gray-400 text-sm">{item.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-300">
              <p>
                As a Computer Science Engineering student, I'm constantly exploring the intersection of technology and
                innovation. My journey began with a curiosity about how things work, which led me to dive deep into
                programming, algorithms, and system design.
              </p>
              <p>
                I specialize in full-stack development with expertise in modern frameworks like React, Next.js, and
                Node.js. My passion extends to artificial intelligence and machine learning, where I've worked on
                projects involving computer vision, natural language processing, and predictive analytics.
              </p>
              <p>
                Beyond coding, I enjoy participating in hackathons, contributing to open-source projects, and staying
                updated with the latest technological trends. I believe in continuous learning and am always excited to
                take on new challenges that push the boundaries of what's possible.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Web Development",
                  "Mobile Apps",
                  "Cloud Computing",
                  "DevOps",
                  "Blockchain",
                  "IoT",
                  "Cybersecurity",
                ].map((interest) => (
                  <Badge
                    key={interest}
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
