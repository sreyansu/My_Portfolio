"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Github, Linkedin, Instagram } from "lucide-react"
import { SocialIcon } from 'react-social-icons'
import { useEffect, useState } from "react"

interface HeroSectionProps {
  setCurrentSection: (section: string) => void
}

export function HeroSection({ setCurrentSection }: HeroSectionProps) {
  const [text, setText] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const titleText = "Sreyansu Sekhar Mohanty"
  const subtitleText = "Computer Science & Engineering Undergraduate"

  useEffect(() => {
    let i = 0
    let j = 0
    const timer = setInterval(() => {
      if (i <= titleText.length) {
        setText(titleText.slice(0, i))
        i++
      } else if (j <= subtitleText.length) {
        setSubtitle(subtitleText.slice(0, j))
        j++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center px-4">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text mb-4">
        {text}
      </h1>
      <p className="text-2xl text-gray-300 mb-8">
        {subtitle}
      </p>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl">
        Passionate about creating innovative solutions through code. Specializing in full-stack development, AI/ML, and cutting-edge technologies.
      </p>
      <div className="flex items-center gap-4">
        <Button 
          size="lg" 
          onClick={() => setCurrentSection("projects")}
          className="bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          View Projects
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          onClick={() => window.open("https://drive.google.com/file/d/1iyX9dgeT2ne-7BdoEa3zg2cCsdT3niqF/view?usp=sharing", "_blank")}
          className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
        >
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open("https://github.com/sreyansu", "_blank")}
          className="text-gray-400 hover:text-[#2dba4e] hover:bg-[#2dba4e]/10 transition-all duration-300"
        >
          <Github className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open("https://www.linkedin.com/in/sreyansu-sekhar-mohanty-774153297/", "_blank")}
          className="text-gray-400 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </Button>
        <SocialIcon
          url="https://x.com/SekharSreyansu"
          style={{ height: 40, width: 40 }}
          target="_blank"
          bgColor="transparent"
          fgColor="#808080"
          className="hover:opacity-80 transition-opacity"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open("https://www.instagram.com/sreyansu_sm/", "_blank")}
          className="text-gray-400 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-300"
        >
          <Instagram className="w-5 h-5" />
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCurrentSection("about")}
        className="absolute bottom-8 animate-bounce text-gray-400 hover:text-white"
      >
        <ChevronDown className="w-6 h-6" />
      </Button>
    </div>
  )
}
