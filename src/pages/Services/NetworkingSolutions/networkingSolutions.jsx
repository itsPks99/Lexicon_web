import React, { useEffect, useRef } from "react";
import "./networkingSolutions.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import NetworkBanner from "./networkBanner";

gsap.registerPlugin(ScrollTrigger);

const NetworkingSolutions = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );

    sectionRefs.current.forEach((section) => {
      const content = section.querySelector(".network-content");
      const image = section.querySelector(".network-image");

      gsap.fromTo(
        content,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            toggleActions: "play none none none",
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
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <NetworkBanner />
      <section className="networking-page">
        <div className="networking-container">
          <div className="networking-text">
            <h1 ref={titleRef}>Overview</h1>
            <p ref={descRef}>
              A strong and <strong>reliable IT infrastructure</strong> is the backbone of any modern business. At <strong>Lexicon Computers</strong>, we provide <strong>tailored networking and IT infrastructure solutions</strong> to ensure <strong>seamless connectivity, high-speed data transfers, and secure communication</strong> across your organization.
            </p>
            <br />
            <br />
            <p ref={descRef}>
              Our <strong>end-to-end IT solutions</strong> go beyond just networking. We offer <strong>comprehensive IT setups</strong>, including <strong>CCTV surveillance systems, WiFi networks, access control systems</strong>, and <strong>structured cabling</strong>. Whether you're <strong>setting up a new IT framework</strong> or <strong>upgrading existing systems</strong>, we ensure that your business <strong>runs on a secure, scalable, and efficient infrastructure</strong> designed to support growth and innovation.
            </p>
          </div>
          <div className="networking-image" ref={imageRef}>
            <img src="/assets/services_1.png" alt="Networking Overview" />
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="network-section" ref={addToRefs}>
        <div className="network-image">
          <img src="/assets/networkKey.png" alt="Key Features" />
        </div>
        <div className="network-content">
          <h2>Key Features & Benefits</h2>
          <ul>
            <li>✅ <strong>High-Speed Network Deployment</strong> – Ensuring reliable, secure, and low-latency connectivity.</li>
            <li>✅ <strong>Custom IT Infrastructure Design</strong> – Tailored solutions for business scalability and performance.</li>
            <li>✅ <strong>Seamless System Integration</strong> – Interoperability with existing and new IT systems.</li>
            <li>✅ <strong>End-to-End IT Solutions</strong> – Including CCTV surveillance, enterprise-grade WiFi, access control, and structured cabling.</li>
            <li>✅ <strong>Redundant & Resilient Network Architecture</strong> – Minimizes downtime and enhances reliability.</li>
            <li>✅ <strong>Future-Ready Infrastructure</strong> – Designed to support AI, IoT, and digital transformation initiatives.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="network-section alt" ref={addToRefs}>
        <div className="network-image">
          <img src="/assets/whychooseUsnetwok.png" alt="Why Choose Us" style={{ height: '350px', width: '100%' }} />
        </div>
        <div className="network-content">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>🏆 <strong>20+ Years of Industry Experience</strong></li>
            <li>🔧 <strong>Comprehensive IT Infrastructure Management</strong></li>
            <li>💡 <strong>Tailored Solutions for Your Business Needs</strong></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="network-section" ref={addToRefs}>
        <div className="network-image">
          <img src="/assets/WhyChoosUs.png" alt="CTA" style={{ height: "400px", width: "100%" }} />
        </div>
        <div className="network-content">
          <h2>Upgrade Your IT Infrastructure Today!</h2>
          <p>Contact Lexicon Computers and take the next step toward modern, secure, and scalable technology.</p>
          <Link to="/contact#form" className="cta-button">Contact Us</Link>
        </div>
      </section>
    </>
  );
};

export default NetworkingSolutions;
