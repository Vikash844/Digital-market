import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer-section bg-dark text-white">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-sm-4">
                            <div className="logo mb-4">
                                <img src="..." alt="logo" className="img-fluid" />
                            </div>
                            <div className="d-flex">
                                <div className="m-2">
                                    <a href="/" target="_blank">
                                        <i className="fa-brands fa-twitter text-white fa-lg"></i>
                                    </a>
                                </div>
                                <div className="m-2">
                                    <a href="/" target="_blank">
                                        <i className="fa-brands fa-facebook text-white fa-lg"></i>
                                    </a>
                                </div>
                                <div className="m-2">
                                    <a href="/" target="_blank">
                                        <i className="fa-brands fa-instagram text-white fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="row links-wrap">
                                <div className="col-6 col-sm-6 col-md-3">
                                    <h5 className="mb-3">About Us</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to="/about-us">Our Story</Link></li>
                                        <li><Link to="/services">Our Services</Link></li>
                                        <li><Link to="/contact-us">Get in Touch</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <h5 className="mb-3">Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to="/faq">FAQs</Link></li>
                                        <li><Link to="/terms">Terms & Conditions</Link></li>
                                        <li><Link to="/privacy">Privacy Policy</Link></li>
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
                                <div className="col-6 col-sm-6 col-md-3">
                                    <h5 className="mb-3">Social Media</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="/" target="_blank">Facebook</a></li>
                                        <li><a href="/" target="_blank">Twitter</a></li>
                                        <li><a href="/" target="_blank">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>
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