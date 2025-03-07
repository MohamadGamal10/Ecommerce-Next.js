import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Countdown = () => {
    return (
        <section className='pt-17.5'>
            <div className="container">
                <div className="relative bg-[#D0E9F3] p-15 rounded-lg flex justify-between">
                    <Image
                        src="/images/countdown/countdown-bg.png"
                        alt="countdown"
                        className='absolute bottom-0 right-0 h-full w-full'
                        width={500}
                        height={500}
                    />
                    <div className="md:w-[40%] flex flex-col space-y-4 z-1">
                        <span className='font-medium text-2xl text-blue-700'>Don’t Miss!!</span>
                        <h2 className='text-4xl font-bold'>Enhance Your Music Experience</h2>
                        <p className='text-md text-gray-700'>The Havit H206d is a wired PC headphone.</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex flex-col text-center space-y-1">
                                <span className='text-3xl rounded-md font-bold  bg-white border-gray-300 border-1 px-4 py-3'>0-64</span>
                                <span className='text-md font-sm'>Days</span>
                            </div>
                            <div className="flex flex-col text-center space-y-1">
                                <span className='text-3xl rounded-md font-bold  bg-white border-gray-300 border-1 px-4 py-3'>0-15</span>
                                <span className='text-md font-sm'>Hours</span>
                            </div>
                            <div className="flex flex-col text-center space-y-1">
                                <span className='text-3xl rounded-md font-bold  bg-white border-gray-300 border-1 px-4 py-3'>0-34</span>
                                <span className='text-md font-sm'>Minutes</span>
                            </div>
                            <div className="flex flex-col text-center space-y-1">
                                <span className='text-3xl rounded-md font-bold  bg-white border-gray-300 border-1 px-4 py-3'>0-19</span>
                                <span className='text-md font-sm'>Seconds</span>
                            </div>
       

                        </div>
                        <Link className='font-medium text-custom-sm py-[11px] px-9.5 w-fit text-white bg-blue-700 ease-out duration-200 hover:bg-blue-600  rounded-md  mt-5' href={"/products"}>Check it Out!</Link>

                    </div>
                    <div className='hidden md:block z-1 mx-auto'>
                        <Image
                            src="/images/countdown/countdown-01.png"
                            alt="countdown"
                            width={400}
                            height={400}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Countdown
