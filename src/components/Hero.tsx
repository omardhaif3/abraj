import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Simplified Particle background component with fewer particles
const Particles = () => {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 8 + 5,
    delay: Math.random() * 3
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white bg-opacity-10"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [0, -30],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

const SlideContent = React.memo(({ title, subtitle, isActive }: { title: string; subtitle: string; isActive: boolean }) => {
  const controls = useAnimation();
  const { isRTL } = useLanguage();
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  useEffect(() => {
    if (isActive) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isActive, controls]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center text-center px-6"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="max-w-4xl space-y-6 mx-10 absolute top-[55%] mobile450:top-[55%]">
        <motion.h1
          className={`text-xl md:text-2xl sm:text-2xl lg:text-4xl mobile450:text-xl font-bold text-white leading-tight mx-auto ${isRTL ? 'font-cairo' : 'font-sans'}`}
          variants={variants}
        >
          {title}
        </motion.h1>
        <motion.p
          className={`text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto ${isRTL ? 'font-cairo' : ''}`}
          variants={variants}
          transition={{ delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
});

const Hero: React.FC = () => {
  const t = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // Memoized slide data
  const slides = React.useMemo(() => [
    {
      id: 1,
      image: '/images/mainPhoto.jpg',
      title: t('home.slogan1'),
      subtitle: t('home.slogan2'),
      overlay: 'rgba(8, 28, 58, 0.50)'
    },
    {
      id: 2,
      image: '/images/mainPhoto1.jpg',
      title: t('home.slogan3'),
      subtitle: t('home.slogan4'),
      overlay: 'rgba(58, 8, 28, 0.50)'
    },
    {
      id: 3,
      image: '/images/mainPhoto2.jpg',
      title: t('home.slogan5'),
      subtitle: t('home.slogan6'),
      overlay: 'rgba(28, 58, 8, 0.50)'
    }
  ], [t]);

  // Auto-rotate with direction control
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <Particles />

      {/* Slider Container */}
      <div ref={sliderRef} className="absolute inset-0 overflow-hidden">
        <AnimatePresence custom={direction}>
          {slides.map((slide, index) => (
            currentSlide === index && (
              <motion.div
                key={slide.id}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  zIndex: 1,
                  backgroundColor: slide.overlay,
                  backgroundBlendMode: 'overlay'
                }}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction > 0 ? -50 : 50,
                  transition: { duration: 0.8 }
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeInOut'
                }}
              >
                <div 
                  className="absolute inset-0 bg-black bg-opacity-40"
                  style={{ backdropFilter: 'blur(1px)' }}
                />
                <SlideContent 
                  title={slide.title} 
                  subtitle={slide.subtitle} 
                  isActive={currentSlide === index} 
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Logo */}
      <motion.div
         className="absolute top-1/4 left-1/2.1 transform -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img
          src="/images/logo1.png"
          alt="Plan Eight"
          className="h-36 w-36 rounded-full object-cover border-4 border-white border-opacity-20 shadow-lg"
        />
      </motion.div>

      {/* Navigation Arrows */}
      {!isMobile && (
        <>
          <motion.button
            className="absolute left-8 z-20 p-3 rounded-full bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 transition-all"
            onClick={prevSlide}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            className="absolute right-8 z-20 p-3 rounded-full bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 transition-all"
            onClick={nextSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-12 h-1 rounded-full overflow-hidden bg-white bg-opacity-20`}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + index * 0.1 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 7, ease: 'linear' }}
                onAnimationComplete={() => {
                  if (currentSlide === index) {
                    nextSlide();
                  }
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* CTA Button */}
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