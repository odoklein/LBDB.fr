'use client'

import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'

const cases = [
  {
    company: 'Promoteur IDF',
    problem: 'Zone de dechargement saturee, planning derape.',
    action: '4 renforts deployes en 20h avec supervision chantier.',
    result: 'Cadence rattrapee en 48h, aucune livraison decalee.',
  },
  {
    company: 'PME renovation',
    problem: 'Absence imprevue sur une phase critique.',
    action: 'Equipe de remplacement mobilisee des le lendemain matin.',
    result: 'Aucune penalite de retard et reprise immediate.',
  },
  {
    company: 'Entreprise GC',
    problem: 'Fin de chantier sous pression avec manque de bras.',
    action: 'Renfort nettoyage et manutention sur plage etendue.',
    result: 'Livraison maintenue et reception client securisee.',
  },
] as const

export default function CaseStudies() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <motion.div variants={fadeUpChild} className="mb-12 text-center">
          <p className="mb-4 inline-flex rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Histoires chantier
          </p>
          <h2 className="text-[36px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink">
            Des cas reels, des resultats mesurables.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {cases.map((item) => (
            <motion.article
              key={item.company}
              variants={fadeUpChild}
              className="rounded-2xl border border-border bg-white p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(16,24,40,0.08),0_8px_32px_rgba(16,24,40,0.06)]"
            >
              <p className="mb-5 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">{item.company}</p>
              <div className="space-y-4">
                <p className="text-[15px] leading-[1.6] text-steel"><span className="font-semibold text-ink">Probleme:</span> {item.problem}</p>
                <p className="text-[15px] leading-[1.6] text-steel"><span className="font-semibold text-ink">Action:</span> {item.action}</p>
                <p className="text-[15px] leading-[1.6] text-steel"><span className="font-semibold text-ink">Resultat:</span> {item.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
