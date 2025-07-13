import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Award, ExternalLink, Calendar, Building, X } from 'lucide-react';
import { certifications } from '../data/certifications';
import { useState } from 'react';

const CertificationsSection = () => {
  const t = useTranslation();
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  const categoryColors: Record<string, string> = {
    'Client Appreciation': 'bg-blue-100 text-blue-800',
    'تقدير العملاء': 'bg-blue-100 text-blue-800'
  };

  return (
    <section className="py-20 mt-16 relative overflow-hidden" style={{
      background: "linear-gradient(to right, #3D4B9F, #5A63B0)"
    }}>
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Award className="w-12 h-12 mr-4" />
            </motion.div>
            {t('certifications.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden group cursor-pointer relative"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[cert.category] || 'bg-gray-100 text-gray-800'}`}>
                    {t('certifications.clientAppreciation')}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm">
                    <Calendar className="w-4 h-4 mx-2" />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#00529B] mb-2 group-hover:text-[#007BFF] transition-colors">
                  {t(`certifications.${cert.name.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '').toLowerCase()}`) || cert.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <Building className="w-4 h-4 mx-2 text-[#007BFF]" />
                  <span className="text-sm font-medium">{t(`certifications.organization.${cert.organization}`) || cert.organization}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t(`certifications.${cert.name.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '').toLowerCase()}Desc`) || cert.description}
                </p>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center text-[#007BFF] group-hover:text-[#00529B] transition-colors text-sm font-medium"
                  aria-label={t('certifications.viewCertificate')}
                >
                  {t('certifications.viewCertificate')}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="w-4 h-4 mx-1" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00529B]/0 to-[#007BFF]/0 group-hover:from-[#00529B]/10 group-hover:to-[#007BFF]/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern modal for certificate viewing */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(8px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-black/70"
            />
            
            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              <div className="h-full flex flex-col md:flex-row">
                <div className="md:w-2/3 h-64 md:h-auto bg-gray-100 flex items-center justify-center p-8">
                  <motion.img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className="max-w-full max-h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </div>

                <div className="md:w-1/3 p-8 overflow-y-auto">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-[#00529B] mb-2">
                       {t(`certifications.${selectedCert.name.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '').toLowerCase()}`) || selectedCert.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Building className="w-5 h-5 mx-2 text-[#007BFF]" />
                      <span className="font-medium">{t(`certifications.organization.${selectedCert.organization}`) || selectedCert.organization}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-6">
                      <Calendar className="w-5 h-5 mx-2 text-[#007BFF]" />
                      <span>{selectedCert.year}</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {t(`certifications.${selectedCert.name.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '').toLowerCase()}Desc`) || selectedCert.description}
                    </p>
                    <motion.a
                      href={selectedCert.image}
                      download
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00529B] to-[#007BFF] text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      {t('certifications.download')}
                      <ExternalLink className="w-4 h-4 mx-2" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;