'use client'

import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainerSlow, cardHover } from '@/lib/tokens'
import { benefits } from '@/lib/marketing-content'

const iconMap: Record<string, React.ReactNode> = {
  clock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  coins: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><line x1="7" y1="6" x2="7.01" y2="6" /><line x1="16" y1="14" x2="16.01" y2="14" />
    </svg>
  ),
  layout: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
}

const accentColors = [
  { bg: 'bg-navy/8', border: 'border-navy/15', text: 'text-navy' },
  { bg: 'bg-orange-subtle', border: 'border-orange-border', text: 'text-orange' },
  { bg: 'bg-success/10', border: 'border-success/20', text: 'text-success' },
  { bg: 'bg-navy-mid/10', border: 'border-navy-mid/20', text: 'text-navy-mid' },
]

export default function BenefitsSection() {
  return (
    <section className="relative bg-surface py-24 lg:py-32 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] bg-orange/8 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[250px] h-[250px] bg-navy/6 rounded-full blur-[80px]" />

      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p variants={fadeUpChild} className="mb-4 inline-flex rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Les benefices
          </motion.p>
          <motion.h2 variants={fadeUpChild} className="text-[32px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink mb-4">
            Un chantier plus rapide est un chantier plus rentable.
          </motion.h2>
          <motion.p variants={fadeUpChild} className="text-[17px] leading-[1.65] text-steel max-w-[600px] mx-auto">
            Faire appel aux Bras du Batiment permet aux entreprises de gagner du temps, de mieux organiser leurs operations et de maintenir un chantier plus propre et plus efficace.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => {
            const accent = accentColors[i]
            return (
              <motion.article
                key={item.title}
                variants={fadeUpChild}
                whileHover={cardHover}
                className="group relative rounded-2xl border border-border bg-white p-7 shadow-[0_1px_4px_rgba(16,24,40,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,53,128,0.10)]"
              >
                {/* Top accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full origin-left ${
                    i === 0 ? 'bg-navy' : i === 1 ? 'bg-orange' : i === 2 ? 'bg-success' : 'bg-navy-mid'
                  }`}
                />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${accent.bg} border ${accent.border} flex items-center justify-center mb-5 ${accent.text} transition-transform duration-300 group-hover:scale-110`}>
                  {iconMap[item.icon]}
                </div>

                {/* Number */}
                <div className="absolute top-5 right-6 text-[48px] font-extrabold text-ink/[0.04] leading-none select-none">
                  0{i + 1}
                </div>

                <h3 className="text-[20px] font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-steel">{item.desc}</p>
              </motion.article>
            )
          })}
        </div>

        {/* Pull quote */}
        <motion.div
          variants={fadeUpChild}
          className="mt-14 text-center"
        >
          <p className="text-[20px] lg:text-[24px] font-extrabold text-navy/80 tracking-[-0.3px] italic">
            &ldquo;Moins de manutention, plus de production.&rdquo;
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
