import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiMapPin, FiHome, FiLayers, FiDroplet, FiChevronLeft, FiChevronRight, FiMessageSquare, FiX, FiNavigation } from 'react-icons/fi';
import './PropertyCard.css';

interface PropertyImage {
  id: number;
  url: string;
  alt: string;
}

interface PropertyAmenities {
  Netflix: boolean;
  WiFi: boolean;
  "Hair dryer": boolean;
  Heating: boolean;
  Microwave: boolean;
  Fridge: boolean;
  "Baby crib on request": boolean;
  "Washing machine": boolean;
}

interface PropertyRules {
  smoking: boolean;
  pets: boolean;
  parties: boolean;
  checkIn: string;
  checkOut: string;
}

export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  type: string;
  description: string;
  beds: number;
  baths: number;
  area: number;
  features: string[];
  amenities: PropertyAmenities;
  rules: PropertyRules;
  images: PropertyImage[];
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const calculatePrice = () => {
    const today = new Date();
    const isWeekend = today.getDay() === 0 || today.getDay() === 6;
    return isWeekend ? 120 : 100;
  };

  const openWhatsApp = () => {
    const message = `Hi, I'm interested in booking ${property.title} (ID: ${property.id}) at £${calculatePrice()}/night.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/447466242549?text=${encodedMessage}`, '_blank');
  };

  const openDirections = () => {
    const destination = encodeURIComponent(property.location);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <>
          <motion.div 
      className="property-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="property-image-container">
        <img 
          src={property.images[currentImageIndex].url} 
          alt={property.images[currentImageIndex].alt} 
          className="property-image"
        />
        
        {property.images.length > 1 && (
          <>
            <button className="nav-button prev" onClick={prevImage}>
              <FiChevronLeft />
            </button>
            <button className="nav-button next" onClick={nextImage}>
              <FiChevronRight />
            </button>
          </>
        )}
        
        <div className="image-indicators">
          {property.images.map((_, index) => (
            <div 
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        
        <div className="property-badge">{property.type}</div>
        
        <button 
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FiHeart />
        </button>
      </div>

      <div className="property-details">
        <div className="property-header">
          <h3>{property.title}</h3>
          <p className="price">£{calculatePrice()}/night</p>
        </div>
        
        <div className="property-location">
          <FiMapPin />
          <span>{property.location}</span>
        </div>
        
        <div className="property-features">
          <div className="feature">
            <FiHome />
            <span>{property.beds} beds</span>
          </div>
          <div className="feature">
            <FiDroplet />
            <span>{property.baths} baths</span>
          </div>
          <div className="feature">
            <FiLayers />
            <span>{property.area} sqft</span>
          </div>
        </div>
        
        <div className="property-tags">
          {property.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="tag">{feature}</span>
          ))}
        </div>
        
        <div className="property-actions">
            <button
              className="view-details-button"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
            >
              View Details
            </button>
            <button
              className="directions-button"
              onClick={(e) => { e.stopPropagation(); openDirections(); }}
            >
              <FiNavigation /> Directions
            </button>
            <button
              className="whatsapp-button"
              onClick={(e) => { e.stopPropagation(); openWhatsApp(); }}
            >
              <FiMessageSquare /> Book Now
            </button>
          </div>
      </div>
    </motion.div>

    
{isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>
              <FiX />
            </button>
            
            <div className="modal-image-container">
              <img 
                src={property.images[currentImageIndex].url} 
                alt={property.images[currentImageIndex].alt} 
              />
              {property.images.length > 1 && (
                <>
                  <button className="modal-nav-button prev" onClick={prevImage}>
                    <FiChevronLeft />
                  </button>
                  <button className="modal-nav-button next" onClick={nextImage}>
                    <FiChevronRight />
                  </button>
                </>
              )}
            </div>
            
            <div className="modal-details">
              <h2>{property.title}</h2>
              <div className="modal-location">
                <FiMapPin />
                <span>{property.location}</span>
              </div>
              
              <div className="modal-price">
                <span>£{calculatePrice()}/night</span>
                {calculatePrice() === 120 && <span className="weekend-badge">Weekend Rate</span>}
              </div>
              
              <div className="modal-features">
                <div>
                  <FiHome />
                  <span>{property.beds} beds</span>
                </div>
                <div>
                  <FiDroplet />
                  <span>{property.baths} baths</span>
                </div>
                <div>
                  <FiLayers />
                  <span>{property.area} sqft</span>
                </div>
              </div>
              
              <div className="modal-section">
                <h3>Description</h3>
                <p style={{ whiteSpace: 'pre-line', lineHeight: '1.7' }}>{property.description}</p>
              </div>
              
              <div className="modal-section">
                <h3>Amenities</h3>
                <div className="amenities-grid">
                  {Object.entries(property.amenities).map(([key, value]) => (
                    value && <div key={key} className="amenity-item">{key}</div>
                  ))}
                </div>
              </div>
              
              <div className="modal-section">
                <h3>Rules</h3>
                <ul className="rules-list">
                  <li>No smoking allowed</li>
                  <li>{property.rules.pets ? 'Pets allowed' : 'No pets allowed'}</li>
                  <li>{property.rules.parties ? 'Parties allowed' : 'No parties/events'}</li>
                  <li>Check-in: {property.rules.checkIn}</li>
                  <li>Check-out: {property.rules.checkOut}</li>
                </ul>
              </div>
              
              <button className="book-now-button" onClick={openWhatsApp}>
                <FiMessageSquare /> Book Now via WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;