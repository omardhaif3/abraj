import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { X, MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

interface Branch {
  id: string;
  nameKey: string;
  descriptionKey: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: string;
  image?: string;
}

interface BranchDetailProps {
  branch: Branch;
  onClose: () => void;
}

const BranchDetail: React.FC<BranchDetailProps> = ({ branch, onClose }) => {
  const t = useTranslation();
  
  const branchName = t(`branches.${branch.nameKey}`);
  const branchDescription = t(`branches.${branch.descriptionKey}`);
  const fullAddress = `${branch.address}, ${branch.city}, ${branch.state} ${branch.zip}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="h-64 bg-gradient-to-br from-[#E6F0FF] to-[#007BFF] flex items-center justify-center">
            {branch.image ? (
              <img
                src={branch.image}
                alt={branchName}
                className="w-full h-full object-cover"
              />
            ) : (
              <MapPin className="w-20 h-20 text-[#00529B]" />
            )}
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold text-[#00529B] mb-4">{branchName}</h2>
          
          <p className="text-gray-600 mb-6">{branchDescription}</p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-[#007BFF] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">{t('branches.address')}</h4>
                <p className="text-gray-600">{fullAddress}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-[#007BFF] mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">{t('branches.phone')}</h4>
                <a
                  href={`tel:${branch.phone}`}
                  className="text-[#007BFF] hover:text-[#00529B] transition-colors"
                >
                  {branch.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-[#007BFF] mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">{t('branches.email')}</h4>
                <a
                  href={`mailto:${branch.email}`}
                  className="text-[#007BFF] hover:text-[#00529B] transition-colors"
                >
                  {branch.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-[#007BFF] mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">{t('branches.hours')}</h4>
                <p className="text-gray-600">{branch.hours}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-[#00529B] text-white rounded-lg hover:bg-[#003366] transition-colors"
            >
              <Navigation className="w-5 h-5 mr-2" />
              {t('branches.getDirections')}
            </a>
            <a
              href={`tel:${branch.phone}`}
              className="flex items-center justify-center px-6 py-3 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('branches.callNow')}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BranchDetail;