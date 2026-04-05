'use client'

import { motion } from 'framer-motion'
import StockImageSlot from '@/components/ui/StockImageSlot'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'

const bentoItems = [
  {
    title: 'Vitesse d execution',
    desc: 'Activation express, equipe mobilisable en urgence en moins de 24h.',
    className: 'lg:col-span-2',
  },
  {
    title: 'Fiabilite terrain',
    desc: 'Des profils habitues aux contraintes chantier et aux cadences tendues.',
    className: '',
  },
  {
    title: 'Supervision active',
    desc: 'Un referent suit la mission et ajuste le dispositif en temps reel.',
    className: '',
  },
  {
    title: '<24h',
    desc: 'Delai moyen de deploiement',
    className: 'lg:col-span-2',
    stat: true,
  },
  {
    title: 'Preuve terrain',
    desc: 'Mission validee a 18h, equipe sur site a 7h30 le lendemain.',
    className: '',
  },
  {
    title: 'Flexibilite volume',
    desc: 'De 1 a plusieurs operateurs selon votre charge et vos priorites.',
    className: '',
  },
] as const

export default function BentoValueGrid() {
  return (
    <section id="services" className="relative bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(19,39,77,0.06),transparent_35%)]" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <motion.div variants={fadeUpChild} className="mb-12 max-w-[860px]">
          <p className="mb-4 inline-flex rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Grille de valeur
          </p>
          <h2 className="text-[36px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink">
            Tout ce qu il faut pour proteger vos delais et votre marge.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <motion.article
            variants={fadeUpChild}
            className="group rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_4px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(16,24,40,0.08),0_8px_32px_rgba(16,24,40,0.06)] lg:col-span-2"
          >
            <StockImageSlot slot="homeOpsDesk" className="mb-5" />
            <h3 className="text-[28px] font-bold leading-[1.15] text-ink">Disponibilite 7j/7</h3>
            <p className="mt-3 text-[16px] leading-[1.65] text-steel">
              Dechargement, manutention, nettoyage chantier: vous activez le bon niveau de renfort quand votre
              charge monte.
            </p>
          </motion.article>

          {bentoItems.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUpChild}
              className={`group rounded-2xl border border-border bg-white p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-border hover:shadow-[0_2px_8px_rgba(16,24,40,0.08),0_8px_32px_rgba(16,24,40,0.06)] ${item.className}`}
            >
              <h3 className={`text-ink ${item.stat ? 'text-[42px] tracking-[-1px] font-extrabold' : 'text-[24px] font-bold'}`}>
                {item.title}
              </h3>
              <p className={`mt-3 leading-[1.65] ${item.stat ? 'text-[13px] font-semibold uppercase tracking-[0.06em] text-steel' : 'text-[16px] text-steel'}`}>
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
