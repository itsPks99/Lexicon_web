import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./whatWeOffer.css"

gsap.registerPlugin(ScrollTrigger)

const WhatWeOffer = () => {
  const whatWeOffersRef = useRef(null)
  const descRefs = useRef([])

  // Reset refs array
  descRefs.current = []

  // Add to refs array
  const addToRefs = (el) => {
    if (el && !descRefs.current.includes(el)) {
      descRefs.current.push(el)
    }
  }

  useEffect(() => {
    if (descRefs.current.length > 0) {
      descRefs.current.forEach((desc) => {
        const textContent = desc.textContent;
        desc.innerHTML = '';  // Clear original text

        textContent.split('').forEach((char) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.whiteSpace = char === ' ' ? 'pre' : 'normal';  // Maintain white space
          desc.appendChild(span);
        });

        gsap.fromTo(
          desc.children,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.02,
            stagger: 0.03,
            scrollTrigger: {
              trigger: whatWeOffersRef.current, // Trigger the animation on the entire section
              start: "top top", // Start the animation when the section top reaches the viewport top
              end: "bottom top",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  const whatWeOffers = [
    {
      id: 1,
      name: "IT Integrated Solutions",
      image: "/assets/hero_1.webp",
      description:
        "Comprehensive IT solutions that seamlessly integrate various systems and technologies to optimize your business operations and enhance productivity.",
    },
    {
      id: 2,
      name: "Smart IT Infrastructure",
      image: "/assets/hero_2.webp",
      description:
        "Intelligent infrastructure solutions designed to provide a robust foundation for your digital transformation journey with scalability and flexibility.",
    },
    {
      id: 3,
      name: "IT Enabled Services",
      image: "/assets/hero_3.webp",
      description:
        "Leverage technology to streamline your business processes, improve efficiency, and deliver exceptional customer experiences through our IT enabled services.",
    },
    {
      id: 4,
      name: "Cloud & On-Site Data Solutions",
      image: "/assets/hero_4.webp",
      description:
        "Secure and efficient data management solutions both in the cloud and on-premises, ensuring your data is always accessible, protected, and optimized.",
    },
    {
      id: 5,
      name: "Advanced Security Solutions",
      image: "/assets/hero_5.webp",
      description:
        "Cutting-edge security systems and protocols to protect your digital assets from evolving threats and ensure business continuity and compliance.",
    },
    {
      id: 6,
      name: "Software Services",
      image: "/assets/hero_6.webp",
      description:
        "Custom software development and implementation services tailored to your unique business requirements, from web applications to enterprise solutions.",
    },
  ]

  return (
    <div className="whatWeOffers-container" ref={whatWeOffersRef}>
      <h2 className="whatWeOffers-main-title">WHAT WE OFFER</h2>
      <div className="whatWeOffers-grid">
        {whatWeOffers.map((whatWeOffer) => (
          <div className="whatWeOffer-item" key={whatWeOffer.id}>
            <div className="whatWeOffer-image-container">
              <img src={whatWeOffer.image || "/placeholder.svg"} alt={whatWeOffer.name} className="whatWeOffer-image" />
            </div>
            <div className="whatWeOffer-content">
              <h3 className="whatWeOffer-title">{whatWeOffer.name}</h3>
              <p className="whatWeOffer-description" ref={addToRefs}>
                {whatWeOffer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeOffer
