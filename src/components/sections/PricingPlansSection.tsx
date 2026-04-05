import Link from 'next/link'

import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import StockImageSlot from '@/components/ui/StockImageSlot'
import { conversionCtas, pricingPlans } from '@/lib/marketing-content'

export default function PricingPlansSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <MotionReveal className="mb-12 text-center">
          <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Tarification
          </p>
          <ScrollScaleText className="mb-4 text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[56px]">
            Des offres claires et adaptees a votre cadence chantier.
          </ScrollScaleText>
          <p className="mx-auto max-w-[640px] text-[18px] leading-[1.65] text-steel">
            Les prix exacts dependent du volume, du type de mission et du delai. Chaque formule reste flexible.
          </p>
        </MotionReveal>

        <MotionReveal className="mb-8">
          <StockImageSlot slot="pricingBackground" />
        </MotionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <MotionReveal
              key={plan.name}
              delay={0.05 * index}
              className={`rounded-xl border p-6 ${
                plan.featured
                  ? 'border-orange bg-orange-subtle shadow-[0_8px_28px_rgba(242,68,5,0.12)]'
                  : 'border-border bg-white shadow-[0_1px_4px_rgba(16,24,40,0.06)]'
              }`}
            >
              <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">{plan.priceHint}</p>
              <h2 className="mb-2 text-[28px] font-bold text-ink">{plan.name}</h2>
              <p className="mb-5 text-[16px] text-steel">{plan.subtitle}</p>
              <ul className="mb-6 space-y-2">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="text-[15px] leading-[1.6] text-ink">
                    - {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href={conversionCtas.primary.href}
                className="inline-flex items-center rounded-[6px] bg-orange px-[30px] py-[15px] text-[15px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_28px_rgba(242,68,5,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-hover"
              >
                Obtenir un devis
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
