'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'
import { whyUsPoints, conversionCtas } from '@/lib/marketing-content'

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function WhyChooseUs() {
  return (
    <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy-mid/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/6 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — text */}
          <div>
            <motion.p variants={fadeUpChild} className="mb-4 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
              Pourquoi nous choisir
            </motion.p>
            <motion.h2 variants={fadeUpChild} className="text-[32px] lg:text-[44px] font-extrabold leading-[1.08] tracking-[-0.52px] text-white mb-6">
              Pourquoi choisir Les Bras du Batiment&nbsp;?
            </motion.h2>
            <motion.p variants={fadeUpChild} className="text-[17px] leading-[1.65] text-white/55 mb-8">
              Nous ne proposons pas seulement une prestation de manutention. Nous apportons une solution concrete pour ameliorer l&apos;efficacite des chantiers.
            </motion.p>
            <motion.div variants={fadeUpChild}>
              <Link
                href={conversionCtas.primary.href}
                className="cta-pulse inline-flex items-center gap-2 px-[30px] py-[15px] bg-orange text-white text-[15px] font-bold uppercase tracking-[0.04em] rounded-[6px] shadow-[0_8px_28px_var(--orange-shadow)] hover:bg-orange-hover hover:-translate-y-0.5 transition-all duration-200 group"
              >
                Demander un devis
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right — differentiator items */}
          <div className="space-y-4">
            {whyUsPoints.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUpChild}
                className="group flex gap-4 rounded-2xl bg-navy-mid border border-white/[0.07] p-5 transition-all duration-300 hover:border-orange/20 hover:bg-[rgba(232,168,0,0.04)]"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange/15 border border-orange/20 flex items-center justify-center text-orange transition-transform duration-300 group-hover:scale-110">
                  {checkIcon}
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
