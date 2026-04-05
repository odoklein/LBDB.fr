import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ContactExpectationsSection from '@/components/sections/ContactExpectationsSection'
import ContactFormSection from '@/components/sections/ContactFormSection'
import FinalCTA from '@/components/sections/FinalCTA'
import SlidingSplitSection from '@/components/sections/SlidingSplitSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { contactSlidingSplits } from '@/lib/marketing-content'

export const metadata: Metadata = {
  title: 'Contact | Les Bras du Batiment',
  description: 'Contactez LBDB pour une intervention chantier en Ile-de-France et recevez une reponse rapide.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-[72px]">
        <ContactFormSection />
        <SlidingSplitSection
          sectionLabel="Parcours client"
          sectionTitle="Un accompagnement clair de la prise de contact au lancement terrain."
          items={contactSlidingSplits}
        />
        <ContactExpectationsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
