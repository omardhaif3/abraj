import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import TiltWrapper from './TiltWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const workItems = [
  { id: 1, title: 'work.habib', category: 'logo', image: '/src/assets/images/works/logos/الحبيب للعقار/Artboard 2 copy@2x-100.jpg' },
  { id: 2, title: 'work.like', category: 'logo', image: '/src/assets/images/works/logos/عطور لايك/Artboard 1@2x-100.jpg' },
  { id: 3, title: 'work.eumq', category: 'logo', image: '/src/assets/images/works/logos/عمق/Artboard 2 copy 4@2x-100.jpg' },
  { id: 4, title: 'work.anqura', category: 'post', image: '/src/assets/images/works/posts/انقورا/Artboard 1 copy 12-100 (1).jpg' },
  { id: 5, title: 'work.kera', category: 'post', image: '/src/assets/images/works/posts/باك كير/Artboard 1 copy 3@2x-100.jpg' },
  { id: 6, title: 'work.kamry', category: 'post', image: '/src/assets/images/works/posts/كمري/Artboard 1@2x-100.jpg' },
];

const Work: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === filter);

  const filters = [
    { id: 'all', label: 'work.all' },
    { id: 'logo', label: 'work.logo' },
    { id: 'post', label: 'work.post' }
  
  ];

  return (
    <section id="work" className="py-24 bg-gray-100">
<div className="max-w-5xl mx-auto px-2">
        <div className="flex items-center justify-center mb-6 space-x-4 rtl:space-x-reverse">
          
          <h2 className={`text-4xl font-bold text-dark-blue ${isRTL ? 'font-cairo' : ''}`}>
            {t('work.title')}
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 space-x-4 rtl:space-x-reverse">
          {filters.map(filterItem => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === filterItem.id
                  ? 'bg-dark-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-green-100'
              } ${isRTL ? 'font-cairo' : ''}`}
            >
              {t(filterItem.label)}
            </button>
          ))}
        </div>
        
<Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  spaceBetween={10}
  breakpoints={{
    0: {
      slidesPerView: 1.2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 1.2,
        slideShadows: false,
      },
    },
    768: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 40,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    }
  }}
  coverflowEffect={{ rotate: 40, stretch: 10, depth: 100, modifier: 1, slideShadows: false }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[EffectCoverflow, Pagination, Navigation]}
  dir="rtl"
  className="mySwiper w-full"
>
  {filteredItems.map(item => (
    <SwiperSlide
    key={item.id}
    className="transition-all duration-300 swiper-slide-custom"
  >  
<TiltWrapper className="w-[90%] aspect-square sm:w-full sm:h-96 group scale-75 sm:scale-90">

      <div className="relative w-full h-full overflow-hidden rounded-lg slide-inner transition-transform duration-300">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
  />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end justify-center pb-4 rounded-lg">
            <div className="text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <h3 className="text-lg font-bold">{t(item.title)}</h3>
              <p className="capitalize text-dark-blue">{item.category}</p>
            </div>
          </div>
        </div>
      </TiltWrapper>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
};

export default Work;
