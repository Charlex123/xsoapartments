import React from 'react';
import { FiStar, FiMapPin, FiHeart, FiCheckCircle } from 'react-icons/fi';
import './Featured.css';

const Featured: React.FC = () => {
  const features = [
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
      icon: <FiCheckCircle size={48} />,
      title: "Easy Booking",
      description: "Instant confirmation and flexible cancellation options"
    },
    {
      icon: <FiHeart size={48} />,
      title: "Guest Favorite",
      description: "Top-rated stays loved by thousands of travelers"
    }
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Travelers Choose Us</h2>
          <p>Experience the difference with XSO Apartments</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;