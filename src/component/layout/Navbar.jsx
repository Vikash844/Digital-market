import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle toggling of the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-area wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <div className="navbar-brand">
            <Link className="logo" to="/" onClick={closeMenu}>
              <img src="/assets/images/logo.png" alt="logo" className="w-200 h-75 img-fluid" />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button className="navbar-toggler" onClick={toggleMenu} data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about-us" onClick={closeMenu}>About Us</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/services" onClick={closeMenu}>Services</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/contact-us" onClick={closeMenu}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
