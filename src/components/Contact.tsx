import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Form submitted successfully!');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-blue-900 ${isRTL ? 'font-arabic' : ''}`}>
            {t('contact.title')}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('contact.subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-2xl p-8 border border-blue-100 transform hover:shadow-xl transition-all duration-300"
          >
            <h3 className={`text-2xl font-bold mb-6 text-blue-800 ${isRTL ? 'font-arabic text-left' : 'text-left'}`}>
  {t('contact.formTitle')}
</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block mb-2 text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic text-left' : ''}`}
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    isRTL ? 'text-left' : ''
                  } bg-gray-50 focus:bg-white`}
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block mb-2 text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic text-left' : ''}`}
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    isRTL ? 'text-left' : ''
                  } bg-gray-50 focus:bg-white`}
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="phone" 
                  className={`block mb-2 text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic text-left' : ''}`}
                >
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    isRTL ? 'text-left' : ''
                  } bg-gray-50 focus:bg-white`}
                  placeholder={t('contact.phonePlaceholder')}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block mb-2 text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic text-left' : ''}`}
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    isRTL ? 'text-left' : ''
                  } bg-gray-50 focus:bg-white`}
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:shadow-md transition-all ${
                  isRTL ? 'font-arabic' : ''
                } font-medium`}
              >
                {t('contact.submit')}
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="bg-white rounded-xl shadow-2xl p-8 border border-blue-100 h-80%">
              <h3 className={`text-2xl font-bold mb-8 text-blue-800 ${isRTL ? 'font-arabic text-left' : ''}`}>
                {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6">
                <div className={`flex items-center space-x-4 rtl:space-x-reverse ${isRTL ? 'font-arabic' : ''}`}>
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{isRTL ? 'البريد الإلكتروني' : 'Email'}</p>
                    <a href="mailto:Info@abrajalwatania.sa" className="text-blue-700 hover:text-blue-900 transition-colors">
                      Info@abrajalwatania.sa
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 rtl:space-x-reverse ${isRTL ? 'font-arabic' : ''}`}>
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{isRTL ? 'الهاتف' : 'Phone'}</p>
                    <a href="tel:0112479609" className="text-blue-700 hover:text-blue-900 transition-colors">
                      0112479609
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 rtl:space-x-reverse ${isRTL ? 'font-arabic' : ''}`}>
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{isRTL ? 'العنوان' : 'Address'}</p>
                    <p className="text-gray-800">{t('contact.addressInfo')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-blue-100">
              <div className="h-80 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.7803097096316!2d46.62035250210668!3d24.59677692991943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1b85afca99a9%3A0x8d68955f1d57c7bd!2z2LTYsdmD2Kkg2KfYqNix2KfYrCDYp9mE2YjYt9mG2YrYqSDZhNmE2KrYtNi62YrZhCDZiNin2YTYtdmK2KfZhtmH!5e0!3m2!1sar!2ssa!4v1749980636295!5m2!1sar!2ssa"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Map"
                  className="filter grayscale-0 hover:grayscale-0 transition-all"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;