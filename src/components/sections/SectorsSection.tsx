import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import { sectors } from '@/lib/marketing-content'

export default function SectorsSection() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <MotionReveal className="mb-12">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-white/80">
            Domaines d'intervention
          </p>
          <ScrollScaleText className="max-w-[760px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-white lg:text-[52px]">
            Des renforts adaptes a chaque realite chantier en Ile-de-France.
          </ScrollScaleText>
        </MotionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {sectors.map((sector, index) => (
            <MotionReveal
              key={sector.title}
              delay={0.06 * index}
              className="rounded-xl border border-border-dark bg-navy-mid p-6"
            >
              <h3 className="mb-3 text-[26px] font-bold text-white">{sector.title}</h3>
              <p className="text-[16px] leading-[1.7] text-white/65">{sector.desc}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
