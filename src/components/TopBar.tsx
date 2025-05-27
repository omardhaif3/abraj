import React from 'react';
import {FiUser } from 'react-icons/fi';
import { FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <div className="w-full h-8 flex items-center justify-center px-4 bg-transparent">
      <div className="flex space-x-8 rtl:space-x-reverse">
        <FiUser className="cursor-pointer text-white" size={18} title="Accessibility" />
        <FaInstagram className="cursor-pointer text-white" size={18} title="Instagram" />
        <FaYoutube className="cursor-pointer text-white" size={18} title="YouTube" />
        <FaLinkedinIn className="cursor-pointer text-white" size={18} title="LinkedIn" />
      </div>
    </div>
  );
};

export default TopBar;
