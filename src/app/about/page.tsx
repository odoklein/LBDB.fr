import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AboutStorySection from '@/components/sections/AboutStorySection'
import AboutStatsSection from '@/components/sections/AboutStatsSection'
import DeliveryStepsSection from '@/components/sections/DeliveryStepsSection'
import SlidingSplitSection from '@/components/sections/SlidingSplitSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FinalCTA from '@/components/sections/FinalCTA'
import { aboutSlidingSplits } from '@/lib/marketing-content'

export const metadata: Metadata = {
  title: 'A propos | Les Bras du Batiment',
  description: 'Decouvrez LBDB, partenaire de main-d oeuvre BTP en Ile-de-France pour des interventions rapides et fiables.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-[72px]">
        <AboutStorySection />
        <AboutStatsSection />
        <SlidingSplitSection
          sectionLabel="ADN LBDB"
          sectionTitle="Notre maniere de travailler avec vos equipes, au quotidien."
          items={aboutSlidingSplits}
        />
        <DeliveryStepsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
