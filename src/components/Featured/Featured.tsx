import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { FiStar, FiMapPin, FiHeart, FiCheckCircle, FiNavigation, FiClock, FiPhone } from 'react-icons/fi';
import PropertiesData from '../../data/properties.json';
import './Featured.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '1rem',
};

// Wolverhampton, UK coordinates
const center = {
  lat: 52.5870,
  lng: -2.1288,
};

const Featured: React.FC = () => {
  const [, setMap] = useState<google.maps.Map | null>(null);

  // Get location from first property
  const propertyLocation = PropertiesData[0]?.location || 'Wolverhampton, UK';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleGetDirections = () => {
    const destination = encodeURIComponent(propertyLocation);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

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

        {/* Location & Directions Section */}
        <div className="location-section">
          <div className="section-header">
            <h2>Find Us</h2>
            <p>Visit our location or get directions to your next stay</p>
          </div>

          <div className="location-content">
            <div className="map-container">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={14}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                  options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: true,
                  }}
                >
                  <Marker position={center} />
                </GoogleMap>
              ) : (
                <div className="map-loading">Loading map...</div>
              )}
            </div>

            <div className="directions-info">
              <div className="info-card">
                <div className="info-icon">
                  <FiMapPin size={24} />
                </div>
                <div className="info-content">
                  <h4>Address</h4>
                  <p>{propertyLocation}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiClock size={24} />
                </div>
                <div className="info-content">
                  <h4>Check-in Hours</h4>
                  <p>3:00 PM - 10:00 PM</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiPhone size={24} />
                </div>
                <div className="info-content">
                  <h4>Contact</h4>
                  <p>+44 7466 242549</p>
                </div>
              </div>

              <button className="directions-btn" onClick={handleGetDirections}>
                <FiNavigation size={20} />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;