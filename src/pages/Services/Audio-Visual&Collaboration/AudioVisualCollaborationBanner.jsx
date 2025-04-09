import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./AudioVisualCollaborationBanner.css";

gsap.registerPlugin(ScrollTrigger);

const AudioVisualCollaborationBanner = () => {
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
    <div className="AudioVisualCollaborationBanner">
  {/* Background Video */}
  <video
    className="AudioVisualCollaborationBanner-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/assets/Service_5.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* <div className="AudioVisualCollaborationBanner-overlay">
    <div className="AudioVisualCollaborationBanner-content">
      <h1 className="AudioVisualCollaborationBanner-title" ref={titleRef} style={{ color: "white" }}>
        Enhancing Communication with Premium AV & Collaboration Tools
      </h1>
      <h2 className="AudioVisualCollaborationBanner-subtitle" ref={subtitleRef}>
      Seamless AV solutions for conferences, meetings, and content creation.
      </h2>
      <Link to="/contact#form" className="AudioVisualCollaborationBanner-cta" ref={buttonRef}>
      Upgrade Your AV Experience
      </Link>
    </div>
  </div> */}
</div>

  );
};

export default AudioVisualCollaborationBanner;