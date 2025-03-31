import React from 'react';
import './ServicesSectionWithIcons.css';
import { Network, Server, Shield, Cog, PenTool, Speaker } from 'lucide-react';

const services = [
  { name: "Networking Solutions", icon: <Network size={40} color="white" />, link: "/services/networking" },
  { name: "IT Infrastructure Services", icon: <Server size={40} color="white" />, link: "/services/infrastructure" },
  { name: "Security System Services", icon: <Shield size={40} color="white" />, link: "/services/security" },
  { name: "IT Integrate Solution", icon: <Cog size={40} color="white" />, link: "/services/integration" },
  { name: "AMC & Facility Management", icon: <PenTool size={40} color="white" />, link: "/services/amc" },
  { name: "Audio and Video Solution", icon: <Speaker size={40} color="white" />, link: "/services/av" }
];

const ServicesSectionWithIcons = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <a href={service.link} key={index} className="service-card">
            <div className="icon-circle">
              {service.icon} {/* Render the icon directly here */}
            </div>
            <h3>{service.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSectionWithIcons;
