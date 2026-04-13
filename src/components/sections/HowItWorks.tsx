'use client'

import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'
import { processSteps } from '@/lib/marketing-content'

const stepIcons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>,
]

export default function HowItWorks() {
  return (
    <section id="methode" className="relative bg-surface py-24 lg:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,53,128,0.05),transparent_50%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            variants={fadeUpChild}
            className="inline-flex rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange mb-4"
          >
            Comment ca fonctionne
          </motion.span>
          <motion.h2
            variants={fadeUpChild}
            className="text-[32px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink"
          >
            Operationnel en 4 etapes.
          </motion.h2>
        </div>

        {/* Animated progress line */}
        <motion.div variants={fadeUpChild} className="mb-12 hidden lg:block">
          <div className="h-[2px] w-full bg-border rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={motionViewport}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full origin-left bg-gradient-to-r from-navy/20 via-orange to-navy/20"
            />
          </div>
        </motion.div>

        {/* Steps — 4 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUpChild}
              className="relative group"
            >
              {/* Faded large number */}
              <div className="text-[100px] lg:text-[130px] font-extrabold leading-none text-orange/[0.06] select-none absolute -top-6 left-0 pointer-events-none">
                {step.num}
              </div>

              <div className="relative z-10 pt-10 lg:pt-14">
                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl bg-orange-subtle border border-orange-border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  {stepIcons[i]}
                </div>

                <h3 className="text-[18px] lg:text-[20px] font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-[15px] leading-[1.65] text-steel">{step.desc}</p>
              </div>

              {/* Connector arrow (desktop, not after last) */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-20 -right-3 w-6 items-center justify-center">
                  <motion.svg
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </motion.svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
