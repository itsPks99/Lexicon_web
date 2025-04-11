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
        <form
          action="https://usebasin.com/f/a4d465ca73d4"
          method="POST"
        >
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="connect-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="connect-input"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="connect-input"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="connect-textarea"
            required
          ></textarea>

          {/* Optional: custom redirect after submission */}
          <input type="hidden" name="_redirect" value="https://lexicon-web.vercel.app/contact" />
          <input type="hidden" name="_error" value="http://localhost:5173/error" />

          <button type="submit" className="connect-button">Send</button>
        </form>

      </div>
    </section>
  );
};

export default ConnectWithUs;
