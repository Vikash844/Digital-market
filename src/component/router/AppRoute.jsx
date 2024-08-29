import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Services from '../pages/Services'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'

const AppRoute = () => {
    return (
        <Routes>

            {/* Home page Route */}
            <Route path='/' element={<Home />} />

            {/* About page Route */}
            <Route path='about-us' element={<About />} />

            {/* Services page Route */}
            <Route path='services' element={<Services />} />

            {/* Services page Route */}
            <Route path='blog' element={<Blog />} />

            {/* Services page Route */}
            <Route path='contact-us' element={<Contact />} />

            {/* page Not Found page Route */}
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}

export default AppRoute