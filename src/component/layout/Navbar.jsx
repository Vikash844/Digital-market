import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* <!-- ***** Logo Start ***** --> */}
                            <a href="index.html" className="logo">
                                <h4>Click<span>Genius</span></h4>
                            </a>
                            {/* <!-- ***** Logo End ***** --> */}
                            {/* <!-- ***** Menu Start ***** --> */}
                            <ul className="nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about-us">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><div className="main-red-button"><Link to="/contact-us">Contact Now</Link></div></li>
                            </ul>
                            <a href='/' className='menu-trigger' >
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar