import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PromoBanner = () => {
    return (
        <section className='pt-17.5'>
            <div className="container">
                <div className="relative flex p-15 md:p-20 bg-[#F5F5F7] rounded-lg">
                    <div className="flex flex-col space-y-3  z-1">
                        <h3 className='text-xl font-medium'>Apple iPhone 14 Plus</h3>
                        <h1 className='text-4xl font-bold'>UP TO 30% OFF</h1>
                        <span className='text-gray-700 max-w-[500px]'>iPhone 14 has the same superspeedy chip that’s in iPhone 13 Pro, A15 Bionic, with a 5‑core GPU, powers all the latest features.</span>
                        <Link className='font-medium text-custom-sm py-[11px] px-9.5 w-fit text-white bg-blue-700 ease-out duration-200 hover:bg-blue-600  rounded-md  mt-5' href={"/products"}>Buy Now</Link>
                    </div>
                    <Image
                        src="/images/promo/promo-01.png"
                        alt="promo img"
                        className="absolute bottom-0 right-0 md:right-20 w-[200px] h-[200px] md:w-[274px] md:h-[350px] "
                        width={274}
                        height={350}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                    <div className=" flex justify-between bg-[#DBF4F3] h-full w-full rounded-lg px-9">
                        <div className="w-[40%] my-auto">
                            <Image
                                src="/images/promo/promo-02.png"
                                alt="promo img"
                                className='py-10 w-[120px] h-[220px] sm:w-[274px] sm:h-[350px]'
                                width={241}
                                height={241}
                            />
                        </div>

                        <div className="flex flex-col space-y-3 my-auto text-end py-10">
                            <span className=' text-lg'>Foldable Motorised Treadmill</span>
                            <h2 className='text-3xl font-bold'>Workout At Home</h2>
                            <p className='font-bold text-2xl text-teal-600'>Flat 20% off</p>
                            <Link className='font-medium ml-auto py-[11px] px-9.5 w-fit text-white bg-teal-500 ease-out duration-200 hover:bg-teal-600  rounded-md  mt-5' href="/products">Grab Now</Link>
                        </div>
                    </div>
                    <div className=" flex justify-between bg-[#FFECE1] h-full w-full rounded-lg px-9">
                    <div className="flex flex-col space-y-3 my-auto text-start py-10 w-[60%]">
                            <span className=' text-lg'>Apple Watch Ultra</span>
                            <h2 className='text-3xl font-bold'>Up to <span className="text-orange-600">40%</span> off</h2>
                            <p className='font-semibold text-sm text-gray-500'>The aerospace-grade titanium case strikes the perfect balance of everything.</p>
                            <Link className='font-medium me-auto py-[11px] px-9.5 w-fit text-white bg-orange-500 ease-out duration-200 hover:bg-orange-600  rounded-md  mt-5' href="/products">Buy Now</Link>
                        </div>
                        <div className="w-1/2 my-auto ">
                            <Image
                                src="/images/promo/promo-03.png"
                                alt="promo img"
                                className=' py-10 mx-auto w-[120px] h-[220px] sm:w-[274px] sm:h-[300px]'
                                width={241}
                                height={241}
                            />
                        </div>

                      
                    </div>
                 
                </div>
            </div>
        </section>
    )
}

export default PromoBanner
