import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Philosophy from './components/Philosophy';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

function AppContent() {
  const { isRTL } = useLanguage();

  // Determine position class based on direction
  const positionClass = isRTL ? 'left-6' : 'right-6';

  return (
    <div className="font-sans relative">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Philosophy />
      <Partners />
      <Contact />
      <Footer />
      <WhatsappButton className={positionClass} />
    </div>
  );
}

function App() {
  // Update the document title
  useEffect(() => {
    document.title = 'Plan Eight - Tech & Branding';
  }, []);

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
