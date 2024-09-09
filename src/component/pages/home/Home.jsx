import React from 'react'
import OurSevices from './OurSevices'

const Home = () => {
    return (
        <>
            <div className="main-banner wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                        <h5 className='fs-1'>Welcome to Click Genius</h5>
                                        <h2>We Make <em>Digital Ideas</em> &amp; <span>SEO</span> Marketing</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <img src="assets/images/banner-right-image.png" alt="team meeting" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-portfolio section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading  wow bounceIn my-5" data-wow-duration="1s" data-wow-delay="0.2s">
                                <h2>Welcome To <em>Click</em> <span>Genius</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-around'>
                        <div className='col-lg-7'>
                            <p className='fs-5'>Empowering Startups to Achieve Digital Success
                                At Click Genius, we specialize in helping startups like yours harness the power of digital marketing to grow, thrive, and achieve their business goals. We understand the unique challenges that startups face, and we’re here to provide innovative, data-driven solutions that deliver real results.
                            </p>
                        </div>
                        <div className='col-lg-3'>
                            <img src='/assets/images/welcome.jpeg' alt="welcome" />
                        </div>
                    </div>
                    <OurSevices />

                    <div className="row mt-5 ">
                        <div className="col-lg-6 offset-lg-3 ">
                            <div className="section-heading text-center my-5 wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <h2>Who We Are</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-around'>
                        <div className='col-lg-7'>
                            <p className='fs-5'>Click Genius is a Delhi-based digital marketing agency passionate about driving success for startups. Our team of experts brings together diverse skills in SEO, PPC, content creation, social media marketing, and web development. Together, we craft strategies that not only increase visibility but also build lasting connections with your target audience.
                            </p>
                        </div>
                        <div className='col-lg-3'>
                            <img src='/assets/images/img2.jpeg' alt="digital" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="icon-circle">
                            <img src="/assets/images/lead.png" alt="Icon 1" className='img-fluid w-100 h-100' />
                        </div>
                        <h5 className="mt-3">Get More Leads</h5>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="icon-circle">
                            <img src="/assets/images/sales.png" alt="Icon 2" className='img-fluid w-100 h-100' />
                        </div>
                        <h5 className="mt-3">Make More Sales</h5>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="icon-circle">
                            <img src="/assets/images/brand-awareness.png" className='img-fluid w-100 h-100' alt="Icon 3" />
                        </div>
                        <h5 className="mt-3">Build Brand Awareness</h5>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="icon-circle">
                            <img src="/assets/images/website-traffic.png" alt="Icon 4" className='img-fluid w-100 h-100' />
                        </div>
                        <h5 className="mt-3">Increase Website Traffic</h5>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home