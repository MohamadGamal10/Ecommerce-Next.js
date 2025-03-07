import { Button } from '../ui/button'

const Newsletter = () => {
  return (
    <section className='pt-17.5'>
      <div className="container">
        <div style={{
          backgroundImage: `url("/images/shapes/newsletter-bg.jpg")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',

        }} 
        className="rounded-md py-12 px-15 flex flex-col lg:flex-row space-y-4 align-center justify-between w-full text-white">
          <div className="lg:w-[50%]  flex flex-col  text-white space-y-2">
            <h2 className='text-lg md:text-3xl w-full  lg:max-w-[399px] font-semibold md:font-bold'>Don&apos;t Miss Out Latest Trends & Offers</h2>
            <p>Register to receive news about the latest offers & discount codes</p>
          </div>
          <div className="flex lg:w-[50%] text-white ">
            <form  className='w-full flex flex-col md:flex-row  my-auto space-x-4 space-y-2' >
              <input type="email" placeholder='Enter your email' className='w-full font-semibold md:w-[500px] p-3.5  text-gray-700 bg-white  rounded-md  focus:outline-none border-indigo-500 border-2  shadow-xs sm:text-sm' />
              <Button type='submit' className='w-full md:w-fit cursor-pointer font-medium py-6 px-5 border-[0.25px] border-gray-50 text-white bg-blue-900 ease-out duration-200 hover:bg-blue-800  rounded-md  ' >Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Newsletter
