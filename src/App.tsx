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
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Animate from './components/Animate'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Animate><Problem /></Animate>
      <Animate><AntiSaas /></Animate>
      <Animate><NoShows /></Animate>
      <Animate><Mechanism /></Animate>
      <Animate><HowItWorks /></Animate>
      <Animate><WhatsAppSection /></Animate>
      <Animate><Pricing /></Animate>
      <Animate><Calculator /></Animate>
      <Animate><Testimonials /></Animate>
      <Animate><FAQ /></Animate>
      <Animate><CTA /></Animate>
      <Footer />
    </>
  )
}
