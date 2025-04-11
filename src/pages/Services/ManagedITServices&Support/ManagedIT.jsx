import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ManagedIT.css";
import { Link } from "react-router-dom";
import ManagedItBanner from "../ManagedITServices&Support/ManageditBanner.jsx";

gsap.registerPlugin(ScrollTrigger);

const ManagedIT = () => {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      const content = el.querySelector(".managedit-content");
      const image = el.querySelector(".managedit-image");

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
      <ManagedItBanner />
      <div className="managedit-wrapper">
        {/* Section 1 - Overview */}
        <section className="managedit-section" ref={addToRefs}>
          <div className="managedit-content">
            <h2>Overview</h2>
            <p>
              A well-managed IT environment is essential for ensuring operational
              efficiency, minimizing downtime, and enhancing security. Lexicon
              Computers offers comprehensive managed IT services, providing
              businesses with proactive maintenance, real-time monitoring, and
              expert technical support.
            </p>
            <p>
              Our services include IT infrastructure optimization, cybersecurity
              management, cloud operations, and compliance assurance to help
              businesses stay competitive and secure in a rapidly evolving digital
              landscape. Whether you need remote IT support, on-site assistance,
              or a fully managed IT framework, we deliver cost-effective and
              scalable solutions that align with your business objectives.
            </p>
          </div>
          <div className="managedit-image">
            <img src="/assets/servicepagethird1.png" alt="Managed IT Overview" />
          </div>
        </section>

        {/* Section 2 - Features */}
        <section className="managedit-section alt" ref={addToRefs}>
        <div className="managedit-image">
            <img src="/assets/servicepagethird2.png" alt="IT Features" />
          </div>
          <div className="managedit-content">
            <h2>Key Features & Benefits</h2>
            <ul>
              <li>
                Proactive IT Monitoring & Incident Management – Continuous monitoring to detect and resolve issues before they impact operations.
              </li>
              <li>
                Scalable IT Solutions – Customizable service plans to meet business
                 growth and technology advancements.
              </li>
              <li>
                Cloud & Infrastructure Support – Efficient management of cloud
                environments, servers, and enterprise applications.
              </li>
              <li>
                IT Asset & Lifecycle Management – Streamlined procurement,
                 deployment, and maintenance of IT assets.
              </li>
              <li>
                Remote & On-Site Assistance – Flexible support models to address IT
                 issues anytime, anywhere.
              </li>
            </ul>
          </div>
          
        </section>

        {/* Section 3 - Why Choose Us */}
        <section className="managedit-section" ref={addToRefs}>
          <div className="managedit-content">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>99.9% Uptime Guarantee</li>
              <li>Dedicated IT Support Tailored to Your Business</li>
              <li>Scalable IT Solutions for Growing Companies</li>
            </ul>
            <Link className="managedit-cta" to="/contact#form">
              Let’s Manage Your IT, So You Can Focus on Growth!
            </Link>
          </div>
          <div className="managedit-image">
            <img src="/assets/servicepagethird3.png" alt="Why Choose Us" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ManagedIT;
