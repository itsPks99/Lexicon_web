import React, { useState, useEffect, useRef } from 'react';
import './footer.css';
import { Phone, Mail, MapPin, X } from 'lucide-react';
import { gsap } from 'gsap';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / scrollTotal) * 100;

      setScrollProgress(progress);

      if (scrollPosition > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showPopup) {
      gsap.fromTo(
        popupRef.current,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [showPopup]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-item">
            <Phone color="#4d70b5" size={30} />
            <a href="tel:+919769878878">+91-22-49700111</a>
          </div>

          <div className="footer-item">
            <Mail color="#4d70b5" size={30} />
            <div>
              {/* <p>www.lexiconindia.com</p> */}
              <a href="mailto:info@lexiconindia.com">info@lexiconindia.com</a>
            </div>
          </div>

          <div className="footer-item">
            <MapPin color="#4d70b5" size={30} />
            <div>
              <p>Lexicon Computers Pvt. Ltd.</p>
              <p> 24, Papa Industrial Estate,</p>
              <p> 3rd Floor,40, Suren Road,</p>
              <p> Off Andheri-Kurla Road,</p>
              <p> Andheri (East), Mumbai-400093.</p>
            </div>
          </div>
        </div>

        <div className="footer-menu">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          {/* <a href="#">Services</a> */}
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>
            For Corporate Enquiries Call:
            <a href="tel:+919769878878">+91-22-49700111</a> |
            <span className="request-demo" onClick={() => setShowPopup(true)}> Request A Demo</span>
            <br />©2025 Lexicon Computers Pvt. Ltd. All Rights Reserved.
          </p>
        </div>

        {showScrollTop && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <div className="progress-circle" style={{ background: `conic-gradient(white ${scrollProgress}%, transparent 0)` }}>
              <span className="arrow">⬆️</span>
            </div>
          </div>
        )}

        {showPopup && (
          <div className="popup-content" ref={popupRef}>
            <button className="close-button" onClick={() => setShowPopup(false)}>
              <X size={20} />
            </button>
            <h3>Request A Demo</h3>
            <form
              action="https://usebasin.com/f/18f32ef0ba2c"
              method="POST"
              encType="multipart/form-data"
            >
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone" required />
              <textarea name="message" placeholder="Message" required></textarea>


              <input type="hidden" name="_redirect" value="https://lexicon-web.vercel.app" />
              <input type="hidden" name="_error" value="https://lexicon-web.vercel.app" />

              <button type="submit">Submit</button>
            </form>

          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
