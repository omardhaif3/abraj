
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import TiltWrapper from './TiltWrapper';

const workItems = [
  { id: 1, title: 'work.habib', description: 'work.habibDesc', image: '/images/works/work1.jpg' },
  { id: 2, title: 'work.like', description: 'work.likeDesc', image: '/images/works/work2.jpg' },
  { id: 3, title: 'work.eumq', description: 'work.eumqDesc', image: '/images/works/work3.jpg' },
];

interface OurServicesProps {
  limit?: number;
}




const OurServices: React.FC<OurServicesProps> = ({ limit }) => {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const displayedItems = limit ? workItems.slice(0, limit) : workItems;

return (
  <section id="work" className="py-0 relative">
    <div className="animated-blue-bg py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <h2 className={`text-5xl font-extrabold tracking-wide text-black drop-shadow-xl ${isRTL ? 'font-cairo' : ''}`}>
            {t('work.title')}
          </h2>
        </div>

        {/* Special Row Card for id: 2 */}
      {displayedItems
  .filter((item) => item.id === 2)
  .map((item) => (
    <motion.div
      key={item.id}
      className="mb-16"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8  border border-gray-700 rounded-3xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-500" style={{
                    background: "linear-gradient(to right, #3D4B9F, #5A63B0)"}}>
          <div className="w-full md:w-1/2 p-6 mb-10 text-left md:text-left">
          <h3 className={`text-3xl font-bold text-white ${isRTL ? 'font-cairo' : ''}`}>
            {t(item.title)}
          </h3>
          <p className="mt-4 text-white text-justify text-lg leading-relaxed">
            {t(item.description)}
          </p>
        
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img
            src={item.image}
            alt={t(item.title)}
            className="w-full h-full object-cover"
          />
        </div>

      
      </div>
    </motion.div>
  ))}


        {/* Remaining Cards as Grid */}
        <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {displayedItems
            .filter((item) => item.id !== 2)
            .map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: 'easeOut',
                    },
                  },
                }}
              >
                <TiltWrapper className="relative group transform transition duration-500 hover:scale-[1.03] hover:-translate-y-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10  backdrop-blur-lg" style={{
                    background: "linear-gradient(to right, #3D4B9F, #5A63B0)"}}>
                    <img
  src={item.image}
  alt={t(item.title)}
  className="w-full h-60 object-cover object-top transition-transform duration-700 group-hover:scale-110"
/>

                    <div className="p-6 text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{t(item.title)}</h3>
                      <p className="text-base opacity-90">{t(item.description)}</p>
                    </div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-2xl animate-pulse" />
                  </div>
                </TiltWrapper>
              </motion.div>
            ))}
        </motion.div>

        {limit && (
          <div className="flex justify-center mt-12">
            <a
              href="/services"
              className={`px-8 py-4 bg-dark-blue hover:bg-indigo-700 text-white text-lg rounded-full font-semibold transition duration-300 hover:shadow-xl hover:scale-105 ${
                isRTL ? 'font-cairo' : ''
              }`}
            >
              {t('work.readMore')}
            </a>
          </div>
        )}
      </div>
    </div>
  </section>
);

};

export default OurServices;
