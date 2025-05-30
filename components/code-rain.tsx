"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix code characters (using a mix of characters for a hacker feel)
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

    // Column setup
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Initialize drops at random positions
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    // Drawing function
    const draw = () => {
      // Semi-transparent background to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)" // Increased from 0.1 to 0.15
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text color to red variants
      const baseColor = "#ff0000" // Red color

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length))

        // Calculate x position
        const x = i * fontSize

        // Calculate y position
        const y = drops[i] * fontSize

        // Add gradient effect - brighter at the head of the column
        const gradient = ctx.createLinearGradient(x, y - fontSize * 5, x, y)
        gradient.addColorStop(0, "rgba(255, 0, 0, 0.2)")
        gradient.addColorStop(1, "rgba(255, 50, 50, 1)")

        // Make the head character extra bright
        if (drops[i] > 0 && drops[i] < 5) {
          ctx.fillStyle = "rgba(255, 100, 100, 1)"
        } else {
          ctx.fillStyle = gradient
        }

        // Add glow effect
        ctx.shadowColor = "#ff0000"
        ctx.shadowBlur = 8
        ctx.font = `${fontSize}px monospace`
        ctx.fillText(text, x, y)

        // Reset shadow for next character
        ctx.shadowColor = "transparent"
        ctx.shadowBlur = 0

        // Reset drop position if it's below canvas or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop down
        drops[i]++
      }
    }

    // Animation loop
    const interval = setInterval(draw, 50)

    // Cleanup
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme, resolvedTheme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
