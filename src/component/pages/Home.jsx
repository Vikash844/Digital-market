import React from 'react'

const Home = () => {
    return (
        <>
            <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                        <h6>Welcome to Space Dynamic</h6>
                                        <h2>We Make <em>Digital Ideas</em> &amp; <span>SEO</span> Marketing</h2>
                                        <p>Space Dynamic is a professional looking HTML template using a Bootstrap 5 (beta 2). This CSS template is free for you provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a>.</p>
                                        <form id="search" action="#" method="GET">
                                            <fieldset>
                                                <input type="address" name="address" className="email" placeholder="Your website URL..." autocomplete="on" required />
                                            </fieldset>
                                            <fieldset>
                                                <button type="submit" className="main-button">Analyze Site</button>
                                            </fieldset>
                                        </form>
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
            <div id="portfolio" className="our-portfolio section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <h2>See What Our Agency <em>Offers</em> &amp; What We <span>Provide</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <a href="/">
                                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div className="hidden-content">
                                        <h4>SEO Analysis</h4>
                                        <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                                    </div>
                                    <div className="showed-content">
                                        <img src="assets/images/portfolio-image.png" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <a href="/">
                                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <div className="hidden-content">
                                        <h4>Website Reporting</h4>
                                        <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                                    </div>
                                    <div className="showed-content">
                                        <img src="assets/images/portfolio-image.png" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <a href="/">
                                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <div className="hidden-content">
                                        <h4>Performance Tests</h4>
                                        <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                                    </div>
                                    <div className="showed-content">
                                        <img src="assets/images/portfolio-image.png" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <a href="/">
                                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <div className="hidden-content">
                                        <h4>Data Analysis</h4>
                                        <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                                    </div>
                                    <div className="showed-content">
                                        <img src="assets/images/portfolio-image.png" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home