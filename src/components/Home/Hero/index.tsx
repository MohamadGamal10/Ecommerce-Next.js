import React from 'react'
import HeroCarousel from './HeroCarousel'
import Image from 'next/image'
import HeroFeature from './HeroFeature'

const Hero = () => {
  return (
    <section className='bg-[#E5EAF4] pt-10 pb-15'>
      <div className='container'>
        {/* <HeroCarousel /> */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4  ">
          <div className="flex lg:col-span-2">
            <div className="bg-white rounded-lg w-full h-full flex gap-4">
              <HeroCarousel />
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 ">
            <div className="bg-white flex rounded-lg w-full h-full p-4 sm:p-7.5">
              <div className="flex flex-col space-y-20">
                <div>
                  <span className='block text-xl font-bold '>
                    iPhone 14 Plus & <br />14 Pro Max
                  </span>
                </div>
                <div className="flex flex-col space-y-1">
                  <p className='text-gray-500'>limited time offer</p>
                  <div className="flex space-x-3 font-medium ">
                    <span className='text-2xl text-red-600 '>$699</span>
                    <span className='text-2xl text-gray-400 line-through'>$999</span>
                  </div>
                </div>
              </div>
              <div className="flex ml-auto py-8">
                <Image src={"/images/hero/hero-02.png"} alt="iphone" width={100} height={70} />
              </div>
            </div>
            <div className="bg-white flex rounded-lg w-full h-full p-4 sm:p-7.5">
              <div className="flex flex-col space-y-20">
                <div>
                  <span className='block text-xl font-bold '>
                  Wireless <br /> Headphone
                  </span>
                </div>
                <div className="flex flex-col space-y-1">
                  <p className='text-gray-500'>limited time offer</p>
                  <div className="flex space-x-3 font-medium ">
                    <span className='text-2xl text-red-600 '>$699</span>
                    <span className='text-2xl text-gray-400 line-through'>$999</span>
                  </div>
                </div>
              </div>
              <div className="flex ml-auto py-8">
                <Image src={"/images/hero/hero-01.png"} alt="headphone" width={100} height={70} />
              </div>
            </div>
          </div>
        </div>
        <HeroFeature />
      </div>
    </section>
  )
}

export default Hero
