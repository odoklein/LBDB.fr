import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import { testimonials } from '@/lib/marketing-content'

export default function TestimonialsSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <MotionReveal className="mb-12 text-center">
          <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Retours clients
          </p>
          <ScrollScaleText className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[52px]">
            Ils nous confient leurs phases critiques.
          </ScrollScaleText>
        </MotionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionReveal
              key={`${testimonial.author}-${testimonial.company}`}
              delay={0.05 * index}
              className="rounded-xl border border-border bg-white p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)]"
            >
              <p className="mb-6 text-[17px] leading-[1.75] text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-orange">{testimonial.author}</p>
              <p className="mt-1 text-[14px] text-steel">{testimonial.company}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
