'use client'

import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'
import { logos } from '@/lib/marketing-content'

const trustQuotes = [
  {
    quote: 'On a evite deux jours d arret grace a leur equipe le lendemain matin.',
    role: 'Conducteur de travaux',
    company: 'PME gros oeuvre',
  },
  {
    quote: 'Ponctuels, brifes, efficaces. Rare dans l urgence.',
    role: 'Chef de chantier',
    company: 'Entreprise TCE',
  },
] as const

const trustStats = [
  { value: '19h', label: 'Intervention moyenne' },
  { value: 'Garanti', label: 'Remplacement en cas de souci' },
  { value: '87%', label: 'Reconduction mission' },
] as const

export default function LogoStrip() {
  return (
    <section className="bg-white py-16 overflow-hidden border-y border-border">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <motion.p
          variants={fadeUpChild}
          className="text-[11.5px] font-semibold uppercase tracking-[0.07em] text-steel text-center mb-8"
        >
          Ceux qui doivent livrer a l heure nous appellent
        </motion.p>
      </motion.div>

      {/* Marquee */}
      <div className="relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center h-10"
            >
              <span className="text-[16px] font-bold text-steel/40 hover:text-steel/80 transition-colors duration-200 tracking-wide uppercase whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
        {/* Gradient masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="mx-auto mt-12 max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <motion.div variants={fadeUpChild} className="grid gap-4 sm:grid-cols-2">
            {trustQuotes.map((item) => (
              <article
                key={item.quote}
                className="rounded-xl border border-border bg-surface p-5 shadow-[0_1px_4px_rgba(16,24,40,0.06)]"
              >
                <p className="text-[16px] leading-[1.6] text-ink">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.06em] text-orange">{item.role}</p>
                <p className="mt-1 text-[14px] text-steel">{item.company}</p>
              </article>
            ))}
          </motion.div>
          <motion.div variants={fadeUpChild} className="grid gap-3">
            {trustStats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-white px-5 py-4 shadow-[0_1px_4px_rgba(16,24,40,0.06)]"
              >
                <p className="text-[28px] font-extrabold tracking-[-0.52px] text-ink">
                  {item.value}
                </p>
                <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-steel">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
