import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import { deliverySteps } from '@/lib/marketing-content'

export default function DeliveryStepsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <MotionReveal className="mb-12">
          <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Processus LBDB
          </p>
          <ScrollScaleText className="max-w-[760px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[52px]">
            Un cadre d'execution clair pour accelerer vos chantiers sans friction.
          </ScrollScaleText>
        </MotionReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {deliverySteps.map((step, index) => (
            <MotionReveal
              key={step.title}
              delay={0.06 * index}
              className="rounded-xl border border-border bg-surface p-6 lg:p-8"
            >
              <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
                Etape {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mb-2 text-[28px] font-bold leading-[1.15] text-ink">{step.title}</h3>
              <p className="text-[17px] leading-[1.7] text-steel">{step.desc}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
