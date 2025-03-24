import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./ourServices.css"

// // Import images
// import itIntegratedImg from "./images/it-integrated.jpg"
// import smartInfraImg from "./images/smart-infrastructure.jpg"
// import itEnabledImg from "./images/it-enabled.jpg"
// import cloudDataImg from "./images/cloud-data.jpg"
// import securityImg from "./images/security.jpg"
// import softwareImg from "./images/software.jpg"

gsap.registerPlugin(ScrollTrigger)

const OurServices = () => {
  const servicesRef = useRef(null)
  const titleRefs = useRef([])

  // Reset refs array
  titleRefs.current = []

  // Add to refs array
  const addToRefs = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el)
    }
  }

  useEffect(() => {
    // Animate each title when its section comes into view
    titleRefs.current.forEach((title, index) => {
      gsap.fromTo(
        title,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: 0.2 * index,
        },
      )
    })
  }, [])

  const services = [
    {
      id: 1,
      name: "IT Integrated Solutions",
      image: "/images/it-integrated.jpg",
      description:
        "Comprehensive IT solutions that seamlessly integrate various systems and technologies to optimize your business operations and enhance productivity.",
    },
    {
      id: 2,
      name: "Smart IT Infrastructure",
      image: "/images/it-integrated.jpg",
      description:
        "Intelligent infrastructure solutions designed to provide a robust foundation for your digital transformation journey with scalability and flexibility.",
    },
    {
      id: 3,
      name: "IT Enabled Services",
      image: "/images/it-integrated.jpg",
      description:
        "Leverage technology to streamline your business processes, improve efficiency, and deliver exceptional customer experiences through our IT enabled services.",
    },
    {
      id: 4,
      name: "Cloud & On-Site Data Solutions",
      image: "/images/it-integrated.jpg",
      description:
        "Secure and efficient data management solutions both in the cloud and on-premises, ensuring your data is always accessible, protected, and optimized.",
    },
    {
      id: 5,
      name: "Advanced Security Solutions",
      image: "/images/it-integrated.jpg",
      description:
        "Cutting-edge security systems and protocols to protect your digital assets from evolving threats and ensure business continuity and compliance.",
    },
    {
      id: 6,
      name: "Software Services",
      image: "/images/it-integrated.jpg",
      description:
        "Custom software development and implementation services tailored to your unique business requirements, from web applications to enterprise solutions.",
    },
  ]

  return (
    <div className="services-container" ref={servicesRef}>
      <h2 className="services-main-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <div className="service-image-container">
              <img src={service.image || "/placeholder.svg"} alt={service.name} className="service-image" />
            </div>
            <div className="service-content">
              <h3 className="service-title" ref={addToRefs}>
                {service.name}
              </h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices

