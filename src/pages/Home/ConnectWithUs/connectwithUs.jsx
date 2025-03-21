import React, { useEffect, useRef } from 'react';
import './connectWithUs.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ConnectWithUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    // Split the text and preserve spaces
    const title = document.querySelector('.connect-title');
    const letters = title.textContent.split("").map(char => {
      if (char === " ") return `<span class='letter'>&nbsp;</span>`; // Preserve spaces
      return `<span class='letter'>${char}</span>`;
    });

    title.innerHTML = letters.join("");

    // Animate letters individually
    gsap.fromTo(
      '.letter',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Animate the rest of the content
    gsap.fromTo(
      '.connect-description, .connect-form',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="connect-section" ref={sectionRef}>
      <div className="connect-container">
        <h2 className="connect-title">Connect With Us</h2>
        <p className="connect-description">GET IN TOUCH</p>
        <form className="connect-form">
          <div className="form-row">
            <input type="text" placeholder="Name" className="connect-input" />
            <input type="email" placeholder="Email" className="connect-input" />
            <input type="tel" placeholder="Phone" className="connect-input" />
          </div>
          <textarea placeholder="Message" className="connect-textarea"></textarea>
          <button type="submit" className="connect-button">SEND</button>
        </form>
      </div>
    </section>
  );
};

export default ConnectWithUs;
