'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'
import { conversionCtas } from '@/lib/marketing-content'

const differentiators = [
  {
    title: 'Equipes formees et encadrees',
    desc: 'Chaque intervenant est forme aux normes de securite et encadre par un chef d\'equipe.',
  },
  {
    title: 'Intervention sous 24h en Ile-de-France',
    desc: 'Nous mobilisons vos equipes en un temps record, partout en region parisienne.',
  },
  {
    title: 'Pas d\'engagement minimum',
    desc: 'Vous commandez uniquement ce dont vous avez besoin, sans volume minimum.',
  },
  {
    title: 'Suivi client dedie',
    desc: 'Un interlocuteur unique pour coordonner vos missions du debut a la fin.',
  },
  {
    title: 'Facturation simple et transparente',
    desc: 'Des devis clairs, sans frais caches. Vous payez ce qui a ete convenu.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left */}
          <div>
            <motion.span
              variants={fadeUpChild}
              className="inline-block text-[11.5px] font-semibold uppercase tracking-[0.07em] text-white/45 mb-4"
            >
              Pourquoi nous choisir
            </motion.span>
            <motion.h2
              variants={fadeUpChild}
              className="text-[36px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.52px] text-white mb-6"
            >
              Des equipes professionnelles, une reactivite sans egale.
            </motion.h2>
            <motion.p
              variants={fadeUpChild}
              className="text-[18px] leading-[1.65] text-white/55 mb-8 max-w-[440px]"
            >
              Nous mettons a votre disposition des bras qualifies pour que vos chantiers ne s&apos;arretent jamais.
            </motion.p>
            <motion.div
              variants={fadeUpChild}
              className="inline-block"
            >
              <Link
                href={conversionCtas.primary.href}
                className="inline-flex items-center gap-2 px-[30px] py-[15px] bg-orange text-white text-[15px] font-bold uppercase tracking-[0.04em] rounded-[6px] shadow-[0_8px_28px_var(--orange-shadow)] hover:bg-orange-hover hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {conversionCtas.primary.label}
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right — differentiators */}
          <div className="flex flex-col gap-4">
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUpChild}
                className="bg-navy-mid border border-border-dark rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-[14px] leading-[1.6] text-white/50">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
