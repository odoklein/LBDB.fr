import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import DeliveryStepsSection from '@/components/sections/DeliveryStepsSection'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import SectorsSection from '@/components/sections/SectorsSection'
import SlidingSplitSection from '@/components/sections/SlidingSplitSection'
import ServicesDetailSection from '@/components/sections/ServicesDetailSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { servicesSlidingSplits } from '@/lib/marketing-content'

export const metadata: Metadata = {
  title: 'Services de manutention chantier et logistique BTP | Les Bras du Batiment',
  description: 'Dechargement, manutention, debarras, nettoyage et renfort chantier. Des equipes reactives pour les professionnels du batiment partout en France.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-[72px]">
        <ServicesDetailSection />
        <SectorsSection />
        <SlidingSplitSection
          sectionLabel="Mode operatoire"
          sectionTitle="De la preparation a l'execution, chaque etape est pilotee."
          items={servicesSlidingSplits}
        />
        <DeliveryStepsSection />
        <TestimonialsSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
