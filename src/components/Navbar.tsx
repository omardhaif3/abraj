import React, { useState, useRef, useEffect } from "react";
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
  const menuDirectionRef = useRef(isRTL);
  const lastScrollY = useRef(0);

  const navItems = [
    { key: "nav.home", to: "/" },
    {
      key: "nav.about",
      to: "/about",
      dropdown: [
        { key: "nav.aboutAbrag", to: "/about-abrag", label: t("nav.aboutAbrag") },
        { key: "nav.chairmanMessage", to: "/chairman-message", label: t("nav.chairmanMessage") },
        { key: "nav.boardOfDirectors", to: "/board-of-directors", label: t("nav.boardOfDirectors") },
        { key: "departments.title", to: "/our-departments", label: t("departments.title") },
      ],
    },
    { key: "nav.work", to: "/services" },
    { key: "nav.contact", to: "/contact" },
    { key: "nav.branches", to: "/branches" },
    { key: "nav.projects", to: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastScrollY.current) > 10) {
        setIsScrolled(y > 20);
        lastScrollY.current = y;
      }
    };
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

  const getTextColor = () => "text-white";
  const getNavbarStyle = () => isMenuOpen
    ? "bg-gradient-to-b from-blue-900/95 to-indigo-900/95 backdrop-blur-xl"
    : isScrolled || location.pathname !== "/"
    ? "custom-gradient backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`${isScrolled || location.pathname !== "/" ? "custom-gradient backdrop-blur-md" : "bg-transparent"} transition-all duration-300`} style={{ zIndex: 60 }}>
        <TopBar />
      </div>

      <nav className={`font-cairo transition-all duration-300 z-50 ${getNavbarStyle()}`} style={{ marginTop: "-1px" }}>
        <div className="container mx-auto px-3 pb-1">
          <div className="flex items-center justify-between">
            <a href="/" className={`flex items-center ${isRTL ? "flex-row-reverse" : "flex-row"} gap-1 group`} onClick={handleHomeClick}>
              <img src="/images/logo.png" alt="Logo" className={`rounded-full object-contain ${isRTL ? "h-16 w-16 md:w-20 md:h-20" : "h-16 w-16 md:h-20 md:w-20"}`} />
              <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
              <div className={`${getTextColor()} text-base md:text-lg font-bold`}>{t("nav.camname")}</div>
            </a>

            <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              {navItems.map((item) => (
                <div key={item.key} className="relative group">
                  {item.dropdown ? (
                    <>
                      <span
                        onClick={() => setIsDropdownOpen(prev => prev === item.key ? null : item.key)}
                        className={`${getTextColor()} cursor-pointer text-sm md:text-lg font-semibold py-2`}
                      >
                        {t(item.key)}
                        <svg className={`inline w-3 h-3 ml-1 transition-transform ${isDropdownOpen === item.key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                      <ul className={`absolute start-0 mt-2 w-56 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl shadow-xl transition-opacity ${isDropdownOpen === item.key ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                        {item.dropdown.map(sub => (
                          <li key={sub.key}>
                            <Link
              to={sub.to}
              onClick={() => setIsDropdownOpen(null)}
              className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 whitespace-nowrap transition-all duration-300"
            >
              <span>
                {sub.key === "nav.aboutAbrag"
                  ? isRTL
                    ? "عن أبراج"
                    : "About Abraj"
                  : sub.key === "nav.chairmanMessage"
                  ? isRTL
                    ? "كلمة الرئيس"
                    : "Chairman Message"
                  : sub.key === "nav.boardOfDirectors"
                  ? isRTL
                    ? "مجلس الإدارة"
                    : "Board of Directors"
                  : sub.key === "departments.title"
                  ? isRTL
                    ? "أقسامنا"
                    : "Our Departments"
                  : sub.label}
              </span>
            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={item.key === "nav.home" ? handleHomeClick : () => setIsDropdownOpen(null)}
                      className={`${getTextColor()} text-sm md:text-lg font-semibold py-2`}
                    >
                      {t(item.key)}
                    </Link>
                  )}
                </div>
              ))}
              <LanguageToggle />
            </div>

            <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageToggle />
              <button onClick={() => { menuDirectionRef.current = isRTL; setIsMenuOpen(!isMenuOpen); }}>
                {isMenuOpen ? <X size={24} className={getTextColor()} /> : <GiHamburgerMenu size={24} className={getTextColor()} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 ${isMenuOpen ? "bg-black/50 backdrop-blur-sm" : "pointer-events-none"}`} onClick={() => setIsMenuOpen(false)} />

      <div className={`fixed top-0 bottom-0 z-50 transition-transform ${menuDirectionRef.current ? "right-0" : "left-0"}`} style={{
        width: "85vw",
        maxWidth: "320px",
        background: "linear-gradient(to bottom, #3D4B9F, #5A63B0)",
        backdropFilter: "blur(12px)",
        transform: isMenuOpen ? "translateX(0)" : menuDirectionRef.current ? "translateX(100%)" : "translateX(-100%)"
      }}>
        <div className="p-5 pt-16 h-full flex flex-col">
          <button onClick={() => setIsMenuOpen(false)} className={`absolute top-3 ${isRTL ? "left-3" : "right-3"} text-white p-1 rounded-full hover:bg-white/20`}><X size={24} /></button>
          <ul className="space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <li key={item.key}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(prev => prev === item.key ? null : item.key)}
                      className="w-full flex justify-between items-center text-white py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20"
                    >
                      {t(item.key)}
                      <svg className={`w-5 h-5 transition-transform ${isDropdownOpen === item.key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
                                className="flex items-center py-2 px-3 text-white text-opacity-90 hover:text-opacity-100 rounded-lg hover:bg-white/10 transition-all duration-300"
                              >
                                {subItem.key === "nav.aboutAbrag" ? (
                                  isRTL ? "عن أبراج" : "About Abrag"
                                ) : subItem.key === "nav.chairmanMessage" ? (
                                  isRTL ? "كلمة الرئيس" : "Chairman Message"
                                ) : subItem.key === "nav.boardOfDirectors" ? (
                                  isRTL ? "مجلس الإدارة" : "Board of Directors"
                                ) : subItem.key === "departments.title" ? (
                                  isRTL ? "أقسامنا" : "Our Departments"
                                ) : (
                                  subItem.label
                                )}
                              </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.to} onClick={item.key === "nav.home" ? handleHomeClick : () => setIsMenuOpen(false)} className="block py-2 px-4 text-white bg-white/10 hover:bg-white/20 rounded-xl">
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
