import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import NoShows from './components/NoShows'
import Mechanism from './components/Mechanism'
import HowItWorks from './components/HowItWorks'
import WhatsAppSection from './components/WhatsAppSection'
import AntiSaas from './components/AntiSaas'
import Pricing from './components/Pricing'
import Calculator from './components/Calculator'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <AntiSaas />
      <NoShows />
      <Mechanism />
      <HowItWorks />
      <WhatsAppSection />
      <Pricing />
      <Calculator />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
