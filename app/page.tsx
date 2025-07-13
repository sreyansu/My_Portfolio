"use client"

import { useState, useEffect } from "react"
import { useSectionVisibility } from "@/lib/use-section-visibility"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Background3D } from "@/components/background-3d"

export default function Portfolio() {
  useSectionVisibility();
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black">
      {/* 3D Background */}
      <div className="fixed top-0 left-0 w-full h-full">
        <Background3D />
      </div>

      {/* UI Overlay */}
      <div className="relative z-10">
        <Navigation 
          currentSection={currentSection} 
          setCurrentSection={scrollToSection} 
        />

        <main className="container mx-auto px-4">
          <section id="home" className="min-h-screen flex items-center justify-center">
            <HeroSection setCurrentSection={scrollToSection} />
          </section>
          <section id="about" className="min-h-screen flex items-center justify-center">
            <AboutSection />
          </section>
          <section id="projects" className="min-h-screen flex items-center justify-center">
            <ProjectsSection />
          </section>
          <section id="skills" className="min-h-screen flex items-center justify-center">
            <SkillsSection />
          </section>
          <section id="contact" className="min-h-screen flex items-center justify-center">
            <ContactSection />
          </section>
        </main>
      </div>
    </div>
  )
}
