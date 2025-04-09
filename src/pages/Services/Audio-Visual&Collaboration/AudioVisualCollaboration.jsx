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
              Effective communication is the backbone of any modern business. Our cutting-edge audio-visual (AV) and collaboration solutions enable seamless interactions in corporate environments, conference rooms, training centers, and content creation spaces.
            </p>
            <p>
              We specialize in designing and implementing high-quality AV systems that enhance business presentations, remote collaboration tools that ensure smooth virtual meetings, and interactive digital experiences that drive engagement.
              Whether you need customized AV installations, professional podcasting setups, or immersive AI-driven virtual experience centers, we offer tailored solutions to meet your unique business needs.
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
              <li> Professional AV Installations – High-quality audio and video systems for boardrooms, auditoriums, and event spaces.</li>
              <li> Seamless Video Conferencing – Advanced video and audio integration for crystal-clear communication.</li>
              <li> Podcasting & Content Creation Solutions – Industry-leading tools for producing engaging digital content.</li>
              <li> Virtual/AI Experience Center – Immersive AI-driven environments for training, presentations, and customer engagement.</li>
              <li> Customizable AV Systems – Tailored solutions to fit diverse business needs and spatial requirements.</li>
              <li> Integrated Collaboration Platforms – Smart meeting room solutions, interactive displays, and unified communication tools.</li>
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
              <li> Industry-Leading AV Solutions</li>
              <li> Scalable for Businesses of All Sizes</li>
              <li> Expert AV Consulting & Installation</li>
            </ul>
            <Link  to="/contact#form" className="cta-button"> Enhance Your Business Communication – Get a Quote Now!</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AudioVisualCollaboration;
