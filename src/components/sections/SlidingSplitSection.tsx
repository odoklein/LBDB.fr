'use client'

import type { SlidingSplitItem } from '@/lib/marketing-content'
import { motion } from 'framer-motion'

import StockImageSlot from '@/components/ui/StockImageSlot'
import { cn } from '@/lib/utils/css'

interface SlidingSplitSectionProps {
  sectionLabel: string
  sectionTitle: string
  items: readonly SlidingSplitItem[]
  dark?: boolean
}

export default function SlidingSplitSection({ sectionLabel, sectionTitle, items, dark = false }: SlidingSplitSectionProps) {
  return (
    <section className={cn(dark ? 'bg-navy py-24 lg:py-32' : 'bg-white py-24 lg:py-32')}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <div className="mb-14">
          <p
            className={cn(
              'mb-4 inline-block rounded-full px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em]',
              dark ? 'border border-white/20 bg-white/10 text-white/80' : 'border border-orange-border bg-orange-subtle text-orange'
            )}
          >
            {sectionLabel}
          </p>
          <h2 className={cn('max-w-[860px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] lg:text-[56px]', dark ? 'text-white' : 'text-ink')}>
            {sectionTitle}
          </h2>
        </div>

        <div className="space-y-14">
          {items.map((item, index) => {
            const reverse = index % 2 === 1
            return (
              <div key={item.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 54 : -54 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  className={cn(reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1')}
                >
                  <p className={cn('mb-3 text-[11.5px] font-semibold uppercase tracking-[0.07em]', dark ? 'text-orange' : 'text-orange')}>
                    {item.eyebrow}
                  </p>
                  <h3 className={cn('mb-4 text-[28px] font-bold leading-[1.16] lg:text-[34px]', dark ? 'text-white' : 'text-ink')}>
                    {item.title}
                  </h3>
                  <p className={cn('mb-6 text-[17px] leading-[1.72]', dark ? 'text-white/70' : 'text-steel')}>{item.desc}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className={cn('flex items-start gap-3 text-[15px] leading-[1.65]', dark ? 'text-white/80' : 'text-ink')}>
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-orange" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reverse ? -54 : 54 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1], delay: 0.04 }}
                  className={cn(reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2')}
                >
                  <StockImageSlot slot={item.imageSlot} />
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
