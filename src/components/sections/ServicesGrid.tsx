'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer, cardHover } from '@/lib/tokens'
import { services, conversionCtas } from '@/lib/marketing-content'

const iconMap: Record<string, React.ReactNode> = {
  truck: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  package: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  crane: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 20V4l8 4-8 4" /><path d="M14 8v4" /><path d="M14 12h4" /><path d="M18 12v4" /><rect x="16" y="16" width="4" height="4" rx="1" /><line x1="2" y1="20" x2="10" y2="20" />
    </svg>
  ),
  trash: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  sparkles: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" /><path d="M18 14l.7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7z" />
    </svg>
  ),
  calendar: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" />
    </svg>
  ),
  users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
}

export default function ServicesGrid() {
  return (
    <section id="services" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(0,53,128,0.06),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(232,168,0,0.05),transparent_45%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p variants={fadeUpChild} className="mb-4 inline-flex rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Nos prestations
          </motion.p>
          <motion.h2 variants={fadeUpChild} className="text-[32px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink mb-4">
            Nos services de manutention et logistique chantier
          </motion.h2>
          <motion.p variants={fadeUpChild} className="text-[17px] leading-[1.65] text-steel max-w-[640px] mx-auto">
            Des solutions concretes pour accompagner les professionnels du batiment sur leurs chantiers, de maniere ponctuelle ou reguliere.
          </motion.p>
        </div>

        {/* Services grid — 7 cards: 3+4 or 3+3+1 layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              variants={fadeUpChild}
              whileHover={cardHover}
              className={`group relative rounded-2xl border border-border bg-white p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,53,128,0.10)] overflow-hidden ${
                i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Hover left accent border */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange origin-top"
              />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-orange-subtle border border-orange-border flex items-center justify-center text-orange mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]">
                {iconMap[service.icon]}
              </div>

              {/* Large faded number */}
              <div className="absolute top-3 right-4 text-[72px] font-extrabold text-ink/[0.03] leading-none select-none pointer-events-none">
                0{i + 1}
              </div>

              <h3 className="text-[18px] font-bold text-ink mb-2 group-hover:text-navy transition-colors">{service.title}</h3>
              <p className="text-[15px] leading-[1.65] text-steel">{service.desc}</p>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={fadeUpChild} className="mt-12 text-center">
          <Link
            href={conversionCtas.primary.href}
            className="inline-flex items-center gap-2 rounded-[6px] bg-orange px-[30px] py-[15px] text-[15px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_28px_var(--orange-shadow)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-hover group"
          >
            Demander un devis gratuit
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
