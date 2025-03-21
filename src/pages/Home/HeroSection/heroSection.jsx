import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import "./heroSection.css"

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin)
}

export default function HeroSection() {
  const slides = [
    { 
      id: 1, 
      prefixColor: "#ff5733", 
      title: "IT Integrated Solutions", 
      description: "We provide innovative IT Integrated Solutions, including ERP, CRM, and infrastructure management. Our scalable systems enhance communication, data accessibility, and operational efficiency. With end-to-end consultation and implementation, we ensure your IT systems work harmoniously to drive productivity and growth.",
      image: "/assets/hero_1.webp", 
      link: "/services/integrated-solutions" 
    },
    { 
      id: 2, 
      prefixColor: "#33a1ff", 
      title: "Smart IT Infrastructure", 
      description: "Our Smart IT Infrastructure services offer advanced networking, cloud architecture, and data center solutions. We deliver scalable, resilient systems designed for seamless integration, enhanced security, and optimal performance, ensuring efficient data management and business continuity.",
      image: "/assets/hero_2.webp", 
      link: "/services/it-infrastructure" 
    },
    { 
      id: 3, 
      prefixColor: "#28a745", 
      title: "IT Enabled Services", 
      description: "We offer comprehensive IT Enabled Services (ITES), including data processing, BPO, and IT consulting. Our solutions enhance efficiency, reduce costs, and improve service delivery, empowering your business with superior productivity and streamlined operations.",
      image: "/assets/hero_3.webp", 
      link: "/services/enabled-services" 
    },
    { 
      id: 4, 
      prefixColor: "#ff33ff", 
      title: "Cloud & On-Site Data Solutions", 
      description: "Our Cloud & On-Site Data Solutions provide secure, scalable data management systems. Combining cloud technology with on-premise setups, we ensure data availability, enhanced performance, and superior protection for seamless operations.",
      image: "/assets/hero_4.webp", 
      link: "/services/data-solutions" 
    },
    { 
      id: 5, 
      prefixColor: "#ffcc00", 
      title: "Advanced Security Solutions", 
      description: "We deliver cutting-edge cybersecurity solutions, including network protection, data encryption, and intrusion detection. Our proactive approach ensures your systems remain safe from cyber threats, enhancing business resilience and data integrity.",
      image: "/assets/hero_5.webp", 
      link: "/services/security-solutions" 
    },
    { 
      id: 6, 
      prefixColor: "#6633ff", 
      title: "Software Services", 
      description: "We offer customized software development, including web and mobile apps, enterprise solutions, and cloud-based systems. Our end-to-end services ensure innovative, efficient, and tailored solutions for your business needs.",
      image: "/assets/hero_6.webp", 
      link: "/services/software-services" 
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRefs = useRef([])
  const slideInterval = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)

  slideRefs.current = slides.map((_, index) => slideRefs.current[index] || React.createRef())

  const animateText = (index) => {
    const slideElement = slideRefs.current[index].current
    const textElement = slideElement.querySelector(".slide-title")
    const paragraphElement = slideElement.querySelector(".slide-description")

    if (textElement) {
      const text = slides[index].title
      textElement.innerHTML = ""

      const wrapper = document.createElement("div")
      wrapper.className = "text-wrapper"
      textElement.appendChild(wrapper)

      text.split("").forEach(char => {
        const span = document.createElement("span")
        span.textContent = char === " " ? "\u00A0" : char
        span.className = "char"
        wrapper.appendChild(span)
      })

      gsap.fromTo(
        wrapper.querySelectorAll(".char"),
        { opacity: 0, y: 50, color: "#4f9cf9" },
        { opacity: 1, y: 0, color: "#ffffff", stagger: 0.05, duration: 0.8, ease: "power4.out" }
      )
    }

    if (paragraphElement) {
      gsap.fromTo(
        paragraphElement,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      )
    }
  }

  const nextSlide = () => {
    setIsAnimating(true)
    gsap.to(`.slide-${currentSlide}`, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        setCurrentSlide(newIndex)
        setTimeout(() => {
          animateText(newIndex)
          setIsAnimating(false)
        }, 200)
      },
    })
  }

  const prevSlide = () => {
    setIsAnimating(true)
    gsap.to(`.slide-${currentSlide}`, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        setCurrentSlide(newIndex)
        setTimeout(() => {
          animateText(newIndex)
          setIsAnimating(false)
        }, 200)
      },
    })
  }

  useEffect(() => {
    animateText(currentSlide)
    gsap.fromTo(`.slide-${currentSlide}`, { opacity: 0 }, { opacity: 1, duration: 0.8 })
  }, [currentSlide])

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      if (!isAnimating) nextSlide()
    }, 5000)

    return () => clearInterval(slideInterval.current)
  }, [isAnimating])

  return (
    <div className="hero-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={slideRefs.current[index]}
          className={`slide slide-${index} ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="overlay"></div>

          <div className="content">
            <h2 style={{ color: slide.prefixColor }}>We Provide the</h2>
            <h1 className="slide-title"></h1>
            <p className="slide-description">{slide.description}</p>
            <a href={slide.link} className="read-more-btn">Read More</a>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="nav-arrow prev-arrow">❮</button>
      <button onClick={nextSlide} className="nav-arrow next-arrow">❯</button>
    </div>
  )
}
