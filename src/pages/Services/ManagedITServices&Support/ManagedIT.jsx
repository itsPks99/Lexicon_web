import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ManagedIT.css";
import ManagedItBanner from "./ManagedITBanner";

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
              A <strong>well-managed IT environment</strong> is essential for ensuring operational
              efficiency, minimizing downtime, and enhancing security. <strong>Lexicon
              Computers</strong> offers <strong>comprehensive managed IT services</strong>, providing
              businesses with proactive maintenance, real-time monitoring, and
              expert technical support.
            </p>
            <p>
              Our services include <strong>IT infrastructure optimization</strong>, <strong>cybersecurity
              management</strong>, <strong>cloud operations</strong>, and <strong>compliance assurance</strong> to help
              businesses stay competitive and secure in a rapidly evolving digital
              landscape. Whether you need <strong>remote IT support</strong>, <strong>on-site assistance</strong>,
              or a <strong>fully managed IT framework</strong>, we deliver <strong>cost-effective and
              scalable solutions</strong> that align with your business objectives.
            </p>
          </div>
          <div className="managedit-image">
            <img src="/assets/managedit_overview.png" alt="Managed IT Overview" />
          </div>
        </section>

        {/* Section 2 - Features */}
        <section className="managedit-section alt" ref={addToRefs}>
          <div className="managedit-content">
            <h2>Key Features & Benefits</h2>
            <ul>
              <li>
                ✅ <strong>Proactive IT Monitoring & Incident Management</strong> – Continuous
                monitoring to detect and resolve issues before they impact operations.
              </li>
              <li>
                ✅ <strong>Scalable IT Solutions</strong> – Customizable service plans to meet business
                growth and technology advancements.
              </li>
              <li>
                ✅ <strong>Cloud & Infrastructure Support</strong> – Efficient management of cloud
                environments, servers, and enterprise applications.
              </li>
              <li>
                ✅ <strong>IT Asset & Lifecycle Management</strong> – Streamlined procurement,
                deployment, and maintenance of IT assets.
              </li>
              <li>
                ✅ <strong>Remote & On-Site Assistance</strong> – Flexible support models to address IT
                issues anytime, anywhere.
              </li>
            </ul>
          </div>
          <div className="managedit-image">
            <img src="/assets/managedit_features.png" alt="IT Features" />
          </div>
        </section>

        {/* Section 3 - Why Choose Us */}
        <section className="managedit-section" ref={addToRefs}>
          <div className="managedit-content">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>🎯 <strong>99.9% Uptime Guarantee</strong></li>
              <li>🤝 <strong>Dedicated IT Support Tailored to Your Business</strong></li>
              <li>🔄 <strong>Scalable IT Solutions for Growing Companies</strong></li>
            </ul>
            <button className="managedit-cta">
              🚀 Let’s Manage Your IT, So You Can Focus on Growth!
            </button>
          </div>
          <div className="managedit-image">
            <img src="/assets/managedit_whyus.png" alt="Why Choose Us" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ManagedIT;
