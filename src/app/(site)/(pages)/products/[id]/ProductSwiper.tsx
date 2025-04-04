"use client";
// import TopCategories from "@/components/Common/TopCategories"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
const ProductSwiper = ({ images }: { images: string[] }) => {
    return (
        <div className='my-2 bg-white rounded-md'>
            <Swiper  navigation={true} modules={[Navigation]} className="mySwiper md:w-[350px]">
                {
                    images.map((image, index) => (
                        <SwiperSlide  key={index}>
                            <Image src={`${image}`} priority width={300} height={300} className='w-full h-full' alt="product"  />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default ProductSwiper