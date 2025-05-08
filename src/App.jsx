import './App.css'
import Hero from "./components/Hero"
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  )
}

export default App
