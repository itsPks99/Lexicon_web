import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./Cloud&DigitalTransformationBanner.css";

gsap.registerPlugin(ScrollTrigger);

const CloudDigitalTransformationBanner = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const animateByWord = (elementRef) => {
      const text = elementRef.current.textContent.trim();
      const words = text.split(" ");
      elementRef.current.innerHTML = "";
  
      words.forEach((word, index) => {
        const wordWrapper = document.createElement("span");
        wordWrapper.className = "animated-word";
        wordWrapper.textContent = word;
  
        elementRef.current.appendChild(wordWrapper);
        if (index < words.length - 1) {
          elementRef.current.appendChild(document.createTextNode(" "));
        }
      });
  
      return elementRef.current.querySelectorAll(".animated-word");
    };
  
    if (titleRef.current && subtitleRef.current && buttonRef.current) {
      const titleWords = animateByWord(titleRef);
      const subtitleWords = animateByWord(subtitleRef);
  
      gsap.to(titleWords, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
  
      gsap.to(subtitleWords, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
  
      // 👇 Animate button after text
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  
  return (
    <div className="CloudDigitalTransformationBanner">
  {/* Background Video */}
  <video
    className="CloudDigitalTransformationBanner-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/assets/Service_4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="CloudDigitalTransformationBanner-overlay">
    <div className="CloudDigitalTransformationBanner-content">
      <h1 className="CloudDigitalTransformationBanner-title" ref={titleRef} style={{ color: "white" }}>
       Transform Your Business with Scalable Cloud Solutions
      </h1>
      <h2 className="CloudDigitalTransformationBanner-subtitle" ref={subtitleRef}>
       Leverage the power of the cloud for efficiency, flexibility, and security.
      </h2>
      <Link to="/contact#form" className="CloudDigitalTransformationBanner-cta" ref={buttonRef}>
       Migrate to the Cloud Today
      </Link>
    </div>
  </div>
</div>

  );
};

export default CloudDigitalTransformationBanner;