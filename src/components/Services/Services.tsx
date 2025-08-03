import React from 'react';
import { FiHome, FiStar, FiMapPin, FiCalendar, FiShield, FiMessageSquare } from 'react-icons/fi';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FiHome size={48} />,
      title: "Stylish Apartments",
      description: "Handpicked homes with modern design and premium amenities"
    },
    {
      icon: <FiStar size={48} />,
      title: "Verified Quality",
      description: "Every property meets our high standards for comfort and cleanliness"
    },
    {
      icon: <FiMapPin size={48} />,
      title: "Prime Locations",
      description: "Stay in the best neighborhoods with easy access to attractions"
    },
    {
      icon: <FiCalendar size={48} />,
      title: "Flexible Stays",
      description: "Book for a night, a month, or longer with no hidden fees"
    },
    {
      icon: <FiShield size={48} />,
      title: "Secure Booking",
      description: "Your safety is our priority with contactless check-ins"
    },
    {
      icon: <FiMessageSquare size={48} />,
      title: "24/7 Support",
      description: "Dedicated local team ready to assist anytime"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose XSO Apartments</h2>
          <p>Experience travel perfected</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="learn-more">Explore Stays →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;