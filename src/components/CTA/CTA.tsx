import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      className="cta-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="cta-content" variants={itemVariants}>
          <motion.h2 variants={itemVariants}>
            Ready to Find Your Dream Home?
          </motion.h2>
          <motion.p variants={itemVariants}>
            Join thousands of satisfied clients who found their perfect property with us
          </motion.p>
          <motion.div className="cta-buttons" variants={itemVariants}>
            <motion.a 
              href="/#properties" 
              className="btn-primary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Available Airbnb
            </motion.a>
            <motion.a 
              href="https://wa.me/447466242549" 
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Book AirBnb
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div 
        className="cta-bg-element"
        initial={{ x: -100, y: -100, rotate: 0 }}
        animate={{ 
          x: [0, 50, 0],
          y: [0, 50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="cta-bg-element"
        initial={{ x: 100, y: 100, rotate: 0 }}
        animate={{ 
          x: [0, -50, 0],
          y: [0, -50, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.section>
  );
};

export default CTA;