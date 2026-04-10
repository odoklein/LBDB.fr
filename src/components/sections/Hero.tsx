'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import StockImageSlot from '@/components/ui/StockImageSlot'
import { fadeUpVariants } from '@/lib/tokens'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { conversionCtas, socialProofStats, trustBullets } from '@/lib/marketing-content'

const kineticWords = ['RETARD', 'BLOCAGE', 'URGENCE'] as const

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [heroImageError, setHeroImageError] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % kineticWords.length)
    }, 1800)
    return () => window.clearInterval(interval)
  }, [prefersReducedMotion])

  return (
    <section className="relative bg-white pt-32 lg:pt-40 pb-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_14%,rgba(0,53,128,0.10),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(232,168,0,0.08)_50%,transparent_100%)]" />
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="relative z-10">
            {/* Eyebrow badge */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-subtle border border-orange-border mb-6"
            >
              <span className="relative flex h-[7px] w-[7px]">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-orange" />
              </span>
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
                Ile-de-France &middot; Disponibles 7j/7
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-[36px] lg:text-[42px] font-extrabold leading-[1.05] tracking-[-1px] text-ink mb-5"
            >
              Quand le chantier passe en{' '}
              <span className="relative inline-flex min-w-[210px] sm:min-w-[260px] overflow-hidden align-bottom">
                {kineticWords.map((word, index) => (
                  <motion.span
                    key={word}
                    initial={false}
                    animate={{
                      y: index === wordIndex ? 0 : 60,
                      opacity: index === wordIndex ? 1 : 0,
                      scale: index === wordIndex ? 1 : 0.94,
                    }}
                    transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute left-0 top-0 text-orange"
                  >
                    {word}
                  </motion.span>
                ))}
                <span className="invisible">BLOCAGE</span>
              </span>{' '}
              , vous avez une equipe en 24h.
              <br />
              Des bras BTP encadres, fiables et operationnels.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[17px] leading-[1.65] text-steel max-w-[460px] mb-7"
            >
              Dechargement, manutention, nettoyage chantier. Vous recevez une equipe fiable avant que votre
              planning explose.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href={conversionCtas.primary.href}
                className="cta-pulse inline-flex items-center gap-2 px-[30px] py-[15px] bg-orange text-white text-[15px] font-bold uppercase tracking-[0.04em] rounded-[6px] shadow-[0_8px_28px_var(--orange-shadow)] hover:bg-orange-hover hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--orange-shadow)] transition-all duration-200 group"
              >
                Recevoir une equipe en urgence
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={conversionCtas.primary.href}
                className="inline-flex items-center px-[30px] py-[15px] bg-surface text-ink text-[15px] font-bold uppercase tracking-[0.04em] rounded-[6px] border border-border hover:bg-border transition-all duration-200"
              >
                Parler a un coordinateur
              </Link>
            </motion.div>
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={3.2}
              className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-steel"
            >
              Reponse commerciale en moins de 2h
            </motion.p>

            {/* Trust strip */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-6 text-[13px] font-medium text-steel"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                {trustBullets[0]}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                Supervision terrain active
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                {trustBullets[1]}
              </span>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={1.5}
            className="relative hidden lg:block"
          >
            <motion.div
              style={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              {heroImageError ? (
                <StockImageSlot slot="homeHeroMain" className="mx-auto w-[80%] shadow-[0_14px_40px_rgba(16,24,40,0.12)]" />
              ) : (
                <div className="relative mx-auto w-[80%] aspect-square overflow-hidden rounded-2xl border border-border shadow-[0_14px_40px_rgba(16,24,40,0.12)]">
                  <Image
                    src="/hero.png"
                    alt="Equipe BTP en intervention sur chantier"
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                    onError={() => setHeroImageError(true)}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/18 via-transparent to-transparent" />
                </div>
              )}
            </motion.div>
            <div className="pointer-events-none absolute -right-2 top-0 h-20 w-20 rounded-bl-2xl bg-orange/80" />

            {/* Floating stat chip 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-[0_2px_8px_rgba(16,24,40,0.08),0_8px_32px_rgba(16,24,40,0.06)] border border-border px-4 py-3"
            >
              <div className="text-[22px] font-extrabold text-ink tracking-[-0.5px]">19<span className="text-orange">h</span></div>
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-steel">Activation moyenne</div>
            </motion.div>

            {/* Floating stat chip 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-[0_2px_8px_rgba(16,24,40,0.08),0_8px_32px_rgba(16,24,40,0.06)] border border-border px-4 py-3"
            >
              <div className="text-[22px] font-extrabold text-ink tracking-[-0.5px]">87<span className="text-orange">%</span></div>
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-steel">Missions reconduites</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-16 bg-surface border-t border-border">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {socialProofStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[40px] font-extrabold tracking-[-1px] text-ink">
                  <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-steel mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
