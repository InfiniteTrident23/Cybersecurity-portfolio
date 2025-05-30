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
    const fontSize = 18 // Even larger font
    const columns = Math.floor(canvas.width / fontSize)

    // Initialize drops at random positions
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    // Drawing function
    const draw = () => {
      // Semi-transparent background to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)" // Even faster fade
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length))

        // Calculate x position
        const x = i * fontSize

        // Calculate y position
        const y = drops[i] * fontSize

        // MAXIMUM BRIGHTNESS - maintain brightness throughout the entire trail
        if (drops[i] > 0 && drops[i] < 3) {
          // Ultra bright leading characters - almost white
          ctx.fillStyle = "#ffffff" // Pure white
          ctx.shadowColor = "#ff0000"
          ctx.shadowBlur = 25

          // Draw multiple times for extra brightness
          ctx.font = `900 ${fontSize}px monospace`
          ctx.fillText(text, x, y)
          ctx.fillText(text, x, y) // Double draw
        } else if (drops[i] >= 3 && drops[i] < 8) {
          // Super bright red
          ctx.fillStyle = "#ff6666" // Bright pink-red
          ctx.shadowColor = "#ff0000"
          ctx.shadowBlur = 20
          ctx.font = `bold ${fontSize}px monospace`
          ctx.fillText(text, x, y)
        } else if (drops[i] >= 8 && drops[i] < 15) {
          // Bright red
          ctx.fillStyle = "#ff3333"
          ctx.shadowColor = "#ff0000"
          ctx.shadowBlur = 15
          ctx.font = `bold ${fontSize}px monospace`
          ctx.fillText(text, x, y)
        } else {
          // Keep the rest bright red instead of fading
          ctx.fillStyle = "#ff2222" // Bright red throughout
          ctx.shadowColor = "#ff0000"
          ctx.shadowBlur = 12
          ctx.font = `600 ${fontSize}px monospace`
          ctx.fillText(text, x, y)
        }

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
    const interval = setInterval(draw, 40) // Faster animation

    // Cleanup
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme, resolvedTheme])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
