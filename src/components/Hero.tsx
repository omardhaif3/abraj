import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const [showSlogan1, setShowSlogan1] = useState(false);
  const [showSlogan2, setShowSlogan2] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSlogan1(true), 500);
    const timer2 = setTimeout(() => setShowSlogan2(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue/90 to-secondary/36 z-10"></div>
        <img
          src="/images/mainPhoto.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        />
      </div>
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        {/* <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isRTL ? 'font-cairo' : ''}`}>
          Plan <span className="text-secondary">Eight</span>
        </h1> */}
        
        <div className="h-20">
          <p 
            className={`text-xl md:text-2xl mb-4 transition-all duration-1000 transform ${
              showSlogan1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-cairo' : ''}`}
          >
            {t('home.slogan1')}
          </p>
          
          <p 
            className={`text-lg md:text-xl text-secondary transition-all duration-1000 transform ${
              showSlogan2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-cairo' : ''}`}
          >
            {t('home.slogan2')}
          </p>
        </div>
        
        <a 
          href="#about" 
          className={`mt-12 px-8 py-3 bg-dark-blue hover:bg-secondary rounded-full text-white font-medium transition-all transform hover:scale-105 ${
            isRTL ? 'font-cairo' : ''
          }`}
        >
          {t('home.learnMore')}
        </a>
      </div>
    </section>
  );
};

export default Hero;