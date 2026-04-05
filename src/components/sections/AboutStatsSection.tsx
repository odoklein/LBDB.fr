import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import { aboutStats } from '@/lib/marketing-content'

export default function AboutStatsSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <MotionReveal className="mb-12 text-center">
          <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
            Impact terrain
          </p>
          <ScrollScaleText className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[52px]">
            Des resultats mesurables, mission apres mission.
          </ScrollScaleText>
        </MotionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((item, index) => (
            <MotionReveal
              key={item.label}
              delay={0.05 * index}
              className="rounded-xl border border-border bg-white p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)]"
            >
              <p className="mb-1 text-[40px] font-extrabold tracking-[-1px] text-ink">
                {item.value}
              </p>
              <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-steel">{item.label}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
