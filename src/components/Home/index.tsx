
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
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 1500) // simulate loading delay or wait for real data

  //   return () => clearTimeout(timer)
  // }, [])

  // if (loading) return <PreLoader />
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
