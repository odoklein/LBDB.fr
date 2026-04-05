import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import LogoStrip from '@/components/sections/LogoStrip'
import ChaosControl from '@/components/sections/ChaosControl'
import BentoValueGrid from '@/components/sections/BentoValueGrid'
import HowItWorks from '@/components/sections/HowItWorks'
import Objections from '@/components/sections/Objections'
import CaseStudies from '@/components/sections/CaseStudies'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/layout/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <ChaosControl />
        <BentoValueGrid />
        <HowItWorks />
        <Objections />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
