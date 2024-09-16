import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import NotFound from '../pages/NotFound'
import Seo from '../pages/services/servicesPage/Seo'
import ContenWriting from './../pages/services/servicesPage/ContenWriting';
import SocialMedia from './../pages/services/servicesPage/SocialMedia';
import ContentCreation from './../pages/services/servicesPage/ContentCreation';
import WebDevlopment from './../pages/services/servicesPage/WebDevlopment';
import LogoCreation from './../pages/services/servicesPage/LogoCreation';
import Influncer from './../pages/services/servicesPage/Influncer';
import Analytics from './../pages/services/servicesPage/Analytics';
import EmailMarketing from './../pages/services/servicesPage/EmailMarketing';
import PpcMarketing from './../pages/services/servicesPage/PpcMarketing';
import ShopifyStore from './../pages/services/servicesPage/ShopifyStore';
import Conversion from './../pages/services/servicesPage/Conversion';
import ReputationManagement from './../pages/services/servicesPage/ReputationManagement';

const AppRoute = () => {
    return (
        <Routes>

            {/* Home page Route */}
            <Route path='/' element={<Home />} />

            {/* About page Route */}
            <Route path='about-us' element={<About />} />

            {/* Services page Route */}
            <Route path='services' element={<Services />} />

            <Route path='seo' element={<Seo />} />
            <Route path='content-writing' element={<ContenWriting />} />
            <Route path='social-media' element={<SocialMedia />} />
            <Route path='content-creation' element={<ContentCreation />} />
            <Route path='web-devlopment' element={<WebDevlopment/>} />
            <Route path='logo-creation' element={<LogoCreation/>} />
            <Route path='influncer' element={<Influncer/>} />
            <Route path='analytics' element={<Analytics/>} />
            <Route path='email-marketing' element={<EmailMarketing/>} />
            <Route path='ppc-marketing' element={<PpcMarketing/>} />
            <Route path='shopify-store' element={<ShopifyStore/>} />
            <Route path='conversion' element={<Conversion/>} />
            <Route path='reputation-management' element={<ReputationManagement/>} />

            {/* Services page Route */}
            <Route path='contact-us' element={<Contact />} />

            {/* page Not Found page Route */}
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}

export default AppRoute