import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
// Adjusted import path for logo to use Vite's public folder handling
const logo = '/images/logo.png';

const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 3800); // 3.8 seconds animation duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="splash-screen">
      <div className="background-gradient" />
      <div className="glowing-particles" />
      <div className="fluid-waves" />
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default SplashScreen;
