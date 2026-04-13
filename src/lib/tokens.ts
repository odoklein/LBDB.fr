export const colors = {
  orange: { DEFAULT: '#e8a800', hover: '#c89200' },
  navy: { DEFAULT: '#003580', deep: '#1a1a2e', mid: '#0057b8', light: '#3b82c8', border: '#1f4f95', glow: 'rgba(0,87,184,0.25)' },
  ink: '#1a1a2e',
  steel: '#4b5372',
  slate: '#6f7794',
  border: '#dfe3eb',
  surface: '#f5f5f0',
} as const

/* Base ease used everywhere */
const ease = [0.19, 1, 0.22, 1] as const

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease,
    },
  }),
}

export const motionViewport = { once: true, amount: 0.15 } as const

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const slideInChild = {
  left: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
  },
  right: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
  },
} as const

export const fadeUpChild = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const scaleUpChild = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
}

export const blurUpChild = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease },
  },
}

export const blurScaleChild = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease },
  },
}

export const cardHover = {
  y: -8,
  transition: { type: 'spring' as const, stiffness: 400, damping: 22 },
}

export const cardHoverSubtle = {
  y: -4,
  transition: { type: 'spring' as const, stiffness: 500, damping: 30 },
}

export const springTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 25,
}

export const floatingAnimation = (delay: number = 0) => ({
  y: [0, -12, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
    delay,
  },
})
