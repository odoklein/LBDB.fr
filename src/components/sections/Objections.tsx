'use client'

import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'

const reassuranceBlocks = [
  {
    title: 'Et si une personne ne convient pas ?',
    desc: 'Remplacement prioritaire garanti pour eviter toute baisse de cadence.',
  },
  {
    title: 'Vous etes assures ?',
    desc: 'Conformite administrative et couverture verifiees avant activation.',
  },
  {
    title: 'Comment vous garantissez la qualite ?',
    desc: 'Brief initial, supervision terrain, point de cloture et feedback mission.',
  },
  {
    title: 'Pas envie de contrat rigide',
    desc: 'Mission a la demande, sans abonnement impose ni engagement long.',
  },
] as const

export default function Objections() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <motion.div variants={fadeUpChild} className="mb-12 max-w-[920px]">
          <p className="mb-4 inline-flex rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Reassurance operationnelle
          </p>
          <h2 className="text-[36px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink">
            Vos objections sont deja traitees avant la premiere mission.
          </h2>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2">
          {reassuranceBlocks.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUpChild}
              className="rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-border"
            >
              <h3 className="text-[24px] font-bold leading-[1.2] text-ink">{item.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.65] text-steel">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
