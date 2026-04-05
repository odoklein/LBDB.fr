import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import { contactExpectations } from '@/lib/marketing-content'

export default function ContactExpectationsSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <MotionReveal className="mb-12">
          <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Ce qui se passe ensuite
          </p>
          <ScrollScaleText className="max-w-[760px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[52px]">
            Un parcours simple, rapide et utile des votre premier message.
          </ScrollScaleText>
        </MotionReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {contactExpectations.map((item, index) => (
            <MotionReveal
              key={item}
              delay={0.05 * index}
              className="rounded-xl border border-border bg-white p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)]"
            >
              <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
                Point {String(index + 1).padStart(2, '0')}
              </p>
              <p className="text-[18px] leading-[1.7] text-ink">{item}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
