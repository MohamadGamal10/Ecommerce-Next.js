"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css";
// Import Swiper styles
import 'swiper/css';
import OneCarousel from './OneCarousel';
import { Autoplay, Pagination } from "swiper/modules";
const HeroCarousel = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <OneCarousel />
            </SwiperSlide>
            <SwiperSlide>
                <OneCarousel />
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroCarousel;