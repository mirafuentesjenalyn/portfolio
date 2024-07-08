import React from 'react';
import { Link } from 'react-router-dom';
import '../views/Footer.css'; // Import your footer CSS file

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="footer-copyright">
          <p> Copyright © 2024 JM | Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
