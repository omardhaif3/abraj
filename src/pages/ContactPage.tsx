import React from 'react';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
