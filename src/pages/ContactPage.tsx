import React from 'react';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import '../components/Background.css';
const ContactPage: React.FC = () => {
  return (
    <>
      <Background />
      <Navbar />
      <div style={{ paddingTop: '5rem' }}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
