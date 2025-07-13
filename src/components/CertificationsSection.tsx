
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import { certifications } from '../data/certifications';


const CertificationsSection = () => {
  const t = useTranslation();

  const categoryColors: Record<string, string> = {
    'Client Appreciation': 'bg-blue-100 text-blue-800',
    'تقدير العملاء': 'bg-blue-100 text-blue-800'
  };

  return (
    <section className="py-20  mt-16" style={{
                    background: "linear-gradient(to right, #3D4B9F, #5A63B0)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center">
            <Award className="w-12 h-12 mr-4" />
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
              className="bg-white rounded-xl shadow-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[cert.category] || 'bg-gray-100 text-gray-800'}`}>
                    {t('certifications.clientAppreciation')}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#00529B] mb-2 group-hover:text-[#007BFF] transition-colors">
                  {t(`certifications.${cert.name.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '').toLowerCase()}`) || cert.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <Building className="w-4 h-4 mr-2 text-[#007BFF]" />
                  <span className="text-sm font-medium">{t(`certifications.organization.${cert.organization}`) || cert.organization}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t(`certifications.${cert.name.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '').toLowerCase()}Desc`) || cert.description}
                </p>
                
                <div className="flex items-center text-[#007BFF] group-hover:text-[#00529B] transition-colors">
                  <span className="text-sm font-medium">{t('certifications.viewCertificate')}</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00529B]/0 to-[#007BFF]/0 group-hover:from-[#00529B]/10 group-hover:to-[#007BFF]/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;