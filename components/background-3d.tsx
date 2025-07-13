"use client"

import { useEffect, useRef, useCallback } from "react"

export function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const isRunningRef = useRef(true)
  const zoomRef = useRef(1)

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !isRunningRef.current) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get scroll position for parallax effect
    const scrollProgress = scrollRef.current / (document.documentElement.scrollHeight - window.innerHeight)
    const zoomFactor = 1 + (scrollProgress * 0.5) // Zoom effect based on scroll

    // Continue animation loop
    animationRef.current = requestAnimationFrame(animate)

    // Your existing animation code here...
    // (I'll include the full working version)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    isRunningRef.current = true

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Enhanced particle system
    const particleLayers: Array<{
      particles: Array<{
        x: number
        y: number
        z: number
        vx: number
        vy: number
        vz: number
        color: string
        size: number
        originalZ: number
        life: number
      }>
    }> = []

    const layerConfigs = [
      { count: 200, speed: 1, color: "rgba(0, 255, 255, 0.8)", size: 2 },
      { count: 150, speed: 1.5, color: "rgba(255, 0, 255, 0.6)", size: 1.5 },
      { count: 100, speed: 2, color: "rgba(0, 255, 0, 0.4)", size: 1 },
      { count: 80, speed: 2.5, color: "rgba(255, 255, 0, 0.3)", size: 0.8 },
    ]

    // Initialize particles
    layerConfigs.forEach((config) => {
      const particles = []
      for (let i = 0; i < config.count; i++) {
        const z = Math.random() * 1000 + 100
        particles.push({
          x: (Math.random() - 0.5) * canvas.width * 3,
          y: (Math.random() - 0.5) * canvas.height * 3,
          z: z,
          originalZ: z,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: Math.random() * config.speed + 0.5,
          color: config.color,
          size: config.size,
          life: Math.random() * 100,
        })
      }
      particleLayers.push({ particles })
    })

    // Floating shapes
    const shapes: Array<{
      x: number
      y: number
      z: number
      rotation: number
      rotationSpeed: number
      type: "cube" | "triangle" | "hexagon"
      size: number
      color: string
      vx: number
      vy: number
    }> = []

    for (let i = 0; i < 20; i++) {
      shapes.push({
        x: (Math.random() - 0.5) * canvas.width * 4,
        y: (Math.random() - 0.5) * canvas.height * 4,
        z: Math.random() * 800 + 200,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: ["cube", "triangle", "hexagon"][Math.floor(Math.random() * 3)] as "cube" | "triangle" | "hexagon",
        size: Math.random() * 40 + 15,
        color: ["rgba(0, 255, 255, 0.4)", "rgba(255, 0, 255, 0.4)", "rgba(0, 255, 0, 0.4)"][
          Math.floor(Math.random() * 3)
        ],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    let mouseX = 0
    let mouseY = 0
    let scrollZoom = 1
    let time = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / canvas.width - 0.5) * 2
      mouseY = (e.clientY / canvas.height - 0.5) * 2
    }

    const handleScroll = () => {
      const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.8), 1)
      scrollZoom = 1 + scrollProgress * 2
    }

    const handleResize = () => {
      resizeCanvas()
    }

    // Drawing functions
    const drawCube = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.strokeRect(-size / 2, -size / 2, size, size)
      // Add inner lines for 3D effect
      ctx.beginPath()
      ctx.moveTo(-size / 2, -size / 2)
      ctx.lineTo(size / 2, size / 2)
      ctx.moveTo(size / 2, -size / 2)
      ctx.lineTo(-size / 2, size / 2)
      ctx.stroke()
      ctx.restore()
    }

    const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      ctx.moveTo(0, -size / 2)
      ctx.lineTo(-size / 2, size / 2)
      ctx.lineTo(size / 2, size / 2)
      ctx.closePath()
      ctx.stroke()
      ctx.restore()
    }

    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const px = (Math.cos(angle) * size) / 2
        const py = (Math.sin(angle) * size) / 2
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
      ctx.restore()
    }

    // Main animation loop
    const animateLoop = () => {
      if (!isRunningRef.current) return

      time += 0.016 // ~60fps

      // Clear canvas with trail effect
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.min(0.1, 0.03 + scrollZoom * 0.02)})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const parallaxX = mouseX * 40 * scrollZoom
      const parallaxY = mouseY * 40 * scrollZoom

      // Animate particles
      particleLayers.forEach((layer, layerIndex) => {
        const parallaxFactor = (layerIndex + 1) * 0.25

        layer.particles.forEach((particle) => {
          // Update particle life for pulsing effect
          particle.life += 0.05

          // Enhanced movement with wave patterns
          const waveX = Math.sin(time * 0.5 + particle.y * 0.001) * 0.2
          const waveY = Math.cos(time * 0.3 + particle.x * 0.001) * 0.2

          particle.x += particle.vx + waveX * scrollZoom
          particle.y += particle.vy + waveY * scrollZoom
          particle.z -= particle.vz * Math.max(1, scrollZoom * 0.8)

          // Zoom rush effect
          if (scrollZoom > 1.5) {
            particle.z -= (scrollZoom - 1.5) * 20
          }

          // Reset particles when they go off screen
          if (particle.z <= 0 || Math.abs(particle.x) > canvas.width * 3 || Math.abs(particle.y) > canvas.height * 3) {
            particle.x = (Math.random() - 0.5) * canvas.width * 3
            particle.y = (Math.random() - 0.5) * canvas.height * 3
            particle.z = 1000 + Math.random() * 500
            particle.life = Math.random() * 100
          }

          // Calculate screen position
          const scale = Math.max(0.1, (250 * scrollZoom) / particle.z)
          const x2d = particle.x * scale + canvas.width / 2 + parallaxX * parallaxFactor
          const y2d = particle.y * scale + canvas.height / 2 + parallaxY * parallaxFactor

          // Calculate opacity with pulsing
          const baseOpacity = Math.max(0, 1 - particle.z / 1000)
          const pulseOpacity = 0.6 + 0.4 * Math.sin(particle.life * 0.1)
          const zoomOpacity = Math.min(1.2, scrollZoom * 0.9)
          const opacity = baseOpacity * pulseOpacity * zoomOpacity

          // Calculate size with pulsing
          const baseSize = particle.size * scale
          const pulseSize = 1 + 0.4 * Math.sin(particle.life * 0.15)
          const size = Math.max(0.5, baseSize * pulseSize * Math.min(2.5, scrollZoom))

          // Draw particle
          if (opacity > 0.01 && size > 0.1) {
            ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${opacity})`)
            ctx.beginPath()
            ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
            ctx.fill()

            // Add glow effect for zoom
            if (scrollZoom > 1.2) {
              ctx.shadowColor = particle.color.replace(/[\d.]+\)$/g, `${opacity * 0.8})`)
              ctx.shadowBlur = size * 3
              ctx.fill()
              ctx.shadowBlur = 0
            }
          }
        })
      })

      // Animate floating shapes
      shapes.forEach((shape) => {
        shape.rotation += shape.rotationSpeed
        shape.x += shape.vx
        shape.y += shape.vy

        // Floating motion
        const floatX = Math.sin(time * 0.2 + shape.x * 0.0005) * 30
        const floatY = Math.cos(time * 0.15 + shape.y * 0.0005) * 20

        const scale = Math.max(0.1, (200 * scrollZoom) / shape.z)
        const x2d = shape.x * scale + canvas.width / 2 + floatX + parallaxX * 0.3
        const y2d = shape.y * scale + canvas.height / 2 + floatY + parallaxY * 0.3
        const size = shape.size * scale

        // Reset shapes if they go too far
        if (Math.abs(shape.x) > canvas.width * 2 || Math.abs(shape.y) > canvas.height * 2) {
          shape.x = (Math.random() - 0.5) * canvas.width * 4
          shape.y = (Math.random() - 0.5) * canvas.height * 4
        }

        // Draw shapes if on screen
        if (x2d > -100 && x2d < canvas.width + 100 && y2d > -100 && y2d < canvas.height + 100 && size > 1) {
          ctx.strokeStyle = shape.color
          ctx.lineWidth = Math.max(1, 2 * scale * scrollZoom)

          // Add glow
          ctx.shadowColor = shape.color
          ctx.shadowBlur = Math.min(20, 8 * scrollZoom)

          switch (shape.type) {
            case "cube":
              drawCube(ctx, x2d, y2d, size, shape.rotation)
              break
            case "triangle":
              drawTriangle(ctx, x2d, y2d, size, shape.rotation)
              break
            case "hexagon":
              drawHexagon(ctx, x2d, y2d, size, shape.rotation)
              break
          }

          ctx.shadowBlur = 0
        }
      })

      // Draw connections between nearby particles
      if (scrollZoom > 1.4) {
        const connectionDistance = 120 * Math.min(scrollZoom, 2.5)
        let connectionCount = 0
        const maxConnections = Math.floor(scrollZoom * 15)

        particleLayers[0].particles.forEach((particle1, i) => {
          if (connectionCount >= maxConnections || i % 2 !== 0) return

          const scale1 = Math.max(0.1, (250 * scrollZoom) / particle1.z)
          const x1 = particle1.x * scale1 + canvas.width / 2
          const y1 = particle1.y * scale1 + canvas.height / 2

          particleLayers[0].particles.slice(i + 1, i + 5).forEach((particle2) => {
            if (connectionCount >= maxConnections) return

            const scale2 = Math.max(0.1, (250 * scrollZoom) / particle2.z)
            const x2 = particle2.x * scale2 + canvas.width / 2
            const y2 = particle2.y * scale2 + canvas.height / 2

            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

            if (distance < connectionDistance) {
              const opacity = Math.max(0, (1 - distance / connectionDistance) * 0.5 * (scrollZoom - 1.4))
              ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`
              ctx.lineWidth = Math.max(0.5, scrollZoom * 0.8)
              ctx.beginPath()
              ctx.moveTo(x1, y1)
              ctx.lineTo(x2, y2)
              ctx.stroke()
              connectionCount++
            }
          })
        })
      }

      // Continue animation
      animationRef.current = requestAnimationFrame(animateLoop)
    }

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    // Start animation
    handleScroll() // Initial scroll check
    animateLoop()

    // Cleanup function
    return () => {
      isRunningRef.current = false
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}
