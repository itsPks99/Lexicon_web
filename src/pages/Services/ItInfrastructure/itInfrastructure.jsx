import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./itinfrastructure.css";

gsap.registerPlugin(ScrollTrigger);

const ITInfrastructure = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="itinfrastructure-section" ref={sectionRef}>
      <div className="itinfrastructure-overlay">
        <div className="itinfrastructure-content">
          <h1 ref={headingRef}>Robust IT Infrastructure Services</h1>
          <p ref={paraRef}>
            Empower your business with our scalable and secure IT infrastructure solutions. From structured cabling to data center setup and cloud integration, we ensure seamless connectivity and optimized performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ITInfrastructure;
