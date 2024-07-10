import React from 'react'
import Footer from '../components/Footer'
import Carousel from '../components/carousel/Carousel'
import Header from './../components/header/Header'
import Categories from '../components/Categories'
import Equipment from '../components/Equipments';
import Offers from '../components/Offers'
import Products from '../components/Products'
import Clients from '../components/Clients'
import Brands from '../components/Brands'
import Accordion from '../components/Accordion'
import News from '../components/News'
import Formm from '../components/Formm'
import Subscription from '../components/Subscription'

const Home = () => {
  return (
    <div className=''>
      {/* <Header/> */}
      <Header/>
      <Carousel/>
      <Categories/>
      <Equipment/>
      <Offers/>
      <Products/>
      <Clients/>
      <Brands/>
      <Accordion/>
      <News/>
      <Formm/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default Home