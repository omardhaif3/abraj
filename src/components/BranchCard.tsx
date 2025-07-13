import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

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

interface BranchCardProps {
  branch: Branch;
  onClick: () => void;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch, onClick }) => {
  const t = useTranslation();
  
  const branchName = t(`branches.${branch.nameKey}`);
  const branchDescription = t(`branches.${branch.descriptionKey}`);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="h-48 bg-gradient-to-br from-[#E6F0FF] to-[#007BFF] flex items-center justify-center">
        {branch.image ? (
          <img
            src={branch.image}
            alt={branchName}
            className="w-full h-full object-cover"
          />
        ) : (
          <MapPin className="w-16 h-16 text-[#00529B]" />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#00529B] mb-2 group-hover:text-[#007BFF] transition-colors">
          {branchName}
        </h3>
        
        <div className="space-y-2 text-gray-600">
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-[#007BFF] mx-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm">
              {branch.address}, {branch.city}, {branch.state} {branch.zip}
            </span>
          </div>
          
          <div className="flex items-center">
            <Phone className="w-4 h-4 text-[#007BFF] mx-2 flex-shrink-0" />
            <span className="text-sm">{branch.phone}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-[#007BFF] mx-2 flex-shrink-0" />
            <span className="text-sm">{branch.hours}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mt-3 mb-4">
          {branchDescription}
        </p>
        
        <div className="mt-4 flex items-center text-[#007BFF] group-hover:text-[#00529B] transition-colors">
          <span className="text-sm font-medium">{t('branches.viewDetails')}</span>
          <ExternalLink className="w-4 h-4 mx-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default BranchCard;