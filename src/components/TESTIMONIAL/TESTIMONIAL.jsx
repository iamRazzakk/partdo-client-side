
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import whatSayPublic from '../../../public/whatssay.png'

import { Pagination } from 'swiper/modules';
const TESTIMONIAL = () => {
    return (
        <div className='lg-w-[1280px]'>
            <h1>What They Say About Us ?</h1>
            <div className='flex'>
                <div className='flex-1 w-1/2'>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
                <div className='flex-1 '>
                    <img src={whatSayPublic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TESTIMONIAL;