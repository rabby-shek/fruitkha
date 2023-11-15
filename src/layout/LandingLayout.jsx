import React from 'react'
import Header from '../components/header/Header'
import Search_Area from '../components/searcharea/Search_Area'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <>
  
      <Header />
      <Search_Area />
      
      <Outlet />
      <Footer />
    </>
  )
}

export default LandingLayout
