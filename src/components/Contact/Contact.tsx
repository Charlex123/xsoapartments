import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FiMail className="info-icon" />
              <div>
                <h3>Email Us</h3>
                <p>info@homeverse.com</p>
                <p>support@homeverse.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <FiPhone className="info-icon" />
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri: 9am-6pm</p>
              </div>
            </div>
            
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div>
                <h3>Visit Us</h3>
                <p>123 Luxury Avenue</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;