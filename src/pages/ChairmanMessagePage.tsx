import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from '../hooks/useTranslation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const ChairmanMessagePage: React.FC = () => {
  const { isRTL } = useLanguage();
  const t = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHoveringSignature, setIsHoveringSignature] = useState(false);
  const [, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track cursor for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax & Scroll Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const headerScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const bgBlur = useTransform(scrollYProgress, [0, 0.5], ['blur(0px)', 'blur(2px)']);

  const layout = isRTL ? 'md:flex-row-reverse' : 'md:flex-row';
  const dir = isRTL ? 'rtl' : 'ltr';

  // Floating Particles (Interactive)

  return (
    <ParallaxProvider>
      <div 
        dir={dir} 
        className="text-gray-800 min-h-screen font-sans bg-gradient-to-br from-blue-50 to-white overflow-hidden"
        ref={containerRef}
      >
      

      
        {/* Ultra-Premium Navbar */}
        <Navbar />

        {/* Cosmic Header (Animated) */}
        <motion.section 
          className="relative pt-28 text-center"
          style={{ scale: headerScale }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-white/50"
            style={{ backdropFilter: bgBlur }}
          />

          <Parallax speed={-5}>
            <div className="container mx-auto px-6 relative z-10">
              <motion.h1
                className="text-4xl md:text-4xl p-5 font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                {t('chairmanMessagePage.headerTitle')}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-xl max-w-4xl mx-auto text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ opacity: textOpacity }}
              >
                {t('chairmanMessagePage.headerSubtitle')}
              </motion.p>

              {/* Animated Scroll Hint */}
              <motion.div
                className="mt-16"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
              
              </motion.div>
            </div>
          </Parallax>
        </motion.section>

        {/* Holographic Message Section */}
        <div className="relative w-full py-8 bg-white/80 backdrop-blur-sm">
          <motion.section 
            className={`container mx-auto px-6 md:px-12 rounded-2xl flex flex-col ${layout} gap-12 items-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* 3D Image with Interactive Signature */}
            <motion.div 
              className="md:w-1/2 relative group"
              initial={{ x: isRTL ? 60 : -60, rotateY: 15 }}
              whileInView={{ x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setIsHoveringSignature(true)}
              onMouseLeave={() => setIsHoveringSignature(false)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-white/20">
                <img
                  src="/images/manager.png"
                  alt={t('chairmanMessagePage.imageAlt')}
                  className="w-full h-[70vh] object-cover object-top transform transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Animated Signature */}
                <motion.div
                  className="absolute bottom-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring' }}
                >
                  <img
                    src="/images/logo.png"
                    alt="Signature"
                    className="w-32 h-auto filter drop-shadow-lg"
                  />
                  <motion.div
                    className="absolute -inset-4 bg-blue-500/10 rounded-lg"
                    animate={{
                      scale: isHoveringSignature ? 1.2 : 1,
                      opacity: isHoveringSignature ? 1 : 0,
                    }}
                    transition={{ type: 'spring' }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Dynamic Text Content */}
            <motion.div 
              className={`md:w-1/2 space-y-8  ${isRTL ? 'text-left' : 'text-left'}`}
              initial={{ x: isRTL ? -60 : 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            >
              <motion.h2 
                className="text-4xl font-bold bg-clip-text p-3 text-transparent bg-gradient-to-r from-blue-600 to-indigo-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring' }}
              >
                {t('chairmanMessagePage.messageTitle')}
              </motion.h2>
              
              <motion.div
                className={`relative text-lg leading-relaxed text-gray-700 italic p-10 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm ${isRTL ? 'pr-8 border-r-4' : 'pl-8 border-l-4'} border-blue-400`}
                whileHover={{ 
                  boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)',
                  y: -5,
                }}
                transition={{ type: 'spring' }}
              >
                <motion.span 
                  className={`absolute text-7xl text-blue-400/20 ${isRTL ? 'left-2 top-2' : 'right-2 top-2'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {isRTL ? '”' : '“'}
                </motion.span>
                
                <motion.p 
                  className="text-justify"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {t('chairmanMessagePage.messageText')}
                </motion.p>
              </motion.div>

              {/* Interactive Chairman Info */}
              <motion.div
                className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{
                  boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)',
                  y: -5,
                }}
              >
                <motion.p 
                  className="text-2xl font-semibold text-blue-700"
                  whileHover={{ x: isRTL ? -3 : 3 }}
                >
                  {t('chairmanMessagePage.chairmanName')}
                </motion.p>
                <motion.p 
                  className="text-blue-600"
                  whileHover={{ x: isRTL ? -3 : 3 }}
                >
                  {t('chairmanMessagePage.chairmanTitle')}
                </motion.p>
              </motion.div>

            
            </motion.div>
          </motion.section>
        </div>

        {/* Stellar Footer */}
        <footer className="relative bg-gradient-to-b from-white to-blue-50 border-t border-blue-100">
          <Footer />
        </footer>
      </div>
    </ParallaxProvider>
  );
};

export default ChairmanMessagePage;