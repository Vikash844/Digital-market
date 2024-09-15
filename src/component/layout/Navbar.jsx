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
              <li className="nav-item dropdown mx-2">
                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-black" to="/">SEO Marketing</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Content Writing</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Social Media Marketing</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Content Creation</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Web Development</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Logo Creation</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Influencer Marketing</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Analytics & Reporting</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Email Marketing</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">PPC Marketing</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Shopify Store Creation & Management</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Conversion Rate Optimization (CRO)</Link></li>
                  <li><Link className="dropdown-item text-black" to="/">Online Reputation Management (ORM)</Link></li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/contact-us">Contact Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;