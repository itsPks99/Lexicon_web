import React from 'react';
import './ServicesSectionWithIcons.css';

const services = [
  { name: "Cyber Security", icon: "/assets/big-data.png", link: "/services/cyber-security" },
  { name: "Cloud Solutions", icon: "/assets/big-data.png", link: "/services/cloud-solutions" },
  { name: "Open Source Technologies", icon: "/assets/big-data.png", link: "/services/open-source" },
  { name: "Modern Data Centre Solutions", icon: "/assets/big-data.png", link: "/services/data-centre" },
  { name: "Cyber Defence Centre", icon: "/assets/big-data.png", link: "/services/cyber-defence" },
  { name: "Cyber Defence Centre", icon: "/assets/big-data.png", link: "/services/cyber-defence" },
];

const ServicesSectionWithIcons = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <a href={service.link} key={index} className="service-card">
            <div className="icon-circle">
              <img src={service.icon} alt={service.name} />
            </div>
            <h3>{service.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSectionWithIcons;
