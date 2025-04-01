import React, { useEffect, useRef } from "react";
import "./networkingSolutions.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NetworkBanner from "./networkBanner";
import ConnectWithUs from "../../../pages/Home/ConnectWithUs/connectwithUs";
gsap.registerPlugin(ScrollTrigger);

const NetworkingSolutions = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <>
    <NetworkBanner/>
    <section className="networking-page">
      <div className="networking-container">
        <div className="networking-text">
          <h1 ref={titleRef}>Robust Networking Solutions</h1>
          <p ref={descRef}>
            Our expert team delivers top-tier networking infrastructure tailored
            to your business needs. From LAN/WAN design to secure VPN setups,
            we ensure high-speed connectivity, minimal downtime, and maximum
            security.
          </p>
        </div>
        <div className="networking-image" ref={imageRef}>
          <img src="/assets/networkBanner.png" alt="Networking Illustration" />
        </div>
      </div>
    </section>
    <ConnectWithUs/>
    </>
  );
};

export default NetworkingSolutions;
