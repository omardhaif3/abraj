import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

import '../components/Background.css';

const AboutPage: React.FC = () => {
  return (
    <>
   
      <Navbar />
      <div style={{ paddingTop: '5rem' }}>
        <About />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
