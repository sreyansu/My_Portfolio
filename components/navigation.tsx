"use client"

import { Button } from "@/components/ui/button"
import { Home, User, Code, Zap, Mail, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { useEffect, useState } from "react"

interface NavigationProps {
  currentSection: string
  setCurrentSection: (section: string) => void
}

export function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Hide navigation when heavily zoomed (scroll-based)
      const zoomLevel = 1 + (currentScrollY / (window.innerHeight * 0.8)) * 1.5
      setIsVisible(zoomLevel < 2.5)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const handleZoomControl = (action: "in" | "out" | "reset") => {
    const currentScroll = window.scrollY
    let targetScroll = currentScroll

    switch (action) {
      case "in":
        targetScroll = Math.min(currentScroll + window.innerHeight * 0.2, window.innerHeight * 2)
        break
      case "out":
        targetScroll = Math.max(currentScroll - window.innerHeight * 0.2, 0)
        break
      case "reset":
        targetScroll = 0
        break
    }

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <>
      {/* Main Navigation */}
      <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
        style={{
          opacity: Math.max(0.3, 1 - scrollY / (window.innerHeight * 0.5)),
          transform: `translateX(-50%) translateY(${Math.min(scrollY * 0.1, 20)}px) scale(${Math.max(0.8, 1 - scrollY / (window.innerHeight * 2))})`,
        }}
      >
        <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-md border border-cyan-500/30 rounded-full px-4 py-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant="ghost"
              size="sm"
              onClick={() => setCurrentSection(id)}
              className={`relative rounded-full transition-all duration-300 ${
                currentSection === id
                  ? "bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/25"
                  : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
              {currentSection === id && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse" />
              )}
            </Button>
          ))}
        </div>
      </nav>

      {/* Zoom Controls */}
      <div
        className="fixed top-20 right-6 z-50 flex flex-col gap-2 transition-all duration-300"
        style={{
          opacity: Math.max(0.4, 1 - scrollY / (window.innerHeight * 0.3)),
          transform: `translateY(${Math.min(scrollY * 0.05, 10)}px) scale(${Math.max(0.7, 1 - scrollY / (window.innerHeight * 3))})`,
        }}
      >
        <Button
          onClick={() => handleZoomControl("in")}
          size="sm"
          variant="outline"
          className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 w-10 h-10 p-0 backdrop-blur-sm bg-black/20"
          title="Zoom In (Scroll Down)"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => handleZoomControl("reset")}
          size="sm"
          variant="outline"
          className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 w-10 h-10 p-0 backdrop-blur-sm bg-black/20"
          title="Reset Zoom"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => handleZoomControl("out")}
          size="sm"
          variant="outline"
          className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 w-10 h-10 p-0 backdrop-blur-sm bg-black/20"
          title="Zoom Out (Scroll Up)"
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
      </div>

      {/* Zoom Level Indicator */}
      <div
        className="fixed bottom-6 right-6 z-50 bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-1 transition-all duration-300"
        style={{
          opacity: Math.max(0.3, 1 - scrollY / (window.innerHeight * 0.4)),
        }}
      >
        <span className="text-cyan-400 text-sm">
          Zoom: {Math.round((1 + (scrollY / (window.innerHeight * 0.8)) * 1.5) * 100)}%
        </span>
      </div>

      {/* Scroll Hint */}
      {scrollY < 50 && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 text-center animate-bounce">
          <p className="text-cyan-400/70 text-sm mb-2">Scroll to zoom • Ctrl+Wheel for manual zoom</p>
        </div>
      )}
    </>
  )
}
