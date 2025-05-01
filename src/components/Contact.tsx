import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

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
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    // Show success message
    alert('Form submitted successfully!');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-dark-blue to-secondary">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-center text-white ${isRTL ? 'font-arabic' : ''}`}>
          {t('contact.title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className={`block mb-2 text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic text-right' : ''}`}
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
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent ${isRTL ? 'text-right' : ''}`}
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className={`block mb-2 text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic text-right' : ''}`}
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
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent ${isRTL ? 'text-right' : ''}`}
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="phone" 
                  className={`block mb-2 text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic text-right' : ''}`}
                >
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent ${isRTL ? 'text-right' : ''}`}
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block mb-2 text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic text-right' : ''}`}
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
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent ${isRTL ? 'text-right' : ''}`}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 px-6 bg-dark-blue text-white rounded-lg hover:bg-secondary transition-colors ${isRTL ? 'font-arabic' : ''}`}
              >
                {t('contact.submit')}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-8 text-white">
              <h3 className={`text-2xl font-bold mb-8 ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6">
                <div className={`flex items-center space-x-4 rtl:space-x-reverse ${isRTL ? 'font-arabic' : ''}`}>
                  <div className="bg-dark-blue p-3 rounded-full">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{isRTL ? 'البريد الإلكتروني' : 'Email'}</p>
                    <p className="text-white">hello@reallygreatsite.com</p>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 rtl:space-x-reverse ${isRTL ? 'font-arabic' : ''}`}>
                  <div className="bg-dark-blue p-3 rounded-full">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{isRTL ? 'الهاتف' : 'Phone'}</p>
                    <p className="text-white">012-1234-567</p>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 rtl:space-x-reverse ${isRTL ? 'font-arabic' : ''}`}>
                  <div className="bg-dark-blue p-3 rounded-full">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{isRTL ? 'العنوان' : 'Address'}</p>
                    <p className="text-white">{t('contact.addressInfo')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.0308425630647!2d39.1748!3d21.5169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMxJzAwLjgiTiAzOcKwMTAnMjkuMyJF!5e0!3m2!1sen!2sus!4v1626000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;