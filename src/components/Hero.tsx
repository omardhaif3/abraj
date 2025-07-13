import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SlideContentProps = {
  title: string;
  subtitle: string;
};

const SlideContent = React.memo(({ title, subtitle }: SlideContentProps) => {
  const { isRTL } = useLanguage();
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center px-6">
      <div className="max-w-4xl space-y-6 mx-10 absolute top-[55%]">
        <h1 className={`text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight mx-auto ${isRTL ? 'font-cairo' : 'font-sans'}`}>
          {title}
        </h1>
        <p className={`text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto ${isRTL ? 'font-cairo' : ''}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
});

const Hero = () => {
  const t = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });

  const slides = useMemo(() => [
    { image: '/images/mainPhoto.jpg', title: t('home.slogan1'), subtitle: t('home.slogan2') },
    { image: '/images/mainPhoto1.jpg', title: t('home.slogan3'), subtitle: t('home.slogan4') },
    { image: '/images/mainPhoto2.jpg', title: t('home.slogan5'), subtitle: t('home.slogan6') }
  ], [t]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section ref={ref} id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Logo with subtle entrance animation */}
      <motion.div
        className="absolute top-1/4 w-full flex justify-center z-20"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/images/logo.png"
          alt="Plan Eight"
          className="h-40 w-40 rounded-full object-cover border-4 border-white/20 shadow-lg"
          loading="eager"
        />
      </motion.div>

      {/* Content */}
      <SlideContent 
        title={slides[currentSlide].title} 
        subtitle={slides[currentSlide].subtitle} 
      />

      {/* Button with subtle entrance animation */}
      <motion.div
        className="absolute bottom-20 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <a
          href="/profile.pdf"
          download
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {t('home.learnMore')}
        </a>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);