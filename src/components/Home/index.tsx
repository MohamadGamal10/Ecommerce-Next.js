import Hero from './Hero'
import Categories from './Categories'
import NewArrival from './NewArrivals'
import PromoBanner from './PromoBanner'
import BestSeller from './BestSeller'
import Countdown from './Countdown'
import Testimonials from './Testimonials'
import Newsletter from '../Common/Newsletter'
import Brands from './Brands/index'

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <Brands />
      <Countdown />
      <Testimonials />
      <Newsletter />      
    </>
  )
}

export default Home
