"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import "./trustedPartnarSection.css"

const TrustedPartnerSection = () => {
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)
  const row1Animation = useRef(null)
  const row2Animation = useRef(null)

  // Dummy partner data
  const partners = [
    { id: 1, name: "Company One", logo: "/assets/BrandsLogos/logo_1.png?height=60&width=120", url: "https://example.com/1" },
    { id: 2, name: "Company Two", logo: "/assets/BrandsLogos/logo_2.png?height=60&width=120", url: "https://example.com/2" },
    { id: 3, name: "Company Three", logo: "/assets/BrandsLogos/logo_3.png?height=60&width=120", url: "https://example.com/3" },
    { id: 4, name: "Company Four", logo: "/assets/BrandsLogos/logo_4.png?height=60&width=120", url: "https://example.com/4" },
    { id: 5, name: "Company Five", logo: "/assets/BrandsLogos/logo_5.png?height=60&width=120", url: "https://example.com/5" },
    { id: 6, name: "Company Six", logo: "/assets/BrandsLogos/logo_6.png?height=60&width=120", url: "https://example.com/6" },
    { id: 7, name: "Company Seven", logo: "/assets/BrandsLogos/logo_7.png?height=60&width=120", url: "https://example.com/7" },
    { id: 8, name: "Company Eight", logo: "/assets/BrandsLogos/logo_8.png?height=60&width=120", url: "https://example.com/8" },
    { id: 9, name: "Company Nine", logo: "/assets/BrandsLogos/logo_9.png?height=60&width=120", url: "https://example.com/7" },
    { id: 10, name: "Company Ten", logo: "/assets/BrandsLogos/logo_10.png?height=60&width=120", url: "https://example.com/8" },

    
  ]

  // Duplicate the partners array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners]

  useEffect(() => {
    // Initialize animations
    initAnimations()

    // Cleanup on component unmount
    return () => {
      if (row1Animation.current) row1Animation.current.kill()
      if (row2Animation.current) row2Animation.current.kill()
    }
  }, [])

  const initAnimations = () => {
    // First row animation (right to left)
    row1Animation.current = gsap.to(row1Ref.current, {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
      paused: false,
    })

    // Second row animation (left to right)
    row2Animation.current = gsap.to(row2Ref.current, {
      x: "50%",
      duration: 20,
      ease: "none",
      repeat: -1,
      paused: false,
    })
  }

  const handleMouseEnter = (animation) => {
    if (animation.current) {
      animation.current.pause()
    }
  }

  const handleMouseLeave = (animation) => {
    if (animation.current) {
      animation.current.play()
    }
  }

  return (
    <section className="trustedPartnar_section">
      <div className="trustedPartnar_container">
        <div className="trustedPartnar_header">
          <div className="trustedPartnar_titleContainer">
            <div className="trustedPartnar_titleBar"></div>
            <h2 className="trustedPartnar_title">OUR TECH
              PARTNERSHIPS
            </h2>
          </div>
          <p className="trustedPartnar_subtitle">SOME OF OUR CLIENTS WHO HAVE TRUSTED US.</p>
        </div>

        <div className="trustedPartnar_partnersContainer">
          {/* First row - moving right to left */}
          <div
            className="trustedPartnar_row"
            onMouseEnter={() => handleMouseEnter(row1Animation)}
            onMouseLeave={() => handleMouseLeave(row1Animation)}
          >
            <div className="trustedPartnar_track" ref={row1Ref} style={{ transform: "translateX(0%)" }}>
              {duplicatedPartners.map((partner, index) => (
                <a
                  key={`row1-${partner.id}-${index}`}
                  href={partner.url}
                  className="trustedPartnar_logoWrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="trustedPartnar_logo"
                    onMouseEnter={() => handleMouseEnter(row1Animation)}
                    onMouseLeave={() => handleMouseLeave(row1Animation)}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Second row - moving left to right */}
          <div
            className="trustedPartnar_row"
            onMouseEnter={() => handleMouseEnter(row2Animation)}
            onMouseLeave={() => handleMouseLeave(row2Animation)}
          >
            <div className="trustedPartnar_track" ref={row2Ref} style={{ transform: "translateX(-50%)" }}>
              {duplicatedPartners.map((partner, index) => (
                <a
                  key={`row2-${partner.id}-${index}`}
                  href={partner.url}
                  className="trustedPartnar_logoWrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="trustedPartnar_logo"
                    onMouseEnter={() => handleMouseEnter(row2Animation)}
                    onMouseLeave={() => handleMouseLeave(row2Animation)}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedPartnerSection

