import React from 'react'
import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer'
import AppRoute from './component/router/AppRoute'

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoute />
      <Footer />
    </>
  )
}

export default App