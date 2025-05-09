import './App.css';
import ChatModal from './components/ContactModal/ChatModal';
import ContactModal from './components/ContactModal/ContactModal';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import { useState } from 'react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full px-4 md:px-8 text-neutral-900 dark:text-neutral-100 min-h-screen">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Footer />
      <ChatModal />
    </div>
  );
}

export default App;
