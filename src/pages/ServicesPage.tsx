import React from 'react';
import Navbar from '../components/Navbar';
import OurServices from '../components/OurServices';
import Footer from '../components/Footer';
import Background from '../components/Background';
import '../components/Background.css';
const ServicesPage: React.FC = () => {
  return (
    <>
      <Background />
      <Navbar />
      <main style={{ paddingTop: '5rem' }}>
        <OurServices />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
