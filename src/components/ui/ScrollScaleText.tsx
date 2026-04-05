'use client'

import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollScaleTextProps {
  children: ReactNode
  className?: string
}

export default function ScrollScaleText({ children, className }: ScrollScaleTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 20%'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.06])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  )
}
