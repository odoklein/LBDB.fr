'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import StockImageSlot from '@/components/ui/StockImageSlot'
import { conversionCtas } from '@/lib/marketing-content'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'

const chaosPoints = [
  'Camion bloque au dechargement',
  'Equipe interne detournee des taches critiques',
  'Retards en cascade et pression client',
] as const

const controlPoints = [
  'Main-d oeuvre activee en moins de 24h',
  'Brief clair et supervision des operations',
  'Cadence chantier retablie des J+1',
] as const

export default function ChaosControl() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <motion.div variants={fadeUpChild} className="mb-10 text-center">
          <p className="mb-4 inline-flex rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Chaos vs control
          </p>
          <h2 className="text-[36px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink">
            Deux scenarios. Un seul protege votre marge.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            variants={fadeUpChild}
            className="group rounded-2xl border border-border bg-white p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1"
          >
            <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-danger">Sans renfort rapide</p>
            <StockImageSlot slot="servicesMaterialHandling" className="mb-6" />
            <ul className="space-y-3">
              {chaosPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[16px] leading-[1.6] text-ink">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-danger/80" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            variants={fadeUpChild}
            className="group rounded-2xl border border-orange-border bg-white p-6 shadow-[0_2px_8px_rgba(16,24,40,0.08),0_8px_32px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1"
          >
            <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">Avec Les Bras du Batiment</p>
            <StockImageSlot slot="servicesExecution" className="mb-6" />
            <ul className="space-y-3">
              {controlPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[16px] leading-[1.6] text-ink">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-orange" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.div variants={fadeUpChild} className="mt-10 text-center">
          <Link
            href={conversionCtas.primary.href}
            className="inline-flex items-center gap-2 rounded-[6px] bg-orange px-[30px] py-[15px] text-[15px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_28px_rgba(242,68,5,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-hover"
          >
            Securiser mon planning maintenant
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
