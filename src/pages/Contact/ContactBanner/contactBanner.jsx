import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./contactBanner.css";

gsap.registerPlugin(ScrollTrigger);

const ContactBanner = () => {
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
    <div className="contactBanner">
  {/* Background Video */}
  <video
    className="contactBanner-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/assets/ContactBannerVideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="contactBanner-overlay">
    <div className="contactBanner-content">
      <h1 className="contactBanner-title" ref={titleRef}>
        Connect With Us – Your IT Solutions Partner
      </h1>
      <h2 className="contactBanner-subtitle" ref={subtitleRef}>
        Have a question or need IT support? Our team is here to help. Let's work together to build reliable and scalable technology solutions for your business.
      </h2>
      <Link to="/contact#form" className="contactBanner-cta" ref={buttonRef}>
        Get in Touch
      </Link>
    </div>
  </div>
</div>

  );
};

export default ContactBanner;