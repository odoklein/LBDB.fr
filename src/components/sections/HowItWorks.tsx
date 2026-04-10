'use client'

import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'

const steps = [
  {
    num: '01',
    title: 'Vous nous contactez',
    desc: 'Appel ou formulaire en 60 secondes. Reponse en moins de 2h.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'On cadre votre besoin',
    desc: 'Site, volume, horaires, contraintes securite et objectifs de cadence.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'On deploie et on supervise',
    desc: 'Equipe operationnelle sur site, point de suivi et validation fin de mission.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="methode" className="bg-white py-24 lg:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            variants={fadeUpChild}
            className="inline-block text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange mb-4"
          >
            Processus operationnel
          </motion.span>
          <motion.h2
            variants={fadeUpChild}
            className="text-[36px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink"
          >
            Simple. Rapide. Maitrise.
          </motion.h2>
        </div>

        <motion.div variants={fadeUpChild} className="mb-10 hidden md:block">
          <div className="h-[2px] w-full bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={motionViewport}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full origin-left bg-gradient-to-r from-orange/20 via-orange to-orange/20"
            />
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUpChild}
              className="relative text-center md:text-left"
            >
              {/* Faded large number */}
              <div className="text-[120px] lg:text-[160px] font-extrabold leading-none text-orange/10 select-none absolute -top-8 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 pointer-events-none">
                {step.num}
              </div>

              <div className="relative z-10 pt-12 lg:pt-16">
                <div className="w-12 h-12 rounded-xl bg-orange-subtle border border-orange-border flex items-center justify-center mb-4 mx-auto md:mx-0">
                  {step.icon}
                </div>
                <h3 className="text-[20px] lg:text-[24px] font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-[16px] leading-[1.65] text-steel">{step.desc}</p>
              </div>

              {/* Connector line (desktop only, not after last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-6 lg:-right-8 w-12 lg:w-16">
                  <div className="border-t-2 border-dashed border-orange/30 w-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
