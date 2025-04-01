import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./itIntegrateSolution.css";
import ConnectWithUs from "../../../pages/Home/ConnectWithUs/connectwithUs";

gsap.registerPlugin(ScrollTrigger);

const ITIntegrateSolution = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
        },
      }
    );

    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="itIntegrateSolution">
      <section className="itIntegrateSolution__intro">
        <h1 ref={titleRef}>Seamless IT Integration for Smarter Workflows</h1>
        <p ref={descRef}>
          We help businesses unify their technology ecosystems, enabling
          systems to communicate effortlessly—resulting in better efficiency,
          scalability, and security.
        </p>
      </section>

      {/* Section 1 - System Integration */}
      <section className="itIntegrateSolution__section" ref={addToRefs}>
        <div className="content">
          <h2>Enterprise System Integration</h2>
          <p>
            We connect applications, services, and data across platforms to
            enable seamless information flow and process automation.
          </p>
        </div>
        <div className="image">
          <img src="/assets/security1.png" alt="System Integration" />
        </div>
      </section>

      {/* Section 2 - Cloud & On-Premise Synergy */}
      <section className="itIntegrateSolution__section reverse" ref={addToRefs}>
        <div className="content">
          <h2>Cloud & On-Premise Synergy</h2>
          <p>
            Our hybrid solutions ensure that your on-site infrastructure and
            cloud platforms work together without friction.
          </p>
        </div>
        <div className="image">
          <img src="/assets/cloud-integration.jpg" alt="Cloud Integration" />
        </div>
      </section>

      {/* Section 3 - API & Data Integration */}
      <section className="itIntegrateSolution__section" ref={addToRefs}>
        <div className="content">
          <h2>API & Data Integration</h2>
          <p>
            We build and manage APIs that make data transfer secure and real-time across applications, improving decision-making and efficiency.
          </p>
        </div>
        <div className="image">
          <img src="/assets/api-data.jpg" alt="API Integration" />
        </div>
      </section>

      {/* Connect Section */}
      <ConnectWithUs />
    </div>
  );
};

export default ITIntegrateSolution;
