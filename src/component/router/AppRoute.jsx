import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import NotFound from '../pages/NotFound'

const AppRoute = () => {
    return (
        <Routes>

            {/* Home page Route */}
            <Route path='/' element={<Home />} />

            {/* About page Route */}
            <Route path='about-us' element={<About />} />

            {/* Services page Route */}
            <Route path='services' element={<Services />} />

            {/* contact page Route */}
            <Route path='contact-us' element={<Contact />} />

            {/* page Not Found page Route */}
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}

export default AppRoute