import React, { useEffect, useRef } from 'react';
import './AudioVisualCollaboration.css';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AudioVisualCollaborationBanner from './AudioVisualCollaborationBanner';

gsap.registerPlugin(ScrollTrigger);

const AudioVisualCollaboration = () => {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      const content = section.querySelector('.av-content');
      const image = section.querySelector('.av-image');

      gsap.fromTo(content, { x: -50, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: content,
          start: 'top 80%',
        },
      });

      gsap.fromTo(image, { x: 50, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <>
      <AudioVisualCollaborationBanner />
      <div className="av-page">
        {/* Overview */}
        <section className="av-section" ref={addToRefs}>
          <div className="av-image">
            <img src="/assets/av_overview.png" alt="AV Overview" />
          </div>
          <div className="av-content">
            <h2>Overview</h2>
            <p>
              <strong>Effective communication</strong> is the backbone of any modern business. Our <strong>cutting-edge audio-visual (AV) and collaboration solutions</strong> enable seamless interactions in <strong>corporate environments, conference rooms, training centers,</strong> and <strong>content creation spaces</strong>.
            </p>
            <p>
              We specialize in designing and implementing <strong>high-quality AV systems</strong> that enhance business presentations, <strong>remote collaboration tools</strong> that ensure smooth virtual meetings, and <strong>interactive digital experiences</strong> that drive engagement.
              Whether you need <strong>customized AV installations</strong>, <strong>professional podcasting setups</strong>, or <strong>immersive AI-driven virtual experience centers</strong>, we offer tailored solutions to meet your unique business needs.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="av-section alt" ref={addToRefs}>
          <div className="av-image">
            <img src="/assets/av_features.png" alt="Key Features & Benefits" />
          </div>
          <div className="av-content">
            <h2>Key Features & Benefits</h2>
            <ul>
              <li>✅ <strong>Professional AV Installations</strong> – High-quality audio and video systems for boardrooms, auditoriums, and event spaces.</li>
              <li>✅ <strong>Seamless Video Conferencing</strong> – Advanced video and audio integration for crystal-clear communication.</li>
              <li>✅ <strong>Podcasting & Content Creation Solutions</strong> – Industry-leading tools for producing engaging digital content.</li>
              <li>✅ <strong>Virtual/AI Experience Center</strong> – Immersive AI-driven environments for training, presentations, and customer engagement.</li>
              <li>✅ <strong>Customizable AV Systems</strong> – Tailored solutions to fit diverse business needs and spatial requirements.</li>
              <li>✅ <strong>Integrated Collaboration Platforms</strong> – Smart meeting room solutions, interactive displays, and unified communication tools.</li>
            </ul>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="av-section" ref={addToRefs}>
          <div className="av-image">
            <img src="/assets/av_whyus.png" alt="Why Choose Us?" />
          </div>
          <div className="av-content">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>🎤 <strong>Industry-Leading AV Solutions</strong></li>
              <li>🌐 <strong>Scalable for Businesses of All Sizes</strong></li>
              <li>🎬 <strong>Expert AV Consulting & Installation</strong></li>
            </ul>
            <Link  to="/contact#form" className="cta-button">🚀 Enhance Your Business Communication – Get a Quote Now!</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AudioVisualCollaboration;
