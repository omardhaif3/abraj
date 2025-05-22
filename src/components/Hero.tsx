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
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-dark-blue"
      style={{
        backgroundImage:
          'url(/images/mainPhoto.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div
        className={`relative z-20 flex flex-col items-center justify-center h-full px-4 text-center font-cairo text-white`}
      >
        <div className="h-20">
          <p
            className={`text-xl md:text-2xl mb-4 transition-all duration-1000 transform ${
              showSlogan1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-cairo' : ''}`}
          >
            {t('home.slogan1')}
          </p>

          <p
            className={`text-lg md:text-xl text-gray-300 transition-all duration-1000 transform ${
              showSlogan2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-cairo' : ''}`}
          >
            {t('home.slogan2')}
          </p>
        </div>

        <a
          href="/profile.pdf"
          download
          className={`mt-12 px-8 py-3 rounded-full bg-secondary hover:bg-light-3 text-white font-semibold transition-all transform hover:scale-105 shadow-lg ${
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
