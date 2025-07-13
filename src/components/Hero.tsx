import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SlideContentProps = {
  title: string;
  subtitle: string;
  isActive: boolean;
};

const SlideContent = React.memo(({ title, subtitle, isActive }: SlideContentProps) => {
  const { isRTL } = useLanguage();
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl space-y-6 mx-10 absolute top-[55%] mobile450:top-[55%]">
        <h1 className={`text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight mx-auto ${isRTL ? 'font-cairo' : 'font-sans'}`}>{title}</h1>
        <p className={`text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto ${isRTL ? 'font-cairo' : ''}`}>{subtitle}</p>
      </div>
    </motion.div>
  );
});

const Hero = () => {
  const t = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, inView] = useInView({ threshold: 0.1 });
  
  const slides = useMemo(() => [
    { id: 1, image: '/images/mainPhoto.jpg', title: t('home.slogan1'), subtitle: t('home.slogan2'), overlay: 'rgba(8, 28, 58, 0.50)' },
    { id: 2, image: '/images/mainPhoto1.jpg', title: t('home.slogan3'), subtitle: t('home.slogan4'), overlay: 'rgba(58, 8, 28, 0.50)' },
    { id: 3, image: '/images/mainPhoto2.jpg', title: t('home.slogan5'), subtitle: t('home.slogan6'), overlay: 'rgba(28, 58, 8, 0.50)' }
  ], [t]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section ref={ref} id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background slides with zoom effect */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          className="absolute inset-0"
          initial={{ 
            scale: 1.1,
            opacity: 0
          }}
          animate={{ 
            scale: 1,
            opacity: 1,
            transition: { 
              scale: { duration: 7, ease: "linear" },
              opacity: { duration: 0.8 }
            }
          }}
          exit={{
            scale: 1.1,
            opacity: 0,
            transition: { 
              scale: { duration: 0.8, ease: "easeInOut" },
              opacity: { duration: 0.8 }
            }
          }}
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: slides[currentSlide].overlay,
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" style={{ backdropFilter: 'blur(1px)' }} />
          <SlideContent 
            title={slides[currentSlide].title} 
            subtitle={slides[currentSlide].subtitle} 
            isActive={true} 
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute top-1/4 left-1/2.1 transform -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img 
          src="/images/logo.png" 
          alt="Plan Eight" 
          className="h-48 w-48 rounded-full object-cover border-4 border-white border-opacity-20 shadow-lg" 
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
      >
        <a
          href="/profile.pdf"
          download
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all"
        >
          {t('home.learnMore')}
        </a>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);