'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer, cardHover } from '@/lib/tokens'
import { solutionPacks, conversionCtas } from '@/lib/marketing-content'

const packIcons: Record<string, React.ReactNode> = {
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  trash: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  sparkles: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" />
    </svg>
  ),
  key: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  ),
}

export default function SolutionPacks() {
  return (
    <section id="solutions" className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-mid/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p variants={fadeUpChild} className="mb-4 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Solutions packagees
          </motion.p>
          <motion.h2 variants={fadeUpChild} className="text-[32px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.52px] text-white mb-4">
            Nos solutions pour optimiser vos chantiers
          </motion.h2>
          <motion.p variants={fadeUpChild} className="text-[17px] leading-[1.65] text-white/55 max-w-[600px] mx-auto">
            Des offres claires et adaptees a chaque situation de chantier, du besoin ponctuel a l'accompagnement complet.
          </motion.p>
        </div>

        {/* Packs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutionPacks.map((pack, i) => (
            <motion.article
              key={pack.name}
              variants={fadeUpChild}
              whileHover={cardHover}
              className={`group relative rounded-2xl p-6 transition-all duration-300 overflow-hidden ${
                pack.featured
                  ? 'bg-gradient-to-br from-orange/20 to-orange/5 border-2 border-orange/30 shadow-[0_0_40px_rgba(232,168,0,0.15)] sm:col-span-2 lg:col-span-1'
                  : 'bg-navy-mid border border-white/[0.07] hover:border-white/[0.14]'
              }`}
            >
              {/* Featured badge */}
              {pack.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-orange text-white text-[10px] font-bold uppercase tracking-[0.06em]">
                  Populaire
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                pack.featured
                  ? 'bg-orange/20 text-orange border border-orange/30'
                  : 'bg-white/8 text-white/70 border border-white/10'
              }`}>
                {packIcons[pack.icon]}
              </div>

              <h3 className={`text-[22px] font-bold mb-2 ${pack.featured ? 'text-white' : 'text-white'}`}>
                {pack.name}
              </h3>
              <p className={`text-[15px] leading-[1.65] ${pack.featured ? 'text-white/70' : 'text-white/50'}`}>
                {pack.desc}
              </p>

              {/* Bottom arrow link */}
              <div className={`mt-5 pt-4 border-t ${pack.featured ? 'border-white/15' : 'border-white/[0.07]'}`}>
                <Link
                  href={conversionCtas.primary.href}
                  className={`inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.04em] transition-colors group/link ${
                    pack.featured ? 'text-orange hover:text-orange-hover' : 'text-white/60 hover:text-white'
                  }`}
                >
                  En savoir plus
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
