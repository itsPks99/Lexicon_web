import React from 'react';
import './contact.css';
import ConnectWithUs from "../Home/ConnectWithUs/connectwithUs.jsx";
import ContactBanner from './ContactBanner/contactBanner.jsx';



const ContactPage = () => {
    return (
        <>
            <ContactBanner />
            <div className="contactPage__container">
                <h1 className="contactPage__heading">Find Your Way To Our Doorstep</h1>

                <div className="contactPage__content">

                    <div className="contactPage__info">
                        <h2 style={{textAlign:"center"}}>Contact</h2>
                        <div className="contactPage__details">

                            {/* Phone Number */}
                            <div className="contactPage__row">
                                <span className="contactPage__icon">📞</span>
                                <a href="tel:02249700111" className="contactPage__link">022 49700111</a>
                            </div>

                            {/* Website */}
                            <div className="contactPage__row">
                                <span className="contactPage__icon">🌐</span>
                                <a
                                    href="https://www.lexiconindia.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contactPage__link"
                                >
                                    www.lexiconindia.com
                                </a>
                            </div>

                            {/* Email */}
                            <div className="contactPage__row">
                                <span className="contactPage__icon">✉️</span>
                                <a
                                    href="mailto:info@lexiconindia.com"
                                    className="contactPage__link"
                                >
                                    info@lexiconindia.com
                                </a>
                            </div>

                            {/* Address */}
                            <div className="contactPage__row">
                                <span className="contactPage__icon">📍</span>
                                <p className="contactPage__text">
                                    24, Papa Industrial Estate, 3rd Floor,<br />
                                    40, Suren Road, Off Andheri-Kurla Road,<br />
                                    Andheri (East), Mumbai – 400093.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="contactPage__map">
                        <a
                            href="https://www.google.com/maps/place/Papa+Industrial+Estate,+Suren+Rd,+Andheri+East,+Mumbai,+Maharashtra+400093/@19.1115446,72.8597989,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c8107eb2f19d:0x2a648c7b79814de2!8m2!3d19.1115446!4d72.8597989!16s%2Fg%2F11b7h_zx7x"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.599768334032!2d72.85979897497617!3d19.11154458209816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8107eb2f19d%3A0x2a648c7b79814de2!2sPapa%20Industrial%20Estate%2C%20Suren%20Rd%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400093!5e0!3m2!1sen!2sin!4v1683548323354!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Our Location"
                            ></iframe>
                        </a>
                    </div>
                </div>
            </div>

            <section className="panIndia__section">
                <div className="panIndia__wrapper">
                   

                    {/* Right Side - Description */}
                    <div className="panIndia__content">
                        <h2 className="panIndia__title">Our Pan India Presence</h2>
                        {/* <hr className="panIndia__line" /> */}
                        <p className="panIndia__text">
                            With offices at strategic locations, we are equipped to assist clients on time, every time!
                            Our widespread network enables us to provide personalized support, ensuring we are always within reach.
                            No matter where our clients are located, we are committed to delivering timely solutions with unmatched efficiency.
                        </p>
                    </div>

                     {/* Left Side - Map Image */}
                     <div className="panIndia__map">
                        <img src="/assets/indianMap.jpg" alt="Lexicon Offices Across India" />
                    </div>
                </div>
            </section>

          <div id='form'>
          <ConnectWithUs />
          </div>
        </>
    );
};

export default ContactPage;
