import React, { useEffect, useRef } from "react";
import "./Cloud&DigitalTransformation.css";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudBanner from "./Cloud&DigitalTransformationBanner/Cloud&DigitalTransformation";

gsap.registerPlugin(ScrollTrigger);

const CloudDigitalTransformation = () => {
  const sections = useRef([]);

  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  useEffect(() => {
    sections.current.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <CloudBanner />
      <div className="cdt-wrapper">
        {/* Overview Section */}
        <section className="cdt-section" ref={addToRefs}>
          <div className="cdt-image">
            <img src="/assets/cloud-overview.png" alt="Cloud Overview" />
          </div>
          <div className="cdt-text">
            <h2>Overview</h2>
            <p>
              The transition to <strong>cloud computing</strong> is no longer an option but a <strong>necessity</strong> for businesses that aim to <strong>stay ahead of the curve</strong>. At <strong>Lexicon Computers</strong>, we help companies <strong>adopt, integrate, and optimize cloud solutions</strong> for improved <strong>scalability, collaboration, and security</strong>.
            </p>
            <p>
              Whether you're <strong>migrating from traditional servers</strong>, implementing a <strong>hybrid cloud strategy</strong>, or enhancing existing <strong>cloud infrastructure</strong>, our cloud experts provide:
            </p>
            <ul>
              <li>✅ <strong>Seamless cloud migration</strong></li>
              <li>✅ <strong>Scalable storage solutions</strong></li>
              <li>✅ <strong>Disaster recovery planning</strong></li>
              <li>✅ <strong>Advanced cloud security enhancements</strong></li>
            </ul>
            <p>
              Our <strong>digital transformation services</strong> go beyond migration—we focus on <strong>automating business processes</strong>, leveraging <strong>AI-powered analytics</strong>, and <strong>integrating next-gen technologies</strong> to enhance <strong>operational efficiency</strong> and <strong>decision-making</strong>.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="cdt-section reverse" ref={addToRefs}>
          <div className="cdt-text">
            <h2>Key Features & Benefits</h2>
            <ul>
              <li>✅ <strong>Cloud Migration & Integration</strong> – Secure, smooth, and efficient transition to the cloud.</li>
              <li>✅ <strong>Hybrid & Multi-Cloud Solutions</strong> – Flexible on-premises and cloud deployment strategies.</li>
              <li>✅ <strong>Enhanced Collaboration Tools</strong> – Cloud-based applications for seamless teamwork and remote access.</li>
              <li>✅ <strong>Serverless Computing & DevOps Support</strong> – Faster application development and deployment.</li>
              <li>✅ <strong>Cloud Performance Monitoring & Optimization</strong> – Ensure maximum uptime and efficiency.</li>
              <li>✅ <strong>SaaS, PaaS & IaaS Solutions</strong> – Leverage the right cloud model for your business needs.</li>
            </ul>
          </div>
          <div className="cdt-image">
            <img src="/assets/cloud-features.png" alt="Cloud Features" />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="cdt-section" ref={addToRefs}>
          <div className="cdt-image">
            <img src="/assets/cloud-whychoose.png" alt="Why Choose Lexicon" />
          </div>
          <div className="cdt-text">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>🚀 <strong>Expertise in Leading Cloud Platforms</strong> (AWS, Azure, Google Cloud)</li>
              <li>🌎 <strong>Global-Scale Cloud Deployments with Tailored Solutions</strong></li>
              <li>💼 <strong>Secure & Compliant Cloud Solutions to Meet Industry Standards</strong></li>
            </ul>
            <Link to="/contact#form" className="cdt-cta">🚀 Take Your Business to the Cloud – Contact Us Now!</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudDigitalTransformation;
