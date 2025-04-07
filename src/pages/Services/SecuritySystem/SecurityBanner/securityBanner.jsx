import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./securityBanner.css";

gsap.registerPlugin(ScrollTrigger);

const securityBanner = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Typing Animation for Title
    const animateText = (elementRef) => {
      const textContent = elementRef.current.textContent;
      elementRef.current.innerHTML = '';

      textContent.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.whiteSpace = char === ' ' ? 'pre' : 'normal';
        elementRef.current.appendChild(span);
      });

      gsap.fromTo(
        elementRef.current.children,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.02,
          stagger: 0.05,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 70%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    };

    if (titleRef.current && subtitleRef.current) {
      animateText(titleRef);
      animateText(subtitleRef);
    }
  }, []);

  return (
    <div className="securityBanner">
    {/* Background Video */}
    <video
      className="securityBanner-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/assets/Service_3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className="securityBanner-overlay">
        <div className="securityBanner-content">
          <h1 className="securityBanner-title" ref={titleRef}>ROBUST SECURITY SYSTEM</h1>
          <h2 className="securityBanner-subtitle" ref={subtitleRef}>Protecting Your Digital & Physical Spaces with Intelligence and Precision</h2>
        </div>
      </div>
    </div>
  );
};

export default securityBanner;
