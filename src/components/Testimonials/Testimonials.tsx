import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
    scale: 0.95
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const, // Explicitly type as 'spring'
      bounce: 0.4,
      duration: 0.8
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
  }
};

  const starVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 10 }
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>Client Testimonials</h2>
          <p className="subtitle">What our clients say about our services</p>
          <motion.div 
            className="header-underline"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    className={i < testimonial.rating ? 'filled' : ''}
                    variants={starVariants}
                    whileHover="hover"
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.content}"</p>
              <div className="client-info">
                <motion.div 
                  className="avatar-container"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="client-avatar"
                    loading="lazy"
                  /> */}
                </motion.div>
                <div>
                  <h4 className="client-name">{testimonial.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;