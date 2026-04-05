import Link from 'next/link'

import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import StockImageSlot from '@/components/ui/StockImageSlot'
import { conversionCtas, services } from '@/lib/marketing-content'

const imageSlots = ['servicesMaterialHandling', 'servicesRelocation', 'servicesCleaning'] as const

export default function ServicesDetailSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <MotionReveal className="mb-12 text-center">
          <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Services LBDB
          </p>
          <ScrollScaleText className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[56px]">
            Renforcez votre chantier avec les bons profils.
          </ScrollScaleText>
          <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-[1.75] text-steel">
            De la manutention ponctuelle au renfort structurel multi-semaines, nous adaptons les equipes et la cadence
            a vos enjeux de planning, securite et qualite.
          </p>
        </MotionReveal>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <MotionReveal
              key={service.title}
              delay={0.04 * index}
              className="rounded-xl border border-border bg-white p-5 shadow-[0_1px_4px_rgba(16,24,40,0.06)]"
            >
              <StockImageSlot slot={imageSlots[index]} className="mb-4" />
              <h2 className="mb-2 text-[24px] font-bold text-ink">{service.title}</h2>
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
