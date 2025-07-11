import React, { useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView, Variants } from 'framer-motion';
import { Rocket, Globe, Award, Users,  Eye, CheckCircle, ShieldCheck, Scale, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Enhanced animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.9
      }
    }
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
          delayChildren: 0,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardHoverVariants: Variants = {
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  // Card icons
const cardIcons = [
  <ShieldCheck key="safety" size={28} className="text-blue-300" />,       // Safety
  <Scale key="integrity" size={28} className="text-blue-300" />,          // Integrity
  <Users key="teamwork" size={28} className="text-blue-300" />,           // Teamwork
  <HeartHandshake key="respect" size={28} className="text-blue-300" />,   // Respect
  <Award key="quality" size={28} className="text-blue-300" />,            // Quality
  <Globe key="global" size={28} className="text-blue-300" />              // (Additional if needed)
];

  // Data arrays
  const mainItems = [
    { titleKey: 'about.title1', descKey: 'about.text1' },
    { titleKey: 'about.title2', descKey: 'about.text2' }
  ];

const cardItems = [
  { 
    headerKey: 'about.text3_1', 
    descriptionKey: 'about.text3_1_desc',
    icon: <ShieldCheck size={28} className="text-blue-300" /> // Safety
  },
  { 
    headerKey: 'about.text3_2', 
    descriptionKey: 'about.text3_2_desc',
    icon: <Scale size={28} className="text-blue-300" /> // Integrity
  },
  { 
    headerKey: 'about.text3_3', 
    descriptionKey: 'about.text3_3_desc',
    icon: <Users size={28} className="text-blue-300" /> // Teamwork
  },
  { 
    headerKey: 'about.text3_4', 
    descriptionKey: 'about.text3_4_desc',
    icon: <HeartHandshake size={28} className="text-blue-300" /> // Respect
  },
  { 
    headerKey: 'about.text3_5', 
    descriptionKey: 'about.text3_5_desc',
    icon: <Award size={28} className="text-blue-300" /> // Quality
  },
  { 
    headerKey: 'about.text3_6', 
    descriptionKey: 'about.text3_6_desc',
    icon: <Globe size={28} className="text-blue-300" /> // (Additional)
  }
];

  return (
    <section 
      id="about" 
      className="relative overflow-hidden py-0 pt-0 mt-0"
      style={{
        background: `
          linear-gradient(135deg, rgba(245, 247, 255, 0.98) 0%, rgba(240, 243, 255, 0.95) 100%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d4b9f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100 bg-opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 80],
              y: [0, (Math.random() - 0.5) * 80],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-10">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            {/* Title Section */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center justify-center mb-16"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 mb-6"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <Rocket 
                    size={40}
                    className="text-blue-600 transition-all duration-300 hover:text-blue-800"
                  />
                </motion.div>
                <motion.h2 
                  className={`text-5xl font-bold bg-clip-text p-5 text-transparent bg-gradient-to-r from-blue-400 to-blue-800 ${isRTL ? 'font-cairo' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {isRTL ? 'مسيرتنا' : t('about.title')}
                </motion.h2>
              </motion.div>

              <motion.div 
                variants={fadeInVariants}
                className="w-full max-w-3xl bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-30 shadow-xl"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)"
                }}
              >
                <p className={`text-blue-900 text-lg leading-relaxed ${isRTL ? 'font-cairo text-left' : 'text-left'}`}>
                  {t('about.text')}
                </p>
              </motion.div>
            </motion.div>

            {/* First Two Items */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
            >
              {mainItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-2xl shadow-2xl ${isRTL ? 'text-left' : 'text-left'}`}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                   <div className="flex items-center gap-4 mb-4">
      {/* Unique icon for each card based on index */}
      {index === 0 ? (
        // First card - Vision
        <Eye size={32} className="text-blue-300" />
      ) : (
        // Second card - Tasks
        <CheckCircle size={32} className="text-blue-300" />
      )}
                    <h3 className={`text-2xl font-semibold text-white ${isRTL ? 'font-cairo' : ''}`}>
                      {t(item.titleKey)}
                    </h3>
                  </div>
                  <div className="h-1 w-20 bg-blue-400 mb-4 ml-14"></div>
                  <p className={`text-blue-100 ${isRTL ? 'font-cairo' : ''}`}>
                    {t(item.descKey).split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Card Grid Section */}
            <motion.div variants={fadeInVariants}>
              <motion.h3 
                className={`text-3xl font-bold text-blue-900 mb-12 text-center ${isRTL ? 'font-cairo' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                {t('about.title3')}
              </motion.h3>

              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {cardItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative group"
                    whileHover="hover"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full p-6 rounded-2xl overflow-hidden border border-blue-200 border-opacity-30 bg-gradient-to-br from-blue-800 to-blue-600 shadow-lg"
                      variants={cardHoverVariants}
                      style={{
                        background: "linear-gradient(135deg, rgba(61, 75, 159, 0.9) 0%, rgba(29, 43, 127, 0.95) 100%)"
                      }}
                    >
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10"></div>
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-2 bg-blue-700 bg-opacity-30 rounded-lg">
                            {cardIcons[idx]}
                          </div>
                          <h3 className={`text-xl font-semibold text-white ${isRTL ? 'font-cairo' : ''}`}>
                            {t(item.headerKey)}
                          </h3>
                        </div>
                        <div className="h-1 w-12 bg-blue-300 mb-4 ml-14"></div>
                        <p className={`text-blue-100 flex-grow ${isRTL ? 'font-cairo' : ''}`}>
                          {t(item.descriptionKey).split('\n').map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </motion.div>
                    <div className="absolute -z-10 inset-0 bg-blue-900 rounded-2xl opacity-0 group-hover:opacity-40 blur-md transition-all duration-500"></div>
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