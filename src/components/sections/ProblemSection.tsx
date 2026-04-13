'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeUpChild, motionViewport, staggerContainer, blurUpChild } from '@/lib/tokens'
import { painPoints } from '@/lib/marketing-content'

export default function ProblemSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,53,128,0.06),transparent_50%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — visual */}
          <motion.div variants={blurUpChild} className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-[0_12px_48px_rgba(0,53,128,0.10)]">
              <Image
                src="/grain.jpg"
                alt="Chantier avec equipes en attente"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-navy/10 to-transparent" />

              {/* Overlay quote */}
              <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                <motion.blockquote
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-[18px] lg:text-[22px] font-extrabold leading-[1.2] text-white tracking-[-0.3px]"
                >
                  &ldquo;Vos equipes sont payees pour construire, pas pour porter.&rdquo;
                </motion.blockquote>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute -top-4 -right-4 lg:right-4 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,53,128,0.12)] border border-border px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-danger/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-danger" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <span className="text-[12px] font-bold text-danger uppercase tracking-[0.04em]">Temps perdu chaque jour</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <div>
            <motion.div variants={fadeUpChild}>
              <p className="mb-4 inline-flex rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
                Le probleme
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUpChild}
              className="text-[32px] lg:text-[44px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink mb-6"
            >
              Vos equipes qualifiees perdent des heures sur des taches a faible valeur.
            </motion.h2>

            <motion.p variants={fadeUpChild} className="text-[17px] leading-[1.65] text-steel mb-8">
              Sur de nombreux chantiers, les equipes qualifiees sont detournees de leur metier pour gerer des taches qui ralentissent tout le planning&nbsp;:
            </motion.p>

            {/* Pain points with staggered animation */}
            <div className="space-y-3">
              {painPoints.map((point, i) => (
                <motion.div
                  key={point}
                  variants={fadeUpChild}
                  className="group flex items-start gap-3 rounded-xl p-3 -mx-3 transition-colors duration-200 hover:bg-surface"
                >
                  <span className="mt-1.5 flex-shrink-0 w-6 h-6 rounded-lg bg-danger/10 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-danger" strokeWidth="3">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span className="text-[16px] leading-[1.5] text-ink font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUpChild} className="mt-8 p-5 rounded-2xl bg-navy/[0.04] border border-navy/10">
              <p className="text-[15px] leading-[1.6] text-ink">
                <span className="font-bold text-navy">Les Bras du Batiment</span> intervient comme{' '}
                <span className="font-bold text-orange">renfort operationnel en manutention et logistique chantier</span>{' '}
                pour fluidifier les operations et ameliorer la productivite.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
