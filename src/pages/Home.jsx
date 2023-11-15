import React from 'react'
import Hero from '../components/hero/Hero'
import Feature_List from '../components/featurelist/Feature_List'
import Home_Product_List from '../components/homeproductlist/Home_Product_List'
import Home_Cart_Banner from '../components/homecartbanner/Home_Cart_Banner'
import Home_Testinonial from '../components/hometestimonial/Home_Testinonial'
import Home_Advertisement from '../components/homeadvertisement/Home_Advertisement'
import Home_Shop_Banner from '../components/homeshopbanner/Home_Shop_Banner'
import Home_Latest_news from '../components/homelatestnews/Home_Latest_news'
import Home_Brands from '../components/homebrands/Home_Brands'

const Home = () => {
  return (
    <>
      <Hero />
      <Feature_List />
      <Home_Product_List />
      <Home_Cart_Banner />
      <Home_Advertisement />
      <Home_Shop_Banner />
      <Home_Latest_news />
    </>
  )
}

export default Home
