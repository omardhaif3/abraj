import React from 'react';
import Navbar from '../components/Navbar';
import OurServices from '../components/OurServices';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <OurServices />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
