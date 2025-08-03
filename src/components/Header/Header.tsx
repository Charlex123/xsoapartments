import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FiX, FiUser } from 'react-icons/fi';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Type-safe variants using Framer Motion's Variants type
  const navVariants: Variants = {
    hidden: { 
      x: '100%',
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3
      }
    },
    visible: { 
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      x: '100%',
      transition: { 
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3
      }
    }
  };

  const navItemVariants: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <div className="header-container">
        <motion.a 
          href="/" 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-highlight">Xso</span>Apartment
        </motion.a>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="nav-menu"
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button 
                className="close-menu"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX />
              </motion.button>
              <ul>
                {['Home', 'About', 'Properties', 'Contact'].map((item, i) => (
                  <motion.li 
                    key={item}
                    variants={navItemVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                  >
                    <a 
                      href={`/${item.toLowerCase()}`} 
                      className="nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        <div className="header-actions">
          <motion.button 
            className="login-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiUser />
            <span>Book AirBnb</span>
          </motion.button>
          {/* <motion.button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiMenu />
          </motion.button> */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;