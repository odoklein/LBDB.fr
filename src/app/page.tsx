import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import LogoStrip from '@/components/sections/LogoStrip'
import ProblemSection from '@/components/sections/ProblemSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import SolutionPacks from '@/components/sections/SolutionPacks'
import ClientTargets from '@/components/sections/ClientTargets'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import HowItWorks from '@/components/sections/HowItWorks'
import FAQAccordion from '@/components/sections/FAQAccordion'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/layout/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <ProblemSection />
        <BenefitsSection />
        <ServicesGrid />
        <SolutionPacks />
        <ClientTargets />
        <WhyChooseUs />
        <HowItWorks />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
