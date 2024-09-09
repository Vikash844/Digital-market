import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer-section bg-dark text-white">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-sm-3">
                            <div className="logo">
                            <img src="/assets/images/white-logo.png" alt="logo" className="w-75 h-25 img-fluid" />
                            </div>
                            <div className="d-flex">
                                <div className="ms-4">
                                    <a href="/" target="_blank">
                                        <i className="fa-brands fa-x-twitter text-white fa-lg"></i>
                                    </a>
                                </div>
                                <div className="ms-4">
                                    <a href="/" target="_blank">
                                        <i className="fa-brands fa-facebook text-white fa-lg"></i>
                                    </a>
                                </div>
                                <div className="ms-4">
                                    <a href="/" target="_blank">
                                        <i className="fa-brands fa-instagram text-white fa-lg"></i>
                                    </a>
                                </div>
                                <div className="ms-4">
                                    <a href="/" target="_blank">
                                        <i className="fa-brands fa-linkedin text-white fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="row links-wrap justify-content-around">
                                <div className="col-6 col-sm-6 col-md-3">
                                    <h5 className="mb-3">Links</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about-us">About</Link></li>
                                        <li><Link to="/services">Our Services</Link></li>
                                        <li><Link to="/contact-us">Get in Touch</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <h5 className="mb-3">Support</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to="/contact-us">Contact Us</Link></li>
                                        <li><Link to="/support">Support Center</Link></li>
                                        <li><Link to="/feedback">Feedback</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <ul>
                                <li><span> <i class="fa-solid fa-location-dot text-white fa-lg m-3"></i></span> <span className='text-light'>Badarpur New Delhi pin - 110044</span></li>
                                <li><span><i class="fa-regular fa-envelope text-white fa-lg m-3"></i></span> <span className='text-light'>clickgenius.meta@gmail.com</span></li>
                                <li><span> <i class="fa-solid fa-phone text-white fa-lg m-3"></i></span> <span className='text-light'>+91 8920056302</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="copyright-text text-light">&copy; {new Date().getFullYear()} Click Genius. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer