"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Github, Linkedin } from "lucide-react"
import { useEffect, useState, useRef } from "react"

interface HeroSectionProps {
  setCurrentSection: (section: string) => void
}

export function HeroSection({ setCurrentSection }: HeroSectionProps) {
  const [text, setText] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isZooming, setIsZooming] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const fullText = "Computer Science Engineer"

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  // Continuous animation loop for smooth effects
  useEffect(() => {
    let time = 0
    const animate = () => {
      time += 0.016

      // Update any continuous animations here
      // This ensures smooth animations even when other effects pause

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrollY(scrollPosition)

      // Smooth scroll-based zoom
      const maxScroll = window.innerHeight * 0.8
      const scrollProgress = Math.min(scrollPosition / maxScroll, 1)
      const zoomFactor = 1 + scrollProgress * 1.8 + Math.pow(scrollProgress, 2) * 0.7
      setZoomLevel(Math.min(zoomFactor, 4))
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = (e.clientX - centerX) / (rect.width / 2)
      const mouseY = (e.clientY - centerY) / (rect.height / 2)

      setMousePosition({
        x: Math.max(-1, Math.min(1, mouseX)) * 60,
        y: Math.max(-1, Math.min(1, mouseY)) * 60,
      })
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
        setIsZooming(true)

        const zoomDelta = e.deltaY > 0 ? 0.92 : 1.08
        setZoomLevel((prev) => {
          const newZoom = prev * zoomDelta
          return Math.max(0.3, Math.min(newZoom, 5))
        })

        setTimeout(() => setIsZooming(false), 200)
      }
    }

    // Use passive listeners for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("wheel", handleWheel, { passive: false })

    // Initial calls
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  const handleZoomClick = (targetZoom: number) => {
    setIsZooming(true)
    setZoomLevel(targetZoom)
    setTimeout(() => setIsZooming(false), 400)
  }

  // Calculate dynamic transforms
  const parallaxOffset = {
    x: mousePosition.x * (0.15 + zoomLevel * 0.05),
    y: mousePosition.y * (0.15 + zoomLevel * 0.05),
  }

  const scrollParallax = scrollY * 0.4

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative overflow-hidden"
      style={{
        transform: `
          scale(${zoomLevel}) 
          translate(${parallaxOffset.x}px, ${parallaxOffset.y - scrollParallax}px)
        `,
        transition: isZooming ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "transform 0.05s ease-out",
        transformOrigin: "center center",
      }}
    >
      {/* Animated zoom reveal circles */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: Math.max(0, Math.min(1, (zoomLevel - 1) * 0.9)),
          transform: `scale(${1 / Math.sqrt(zoomLevel)}) rotate(${scrollY * 0.1}deg)`,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 border rounded-full animate-pulse"
            style={{
              width: `${(i + 1) * 120 + Math.sin(Date.now() * 0.001 + i) * 20}px`,
              height: `${(i + 1) * 120 + Math.sin(Date.now() * 0.001 + i) * 20}px`,
              marginLeft: `${-(i + 1) * 60 - Math.sin(Date.now() * 0.001 + i) * 10}px`,
              marginTop: `${-(i + 1) * 60 - Math.sin(Date.now() * 0.001 + i) * 10}px`,
              borderColor: `rgba(${i % 3 === 0 ? "0, 255, 255" : i % 3 === 1 ? "255, 0, 255" : "0, 255, 0"}, ${0.4 - i * 0.04})`,
              borderWidth: `${Math.max(1, 4 - i * 0.5)}px`,
              animationDuration: `${3 + i * 0.5}s`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced floating elements */}
      {[
        { pos: "top-20 left-10", size: "w-20 h-20", shape: "rotate-45", color: "border-cyan-500/40", factor: 0.6 },
        {
          pos: "top-40 right-20",
          size: "w-16 h-16",
          shape: "rounded-full",
          color: "border-purple-500/40",
          factor: -0.4,
        },
        {
          pos: "bottom-40 left-20",
          size: "w-12 h-12",
          shape: "",
          color: "bg-gradient-to-r from-cyan-500/30 to-purple-500/30",
          factor: 0.8,
        },
        {
          pos: "bottom-20 right-10",
          size: "w-24 h-24",
          shape: "rotate-45",
          color: "border-green-500/40",
          factor: -0.5,
        },
        {
          pos: "top-1/2 left-5",
          size: "w-8 h-8",
          shape: "rounded-full",
          color: "bg-yellow-500/30",
          factor: 0.3,
        },
        {
          pos: "top-1/3 right-5",
          size: "w-14 h-14",
          shape: "rotate-12",
          color: "border-pink-500/30",
          factor: -0.6,
        },
      ].map((element, i) => (
        <div
          key={i}
          className={`absolute ${element.pos} ${element.size} border-2 ${element.color} ${element.shape}`}
          style={{
            transform: `
              translate(${mousePosition.x * element.factor}px, ${mousePosition.y * element.factor}px) 
              rotate(${scrollY * 0.05 * (i + 1) + Math.sin(Date.now() * 0.001 + i) * 10}deg) 
              scale(${Math.max(0.2, 1 + (zoomLevel - 1) * 0.6)})
            `,
            opacity: Math.max(0.1, 1.3 - zoomLevel * 0.5),
            filter: `blur(${Math.max(0, (zoomLevel - 2.5) * 1.5)}px)`,
            animation: `pulse ${2 + i * 0.3}s infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}

      {/* Main content with enhanced effects */}
      <div
        className="mb-8 relative z-10"
        style={{
          transform: `
            translateY(${scrollParallax}px) 
            scale(${Math.max(0.4, 1 + (zoomLevel - 1) * 0.4)})
          `,
          opacity: Math.max(0.3, 1.6 - zoomLevel * 0.4),
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
          style={{
            textShadow: `
              0 0 ${Math.min(40, 15 * zoomLevel)}px rgba(0, 255, 255, ${Math.min(0.9, zoomLevel * 0.4)}),
              0 0 ${Math.min(80, 30 * zoomLevel)}px rgba(255, 0, 255, ${Math.min(0.6, zoomLevel * 0.3)})
            `,
            filter: zoomLevel > 3 ? `blur(${(zoomLevel - 3) * 2}px)` : "none",
            animation: "pulse 3s infinite",
          }}
        >
          Alex Chen
        </h1>
        <div
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 h-12 flex items-center justify-center"
          style={{
            transform: `scale(${Math.max(0.6, 1 + (zoomLevel - 1) * 0.3)})`,
          }}
        >
          <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">{text}</span>
          <span className="animate-pulse ml-1 text-cyan-400">|</span>
        </div>
      </div>

      {/* Interactive content */}
      <div
        className="relative z-10"
        style={{
          transform: `
            translateY(${scrollParallax * 0.6}px) 
            scale(${Math.max(0.3, 1.9 - zoomLevel * 0.5)})
          `,
          opacity: Math.max(0.1, 1.8 - zoomLevel * 0.6),
        }}
      >
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
          Passionate about creating innovative solutions through code. Specializing in full-stack development, AI/ML,
          and cutting-edge technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            onClick={() => setCurrentSection("projects")}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            style={{
              boxShadow: `
                0 0 ${Math.min(50, 20 * zoomLevel)}px rgba(0, 255, 255, ${Math.min(0.7, zoomLevel * 0.3)}),
                0 4px 15px rgba(0, 0, 0, 0.3)
              `,
            }}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentSection("contact")}
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 mb-12">
          {[Github, Linkedin, Download].map((Icon, i) => (
            <Button
              key={i}
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-cyan-500/10"
              style={{
                animation: `pulse ${2 + i * 0.5}s infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <Icon className="w-6 h-6" />
            </Button>
          ))}
        </div>

        <Button
          variant="ghost"
          onClick={() => setCurrentSection("about")}
          className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
        >
          <ChevronDown className="w-8 h-8" />
        </Button>
      </div>

      {/* Enhanced zoom reveal grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: Math.max(0, Math.min(0.9, (zoomLevel - 1.8) * 2)),
          transform: `scale(${1 / zoomLevel}) rotate(${scrollY * 0.03}deg)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(0, 255, 255, 0.5) 1px, transparent 1px),
              radial-gradient(circle at center, rgba(255, 0, 255, 0.4) 1px, transparent 1px),
              radial-gradient(circle at center, rgba(0, 255, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: `
              ${25 + Math.sin(Date.now() * 0.001) * 5}px ${25 + Math.sin(Date.now() * 0.001) * 5}px,
              ${50 + Math.cos(Date.now() * 0.0015) * 10}px ${50 + Math.cos(Date.now() * 0.0015) * 10}px,
              ${75 + Math.sin(Date.now() * 0.0008) * 15}px ${75 + Math.sin(Date.now() * 0.0008) * 15}px
            `,
            backgroundPosition: "0 0, 12.5px 12.5px, 25px 25px",
          }}
        />
      </div>
    </div>
  )
}
