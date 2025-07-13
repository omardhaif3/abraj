import React, { useRef, useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView, Variants } from 'framer-motion';
import {  Globe, Award, Users, Eye, CheckCircle, ShieldCheck, Scale, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        type: "tween",
        duration: 0.8
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7
      }
    }
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const cardItems = useMemo(() => [
    { headerKey: 'about.text3_1', descriptionKey: 'about.text3_1_desc', icon: <ShieldCheck size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_2', descriptionKey: 'about.text3_2_desc', icon: <Scale size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_3', descriptionKey: 'about.text3_3_desc', icon: <Users size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_4', descriptionKey: 'about.text3_4_desc', icon: <HeartHandshake size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_5', descriptionKey: 'about.text3_5_desc', icon: <Award size={28} className="text-blue-300" /> },
    { headerKey: 'about.text3_6', descriptionKey: 'about.text3_6_desc', icon: <Globe size={28} className="text-blue-300" /> }
  ], []);

  const mainItems = [
    { titleKey: 'about.title1', descKey: 'about.text1' },
    { titleKey: 'about.title2', descKey: 'about.text2' }
  ];

  const renderMultilineText = (text: string) =>
    text.split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br /></React.Fragment>);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-0 pt-0 mt-0"
      style={{
        background: `
          linear-gradient(135deg, rgba(245, 247, 255, 0.98) 0%, rgba(240, 243, 255, 0.95) 100%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d4b9f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="relative z-10 py-10">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-16">
              <motion.h2
                className={`text-5xl font-bold bg-clip-text p-5 text-transparent bg-gradient-to-r from-blue-400 to-blue-800 ${isRTL ? 'font-cairo' : ''}`}
              >
                {isRTL ? 'مسيرتنا' : t('about.title')}
              </motion.h2>
              <motion.div
                variants={fadeInVariants}
                className="w-full max-w-3xl bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-30 shadow-xl"
              >
                <p className={`text-blue-900 text-lg  text-justify leading-relaxed ${isRTL ? 'font-cairo ' : ''}`}>
                  {t('about.text')}
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              {mainItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-8 rounded-2xl shadow-2xl ${isRTL ? 'text-left' : 'text-left'}`}
                  style={{ background: "linear-gradient(to right, #3D4B9F, #4C59AD)" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {index === 0 ? <Eye size={32} className="text-blue-300" /> : <CheckCircle size={32} className="text-blue-300" />}
                    <h3 className={`text-2xl font-semibold text-white ${isRTL ? 'font-cairo' : ''}`}>{t(item.titleKey)}</h3>
                  </div>
                  <div className="h-1 w-20 bg-blue-400 mb-4 ml-14"></div>
                  <p className={`text-blue-100 text-justify ${isRTL ? 'font-cairo' : ''}`}>{renderMultilineText(t(item.descKey))}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <motion.h3
                className={`text-3xl font-bold text-blue-900 mb-12 text-center ${isRTL ? 'font-cairo' : ''}`}
              >
                {t('about.title3')}
              </motion.h3>

              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative"
                    whileHover={{ y: -5, scale: 1.01 }}
                  >
                    <div className="h-full p-6 rounded-2xl overflow-hidden shadow-lg" style={{ background: "linear-gradient(to right, #3D4B9F, #4C59AD)" }}>
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-2 bg-blue-700 bg-opacity-30 rounded-lg">{item.icon}</div>
                          <h3 className={`text-xl font-semibold text-white ${isRTL ? 'font-cairo' : ''}`}>{t(item.headerKey)}</h3>
                        </div>
                        <div className="h-1 w-12 bg-blue-300 mb-4 ml-14"></div>
                        <p className={`text-blue-100 text-justify flex-grow ${isRTL ? 'font-cairo' : ''}`}>{renderMultilineText(t(item.descriptionKey))}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
