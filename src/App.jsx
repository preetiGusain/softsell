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
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div id="root" className="w-full text-center relative">
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
        <div className="fixed bottom-4 right-4 z-50">
          <ChatModal />
        </div>
      </div>
    </div >
  );
}

export default App;