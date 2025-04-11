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
            <img src="/assets/servicepagefourth1.png" alt="Cloud Overview" />
          </div>
          <div className="cdt-text">
            <h2>Overview</h2>
            <p>
              The transition to cloud computing is no longer an option but a necessity for businesses that aim to stay ahead of the curve. At Lexicon Computers, we help companies adopt, integrate, and optimize cloud solutions for improved scalability, collaboration, and security.
            </p>
            <p>
              Whether you're migrating from traditional servers, implementing a hybrid cloud strategy, or enhancing existing cloud infrastructure, our cloud experts provide:
            </p>
            <ul>
              <li> Seamless cloud migration</li>
              <li> Scalable storage solutions</li>
              <li> Disaster recovery planning</li>
              <li> Advanced cloud security enhancements</li>
            </ul>
            <p>
              Our digital transformation services go beyond migration—we focus on automating business processes, leveraging AI-powered analytics, and integrating next-gen technologies to enhance operational efficiency and decision-making.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="cdt-section reverse" ref={addToRefs}>
        <div className="cdt-image">
            <img src="/assets/servicepagefourth2.png" alt="Cloud Features" />
          </div>
          <div className="cdt-text">
            <h2>Key Features & Benefits</h2>
            <ul>
              <li> Cloud Migration & Integration – Secure, smooth, and efficient transition to the cloud.</li>
              <li> Hybrid & Multi-Cloud Solutions – Flexible on-premises and cloud deployment strategies.</li>
              <li> Enhanced Collaboration Tools – Cloud-based applications for seamless teamwork and remote access.</li>
              <li> Serverless Computing & DevOps Support – Faster application development and deployment.</li>
              <li> Cloud Performance Monitoring & Optimization – Ensure maximum uptime and efficiency.</li>
              <li> SaaS, PaaS & IaaS Solutions – Leverage the right cloud model for your business needs.</li>
            </ul>
          </div>
         
        </section>

        {/* Why Choose Us Section */}
        <section className="cdt-section" ref={addToRefs}>
          <div className="cdt-image">
            <img src="/assets/servicepagefourth3.png" alt="Why Choose Lexicon" />
          </div>
          <div className="cdt-text">
            <h2>Why Choose Us?</h2>
            <ul>
              <li> Expertise in Leading Cloud Platforms (AWS, Azure, Google Cloud)</li>
              <li> Global-Scale Cloud Deployments with Tailored Solutions</li>
              <li> Secure & Compliant Cloud Solutions to Meet Industry Standards</li>
            </ul>
            <Link to="/contact#form" className="cdt-cta"> Take Your Business to the Cloud – Contact Us Now!</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudDigitalTransformation;
