"use client";

// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react'
import SingleItem from './SingleItem'
import { useCallback, useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { Icategory } from '@/types/category';



const SwiperCategories = ({ categories }: { categories: { data: Icategory[] } }) => {
    const sliderRef = useRef<SwiperType | null>(null);
    // console.log(sliderRef);
    // console.log(categories)
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.slideNext();
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.init();
        }
    }, []);

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <div className="flex ">
                        <span className='flex items-center gap-2.5 font-medium text-dark mb-1.5'>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_834_7356)">
                                    <path
                                        d="M3.94024 13.4474C2.6523 12.1595 2.00832 11.5155 1.7687 10.68C1.52908 9.84449 1.73387 8.9571 2.14343 7.18231L2.37962 6.15883C2.72419 4.66569 2.89648 3.91912 3.40771 3.40789C3.91894 2.89666 4.66551 2.72437 6.15865 2.3798L7.18213 2.14361C8.95692 1.73405 9.84431 1.52927 10.6798 1.76889C11.5153 2.00851 12.1593 2.65248 13.4472 3.94042L14.9719 5.46512C17.2128 7.70594 18.3332 8.82635 18.3332 10.2186C18.3332 11.6109 17.2128 12.7313 14.9719 14.9721C12.7311 17.2129 11.6107 18.3334 10.2184 18.3334C8.82617 18.3334 7.70576 17.2129 5.46494 14.9721L3.94024 13.4474Z"
                                        stroke="#3C50E0"
                                        strokeWidth="1.5"
                                    />
                                    <circle
                                        cx="7.17245"
                                        cy="7.39917"
                                        r="1.66667"
                                        transform="rotate(-45 7.17245 7.39917)"
                                        stroke="#3C50E0"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M9.61837 15.4164L15.4342 9.6004"
                                        stroke="#3C50E0"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_834_7356">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Categories
                        </span>
                    </div>
                    <div className="flex ">
                        <h2 className="font-bold text-xl xl:text-3xl text-dark">
                            Browse by Category
                        </h2>
                    </div>
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
                onSwiper={(swiper) => (sliderRef.current = swiper)}
                slidesPerView={4}
                breakpoints={{
                    // when window width is >= 640px
                    0: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 4,
                        // spaceBetween: 4,
                    },
                    // when window width is >= 768px
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    categories && categories.data.map((item: Icategory) => (
                        <SwiperSlide className='p-3' key={item._id}>
                            <SingleItem item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>

    )
}

export default SwiperCategories
