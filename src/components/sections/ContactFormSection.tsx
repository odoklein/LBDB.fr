'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import Link from 'next/link'

import MotionReveal from '@/components/ui/MotionReveal'
import ScrollScaleText from '@/components/ui/ScrollScaleText'
import StockImageSlot from '@/components/ui/StockImageSlot'
import { conversionCtas, primaryEmail, primaryPhoneHref, primaryPhoneLabel, services } from '@/lib/marketing-content'

interface LeadFormState {
  company: string
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialState: LeadFormState = {
  company: '',
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function ContactFormSection() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleChange = (field: keyof LeadFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = (await response.json()) as { ok: boolean; error?: string }
      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? 'Submission failed')
      }

      setStatus('success')
      setForm(initialState)
    } catch (submitError) {
      setStatus('error')
      setError(submitError instanceof Error ? submitError.message : 'Unexpected error')
    }
  }

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <MotionReveal direction="left">
            <p className="mb-4 inline-block rounded-full border border-orange-border bg-orange-subtle px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.07em] text-orange">
              Contact commercial
            </p>
            <ScrollScaleText className="mb-4 text-[36px] font-extrabold leading-[1.08] tracking-[-0.52px] text-ink lg:text-[56px]">
              Recevez une proposition rapide pour votre chantier.
            </ScrollScaleText>
            <p className="mb-8 max-w-[460px] text-[18px] leading-[1.65] text-steel">
              Decrivez votre besoin, nous revenons vers vous sous 2h ouvrables avec une proposition adaptee.
            </p>

            <div className="mb-8 space-y-3">
              <a href={primaryPhoneHref} className="block text-[16px] font-semibold text-ink hover:text-orange transition-colors">
                {primaryPhoneLabel}
              </a>
              <a href={`mailto:${primaryEmail}`} className="block text-[16px] font-semibold text-ink hover:text-orange transition-colors">
                {primaryEmail}
              </a>
              <p className="text-[14px] text-steel">Disponibles 7j/7 - Ile-de-France</p>
            </div>

            <StockImageSlot slot="contactHero" />
          </MotionReveal>

          <MotionReveal delay={0.08} direction="right">
            <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-white p-6 shadow-[0_1px_4px_rgba(16,24,40,0.06)] lg:p-8">
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Societe (optionnel)"
                  value={form.company}
                  onChange={(event) => handleChange('company', event.target.value)}
                  className="w-full rounded-[6px] border-[1.5px] border-border px-4 py-3 text-[16px] text-ink outline-none transition focus:border-orange focus:ring-[0_0_0_3px_rgba(242,68,5,0.15)]"
                />
                <input
                  type="text"
                  required
                  placeholder="Nom complet*"
                  value={form.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  className="w-full rounded-[6px] border-[1.5px] border-border px-4 py-3 text-[16px] text-ink outline-none transition focus:border-orange focus:ring-[0_0_0_3px_rgba(242,68,5,0.15)]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email professionnel*"
                  value={form.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  className="w-full rounded-[6px] border-[1.5px] border-border px-4 py-3 text-[16px] text-ink outline-none transition focus:border-orange focus:ring-[0_0_0_3px_rgba(242,68,5,0.15)]"
                />
                <input
                  type="tel"
                  placeholder="Telephone"
                  value={form.phone}
                  onChange={(event) => handleChange('phone', event.target.value)}
                  className="w-full rounded-[6px] border-[1.5px] border-border px-4 py-3 text-[16px] text-ink outline-none transition focus:border-orange focus:ring-[0_0_0_3px_rgba(242,68,5,0.15)]"
                />
                <select
                  required
                  value={form.service}
                  onChange={(event) => handleChange('service', event.target.value)}
                  className="w-full rounded-[6px] border-[1.5px] border-border bg-white px-4 py-3 text-[16px] text-ink outline-none transition focus:border-orange focus:ring-[0_0_0_3px_rgba(242,68,5,0.15)]"
                >
                  <option value="">Service demande*</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                <textarea
                  required
                  rows={5}
                  placeholder="Decrivez votre besoin (volume, dates, lieu, contraintes)*"
                  value={form.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  className="w-full rounded-[6px] border-[1.5px] border-border px-4 py-3 text-[16px] text-ink outline-none transition focus:border-orange focus:ring-[0_0_0_3px_rgba(242,68,5,0.15)]"
                />
              </div>

              {status === 'error' && (
                <p className="mt-4 text-[14px] text-danger">Erreur: {error}</p>
              )}
              {status === 'success' && (
                <p className="mt-4 text-[14px] text-success">Demande envoyee. Nous revenons vers vous rapidement.</p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center rounded-[6px] bg-orange px-[30px] py-[15px] text-[15px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_28px_rgba(242,68,5,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-hover disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? 'Envoi...' : conversionCtas.primary.label}
                </button>
                <Link
                  href={conversionCtas.pricing.href}
                  className="inline-flex items-center justify-center rounded-[6px] border border-border bg-surface px-[30px] py-[15px] text-[15px] font-bold uppercase tracking-[0.04em] text-ink transition-colors hover:bg-border"
                >
                  Voir les tarifs
                </Link>
              </div>
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
