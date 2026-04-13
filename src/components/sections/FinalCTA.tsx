'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'
import { conversionCtas, primaryPhoneHref } from '@/lib/marketing-content'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative bg-navy-deep py-24 lg:py-32 overflow-hidden">
      {/* Decorative grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      {/* Orange ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-orange/12 rounded-full blur-[140px] pointer-events-none" />
      {/* Blue accent glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-navy-mid/30 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="relative z-10 mx-auto max-w-[860px] px-6 md:px-12 lg:px-24 text-center"
      >
        <motion.h2
          variants={fadeUpChild}
          className="text-[32px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.52px] text-white mb-6"
        >
          Besoin de renfort sur chantier&nbsp;?
        </motion.h2>
        <motion.p
          variants={fadeUpChild}
          className="text-[18px] leading-[1.65] text-white/55 mb-10 max-w-[560px] mx-auto"
        >
          Expliquez-nous votre besoin et recevez rapidement une solution adaptee a votre chantier. Reponse en moins de 2h.
        </motion.p>
        <motion.div
          variants={fadeUpChild}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={conversionCtas.primary.href}
            className="cta-pulse inline-flex items-center gap-2 px-[30px] py-[15px] bg-orange text-white text-[15px] font-bold uppercase tracking-[0.04em] rounded-[6px] shadow-[0_8px_28px_var(--orange-shadow)] hover:bg-orange-hover hover:-translate-y-0.5 transition-all duration-200 group"
          >
            Demander un devis gratuit
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href={primaryPhoneHref}
            className="inline-flex items-center gap-2 px-[30px] py-[15px] text-white/70 text-[15px] font-bold uppercase tracking-[0.04em] rounded-[6px] border border-white/16 hover:border-white/38 hover:text-white transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Etre rappele rapidement
          </a>
        </motion.div>
        <motion.p variants={fadeUpChild} className="mt-6 text-[12px] font-semibold uppercase tracking-[0.06em] text-white/40">
          Devis gratuit &middot; Reponse en moins de 2h &middot; Sans engagement
        </motion.p>
      </motion.div>
    </section>
  )
}
