import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial from '../Testimonial/Testimonial';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Testimonials = () => {

    return (
        // <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        <div className="px-4 lg:px-36 mx-auto">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.85': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@2.00': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Testimonial></Testimonial>
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial></Testimonial>
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial></Testimonial>
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial></Testimonial>
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial></Testimonial>
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial></Testimonial>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;