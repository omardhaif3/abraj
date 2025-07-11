import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

// Particle background component
const Particles = () => {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
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
            opacity: [0, 0.5, 0],
            y: [0, -50],
            x: [0, (Math.random() - 0.5) * 50]
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

const SlideContent = ({ title, subtitle, isActive }: { title: string; subtitle: string; isActive: boolean }) => {
  const controls = useAnimation();
  const { isRTL } = useLanguage();
  
  useEffect(() => {
    if (isActive) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isActive, controls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const // Use 'as const' to properly type the array
      }
    }
  };


  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center text-center px-6 "
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="max-w-4xl space-y-6 mx-10 absolute top-[55%] mobile450:top-[55%] ">
        <motion.h1
  className={`text-xl md:text-2xl sm:text-2xl lg:text-4xl mobile450:text-xl font-bold text-white leading-tight mx-auto ${isRTL ? 'font-cairo' : 'font-sans'}`}
  variants={variants}
>

          {title}
        </motion.h1>
        <motion.p
          className={`text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto ${isRTL ? 'font-cairo' : ''}`}
          variants={variants}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};
const Hero: React.FC = () => {
  const t = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Enhanced slide data
  const slides = [
    {
      id: 1,
      image: '/public/images/mainPhoto.jpg',
      title: t('home.slogan1'),
      subtitle: t('home.slogan2'),
      overlay: 'rgba(8, 28, 58, 0.50)'
    },
    {
      id: 2,
      image:  '/public/images/mainPhoto1.jpg',
      title: t('home.slogan3'),
      subtitle: t('home.slogan4'),
      overlay: 'rgba(58, 8, 28, 0.50)'
    },
    {
      id: 3,
      image:  '/public/images/mainPhoto2.jpg',
      title: t('home.slogan5'),
      subtitle: t('home.slogan6'),
      overlay: 'rgba(28, 58, 8, 0.50)'
    }
  ];

  // Parallax effect handler
  const handleMouseMove = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

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

  // Parallax transform style
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
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
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: 1.05
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction > 0 ? -100 : 100,
                  transition: { duration: 1 }
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <div 
                  className="absolute inset-0 bg-black bg-opacity-40"
                  style={{ backdropFilter: 'blur(2px)' }}
                />
                <motion.div 
                  className="absolute inset-0 "
                  style={parallaxStyle}
                >
                  <SlideContent 
                    title={slide.title} 
                    subtitle={slide.subtitle} 
                    isActive={currentSlide === index} 
                  />
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Logo with 3D effect */}
<motion.div
  className="absolute top-1/4 left-1/2.1 transform -translate-x-1/2 -translate-y-1/2 z-20"
  initial={{ opacity: 0, y: -20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  <motion.div
    whileHover={!isMobile ? { scale: 1.05, rotateY: 10 } : {}}
    transition={{ duration: 0.5 }}
    className="perspective-1000"
  >
    <img
      src="/images/logo1.png"
      alt="Plan Eight"
      className="h-36 w-36 rounded-full object-cover border-4 border-white border-opacity-20 shadow-2xl"
    />
  </motion.div>
</motion.div>


      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-8 z-20 p-3 rounded-full bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 transition-all"
        onClick={prevSlide}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.7 }}
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
        transition={{ delay: 0.7 }}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-16 h-1 rounded-full overflow-hidden bg-white bg-opacity-20`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.1 }}
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
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="/profile.pdf"
          download
          className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-lg relative overflow-hidden group"
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center">
            {t('home.learnMore')}
            
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
        
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;