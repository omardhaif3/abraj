import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Philosophy from './components/Philosophy';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update the document title
  useEffect(() => {
    document.title = 'Plan Eight - Tech & Branding';
  }, []);

  return (
    <LanguageProvider>
      <div className="font-sans">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Philosophy />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;