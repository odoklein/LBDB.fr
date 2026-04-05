export const colors = {
  orange: { DEFAULT: '#f24405', hover: '#d93a03' },
  navy: { DEFAULT: '#13274d', deep: '#0d1c38', mid: '#162448', light: '#1c3060', border: '#2a3f6e' },
  ink: '#101827',
  steel: '#5a606a',
  slate: '#706f7e',
  border: '#e2e4ea',
  surface: '#f4f5f7',
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
