import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Lock, Globe, Phone } from "lucide-react";
import './AdvancedSecurity&DataSolutions.css';
import AdvancedSecurityDataSolutionsBanner from "./AdvancedSecurityDataSolutionsBanner/AdvancedSecurityDataSolutionsBanner";

gsap.registerPlugin(ScrollTrigger);

const AdvancedSecurityDataSolutions = () => {
  const sections = useRef([]);
  sections.current = [];

  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  useEffect(() => {
    sections.current.forEach((section) => {
      const text = section.querySelector(".asd-text");
      const image = section.querySelector(".asd-image");

      gsap.fromTo(
        text,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        image,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <AdvancedSecurityDataSolutionsBanner />
      <div className="asd-wrapper">
        {/* Overview */}
        <section className="asd-section" ref={addToRefs}>
          <div className="asd-image">
            <img src="/assets/security-overview.png" alt="Security Overview" />
          </div>
          <div className="asd-text">
            <h2>Overview</h2>
            <p>
              With increasing <strong>cybersecurity threats</strong>, businesses are more vulnerable than ever to data breaches,
              ransomware attacks, and unauthorized access. Our <strong>advanced security and data protection solutions</strong> ensure that your
              critical business information remains secure through a combination of <strong>cutting-edge firewall protection, encryption,
              real-time threat detection,</strong> and <strong>data backup solutions.</strong>
            </p>
            <p>
              We provide <strong>customized security strategies</strong> tailored to your business needs, ensuring <strong>compliance with industry
              regulations</strong> while mitigating potential risks. Whether you're looking to secure your <strong>cloud environment,
              on-premises network,</strong> or <strong>hybrid IT setup</strong>, we deliver <strong>end-to-end security solutions</strong> to safeguard
              your digital assets.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="asd-section reverse" ref={addToRefs}>
          <div className="asd-text">
            <h2>Key Features & Benefits</h2>
            <ul>
              <li><CheckCircle2 className="asd-icon" /> <strong>Data Encryption & Secure Storage</strong> – Protects sensitive business and customer information.</li>
              <li><CheckCircle2 className="asd-icon" /> <strong>Advanced Threat Detection & Response</strong> – AI-powered security monitoring for real-time risk mitigation.</li>
              <li><CheckCircle2 className="asd-icon" /> <strong>Disaster Recovery & Backup Solutions</strong> – Ensures business continuity with fast data restoration.</li>
              <li><CheckCircle2 className="asd-icon" /> <strong>Compliance & Risk Management</strong> – Helps meet GDPR, ISO 27001, and other security standards.</li>
              <li><CheckCircle2 className="asd-icon" /> <strong>Next-Gen Firewall & Endpoint Security</strong> – Multi-layered defense against cyber threats and malware.</li>
              <li><CheckCircle2 className="asd-icon" /> <strong>Secure Cloud & Hybrid Infrastructure Protection</strong> – Safeguards cloud applications and data centers.</li>
              <li><CheckCircle2 className="asd-icon" /> <strong>Email & Phishing Protection</strong> – AI-powered email filtering to prevent fraud and data breaches.</li>
            </ul>
          </div>
          <div className="asd-image">
            <img src="/assets/security-features.png" alt="Security Features" />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="asd-section" ref={addToRefs}>
          <div className="asd-image">
            <img src="/assets/security-whychoose.png" alt="Why Choose Us" />
          </div>
          <div className="asd-text">
            <h2>Why Choose Us?</h2>
            <ul>
              <li><Lock className="asd-icon" /> <strong>Cutting-edge security solutions</strong> tailored for businesses.</li>
              <li><Globe className="asd-icon" /> <strong>Trusted by top enterprises</strong> for data protection.</li>
              <li><Phone className="asd-icon" /> <strong>24/7 Security Support & Monitoring</strong></li>
            </ul>
            <Link to="/contact#form" className="asd-button">🚀 Protect Your Data & Business – Contact Us Today!</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdvancedSecurityDataSolutions;
