'use client'

import { motion } from 'framer-motion'

interface BlueprintGridProps {
  className?: string
  opacity?: number
  color?: string
  animated?: boolean
}

export default function BlueprintGrid({ className = '', opacity = 0.04, color = '#003580', animated = true }: BlueprintGridProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Main grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-grid-sm" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke={color} strokeWidth="0.3" opacity={opacity * 0.5} />
          </pattern>
          <pattern id="bp-grid-lg" width="96" height="96" patternUnits="userSpaceOnUse">
            <rect width="96" height="96" fill="url(#bp-grid-sm)" />
            <path d="M 96 0 L 0 0 0 96" fill="none" stroke={color} strokeWidth="0.6" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-grid-lg)" />
      </svg>

      {/* Animated crosshair markers at grid intersections */}
      {animated && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: opacity * 6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-[20%] left-[15%]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="3" fill="none" stroke={color} strokeWidth="0.8" />
              <line x1="0" y1="8" x2="16" y2="8" stroke={color} strokeWidth="0.4" />
              <line x1="8" y1="0" x2="8" y2="16" stroke={color} strokeWidth="0.4" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: opacity * 6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-[55%] right-[20%]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="3" fill="none" stroke={color} strokeWidth="0.8" />
              <line x1="0" y1="8" x2="16" y2="8" stroke={color} strokeWidth="0.4" />
              <line x1="8" y1="0" x2="8" y2="16" stroke={color} strokeWidth="0.4" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: opacity * 6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="absolute bottom-[25%] left-[40%]"
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="2" y="2" width="8" height="8" fill="none" stroke={color} strokeWidth="0.6" strokeDasharray="2 2" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  )
}
