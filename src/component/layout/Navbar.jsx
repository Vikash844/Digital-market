import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container m-3">
                    {/* Logo */}
                  <div className='navbar-brand ms-5'>
                  <Link className="logo" to="/">
                        <h4>Click<span>Genius</span></h4>
                    </Link>
                  </div>

                    {/* Hamburger Menu Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-2">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" to="/about-us">About Us</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="btn btn-danger" to="/contact-us">Contact Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
