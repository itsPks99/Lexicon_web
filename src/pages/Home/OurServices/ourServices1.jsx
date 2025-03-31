import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ourServices1.css';
// import OurClients from '../OurClients/ourClients.jsx';

gsap.registerPlugin(ScrollTrigger);

const OurServices2 = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const descRef = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const desc2Ref = useRef(null);

  useEffect(() => {
    const prepareLines = (lineRef) => {
      const lineText = lineRef.current.textContent.trim().split(' ');
      lineRef.current.innerHTML = '';

      lineText.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
        
        word.split('').forEach((char) => {
          const charSpan = document.createElement('span');
          charSpan.textContent = char;
          charSpan.style.display = 'inline-block';
          charSpan.style.opacity = '0';
          charSpan.style.transform = 'translateY(20px)';
          wordSpan.appendChild(charSpan);
        });

        lineRef.current.appendChild(wordSpan);

        if (index < lineText.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          lineRef.current.appendChild(spaceSpan);
        }
      });
    };

    prepareLines(line1Ref);
    prepareLines(line2Ref);
    prepareLines(line3Ref);
    prepareLines(line4Ref);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourServices2__container",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      }
    });

    tl1.to(line1Ref.current.querySelectorAll('span'), {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    })
    .to(line2Ref.current.querySelectorAll('span'), {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    }, "-=1")
    .fromTo(descRef.current, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=1");

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourServices2__container-second",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      }
    });

    tl2.to(line3Ref.current.querySelectorAll('span'), {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    })
    .to(line4Ref.current.querySelectorAll('span'), {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    }, "-=1")
    .fromTo(desc2Ref.current, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=1");

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <>
      <section className="ourServices2__container">
        <div className="ourServices2__content">
          <h2 className="ourServices2__title">
            <span className="ourServices2__title-line" ref={line1Ref}>Innovative Solutions</span>
            <span className="ourServices2__title-line" ref={line2Ref}>For Tomorrow</span>
          </h2>
          <br/>
          <p className="ourServices2__description" ref={descRef}>
            Our innovative approach combines cutting-edge technology with creative thinking 
            to deliver solutions that not only meet today's needs but anticipate tomorrow's 
            challenges. We're committed to pushing boundaries and setting new standards in 
            digital excellence.
          </p>
        </div>
        <div className="ourServices2__image">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
            alt="Team collaboration"
          />
        </div>
      </section>
      
      {/* <OurClients /> */}

      <section className="ourServices2__container ourServices2__container-second">
        <div className="ourServices2__image">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
            alt="Digital transformation"
          />
        </div>
        <div className="ourServices2__content">
          <h2 className="ourServices2__title">
            <span className="ourServices2__title-line" ref={line3Ref}>Digital Excellence</span>
            <span className="ourServices2__title-line" ref={line4Ref}>Redefined</span>
          </h2>
          <br/>
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
