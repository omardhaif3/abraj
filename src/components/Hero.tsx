import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import './HeroButton.css';

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
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/mainPhoto.jpg')" }}
    >
      {/* Dark transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-xl px-6">
        {/* Logo */}
        <img
          src="/images/logo.jpg"
          alt="Plan Eight"
          className="h-28 w-28 rounded-full object-cover mx-auto"
        />

        {/* Text Content */}
        <h5
          className={`text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg transition-all duration-1000 transform ${
            showSlogan1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'font-cairo' : ''}`}
          style={{ fontSize: '24px' }}
        >
          {t('home.slogan1')}
        </h5>

        <p
          style={{ fontSize: '5px', lineHeight: '0.6rem' }}
          className={`text-gray-200 drop-shadow-md transition-all duration-1000 transform ${
            showSlogan2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'font-cairo' : ''}`}
        >
          {t('home.slogan2')}
        </p>

        {/* Download Button */}
        <a
          href="/profile.pdf"
          download
          className="mt-4 btn-light-blue"
        >
          {t('home.learnMore')}
        </a>
      </div>
    </section>
  );
};

export default Hero;
