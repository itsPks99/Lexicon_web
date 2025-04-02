import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import "./trustedPartnarSection.css"

const TrustedPartnerSection = () => {
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)
  const row1Animation = useRef(null)
  const row2Animation = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Dummy partner data
  const partners = [
    {
      id: 1,
      name: "Company One",
      logo: "/assets/BrandsLogos/PartnarsLogos/cisco.png?height=60&width=120",
      url: "https://example.com/1",
    },
    {
      id: 2,
      name: "Company Two",
      logo: "/assets/BrandsLogos/microsoft.png?height=60&width=120",
      url: "https://example.com/2",
    },
    {
      id: 3,
      name: "Company Three",
      logo: "/assets/BrandsLogos/PartnarsLogos/A&T.png?height=60&width=120",
      url: "https://example.com/3",
    },
    {
      id: 4,
      name: "Company Four",
      logo: "/assets/BrandsLogos/PartnarsLogos/aver.png?height=60&width=120",
      url: "https://example.com/4",
    },
    {
      id: 5,
      name: "Company Five",
      logo: "/assets/BrandsLogos/PartnarsLogos/commscope.png?height=60&width=120",
      url: "https://example.com/5",
    },
    {
      id: 6,
      name: "Company Six",
      logo: "/assets/BrandsLogos/PartnarsLogos/dell.png?height=60&width=120",
      url: "https://example.com/6",
    },
    {
      id: 7,
      name: "Company Seven",
      logo: "/assets/BrandsLogos/PartnarsLogos/fortinet.png?height=60&width=120",
      url: "https://example.com/7",
    },
    {
      id: 8,
      name: "Company Eight",
      logo: "/assets/BrandsLogos/PartnarsLogos/hewelett.png?height=60&width=120",
      url: "https://example.com/8",
    },
    {
      id: 9,
      name: "Company Nine",
      logo: "/assets/BrandsLogos/PartnarsLogos/Hp.png?height=60&width=120",
      url: "https://example.com/7",
    },
    {
      id: 10,
      name: "Company Ten",
      logo: "/assets/BrandsLogos/PartnarsLogos/ibm.png?height=60&width=120",
      url: "https://example.com/8",
    },
  ]

  //row 2 partners data
  const partners2 = [
    {
      id: 1,
      name: "Company One",
      logo: "/assets/BrandsLogos/PartnarsLogos/lenovo.png?height=60&width=120",
      url: "https://example.com/1",
    },
    {
      id: 2,
      name: "Company Two",
      logo: "/assets/BrandsLogos/PartnarsLogos/maxhub.png?height=60&width=120",
      url: "https://example.com/2",
    },
    {
      id: 3,
      name: "Company Three",
      logo: "/assets/BrandsLogos/PartnarsLogos/polycom.png?height=60&width=120",
      url: "https://example.com/3",
    },
    {
      id: 4,
      name: "Company Four",
      logo: "/assets/BrandsLogos/PartnarsLogos/R&M.png?height=60&width=120",
      url: "https://example.com/4",
    },
    {
      id: 5,
      name: "Company Five",
      logo: "/assets/BrandsLogos/PartnarsLogos/radware.png?height=60&width=120",
      url: "https://example.com/5",
    },
    {
      id: 6,
      name: "Company Six",
      logo: "/assets/BrandsLogos/PartnarsLogos/samsung.png?height=60&width=120",
      url: "https://example.com/6",
    },
    {
      id: 7,
      name: "Company Seven",
      logo: "/assets/BrandsLogos/PartnarsLogos/sonicwall.png?height=60&width=120",
      url: "https://example.com/7",
    },
    {
      id: 8,
      name: "Company Eight",
      logo: "/assets/BrandsLogos/PartnarsLogos/sophos.png?height=60&width=120",
      url: "https://example.com/8",
    },
    {
      id: 9,
      name: "Company Nine",
      logo: "/assets/BrandsLogos/PartnarsLogos/tplink.png?height=60&width=120",
      url: "https://example.com/7",
    },
    // {
    //   id: 10,
    //   name: "Company Ten",
    //   logo: "/assets/BrandsLogos/PartnarsLogos/.png?height=60&width=120",
    //   url: "https://example.com/8",
    // },
  ]

  // Duplicate the partners array to create a seamless loop
  // Add more duplicates for mobile to ensure smooth scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]
  const duplicatedPartners2 = [...partners2, ...partners2, ...partners2, ...partners2]

  useEffect(() => {
    // Check for mobile and tablet on mount and window resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 992)
    }

    // Initial check
    checkScreenSize()

    // Add resize listener
    window.addEventListener("resize", checkScreenSize)

    // Initialize animations
    initAnimations()

    // Cleanup on component unmount
    return () => {
      if (row1Animation.current) row1Animation.current.kill()
      if (row2Animation.current) row2Animation.current.kill()
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  // Re-initialize animations when screen size changes
  useEffect(() => {
    if (row1Animation.current) row1Animation.current.kill()
    if (row2Animation.current) row2Animation.current.kill()
    initAnimations()
  }, [isMobile, isTablet])

  const initAnimations = () => {
    // Adjust animation speed based on device
    const duration = isMobile ? 15 : isTablet ? 18 : 20

    // First row animation (right to left)
    row1Animation.current = gsap.fromTo(
      row1Ref.current,
      { x: "0%" },
      {
        x: "-25%",
        duration: duration,
        ease: "none",
        repeat: -1,
        paused: false,
      },
    )

    // Second row animation (left to right)
    row2Animation.current = gsap.fromTo(
      row2Ref.current,
      { x: "-25%" },
      {
        x: "0%",
        duration: duration,
        ease: "none",
        repeat: -1,
        paused: false,
      },
    )
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
    <section className="trustedClient_section">
      <div className="trustedClient_container">
        <div className="trustedClient_header">
          <div className="trustedClient_titleContainer">
            <div className="trustedClient_titleBar"></div>
            <h2 className="trustedClient_title"> Some of Our Tech Partners </h2>
          </div>
          {/* <p className="trustedClient_subtitle">SOME OF OUR CLIENTS WHO HAVE TRUSTED US.</p> */}
        </div>

        <div className="trustedClient_partnersContainer">
          {/* First row - moving right to left */}
          <div
            className="trustedClient_row"
            onMouseEnter={() => handleMouseEnter(row1Animation)}
            onMouseLeave={() => handleMouseLeave(row1Animation)}
          >
            <div className="trustedClient_track" ref={row1Ref}>
              {duplicatedPartners.map((partner, index) => (
                <a
                  key={`row1-${partner.id}-${index}`}
                  href={partner.url}
                  className="trustedClient_logoWrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="trustedClient_logo"
                    onMouseEnter={() => handleMouseEnter(row1Animation)}
                    onMouseLeave={() => handleMouseLeave(row1Animation)}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Second row - moving left to right */}
          <div
            className="trustedClient_row"
            onMouseEnter={() => handleMouseEnter(row2Animation)}
            onMouseLeave={() => handleMouseLeave(row2Animation)}
          >
            <div className="trustedClient_track trustedClient_track-reverse" ref={row2Ref}>
              {duplicatedPartners2.map((partner2, index) => (
                <a
                  key={`row2-${partner2.id}-${index}`}
                  href={partner2.url}
                  className="trustedClient_logoWrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner2.logo || "/placeholder.svg"}
                    alt={partner2.name}
                    className="trustedClient_logo"
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

