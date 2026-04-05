import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import FinalCTA from '@/components/sections/FinalCTA'
import PricingFaqSection from '@/components/sections/PricingFaqSection'
import PricingPlansSection from '@/components/sections/PricingPlansSection'
import SlidingSplitSection from '@/components/sections/SlidingSplitSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { pricingSlidingSplits } from '@/lib/marketing-content'

export const metadata: Metadata = {
  title: 'Tarifs | Les Bras du Batiment',
  description: 'Explorez les formules LBDB pour vos besoins de main-d oeuvre chantier en Ile-de-France.',
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-[72px]">
        <PricingPlansSection />
        <SlidingSplitSection
          sectionLabel="Lecture budget"
          sectionTitle="Tarification lisible, decisions plus rapides, execution mieux maitrisee."
          items={pricingSlidingSplits}
        />
        <PricingFaqSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
