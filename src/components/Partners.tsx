import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Users } from 'lucide-react';

const Partners: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  const partners = [
    { name: 'Qomrh', logo: '/src/assets/images/Partner/1.png' },
    { name: 'Eumq', logo: '/src/assets/images/Partner/2.png' },
    { name: 'Idee', logo: '/src/assets/images/Partner/3.png' }
    // { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
    // { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    // { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg' },
  ];

  return (
    <section id="partners" className="py-24 bg-gray-50 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Users size={32} className="text-[#004594] icon-float hover:rotate-6 transition-all duration-500" />
          <h2 className={`text-4xl font-bold text-[#004594] ${isRTL ? 'font-cairo' : ''}`}>
            {t('partners.title')}
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-8 bg-white rounded-xl shadow-sm 
                           transition-all duration-300 transform hover:shadow-xl hover:scale-110 hover:-translate-y-1"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 max-w-[160px] object-contain md:filter md:grayscale transition-all duration-300 md:group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
