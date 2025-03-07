"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image'
import { useCallback, useEffect, useRef } from 'react';
import data from '../Categories/categoryData';
import SingleItem from './SingleItem';

const Testimonials = () => {

    const sliderRef = useRef<any>(null);


    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.swiper.init();
        }
    }, []);

    return (
        <section>
            <div className="container">
                <div className="flex justify-between pt-17.5 px-4">
                    <div className="flex flex-col">
                        <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
                            <Image
                                src="/images/icons/icon-08.svg"
                                alt="icon"
                                width={17}
                                height={17}
                            />
                            Testimonials
                        </span>
                        <h2 className="font-bold text-xl xl:text-3xl text-dark">User Feedbacks</h2>
                    </div>

                    <div className="flex items-center gap-3 ">
                        <button onClick={handlePrev} className="duration-300 ease-out cursor-pointer border hover:bg-[#3c50e0] hover:text-white border-gray-200 rounded-md w-10 h-10 flex items-center justify-center">
                            <svg
                                className="fill-current"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
                                    fill=""
                                />
                            </svg>
                        </button>

                        <button onClick={handleNext} className="duration-300 ease-out cursor-pointer border hover:bg-[#3c50e0] hover:text-white border-gray-200 rounded-md w-10 h-10 flex items-center justify-center">
                            <svg
                                className="fill-current"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
                                    fill=""
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <Swiper
                    ref={sliderRef}
                    slidesPerView={3}
                    breakpoints={{
                        // when window width is >= 640px
                        0: {
                            slidesPerView: 1,
                        },
                        1000: {
                            slidesPerView: 2,
                            // spaceBetween: 4,
                        },
                        // when window width is >= 768px
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        Array.from({length: 6}).map((item, index) => (
                            <SwiperSlide className='p-3' key={index}>
                                <SingleItem />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials
