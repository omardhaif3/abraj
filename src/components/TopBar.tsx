import React from 'react';
import { useLocation } from 'react-router-dom';
import {FiUser } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaSnapchat, FaTiktok, FaFacebook } from 'react-icons/fa';


const TopBar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="w-full h-8 flex items-center justify-center px-4 bg-transparent">
      <div className="flex space-x-8 rtl:space-x-reverse">
        <a >
        <FiUser className={`cursor-pointer ${isHome ? "text-white" : "text-white"}`} size={18} title="Accessibility" />
          </a>
       <a href='https://www.instagram.com/marketingabraj1/?igsh=NmZ6ZmVqdnB6aGhi#' >
        <FaInstagram className={`cursor-pointer ${isHome ? "text-white" : "text-white"}`} size={18} title="Instagram" />
       </a>
       <a href="https://x.com/aalwatania40994?s=11" target="_blank" rel="noopener noreferrer">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    className={`w-[18px] h-[18px] cursor-pointer ${isHome ? "text-white" : "text-white"}`}
    fill="currentColor"
  >
    <title>X</title>
    <path d="M714 658l486-658h-114l-389 527-309-527H0l509 862L37 1227h114l398-540 317 540h268L714 658z" />
  </svg>
</a>

       <a href='https://www.snapchat.com/add/abrag711?share_id=_-CFY32vBLw&locale=ar-EG' >
        <FaSnapchat className={`cursor-pointer ${isHome ? "text-white" : "text-white"}`} size={18} title="Snapchat" />
       </a>
      <a href='https://www.tiktok.com/@abrajalwatania?_t=8k9SINdxCNB&_r=1' >
        <FaTiktok className={`cursor-pointer ${isHome ? "text-white" : "text-white"}`} size={18} title="Tiktok" />
       </a>
       <a href='https://www.facebook.com/people/National-Abraj-for-Operation-Maintenance-Co/100083151311350/?mibextid=2JQ9oc' >
        <FaFacebook className={`cursor-pointer ${isHome ? "text-white" : "text-white"}`} size={18} title="Facebook" />
       </a>
    <a href='https://www.linkedin.com/in/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D8%A8%D8%B1%D8%A7%D8%AC-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9-04857a242/' >
        <FaLinkedinIn className={`cursor-pointer ${isHome ? "text-white" : "text-white"}`} size={18} title="LinkedIn" />
       </a>
      </div>
    </div>
  );
};

export default TopBar;
