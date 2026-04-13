import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'

import '@/app/_styles/globals.css'
import { QueryProvider } from '@/app/_providers/query-provider'

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manutention chantier, logistique chantier et debarras BTP | Les Bras du Batiment',
  description:
    'Les Bras du Batiment accompagne les professionnels du batiment et de l\'agencement avec des services de manutention chantier, logistique chantier, debarras et entretien regulier partout en France.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${interTight.variable} font-sans antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
