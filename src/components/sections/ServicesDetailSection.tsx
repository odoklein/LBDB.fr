'use client'

import Link from 'next/link'

import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import { conversionCtas, services } from '@/lib/marketing-content'

const serviceIconMap: Record<string, React.ReactNode> = {
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  package: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  crane: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 20V4l8 4-8 4" /><path d="M14 8v4" /><path d="M14 12h4" /><path d="M18 12v4" /><rect x="16" y="16" width="4" height="4" rx="1" /><line x1="2" y1="20" x2="10" y2="20" />
    </svg>
  ),
  trash: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  sparkles: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" />
    </svg>
  ),
  calendar: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
}

export default function ServicesDetailSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <MotionReveal className="mb-12 text-center">
          <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Services LBDB
          </p>
          <ScrollScaleText className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[56px]">
            Services de manutention chantier et logistique BTP
          </ScrollScaleText>
          <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-[1.75] text-steel">
            Des prestations concretes pour accompagner les professionnels du batiment sur leurs chantiers,
            de maniere ponctuelle ou reguliere.
          </p>
        </MotionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <MotionReveal
              key={service.title}
              delay={0.04 * index}
              className={`rounded-xl border border-border bg-white p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)] ${
                index === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-subtle border border-orange-border flex items-center justify-center text-orange mb-5">
                {serviceIconMap[service.icon]}
              </div>
              <h2 className="mb-2 text-[22px] font-bold text-ink">{service.title}</h2>
              <p className="mb-5 text-[16px] leading-[1.65] text-steel">{service.desc}</p>
              <Link
                href={conversionCtas.primary.href}
                className="inline-flex items-center rounded-[6px] border border-orange bg-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.04em] text-orange transition-colors hover:bg-orange-subtle"
              >
                Demander ce service
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
