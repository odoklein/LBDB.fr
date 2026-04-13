'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import BlueprintGrid from '@/components/ui/BlueprintGrid'
import FloatingGeo from '@/components/ui/FloatingGeo'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { conversionCtas, socialProofStats, trustBullets } from '@/lib/marketing-content'

const kineticWords = ['CONSTRUIRE', 'PRODUIRE', 'AVANCER'] as const

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [heroImageError, setHeroImageError] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  useEffect(() => {
    if (prefersReducedMotion) return
    const interval = window.setInterval(() => {
      setWordIndex((c) => (c + 1) % kineticWords.length)
    }, 2200)
    return () => window.clearInterval(interval)
  }, [prefersReducedMotion])

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { delay, duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  })

  return (
    <section ref={sectionRef} className="relative bg-white pt-24 lg:pt-32 pb-0 overflow-hidden">
      {/* === BLUE GRADIENT MESH === */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_75%_10%,rgba(0,53,128,0.14),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_15%_80%,rgba(0,87,184,0.08),transparent_45%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-[radial-gradient(circle,rgba(59,130,200,0.05),transparent_50%)]" />
      </div>

      {/* === BLUEPRINT GRID === */}
      <BlueprintGrid opacity={0.035} />

      {/* === FLOATING GEOMETRIC SHAPES === */}
      <FloatingGeo variant="light" />

      {/* === MORPHING BLOB (blue) === */}
      {!prefersReducedMotion && (
        <div className="pointer-events-none absolute top-[10%] right-[-5%] w-[500px] h-[500px] opacity-[0.07]">
          <div className="w-full h-full bg-gradient-to-br from-navy via-navy-mid to-navy-light morph-blob" />
        </div>
      )}

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          {/* ======= LEFT CONTENT ======= */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/[0.06] border border-navy/10 mb-6">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-navy-mid opacity-75" />
                <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-navy-mid" />
              </span>
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.07em] text-navy">
                France entiere &middot; Disponibles 7j/7
              </span>
            </motion.div>

            {/* H1 — with gradient text and animated underline */}
            <motion.h1 {...fadeUp(0.1)} className="text-[30px] md:text-[38px] lg:text-[46px] font-extrabold leading-[1.06] tracking-[-1.2px] text-ink mb-5">
              Manutention et logistique de chantier pour les{' '}
              <span className="relative inline text-gradient-blue">
                professionnels
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-navy via-navy-mid to-orange origin-left rounded-full"
                />
              </span>{' '}
              du batiment.
            </motion.h1>

            {/* Subtext with kinetic word */}
            <motion.p {...fadeUp(0.2)} className="text-[17px] leading-[1.7] text-steel max-w-[520px] mb-3">
              Vos equipes sont payees pour{' '}
              <span className="relative inline-flex min-w-[140px] overflow-hidden align-bottom font-extrabold text-navy">
                {kineticWords.map((word, index) => (
                  <motion.span
                    key={word}
                    initial={false}
                    animate={{
                      y: index === wordIndex ? 0 : 36,
                      opacity: index === wordIndex ? 1 : 0,
                      rotateX: index === wordIndex ? 0 : -45,
                    }}
                    transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute left-0 top-0"
                  >
                    {word}
                  </motion.span>
                ))}
                <span className="invisible">CONSTRUIRE</span>
              </span>
              , pas pour porter.
            </motion.p>

            <motion.p {...fadeUp(0.28)} className="text-[15px] leading-[1.65] text-slate mb-7 max-w-[480px]">
              Dechargement, manutention, debarras, nettoyage. Des equipes encadrees
              et operationnelles pour fluidifier vos chantiers.
            </motion.p>

            {/* CTA row */}
            <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-3 mb-7">
              <Link
                href={conversionCtas.primary.href}
                className="cta-pulse group inline-flex items-center gap-2 px-7 py-[15px] bg-gradient-to-r from-navy to-navy-mid text-white text-[15px] font-bold uppercase tracking-[0.04em] rounded-[6px] shadow-[0_8px_32px_var(--navy-glow)] hover:shadow-[0_14px_44px_var(--navy-glow)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Demander un devis
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={conversionCtas.callback.href}
                className="inline-flex items-center gap-2 px-7 py-[15px] bg-white text-navy text-[15px] font-bold uppercase tracking-[0.04em] rounded-[6px] border border-navy/15 hover:border-navy/30 hover:bg-blue-50 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-navy-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Etre rappele
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div {...fadeUp(0.42)} className="flex flex-wrap gap-5 text-[13px] font-medium text-steel">
              {trustBullets.map((bullet) => (
                <span key={bullet} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-navy-mid flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {bullet}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ======= RIGHT VISUAL ======= */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: 'blur(12px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative hidden lg:block"
          >
            <motion.div style={{ y: parallaxY, scale: parallaxScale }}>
              {/* Blue frame border accent */}
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-navy/20 via-navy-mid/10 to-transparent opacity-60" />

              {heroImageError ? (
                <div className="relative mx-auto w-full aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-navy/10 via-blue-surface to-orange/5 border border-navy/10">
                  <BlueprintGrid opacity={0.06} animated={false} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-navy/8 border border-navy/12 flex items-center justify-center">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-navy" strokeWidth="1.5">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </div>
                      <p className="text-[16px] font-bold text-ink">Equipe BTP en intervention</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative mx-auto w-full aspect-[4/3] overflow-hidden rounded-3xl border border-navy/10 shadow-[0_24px_64px_rgba(0,53,128,0.18)]">
                  <Image
                    src="/hero.png"
                    alt="Equipe BTP en intervention sur chantier"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    onError={() => setHeroImageError(true)}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-navy/5 to-transparent" />
                  {/* Blue overlay corner */}
                  <div className="pointer-events-none absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-navy/15 to-transparent" />
                </div>
              )}
            </motion.div>

            {/* Floating stat chip 1 — BLUE themed */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="absolute -left-8 top-[18%]"
            >
              <motion.div animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="glass-blue rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,53,128,0.12)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-navy" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[24px] font-extrabold text-ink tracking-[-0.5px]">&lt;24<span className="text-navy-mid">h</span></div>
                      <div className="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-steel">Delai d&apos;intervention</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating stat chip 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="absolute -right-6 bottom-[20%]"
            >
              <motion.div animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <div className="glass-blue rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,53,128,0.12)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-subtle border border-orange-border flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[24px] font-extrabold text-ink tracking-[-0.5px]">98<span className="text-orange">%</span></div>
                      <div className="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-steel">Satisfaction client</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Blue corner accent */}
            <div className="pointer-events-none absolute -right-2 top-0 h-16 w-16 rounded-bl-3xl bg-gradient-to-bl from-navy-mid/50 to-navy/20" />
          </motion.div>
        </div>
      </div>

      {/* Reassurance */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-navy/40">
          Intervention partout en France &middot; Presence renforcee en Auvergne-Rhone-Alpes
        </p>
      </motion.div>

      {/* ======= STATS BAR — BLUE ======= */}
      <div className="mt-6 bg-navy-gradient clip-diagonal-top">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24 py-12 pt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {socialProofStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[42px] font-extrabold tracking-[-1px] text-white">
                  <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/45 mt-1">
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
