import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header-area wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-around">
          {/* Logo */}
          <div className="navbar-brand">
            <Link className="logo" to="/">
              <img src="/assets/images/logo.png" alt="logo" className="w-200 h-75 img-fluid" />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;