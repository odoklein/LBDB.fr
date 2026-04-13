'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface FloatingGeoProps {
  className?: string
  variant?: 'light' | 'dark'
}

export default function FloatingGeo({ className = '', variant = 'light' }: FloatingGeoProps) {
  const prefersReducedMotion = useReducedMotion()
  const c = variant === 'dark' ? 'rgba(255,255,255,' : 'rgba(0,53,128,'

  if (prefersReducedMotion) return null

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Hexagon */}
      <motion.svg
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[12%] right-[8%]"
        width="48" height="48" viewBox="0 0 48 48" fill="none"
      >
        <polygon
          points="24,2 44,14 44,34 24,46 4,34 4,14"
          stroke={`${c}0.08)`}
          strokeWidth="1"
          fill={`${c}0.02)`}
        />
      </motion.svg>

      {/* Triangle */}
      <motion.svg
        animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[55%] left-[6%]"
        width="36" height="36" viewBox="0 0 36 36" fill="none"
      >
        <polygon
          points="18,3 33,30 3,30"
          stroke={`${c}0.07)`}
          strokeWidth="1"
          fill={`${c}0.015)`}
        />
      </motion.svg>

      {/* Diamond */}
      <motion.svg
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[20%] right-[15%]"
        width="28" height="28" viewBox="0 0 28 28" fill="none"
      >
        <rect
          x="14" y="2" width="17" height="17"
          transform="rotate(45 14 2)"
          stroke={`${c}0.06)`}
          strokeWidth="0.8"
          fill={`${c}0.01)`}
        />
      </motion.svg>

      {/* Small circle */}
      <motion.div
        animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-[35%] right-[35%]"
      >
        <div className="w-4 h-4 rounded-full" style={{ border: `1px solid ${c}0.08)`, background: `${c}0.02)` }} />
      </motion.div>

      {/* Cross */}
      <motion.svg
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[70%] left-[25%]"
        width="20" height="20" viewBox="0 0 20 20" fill="none"
      >
        <line x1="10" y1="2" x2="10" y2="18" stroke={`${c}0.06)`} strokeWidth="1" />
        <line x1="2" y1="10" x2="18" y2="10" stroke={`${c}0.06)`} strokeWidth="1" />
      </motion.svg>

      {/* Dotted arc */}
      <motion.svg
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-[18%] left-[30%]"
        width="60" height="30" viewBox="0 0 60 30" fill="none"
      >
        <path d="M 5 25 Q 30 -5 55 25" stroke={`${c}0.05)`} strokeWidth="1" strokeDasharray="3 4" fill="none" />
      </motion.svg>
    </div>
  )
}
