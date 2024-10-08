import React from 'react'
import { Link } from 'react-router-dom'

const OurSevices = () => {
    const items = [
        {
            id: 1,
            content: "Social Media Marketing",
            para: "Build a Strong Social Presence",
            img: "/assets/images/seo.jpg"
        },
        {
            id: 2,
            content: "Search Engine Optimization",
            para: "Boost Your Online Visibility",
            img: "/assets/images/socail.jfif"
        },
        {
            id: 3,
            content: "Content Creation",
            para: "Engage and Inspire Your Audience",
            img: "/assets/images/content-creation.jpg"
        },
        {
            id: 1,
            content: "Web Development",
            para: "Build Your Digital Home and boost website",
            img: "/assets/images/web.jpeg"
        }
    ]
    return (
        <div className="our-portfolio section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading  wow bounceIn my-5" data-wow-duration="1s" data-wow-delay="0.2s">
                            <h2>See What Our Agency <em>Offers</em> &amp; What We <span>Provide</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    {items.map((item, index) => (
                        <div className="col-lg-3 col-sm-6" key={index}>
                            <div className="showed-content" style={{ backgroundImage: `url(${item.img})` }}>
                                <h4 className='text-light'>{item.content}</h4>
                                <p className='text-light'>{item.para}</p>
                                <Link className="btn text-light mt-3" to="/services">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center my-3">
                    <Link to="/services" className="btn text-light mt-2">More Services</Link>
                </div>

            </div>
        </div>
    )
}

export default OurSevices