import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OurServices1.css';
import OurClients from '../OurClients/OurClients';

gsap.registerPlugin(ScrollTrigger);

const OurServices2 = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const contentRef = useRef(null);
  
  // Refs for second section
  const title2Ref = useRef(null);
  const desc2Ref = useRef(null);
  const image2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const content2Ref = useRef(null);

  useEffect(() => {
    // First section animation setup
    const line1Text = line1Ref.current.textContent;
    const line2Text = line2Ref.current.textContent;
    
    line1Ref.current.innerHTML = '';
    line2Ref.current.innerHTML = '';
    
    line1Text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      line1Ref.current.appendChild(span);
    });

    line2Text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      line2Ref.current.appendChild(span);
    });

    // Second section animation setup
    const line3Text = line3Ref.current.textContent;
    const line4Text = line4Ref.current.textContent;
    
    line3Ref.current.innerHTML = '';
    line4Ref.current.innerHTML = '';
    
    line3Text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      line3Ref.current.appendChild(span);
    });

    line4Text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      line4Ref.current.appendChild(span);
    });

    // Initially hide elements
    // gsap.set([imageRef.current, descRef.current, image2Ref.current, desc2Ref.current], { opacity: 0 });

    // First section timeline
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourServices2__container",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl1.to(line1Ref.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    })
    .to(line2Ref.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    }, "-=0.1")
    // .from(imageRef.current, {
    //   x: 100,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power3.out"
    // }, "+=0.2")
    // .from(descRef.current, {
    //   y: 30,
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: "power2.out"
    // }, "-=0.5");

    // Second section timeline
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourServices2__container-second",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl2.to(line3Ref.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    })
    .to(line4Ref.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    }, "+=0.01")
    // .from(image2Ref.current, {
    //   x: -100,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power3.out"
    // }, "+=0.2")
    // .from(desc2Ref.current, {
    //   y: 30,
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: "power2.out"
    // }, "-=0.5");

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <>
      <section className="ourServices2__container">
        <div className="ourServices2__content" ref={contentRef}>
          <h2 className="ourServices2__title" ref={titleRef}>
            <span className="ourServices2__title-line" ref={line1Ref}>Innovative Solutions</span>
            <span className="ourServices2__title-line" ref={line2Ref}>For Tomorrow</span>
          </h2>
          <p className="ourServices2__description" ref={descRef}>
            Our innovative approach combines cutting-edge technology with creative thinking 
            to deliver solutions that not only meet today's needs but anticipate tomorrow's 
            challenges. We're committed to pushing boundaries and setting new standards in 
            digital excellence.
          </p>
        </div>
        <div className="ourServices2__image" ref={imageRef}>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
            alt="Team collaboration"
          />
        </div>
      </section>
      <OurClients />

      <section className="ourServices2__container ourServices2__container-second">
        <div className="ourServices2__image" ref={image2Ref}>
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
            alt="Digital transformation"
          />
        </div>
        <div className="ourServices2__content" ref={content2Ref}>
          <h2 className="ourServices2__title" ref={title2Ref}>
            <span className="ourServices2__title-line ourServices2__title-line-purple" ref={line3Ref}>Digital Excellence</span>
            <span className="ourServices2__title-line" ref={line4Ref}>Redefined</span>
          </h2>
          <p className="ourServices2__description" ref={desc2Ref}>
            We transform businesses through cutting-edge digital solutions. Our expertise 
            in emerging technologies and strategic innovation helps organizations stay ahead 
            in today's rapidly evolving digital landscape.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurServices2;