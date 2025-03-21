import React, { useState, useEffect } from 'react';
import './menu.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaChevronDown, FaChevronRight, FaTimes, FaBars, FaSearch } from 'react-icons/fa';
import { MailIcon, PhoneCall } from 'lucide-react';

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenus, setActiveMenus] = useState({});
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Set active path based on current URL
    setActivePath(window.location.pathname);
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isActive = (path) => {
    return activePath === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleSubmenu = (key) => {
    if (isMobile) {
      setActiveMenus(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  };

  const handleMouseEnter = (key) => {
    if (!isMobile) {
      setActiveMenus(prev => ({
        ...prev,
        [key]: true
      }));
    }
  };

  const handleMouseLeave = (key) => {
    if (!isMobile) {
      setActiveMenus(prev => ({
        ...prev,
        [key]: false
      }));
    }
  };

  return (
    <>
      <div className="top-bar">
        <div className="social-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <div className="contact-info">
          <a href="tel:+02249185900"><span className="phone-icon"></span><PhoneCall/> +022-49185900</a>
          <a href="mailto:info@wysetek.com"><span className="email-icon"></span> <MailIcon/> info@lexiconindia.com</a>
        </div>
      </div>

      <header className="main-header">
        <div className="container">
          <div className="menuLogo">
            <a href="/">
              <img src="/assets/logo.png" alt="Lexicon" />
            </a>
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
                <li className="menu-item">
                  <a href="/" className={isActive('/') ? 'active' : ''}>Home</a>
                </li>
                <li className="menu-item">
                  <a href="/about" className={isActive('/about') ? 'active' : ''}>About Us</a>
                </li>
                {/* <li 
                  className={`menu-item has-submenu ${activeMenus['solutions'] ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={() => handleMouseLeave('solutions')}
                >
                  <a href="/solutions" className={activePath.startsWith('/solutions') ? 'active' : ''}>
                    Solutions <FaChevronDown className="dropdown-icon" />
                  </a>
                  <ul className="submenu">
                    <li className="submenu-item">
                      <a href="/solutions/cyber-security" className={isActive('/solutions/cyber-security') ? 'active' : ''}>Cyber Security</a>
                    </li>
                    <li 
                      className={`submenu-item has-submenu ${activeMenus['cloud'] ? 'open' : ''}`}
                      onMouseEnter={() => handleMouseEnter('cloud')}
                      onMouseLeave={() => handleMouseLeave('cloud')}
                    >
                      <a href="/solutions/cloud" className={activePath.startsWith('/solutions/cloud') ? 'active' : ''}>
                        // Cloud Solutions <FaChevronRight className="dropdown-icon" />
                      </a>
                      <ul className="submenu submenu-level-2">
                        <li className="submenu-item">
                          <a href="/solutions/cloud/aws" className={isActive('/solutions/cloud/aws') ? 'active' : ''}>AWS Services</a>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu-item">
                      <a href="/solutions/open-source" className={isActive('/solutions/open-source') ? 'active' : ''}>Open Source</a>
                    </li>
                    <li className="submenu-item">
                      <a href="/solutions/data-centre" className={isActive('/solutions/data-centre') ? 'active' : ''}>Modern Data Centre Solutions</a>
                    </li>
                    <li className="submenu-item">
                      <a href="/solutions/cyber-defense" className={isActive('/solutions/cyber-defense') ? 'active' : ''}>Cyber Defense Centre</a>
                    </li>
                  </ul>
                </li> */}
                <li 
                  className={`menu-item has-submenu ${activeMenus['services'] ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={() => handleMouseLeave('services')}
                >
                  <a href="/services" className={activePath.startsWith('/services') ? 'active' : ''}>
                    Services <FaChevronDown className="dropdown-icon" />
                  </a>
                  <ul className="submenu">
                    <li className="submenu-item">
                      <a href="/services/item1" className={isActive('/services/item1') ? 'active' : ''}>Networking Solution</a>
                    </li>
                    <li className="submenu-item">
                      <a href="/services/item2" className={isActive('/services/item2') ? 'active' : ''}>IT Infrastructure Services</a>
                    </li>
                    <li className="submenu-item">
                      <a href="/services/item3" className={isActive('/services/item3') ? 'active' : ''}>Security System</a>
                    </li>
                    <li className="submenu-item">
                      <a href="/services/item4" className={isActive('/services/item4') ? 'active' : ''}>IT Integrate Solution</a>
                    </li>
                    <li className="submenu-item">
                      <a href="/services/item5" className={isActive('/services/item5') ? 'active' : ''}>AMC & Facility Management</a>
                    </li>
                    <li className="submenu-item">
                      <a href="/services/item6" className={isActive('/services/item6') ? 'active' : ''}>Audio and Video Solution</a>
                    </li>
                  </ul>
                </li>
                {/* <li 
                  className={`menu-item has-submenu ${activeMenus['wysebytes'] ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter('wysebytes')}
                  onMouseLeave={() => handleMouseLeave('wysebytes')}
                >
                  <a href="/wysebytes" className={activePath.startsWith('/wysebytes') ? 'active' : ''}>
                    WyseBytes <FaChevronDown className="dropdown-icon" />
                  </a>
                  <ul className="submenu">
                    <li className="submenu-item">
                      <a href="/wysebytes/item1" className={isActive('/wysebytes/item1') ? 'active' : ''}>WyseBytes Item 1</a>
                    </li>
                    <li className="submenu-item">
                      <a href="/wysebytes/item2" className={isActive('/wysebytes/item2') ? 'active' : ''}>WyseBytes Item 2</a>
                    </li>
                  </ul>
                </li>
                <li 
                  className={`menu-item has-submenu ${activeMenus['contact'] ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter('contact')}
                  onMouseLeave={() => handleMouseLeave('contact')}
                >
                  <a href="/contact" className={activePath.startsWith('/contact') ? 'active' : ''}>
                    Contact <FaChevronDown className="dropdown-icon" />
                  </a>
                  <ul className="submenu">
                    <li className="submenu-item">
                      <a href="/contact/locations" className={isActive('/contact/locations') ? 'active' : ''}>Locations</a>
                    </li>
                    <li className="submenu-item">
                      <a href="/contact/form" className={isActive('/contact/form') ? 'active' : ''}>Contact Form</a>
                    </li>
                  </ul>
                </li> */}

               <li className="menu-item">
                  <a href="/career" className={isActive('/career') ? 'active' : ''}>Careers</a>
                </li>
                <li className="menu-item">
                  <a href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</a>
                </li>
              </ul>
              {/* <div className="search-icon">
                <a href="#"><FaSearch /></a>
              </div> */}
            </nav>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && (
        <div className={`mobile-menu-container ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="menuLogo">
              <a href="/">
                <img src="/assets/logo.png" alt="Lexicon" />
              </a>
            </div>
            <button className="close-menu" onClick={toggleMenu}>
              <FaTimes />
            </button>
          </div>
          <nav className="mobile-menu">
            <ul className="mobile-main-menu">
              <li className="mobile-menu-item">
                <a href="/" className={isActive('/') ? 'active' : ''}>Home</a>
              </li>
              <li className="mobile-menu-item">
                <a href="/about" className={isActive('/about') ? 'active' : ''}>About Us</a>
              </li>
              {/* <li className="mobile-menu-item has-submenu">
                <div 
                  className="menu-item-header" 
                  onClick={() => toggleSubmenu('solutions')}
                >
                  <a href="/solutions" className={activePath.startsWith('/solutions') ? 'active' : ''}>Solutions</a>
                  <FaChevronDown className={`dropdown-icon ${activeMenus['solutions'] ? 'open' : ''}`} />
                </div>
                {activeMenus['solutions'] && (
                  <ul className="mobile-submenu">
                    <li className="mobile-submenu-item">
                      <a href="/solutions/cyber-security" className={isActive('/solutions/cyber-security') ? 'active' : ''}>Cyber Security</a>
                    </li>
                    <li className="mobile-submenu-item has-submenu">
                      <div 
                        className="menu-item-header" 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubmenu('cloud');
                        }}
                      >
                        <a href="/solutions/cloud" className={activePath.startsWith('/solutions/cloud') ? 'active' : ''}>// Cloud Solutions</a>
                        <FaChevronDown className={`dropdown-icon ${activeMenus['cloud'] ? 'open' : ''}`} />
                      </div>
                      {activeMenus['cloud'] && (
                        <ul className="mobile-submenu mobile-submenu-level-2">
                          <li className="mobile-submenu-item">
                            <a href="/solutions/cloud/aws" className={isActive('/solutions/cloud/aws') ? 'active' : ''}>AWS Services</a>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="mobile-submenu-item">
                      <a href="/solutions/open-source" className={isActive('/solutions/open-source') ? 'active' : ''}>Open Source</a>
                    </li>
                    <li className="mobile-submenu-item">
                      <a href="/solutions/data-centre" className={isActive('/solutions/data-centre') ? 'active' : ''}>Modern Data Centre Solutions</a>
                    </li>
                    <li className="mobile-submenu-item">
                      <a href="/solutions/cyber-defense" className={isActive('/solutions/cyber-defense') ? 'active' : ''}>Cyber Defense Centre</a>
                    </li>
                  </ul>
                )}
              </li> */}
              <li className="mobile-menu-item has-submenu">
                <div 
                  className="menu-item-header" 
                  onClick={() => toggleSubmenu('services')}
                >
                  <a href="/services" className={activePath.startsWith('/services') ? 'active' : ''}>Services</a>
                  <FaChevronDown className={`dropdown-icon ${activeMenus['services'] ? 'open' : ''}`} />
                </div>
                {activeMenus['services'] && (
                  <ul className="mobile-submenu">
                    <li className="mobile-submenu-item">
                      <a href="/services/item1" className={isActive('/services/item1') ? 'active' : ''}>Networking Solution</a>
                    </li>
                    <li className="mobile-submenu-item">
                      <a href="/services/item2" className={isActive('/services/item2') ? 'active' : ''}>IT Infrastructure Services</a>
                    </li>

                    <li className="mobile-submenu-item">
                      <a href="/services/item3" className={isActive('/services/item3') ? 'active' : ''}>Security System</a>
                    </li>
                    <li className="mobile-submenu-item">
                      <a href="/services/item4" className={isActive('/services/item4') ? 'active' : ''}>IT Integrate Solution</a>
                    </li><li className="mobile-submenu-item">
                      <a href="/services/item5" className={isActive('/services/item5') ? 'active' : ''}>AMC & Facility Management</a>
                    </li>
                    <li className="mobile-submenu-item">
                      <a href="/services/item6" className={isActive('/services/item6') ? 'active' : ''}>Audio and Video Solution</a>
                    </li>

                  </ul>
                )}
              </li>
              {/* <li className="mobile-menu-item has-submenu">
                <div 
                  className="menu-item-header" 
                  onClick={() => toggleSubmenu('wysebytes')}
                >
                  <a href="/wysebytes" className={activePath.startsWith('/wysebytes') ? 'active' : ''}>WyseBytes</a>
                  <FaChevronDown className={`dropdown-icon ${activeMenus['wysebytes'] ? 'open' : ''}`} />
                </div>
                {activeMenus['wysebytes'] && (
                  <ul className="mobile-submenu">
                    <li className="mobile-submenu-item">
                      <a href="/wysebytes/item1" className={isActive('/wysebytes/item1') ? 'active' : ''}>WyseBytes Item 1</a>
                    </li>
                    <li className="mobile-submenu-item">
                      <a href="/wysebytes/item2" className={isActive('/wysebytes/item2') ? 'active' : ''}>WyseBytes Item 2</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mobile-menu-item has-submenu">
                <div 
                  className="menu-item-header" 
                  onClick={() => toggleSubmenu('contact')}
                >
                  <a href="/contact" className={activePath.startsWith('/contact') ? 'active' : ''}>Contact</a>
                  <FaChevronDown className={`dropdown-icon ${activeMenus['contact'] ? 'open' : ''}`} />
                </div>
                {activeMenus['contact'] && (
                  <ul className="mobile-submenu">
                    <li className="mobile-submenu-item">
                      <a href="/contact/locations" className={isActive('/contact/locations') ? 'active' : ''}>Locations</a>
                    </li>
                    <li className="mobile-submenu-item">
                      <a href="/contact/form" className={isActive('/contact/form') ? 'active' : ''}>Contact Form</a>
                    </li>
                  </ul>
                )}
              </li> */}

              <li className="mobile-menu-item">
                <a href="/career" className={isActive('/career') ? 'active' : ''}>Careers</a>
              </li>
              <li className="mobile-menu-item">
                <a href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Menu;