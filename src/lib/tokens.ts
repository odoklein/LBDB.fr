export const colors = {
  orange: { DEFAULT: '#e8a800', hover: '#c89200' },
  navy: { DEFAULT: '#003580', deep: '#1a1a2e', mid: '#0057b8', light: '#66bf8e', border: '#1f4f95' },
  ink: '#1a1a2e',
  steel: '#4b5372',
  slate: '#6f7794',
  border: '#dfe3eb',
  surface: '#f5f5f0',
} as const

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
}

export const motionViewport = { once: true, amount: 0.15 } as const

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const slideInChild = {
  left: {
    hidden: { opacity: 0, x: -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
    },
  },
  right: {
    hidden: { opacity: 0, x: 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
    },
  },
} as const

export const fadeUpChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}
