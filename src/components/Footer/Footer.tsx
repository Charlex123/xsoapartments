import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">
              <span>Xso</span>Apartments
            </h3>
            <p className="footer-description">
              Premium luxury airbnb at afordable rates.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/#aboutus">About Us</a></li>
              <li><a href="/properties">Airbnb</a></li>
              {/* <li><a href="/contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li> */}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="contact-info">
              <li>
                <FiMapPin />
                <span>Wolverhampton, WV1 1JA, United Kingdom</span>
              </li>
              <li>
                <FiMail />
                <span>idexglobalpropertyy@gmail.com</span>
              </li>
              <li>
                <FiPhone />
                <span>+44 7466 242549</span>
              </li>
            </ul>
          </div>

          {/* <div className="footer-col">
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to get updates on new properties and exclusive offers.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div> */}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Xso Apartments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;