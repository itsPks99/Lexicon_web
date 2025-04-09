import React from 'react';
import './ServicesSectionWithIcons.css';
import { Network, Server, Shield, Cog, PenTool, Speaker } from 'lucide-react';

const services = [
  { name: "Network & IT Infrastructure Solutions", icon: <Network size={40} color="white" />, link: "/services/networking&iTSolution" },
  { name: "Advanced Security & Data Solutions", icon: <Server size={40} color="white" />, link: "/services/advancedSecurity&DataSolution" },
  { name: "Managed IT Services & Support", icon: <Shield size={40} color="white" />, link: "/services/managedIT&support" },
  { name: "Cloud & Digital Transformation", icon: <Cog size={40} color="white" />, link: "/services/cloud&DigitalTransformation" },
  { name: "Audio-Visual & Collaboration Services", icon: <PenTool size={40} color="white" />, link: "/services/audioVisualCollaboration" },
  // { name: "Audio-Visual & Collaboration Services", icon: <Speaker size={40} color="white" />, link: "/services/av" }
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
