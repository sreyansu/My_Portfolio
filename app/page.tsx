"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Background3D } from "@/components/background-3d"

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState("home")

  return (
    <div className="w-full min-h-screen bg-black relative overflow-x-hidden">
      {/* 3D Background */}
      <Background3D />

      {/* UI Overlay */}
      <div className="relative z-10 w-full min-h-screen">
        <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

        <div className="w-full">
          {currentSection === "home" && <HeroSection setCurrentSection={setCurrentSection} />}
          {currentSection === "about" && <AboutSection />}
          {currentSection === "projects" && <ProjectsSection />}
          {currentSection === "skills" && <SkillsSection />}
          {currentSection === "contact" && <ContactSection />}
        </div>
      </div>
    </div>
  )
}
