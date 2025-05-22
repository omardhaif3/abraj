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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className={`container mx-auto flex flex-col ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center px-6 lg:px-0 gap-12`}
      >
        {/* Image Container */}
        <div className="relative w-full lg:w-1/2 h-96 rounded-tr-[120px] rounded-br-[120px] overflow-hidden shadow-2xl border-8 border-yellow-600 group cursor-pointer transform transition-transform duration-700 hover:scale-105">
          <img
            src="/images/mainPhoto.jpg"
            alt="Hero"
            className="w-full h-full object-cover filter brightness-90 contrast-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30 pointer-events-none rounded-tr-[120px] rounded-br-[120px]"></div>
          {/* Decorative floating shapes */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-40 animate-pulse delay-2000"></div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8" style={{ marginRight: '3rem' }}>
          <h5
            className={`text-2xl md:text-3xl font-extrabold text-black drop-shadow-lg transition-all duration-1000 transform ${
              showSlogan1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-cairo' : ''}`}
            style={{ fontSize: '24px' }}
          >
            {t('home.slogan1')}
          </h5>

          <p
            style={{ fontSize: '5px', lineHeight: '0.6rem' }}
            className={`text-gray-900 drop-shadow-md transition-all duration-1000 transform ${
              showSlogan2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isRTL ? 'font-cairo' : ''}`}
          >
            {t('home.slogan2')}
          </p>

          <a
            href="/profile.pdf"
            download
            className="self-start mt-4 px-10 py-4 rounded-full bg-yellow-700 hover:bg-yellow-600 text-white font-semibold shadow-lg transition-all transform hover:scale-105"
          >
            {t('home.learnMore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
