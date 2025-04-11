import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menu.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaBars, FaTimes, FaChevronDown, FaInstagram } from 'react-icons/fa';
import { MailIcon, PhoneCall, Network, Server, Shield, Cog, PenToolIcon as Tool, Speaker } from 'lucide-react';

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenus, setActiveMenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const toggleSubmenu = (key) => {
    if (isMobile) {
      setActiveMenus(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  };

  const handleMobileMenuItemClick = () => {
    // Close the mobile menu when a menu item is clicked
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleSubmenuItemClick = () => {
    // Close the mobile menu when a submenu item is clicked
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const services = [
    { icon: <Network size={40} />, title: 'Network & IT Infrastructure Solutions', path: '/services/networking&iTSolution' },
    { icon: <Server size={40} />, title: 'Advanced Security & Data Solutions', path: '/services/advancedSecurity&DataSolution' },
    { icon: <Shield size={40} />, title: 'Managed IT Services & Support', path: '/services/managedIT&support' },
    { icon: <Cog size={40} />, title: 'Cloud & Digital Transformation', path: '/services/cloud&DigitalTransformation' },
    { icon: <Speaker size={40} />, title: 'Audio-Visual & Collaboration Services', path: '/services/audioVisualCollaboration' }
  ];

  return (
    <>
      <div className="top-bar">
        <div className="social-links">
          <Link to="https://www.facebook.com/profile.php?id=61574752152274"><FaFacebook /></Link>
          <Link to="https://www.instagram.com/lexiconindia_com/"><FaInstagram /></Link>
          <Link to="https://www.linkedin.com/company/8563715/admin/dashboard/"><FaLinkedin /></Link>
          {/* <Link to="#"><FaYoutube /></Link> */}
        </div>
        <div className="contact-info">
          <a href="tel:+02249185900"><PhoneCall size={18} />+91-22-49700111</a>
          <a href="mailto:info@lexiconindia.com"><MailIcon size={18} /> info@lexiconindia.com</a>
        </div>
      </div>

      <header className="main-header">
        <div className="container">
          <div className="menuLogo">
            <Link to="/">
              <img src="/assets/logo.png" alt="Lexicon" />
            </Link>
          </div>

          {isMobile ? (
            <div className="mobile-nav">
              <button className="menu-toggle" onClick={toggleMenu}>
                <FaBars />
              </button>
            </div>
          ) : (
            <nav className="desktop-nav">
              <ul className="main-menu">
                <li className={`menu-item ${isActive('/') ? 'active' : ''}`}>
                  <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                </li>
                <li className={`menu-item ${isActive('/about') ? 'active' : ''}`}>
                  <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
                </li>
                <li className={`menu-item ${location.pathname.includes('/services') ? 'active' : ''}`}>
                  <span className="menu-label">
                    Services <FaChevronDown className="dropdown-icon" />
                  </span>
                  <ul className="submenu">
                    {services.map((service) => (
                      <li key={service.path} className={`submenu-item ${isActive(service.path) ? 'active' : ''}`}>
                        <Link to={service.path}>
                          <span className="service-icon">{service.icon}</span>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className={`menu-item ${isActive('/career') ? 'active' : ''}`}>
                  <Link to="/career" className={isActive('/career') ? 'active' : ''}>Careers</Link>
                </li>
                <li className={`menu-item ${isActive('/contact') ? 'active' : ''}`}>
                  <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {isMobile && (
        <>
          <div className={`mobile-menu-container ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <div className="menuLogo">
                <Link to="/">
                  <img src="/assets/logo.png" alt="Lexicon" />
                </Link>
              </div>
              <button className="close-menu" onClick={toggleMenu}>
                <FaTimes />
              </button>
            </div>
            <nav className="mobile-menu">
              <ul>
                <li className={`mobile-menu-item ${isActive('/') ? 'active' : ''}`}>
                  <Link to="/" onClick={handleMobileMenuItemClick} className={isActive('/') ? 'active' : ''}>Home</Link>
                </li>
                <li className={`mobile-menu-item ${isActive('/about') ? 'active' : ''}`}>
                  <Link to="/about" onClick={handleMobileMenuItemClick} className={isActive('/about') ? 'active' : ''}>About Us</Link>
                </li>
                <li className={`mobile-menu-item has-submenu ${location.pathname.includes('/services') ? 'active' : ''}`}>
                  <div 
                    className="menu-item-header" 
                    onClick={() => toggleSubmenu('services')}
                  >
                    <span>Services</span>
                    <FaChevronDown className={`dropdown-icon ${activeMenus['services'] ? 'open' : ''}`} />
                  </div>
                  {activeMenus['services'] && (
                    <ul className="mobile-submenu">
                      {services.map((service) => (
                        <li key={service.path} className={`mobile-submenu-item ${isActive(service.path) ? 'active' : ''}`}>
                          <Link to={service.path} onClick={handleSubmenuItemClick}>
                            <span className="service-icon">{service.icon}</span>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className={`mobile-menu-item ${isActive('/career') ? 'active' : ''}`}>
                  <Link to="/career" onClick={handleMobileMenuItemClick} className={isActive('/career') ? 'active' : ''}>Careers</Link>
                </li>
                <li className={`mobile-menu-item ${isActive('/contact') ? 'active' : ''}`}>
                  <Link to="/contact" onClick={handleMobileMenuItemClick} className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} />
        </>
      )}
    </>
  );
};

export default Menu;