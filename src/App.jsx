import './App.css'
import ContactForm from './components/ContactForm'
import Hero from "./components/Hero"
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  )
}

export default App
