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
      title: "Network & IT Infrastructure Solutions", 
      description: "“Technology isn’t just built it’s connected. Integration is where transformation begins.”",
      image: "/assets/hero_1.webp", 
      link: "/services/networking&iTSolution" 
    },
    { 
      id: 2, 
      prefixColor: "#33a1ff", 
      title: "Advanced Security & Data Solutions", 
      description: "“Behind every great system is an infrastructure you never have to worry about.”",
      image: "/assets/hero_2.webp", 
      link: "/services/advancedSecurity&DataSolution" 
    },
    { 
      id: 3, 
      prefixColor: "#28a745", 
      title: "Managed IT Services & Support", 
      description: "“Support that runs quietly in the background until it’s time to lead.”",
      image: "/assets/hero_3.webp", 
      link: "/services/managedIT&support" 
    },
    { 
      id: 4, 
      prefixColor: "#ff33ff", 
      title: "Cloud & Digital Transformation", 
      description: "“Whether in the cloud or on the ground your data stays where it belongs.”",
      image: "/assets/hero_4.webp", 
      link: "/services/cloud&DigitalTransformation" 
    },
    { 
      id: 5, 
      prefixColor: "#ffcc00", 
      title: "Audio-Visual & Collaboration Services", 
      description: "“Real security doesn’t shout. It protects silently, constantly, relentlessly.”",
      image: "/assets/hero_5.webp", 
      link: "/services/audioVisualCollaboration" 
    },
    // { 
    //   id: 6, 
    //   prefixColor: "#6633ff", 
    //   title: "Software Services", 
    //   description: "“Great software doesn’t just solve problems it understands them first.”",
    //   image: "/assets/hero_6.webp", 
    //   link: "/services/software-services" 
    // }
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
            {/* <h2 style={{ color: slide.prefixColor }}>We Provide the</h2> */}
            <h1 className="slide-title"></h1>
            <p className="slide-description" style={{textAlign:"center"}}>{slide.description}</p>
            <a href={slide.link} className="read-more-btn">Read More</a>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="nav-arrow prev-arrow">❮</button>
      <button onClick={nextSlide} className="nav-arrow next-arrow">❯</button>
    </div>
  )
}
