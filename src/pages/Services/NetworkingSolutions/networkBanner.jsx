import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./networkBanner.css";

gsap.registerPlugin(ScrollTrigger);

const NetworkBanner = () => {
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
    <div className="networkBanner">
      <div className="networkBanner-overlay">
        <div className="networkBanner-content">
          <h1 className="networkBanner-title" ref={titleRef}>Reliable Networking Solutions for Modern Businesses</h1>
          <h2 className="networkBanner-subtitle" ref={subtitleRef}>Seamlessly connect, communicate, and grow with infrastructure built for the future.</h2>
        </div>
      </div>
    </div>
  );
};

export default NetworkBanner;
