import React from 'react';
import { FiAward, FiUsers, FiHome } from 'react-icons/fi';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section" id="aboutus">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="/src/assets/images/xsoapartmentsaboutus.png" alt="About Homeverse" />
            <div className="experience-badge">
              <span>25+ Years Experience</span>
            </div>
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p className="subtitle">We've being a premium AirBnb booker since 2023</p>
            <p className="description">
              We specialize in luxury Airbnb and have helped thousands of clients 
              find their dream reservations in prime locations with United Kingdom.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <FiAward className="stat-icon" />
                <div>
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Awards Won</span>
                </div>
              </div>
              <div className="stat-item">
                <FiUsers className="stat-icon" />
                <div>
                  <span className="stat-number">5,000+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
              <div className="stat-item">
                <FiHome className="stat-icon" />
                <div>
                  <span className="stat-number">2,500+</span>
                  <span className="stat-label">Properties Sold</span>
                </div>
              </div>
            </div>
            
            <button className="learn-more-btn">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;