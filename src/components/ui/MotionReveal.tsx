'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealDirection = 'up' | 'left' | 'right'

interface MotionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: RevealDirection
}

const getInitial = (direction: RevealDirection, reduced: boolean) => {
  if (reduced) return { opacity: 1, x: 0, y: 0 }
  if (direction === 'left') return { opacity: 0, x: -24 }
  if (direction === 'right') return { opacity: 0, x: 24 }
  return { opacity: 0, y: 24 }
}

export default function MotionReveal({ children, className, delay = 0, direction = 'up' }: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={getInitial(direction, !!prefersReducedMotion)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay,
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.19, 1, 0.22, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
