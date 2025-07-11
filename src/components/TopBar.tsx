import React from 'react';
import { useLocation } from 'react-router-dom';
import {FiUser } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaSnapchat, FaTiktok, FaTwitter, FaFacebook } from 'react-icons/fa';


const TopBar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="w-full h-8 flex items-center justify-center px-4 bg-transparent">
      <div className="flex space-x-8 rtl:space-x-reverse">
        <a >
        <FiUser className={`cursor-pointer ${isHome ? "text-white" : "text-black"}`} size={18} title="Accessibility" />
          </a>
       <a href='https://www.instagram.com/marketingabraj1/?igsh=NmZ6ZmVqdnB6aGhi#' >
        <FaInstagram className={`cursor-pointer ${isHome ? "text-white" : "text-black"}`} size={18} title="Instagram" />
       </a>
       <a href='https://x.com/aalwatania40994?s=11' >
        <FaTwitter className={`cursor-pointer ${isHome ? "text-white" : "text-black"}`} size={18} title="Twitter" />
       </a>
       <a href='https://www.snapchat.com/add/abrag711?share_id=_-CFY32vBLw&locale=ar-EG' >
        <FaSnapchat className={`cursor-pointer ${isHome ? "text-white" : "text-black"}`} size={18} title="Snapchat" />
       </a>
      <a href='https://www.tiktok.com/@abrajalwatania?_t=8k9SINdxCNB&_r=1' >
        <FaTiktok className={`cursor-pointer ${isHome ? "text-white" : "text-black"}`} size={18} title="Tiktok" />
       </a>
       <a href='https://www.facebook.com/people/National-Abraj-for-Operation-Maintenance-Co/100083151311350/?mibextid=2JQ9oc' >
        <FaFacebook className={`cursor-pointer ${isHome ? "text-white" : "text-black"}`} size={18} title="Facebook" />
       </a>
    <a href='https://www.linkedin.com/in/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D8%A8%D8%B1%D8%A7%D8%AC-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9-04857a242/' >
        <FaLinkedinIn className={`cursor-pointer ${isHome ? "text-white" : "text-black"}`} size={18} title="LinkedIn" />
       </a>
      </div>
    </div>
  );
};

export default TopBar;
