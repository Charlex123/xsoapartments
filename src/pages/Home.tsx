import React from 'react';
import Hero from '../components/Hero/Hero';
import Featured from '../components/Featured/Featured';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Properties from '../components/Properties/Properties';
import Testimonials from '../components/Testimonials/Testimonials';
// import Contact from '../components/Contact/Contact';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Home: React.FC = () => {
  return (
    <>
    <Header />
      <Hero />
      <Properties />
      <Featured />
      <About />
      <Services />
      <Testimonials />
      {/* <Contact /> */}
      <CTA />
      <Footer />
    </>
  );
};

export default Home;