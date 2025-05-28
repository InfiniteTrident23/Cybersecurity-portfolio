"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredContainer({ children, className = "", staggerDelay = 0.1 }: StaggeredContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
}) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          ...directionOffset[direction],
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.25, 0.25, 0.75],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
