import React from 'react';
import PropertyCard from './PropertyCard';
import { type Property } from './PropertyCard';
import PropertiesData from '../../data/properties.json';
import './Properties.css';

const Properties: React.FC = () => {
  // Sample data - in a real app, this would come from an API
  const properties = PropertiesData as Property[];

  return (
    <section className="properties-section" id="properties">
      <div className="container">
        <h2 className="section-title">Featured Properties</h2>
        <p className="section-subtitle">Discover your perfect stay</p>
        
        <div className="properties-grid">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;