// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaTools, FaPhone } from 'react-icons/fa'; // Importing FontAwesome icons
import '../views/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Function to close the sidebar when clicking anywhere
    const closeSidebar = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Add event listener to the document when the sidebar is open
    if (isOpen) {
      document.addEventListener('click', closeSidebar);
    }

    // Clean up the event listener when the component unmounts or the sidebar closes
    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, [isOpen]);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to ='/' className='navbar-logo'>
        <img src='/logo.png' alt='logo'/>
      </Link>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        {/* Use icons before each link */}
        <li><Link to="/" onClick={closeSidebar} className={location.pathname === '/' ? 'active' : ''}>{isOpen && <FaHome />} Home</Link></li>
        <li><Link to="/profile" onClick={closeSidebar} className={location.pathname === '/profile' ? 'active' : ''}>{isOpen && <FaUser />} Profile</Link></li>
        <li><Link to="/services" onClick={closeSidebar} className={location.pathname === '/services' ? 'active' : ''}>{isOpen && <FaTools />} Services</Link></li>
        <li><Link to="/contact" onClick={closeSidebar} className={location.pathname === '/contact' ? 'active' : ''}>{isOpen && <FaPhone />} Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
