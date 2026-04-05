import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import { pricingFaqs } from '@/lib/marketing-content'

export default function PricingFaqSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <MotionReveal className="mb-12">
          <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Questions prix
          </p>
          <ScrollScaleText className="max-w-[760px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[52px]">
            Une tarification transparente pour piloter vos marges sereinement.
          </ScrollScaleText>
        </MotionReveal>

        <div className="space-y-4">
          {pricingFaqs.map((item, index) => (
            <MotionReveal
              key={item.q}
              delay={0.05 * index}
              className="rounded-xl border border-border bg-surface p-6 lg:p-7"
            >
              <h3 className="mb-2 text-[22px] font-bold text-ink">{item.q}</h3>
              <p className="text-[16px] leading-[1.7] text-steel">{item.a}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
