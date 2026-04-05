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
  title: 'Les Bras du Batiment | Main-d\'oeuvre BTP en Ile-de-France',
  description:
    'Decharement, manutention, demenagement de chantier. Des equipes reactives et encadrees, operationnelles en moins de 24h en Ile-de-France.',
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
