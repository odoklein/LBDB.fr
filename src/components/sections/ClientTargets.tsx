'use client'

import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer, cardHover } from '@/lib/tokens'
import { clientTargets } from '@/lib/marketing-content'

const clientIcons = [
  // Entreprises du batiment
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  // Artisans
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
  // Renovation
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01" /><path d="M17 12h.01" /><path d="M7 12h.01" />
  </svg>,
  // Agencement
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
  </svg>,
  // Menuisiers
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
  </svg>,
  // Conducteurs
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
  </svg>,
]

export default function ClientTargets() {
  return (
    <section id="secteurs" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(102,191,142,0.06),transparent_50%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p variants={fadeUpChild} className="mb-4 inline-flex rounded-full border border-success/20 bg-success/8 px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-success">
            Secteurs & clients
          </motion.p>
          <motion.h2 variants={fadeUpChild} className="text-[32px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink mb-4">
            Nous accompagnons les professionnels du batiment et de l&apos;agencement
          </motion.h2>
          <motion.p variants={fadeUpChild} className="text-[17px] leading-[1.65] text-steel max-w-[600px] mx-auto">
            Nous adaptons chaque intervention a la realite du terrain et aux contraintes du chantier.
          </motion.p>
        </div>

        {/* Client targets grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clientTargets.map((target, i) => (
            <motion.article
              key={target.title}
              variants={fadeUpChild}
              whileHover={cardHover}
              className="group rounded-2xl border border-border bg-surface/50 p-6 shadow-[0_1px_4px_rgba(16,24,40,0.04)] transition-all duration-300 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,53,128,0.08)] hover:border-navy/15"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/8 border border-navy/12 flex items-center justify-center text-navy mb-4 transition-transform duration-300 group-hover:scale-110">
                {clientIcons[i]}
              </div>
              <h3 className="text-[18px] font-bold text-ink mb-2">{target.title}</h3>
              <p className="text-[15px] leading-[1.65] text-steel">{target.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
