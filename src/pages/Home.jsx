import React from 'react';
import Navbbar from '../components/Navbbar';
import Service from '../components/Service';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbbar />
      <HeroSection />
      <Service />
      <Footer />
    </>
  );
}

export default Home;
