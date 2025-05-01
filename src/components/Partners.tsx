import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Users } from 'lucide-react';

const Partners: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  const partners = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg' },
  ];

  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Users size={32} className="text-[#004594] icon-float hover:rotate-6 transition-all duration-500" />
          <h2 className={`text-4xl font-bold text-[#004594] ${isRTL ? 'font-cairo' : ''}`}>
            {t('partners.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-white rounded-xl shadow-sm 
                         transition-all duration-300 transform hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-[120px] object-contain md:filter md:grayscale transition-all duration-300 md:group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
