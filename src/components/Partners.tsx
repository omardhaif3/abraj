import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Partners: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  const partners = [
    { name: 'Qomrh', logo: '/images/Partner/1.png' },
    { name: 'Eumq', logo: '/images/Partner/2.png' },
    { name: 'Idee', logo: '/images/Partner/3.png' }
  ];

  return (
    <section id="partners" className="py-24 relative flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Users size={32} className="text-black icon-float hover:rotate-6 transition-all duration-500" />
          <h2 className={`text-4xl font-bold text-black ${isRTL ? 'font-cairo' : ''}`}>
            {t('partners.title')}
          </h2>
        </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 bg-[#ffedd8] rounded-xl shadow-sm 
                         transition-all duration-300 transform hover:shadow-xl hover:scale-110 hover:-translate-y-1"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-20 w-auto max-w-[160px] object-contain grayscale md:group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

           {/* Mobile Carousel */}

<div className="w-full md:hidden">
  <div className={isRTL ? 'swiper-rtl' : 'swiper-ltr'}>
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={partners.length > 3}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={2} // Make the current slide take up more space, showing parts of neighbors
      centeredSlides={true} // Keep the current slide centered
      className="w-full"
      dir="ltr"
    >
      {partners.map((partner, index) => (
        <SwiperSlide key={index}>
          <div className=" flex items-center justify-center p-8 bg-[#ffedd8] rounded-xl shadow-sm mx-4">
            <img
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              className="h-30 w-auto max-w-[160px] object-contain grayscale transition-all duration-300"
              style={{ filter: 'none' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

    </section>
  );
};

export default Partners;
