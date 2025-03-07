import React from 'react'
import Hero from './Hero'
import Header from '../Header'
import Categories from './Categories'
import NewArrival from './NewArrivals'
import PromoBanner from './PromoBanner'
import BestSeller from './BestSeller'
import Countdown from './Countdown'
import Testimonials from './Testimonials'
import Newsletter from '../Common/Newsletter'
import Footer from '../Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <Countdown />
      <Testimonials />
      <Newsletter />      
    </>
  )
}

export default Home
