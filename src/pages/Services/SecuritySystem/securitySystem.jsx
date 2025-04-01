import React, { useEffect, useRef } from "react";
import "./securitySystem.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConnectWithUs from "../../../pages/Home/ConnectWithUs/connectwithUs";
import SecurityBanner from './SecurityBanner/securityBanner'

gsap.registerPlugin(ScrollTrigger);

const SecuritySystem = () => {
  const sections = useRef([]);

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

  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  return (
   <>
   <SecurityBanner/>
    <div className="securitySystem">
      {/* Section 1: Introduction */}
      <section className="ss-section" ref={addToRefs}>
        <div className="ss-text">
          <h2>Securing Your World with Smart Technology</h2>
          <p>
            We offer advanced security systems tailored for businesses and
            institutions, including high-definition CCTV surveillance, smart
            access control, and alarm systems – all designed to protect your
            people, assets, and data.
          </p>
        </div>
        <div className="ss-image">
          <img src="/assets/security3.png" alt="Security Overview" />
        </div>
      </section>

      {/* Section 2: Offerings */}
      <section className="ss-section reverse" ref={addToRefs}>
       
        <div className="ss-text">
          <h2>Our Security Offerings</h2>
          <ul>
            <li>High-resolution CCTV Surveillance</li>
            <li>Biometric & RFID Access Control</li>
            <li>24/7 Alarm Monitoring Systems</li>
            <li>Video Analytics Integration</li>
            <li>Intercom & Visitor Management</li>
          </ul>
        </div>
        <div className="ss-image">
          <img src="/assets/security1.png" alt="Our Offerings" />
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="ss-section" ref={addToRefs}>
        <div className="ss-text">
          <h2>Why Choose Lexicon for Security?</h2>
          <p>
            With over 20 years of experience in tech infrastructure, Lexicon
            provides not just installation but ongoing support, training, and
            updates to ensure your premises remain secure and up to date.
          </p>
        </div>
        <div className="ss-image">
          <img src="/assets/security2.png" alt="Why Choose Us" />
        </div>
      </section>

      {/* Section 4: Implementation Process */}
      <section className="ss-section reverse" ref={addToRefs}>
       
        <div className="ss-text">
          <h2>Our Implementation Process</h2>
          <ol>
            <li>On-site Assessment</li>
            <li>Customized System Design</li>
            <li>Professional Installation</li>
            <li>Training & Handover</li>
            <li>Post-installation Support</li>
          </ol>
        </div>
        <div className="ss-image">
          <img src="/assets/security1.png" alt="Implementation Process" />
        </div>
      </section>

      {/* Section 5: Connect */}
      <ConnectWithUs />
    </div>
   </>
  );
};

export default SecuritySystem;
