"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Brain, Rocket } from "lucide"

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
                Hailing from Bhadrak, Odisha, my journey into the world of technology has been a blend of relentless curiosity and a passion for creating meaningful digital experiences.
              </p>
              <p>
                🎓 I’m currently pursuing Computer Science and Engineering at VEER SURENDRA SAI UNIVERSITY OF TECHNOLOGY (VSSUT), Sambalpur. My time here has shaped my technical foundation while encouraging me to innovate and collaborate beyond the classroom.
              </p>
              <p>
                💻 As a Web Developer at the Aerotech Club, I’ve contributed to building and maintaining digital platforms that support club operations and outreach, gaining hands-on experience in full-stack web technologies.
🌤️ One of my standout projects is Weathora, a modern weather web app with a futuristic UI that adapts to real-time conditions. It integrates weather data, air quality index, and carbon footprint metrics—reflecting my commitment to blending design with environmental consciousness.
💼 I further honed my skills during a Web Developer Internship at Skill Dunia, Hyderabad, where I worked on real-world web development tasks, focusing on clean code, responsive interfaces, and user-centric design.
              </p>
              <p>
                🔗 Whether it’s crafting intuitive interfaces or exploring new tech stacks, I’m driven by the desire to build solutions that are not only functional but also meaningful.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Web Development",
                  "DevOps"
                  
                  
                  
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
