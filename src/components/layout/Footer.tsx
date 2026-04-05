import Link from 'next/link'

import { navLinks, primaryEmail, primaryPhoneHref, primaryPhoneLabel } from '@/lib/marketing-content'

const footerLinks = {
  'Entreprise': [
    { label: 'A propos', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Tarifs', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  'Services': [
    { label: 'Dechargement', href: '/services' },
    { label: 'Manutention', href: '/services' },
    { label: 'Demenagement', href: '/services' },
    { label: 'Nettoyage', href: '/services' },
  ],
  'Contact': [
    { label: 'Ile-de-France', href: '#' },
    { label: primaryEmail, href: `mailto:${primaryEmail}` },
    { label: primaryPhoneLabel, href: primaryPhoneHref },
    { label: '7j/7 — Intervention < 24h', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-[15px] font-bold text-white tracking-[-0.2px]">
                Les Bras du <span className="text-orange">Batiment</span>
              </span>
            </div>
            <p className="text-[14px] leading-[1.65] text-white/45 max-w-[260px]">
              La main-d&apos;oeuvre BTP dont vos chantiers ont besoin. Equipes reactives en Ile-de-France.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.07em] text-white/60 mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/55 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Les Bras du Batiment. Tous droits reserves.
          </p>
          <div className="flex gap-6">
            {navLinks.slice(1, 4).map((link) => (
              <Link key={link.href} href={link.href} className="text-[13px] text-white/40 hover:text-white/70 transition-colors">
                {link.label}
              </Link>
            ))}
            <a href="/terms" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">Mentions legales</a>
            <a href="/privacy" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">Confidentialite</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
