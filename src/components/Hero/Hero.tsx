import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FiMapPin, FiStar } from 'react-icons/fi';
import './Hero.css';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <motion.section 
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-background-overlay"></div>
      
      <div className="hero-container">
        <motion.div className="hero-content" variants={containerVariants}>
          <motion.h1 variants={itemVariants}>
            Find Your Perfect Escape With <span>XSOAPPARTMENT</span>
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Discover homes that tell your story
          </motion.p>
          
          <motion.div className="hero-cta" variants={itemVariants}>
            <button className="explore-button">
              Explore stays
              <FiMapPin className="button-icon" />
            </button>
            
            <div className="rating-badge">
              <FiStar className="star-icon" />
              <span>Rated 4.9/5 by thousands of travelers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="featured-property"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.8,
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99] as const
        }}
      >
        <div className="property-image">
          <img src="src/assets/images/airbnb1a.jpg" alt="Featured property" />
          <div className="property-tag">Featured</div>
        </div>
        <div className="property-details">
          <h3>Wolverhampton, WV1 1JA,</h3>
          <p>Wolverhampton, United Kingdom</p>
          <div className="property-price">
            <span>$100</span> / night
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;