'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUpChild, motionViewport, staggerContainer } from '@/lib/tokens'
import { faqs } from '@/lib/marketing-content'

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-border transition-colors duration-200 ${isOpen ? 'border-l-[3px] border-l-orange pl-4' : 'border-l-[3px] border-l-transparent pl-4'}`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className={`text-[17px] font-bold leading-[1.3] pr-4 transition-colors duration-200 ${isOpen ? 'text-orange' : 'text-ink group-hover:text-navy'}`}>
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center transition-colors duration-200 group-hover:bg-orange-subtle group-hover:border-orange-border">
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className={`transition-colors duration-200 ${isOpen ? 'text-orange' : 'text-steel'}`}
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[16px] leading-[1.65] text-steel max-w-[680px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24"
      >
        <div className="grid lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-20">
          {/* Left — header */}
          <div>
            <motion.p variants={fadeUpChild} className="mb-4 inline-flex rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
              FAQ
            </motion.p>
            <motion.h2 variants={fadeUpChild} className="text-[32px] lg:text-[40px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink mb-4">
              Questions frequentes
            </motion.h2>
            <motion.p variants={fadeUpChild} className="text-[16px] leading-[1.65] text-steel">
              Tout ce que vous devez savoir avant de faire appel a nos services.
            </motion.p>
          </div>

          {/* Right — accordion */}
          <motion.div variants={fadeUpChild} className="border-t border-border">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
