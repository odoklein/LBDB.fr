import Link from 'next/link'

import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import StockImageSlot from '@/components/ui/StockImageSlot'
import { aboutHighlights, conversionCtas } from '@/lib/marketing-content'

export default function AboutStorySection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:px-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-24">
        <MotionReveal direction="left">
          <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            A propos de LBDB
          </p>
          <ScrollScaleText className="mb-5 text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[56px]">
            Un partenaire terrain pour faire avancer vos chantiers.
          </ScrollScaleText>
          <p className="mb-4 max-w-[620px] text-[19px] leading-[1.7] text-steel">
            Les Bras du Batiment accompagne les entreprises BTP en Ile-de-France avec des equipes operationnelles,
            encadrees et disponibles rapidement.
          </p>
          <p className="mb-8 max-w-[640px] text-[17px] leading-[1.75] text-steel">
            Notre mission: absorber vos pics de charge, proteger vos delais et fluidifier votre execution terrain avec
            une organisation simple, une communication directe et un haut niveau de fiabilite.
          </p>
          <ul className="mb-10 space-y-3">
            {aboutHighlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-[16px] text-ink">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange" />
                {highlight}
              </li>
            ))}
          </ul>
          <Link
            href={conversionCtas.primary.href}
            className="inline-flex items-center rounded-[6px] bg-orange px-[30px] py-[15px] text-[15px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_28px_rgba(242,68,5,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-hover"
          >
            {conversionCtas.primary.label}
          </Link>
        </MotionReveal>

        <MotionReveal delay={0.1} direction="right">
          <StockImageSlot slot="aboutTeam" />
        </MotionReveal>
      </div>
    </section>
  )
}
