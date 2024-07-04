import React from 'react';
import '../../css/Services.css';

const services = [
  {
    icon: '🚚',
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
  },
  {
    icon: '🎧',
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
  },
  {
    icon: '💰',
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
  },
];

const Services = () => {
  return (
    <section className="services">
      {services.map((service, index) => (
        <div key={index} className="service">
          <div className="icon">{service.icon}</div>
          <div className="service-info">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;