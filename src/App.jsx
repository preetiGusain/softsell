import './App.css';
import ChatModal from './components/ContactModal/ChatModal';
import ContactModal from './components/ContactModal/ContactModal';
import DashboardImage from './components/DashboardImage';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import { useState } from 'react';
import PurchaseImage from './components/PurchaseImage';
import OurJourney from './components/OurJourney';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full h-screen">
      <div id="root" className="max-w-screen-lg mx-auto text-center">
        <Header onContactClick={() => setIsContactOpen(true)} />
        <Hero />
        <DashboardImage />
        <HowItWorks />
        <PurchaseImage />
        <WhyChooseUs />
        <OurJourney />
        <Testimonials />
        <FeatureSection />
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <Footer />
        <ChatModal />
      </div>
    </div>
  );
}

export default App;
