'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { conversionCtas, navLinks } from '@/lib/marketing-content'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-[20px] border-b border-border shadow-[0_1px_4px_rgba(16,24,40,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24 flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center shadow-[0_2px_8px_rgba(0,53,128,0.25)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-[15px] font-bold text-navy tracking-[-0.2px]">
              Les Bras du <span className="text-orange">Batiment</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href.split('#')[0]) && link.href !== '/'
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[14px] font-medium transition-colors duration-150 group ${
                    isActive ? 'text-ink' : 'text-steel hover:text-ink'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-orange transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href={conversionCtas.primary.href}
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-orange text-white text-[13px] font-bold uppercase tracking-[0.04em] rounded-[6px] shadow-[0_8px_28px_var(--orange-shadow)] hover:bg-orange-hover hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--orange-shadow)] transition-all duration-200"
          >
            {conversionCtas.primary.label}
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <span className={`block w-5 h-[2px] bg-navy transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-navy transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-navy transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[340px] max-w-[85vw] bg-white border-l border-border z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-end p-5">
                <button type="button" onClick={() => setMobileOpen(false)} className="p-2" aria-label="Fermer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-2 px-6 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-[28px] font-extrabold transition-colors py-2 ${
                      pathname === link.href ? 'text-orange' : 'text-navy hover:text-orange'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="p-6">
                <Link
                  href={conversionCtas.primary.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 bg-orange text-white text-[15px] font-bold uppercase tracking-[0.04em] rounded-[6px] shadow-[0_8px_28px_var(--orange-shadow)] hover:bg-orange-hover transition-all duration-200"
                >
                  {conversionCtas.primary.label}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
