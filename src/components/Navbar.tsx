import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import TopBar from "./TopBar";
import { useTranslation } from "../hooks/useTranslation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isRTL } = useLanguage();
  const t = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { key: "nav.home", to: "/" },
    {
      key: "nav.about",
      to: "/about",
      dropdown: [
        { key: "nav.aboutAbrag", to: "/about-abrag" },
        { key: "nav.chairmanMessage", to: "/chairman-message" },
        { key: "nav.boardOfDirectors", to: "/board-of-directors" },
        { key: "departments.title", to: "/our-departments" },
      ],
    },
    { key: "nav.work", to: "/services" },
    { key: "nav.contact", to: "/contact" },
    { key: "nav.branches", to: "/branches" },
    { key: "nav.projects", to: "/projects" },
  ];

  // Optimized scroll handler - immediate response
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToHero: true } });
    }
  };

  const getDropdownLabel = (key: string) => {
    const labels = {
      "nav.aboutAbrag": isRTL ? "عن أبراج" : "About Abraj",
      "nav.chairmanMessage": isRTL ? "كلمة الرئيس" : "Chairman Message", 
      "nav.boardOfDirectors": isRTL ? "مجلس الإدارة" : "Board of Directors",
      "departments.title": isRTL ? "أقسامنا" : "Our Departments"
    };
    return labels[key as keyof typeof labels] || t(key);
  };

  const navbarBg = isScrolled || location.pathname !== "/" 
    ? "custom-gradient backdrop-blur-md shadow-sm" 
    : "bg-transparent";

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* TopBar */}
      <div className={`${navbarBg} transition-all duration-150`}>
        <TopBar />
      </div>

      {/* Main Navbar */}
      <nav className={`font-cairo transition-all duration-150 ${isMenuOpen ? "bg-gradient-to-b from-blue-900/95 to-indigo-900/95 backdrop-blur-xl" : navbarBg}`}>
        <div className="container mx-auto px-3 pb-1">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className={`flex items-center ${isRTL ? "flex-row-reverse" : "flex-row"} gap-1`} onClick={handleHomeClick}>
              <img src="/images/logo.png" alt="Logo" className="h-16 w-16 md:h-20 md:w-20 rounded-full object-contain" />
              <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
              <div className="text-white text-base md:text-lg font-bold">{t("nav.camname")}</div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              {navItems.map((item) => (
                <div key={item.key} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsDropdownOpen(prev => prev === item.key ? null : item.key)}
                        className="text-white text-sm md:text-lg font-semibold py-2 flex items-center"
                      >
                        {t(item.key)}
                        <svg className={`w-3 h-3 ml-1 transition-transform duration-150 ${isDropdownOpen === item.key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`absolute start-0 mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl transition-all duration-150 ${isDropdownOpen === item.key ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                        {item.dropdown.map(sub => (
                          <Link
                            key={sub.key}
                            to={sub.to}
                            onClick={() => setIsDropdownOpen(null)}
                            className="block px-4 py-3 text-gray-800 hover:bg-blue-50 first:rounded-t-xl last:rounded-b-xl"
                          >
                            {getDropdownLabel(sub.key)}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={item.key === "nav.home" ? handleHomeClick : undefined}
                      className="text-white text-sm md:text-lg font-semibold py-2"
                    >
                      {t(item.key)}
                    </Link>
                  )}
                </div>
              ))}
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageToggle />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-1">
                {isMenuOpen ? <X size={24} /> : <GiHamburgerMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)} />}

      {/* Mobile Menu */}
      <div className={`fixed top-0 bottom-0 z-50 w-80 max-w-[85vw] transition-transform duration-200 ${isRTL ? "right-0" : "left-0"} ${isMenuOpen ? "translate-x-0" : isRTL ? "translate-x-full" : "-translate-x-full"}`}
        style={{ background: "linear-gradient(to bottom, #3D4B9F, #5A63B0)" }}>
        <div className="p-5 pt-16 h-full">
          <button onClick={() => setIsMenuOpen(false)} className={`absolute top-3 ${isRTL ? "left-3" : "right-3"} text-white p-1`}>
            <X size={24} />
          </button>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.key}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(prev => prev === item.key ? null : item.key)}
                      className="w-full flex justify-between items-center text-white py-2 px-4 rounded-xl bg-white/10"
                    >
                      {t(item.key)}
                      <svg className={`w-5 h-5 transition-transform duration-150 ${isDropdownOpen === item.key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isDropdownOpen === item.key && (
                      <ul className={`mt-2 space-y-1 ${isRTL ? "border-r-2 pr-3" : "border-l-2 pl-3"} border-white/20`}>
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.key}>
                            <Link
                              to={subItem.to}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 px-3 text-white/90 rounded-lg"
                            >
                              {getDropdownLabel(subItem.key)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link 
                    to={item.to} 
                    onClick={item.key === "nav.home" ? handleHomeClick : () => setIsMenuOpen(false)} 
                    className="block py-2 px-4 text-white bg-white/10 rounded-xl"
                  >
                    {t(item.key)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;