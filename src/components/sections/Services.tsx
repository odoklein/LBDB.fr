'use client'

import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'
import { services } from '@/lib/marketing-content'
const serviceIcons = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="22" height="15" rx="2" />
      <path d="M1 10h22" />
      <path d="M12 6V3" />
      <path d="M8 6V4" />
      <path d="M16 6V4" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  ),
] as const

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            variants={fadeUpChild}
            className="inline-block text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange mb-4"
          >
            Nos Prestations
          </motion.span>
          <motion.h2
            variants={fadeUpChild}
            className="text-[36px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink mb-4"
          >
            Tout ce qu&apos;il faut pour avancer sur le chantier.
          </motion.h2>
          <motion.p
            variants={fadeUpChild}
            className="text-[18px] leading-[1.65] text-steel max-w-[520px] mx-auto"
          >
            Des prestations adaptees a chaque etape de votre projet de construction.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUpChild}
              className="group relative bg-white border border-border rounded-xl p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)] hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(16,24,40,0.08),0_8px_32px_rgba(16,24,40,0.06)] transition-all duration-250 overflow-hidden"
            >
              {/* Orange left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-200" />

              <div className="w-11 h-11 rounded-[10px] bg-orange-subtle border border-orange-border flex items-center justify-center mb-4">
                {serviceIcons[index]}
              </div>
              <h3 className="text-[20px] font-bold text-ink mb-2">{service.title}</h3>
              <p className="text-[16px] leading-[1.65] text-steel">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
