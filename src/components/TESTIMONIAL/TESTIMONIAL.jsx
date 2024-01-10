
import { Swiper, SwiperSlide } from 'swiper/react';
import castumer1 from '../../../public/avatar-01.jpg'
import castumer2 from '../../../public/avatar-02.jpg'
import castumer3 from '../../../public/avatar-03.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import whatSayPublic from '../../../public/whatssay.png'

import { Pagination } from 'swiper/modules';
const TESTIMONIAL = () => {
    return (
        <div className='md:mt-40'>
            <h1 className='text-3xl underline md:text-7xl font-bold text-center mt-6 mb-6 md:mb-16 md:mt-16'>What They Say About Us ?</h1>
            <div className='md:flex'>
                <div className='flex-1 p-4 md:w-1/2 h-full'>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='md:p-28'>
                                <p className='leading-8 mb-4 text-xl'>I recently purchased one of your cars, and it has been a joy to drive. The sleek design and advanced features make it stand out. Thank you for creating a vehicle that combines style and performance!</p>
                                <div className='flex  items-center gap-4'>
                                    <img className='h-16  w-16 rounded-full' src={castumer1} alt="" />
                                    <p>Shamim Al Mamun</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='md:p-28'>
                                <p className='leading-8 mb-4 text-xl'>I recently purchased one of your cars, and it has been a joy to drive. The sleek design and advanced features make it stand out. Thank you for creating a vehicle that combines style and performance!</p>
                                <div className='flex  items-center gap-4 '>
                                    <img className='h-16  w-16 rounded-full' src={castumer2} alt="" />
                                    <p>Mahfuza Rima</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='md:p-28'>
                                <p className='leading-8 mb-4 text-xl'>I recently purchased one of your cars, and it has been a joy to drive. The sleek design and advanced features make it stand out. Thank you for creating a vehicle that combines style and performance!</p>
                                <div className='flex  items-center gap-4'>
                                    <img className='h-16  w-16 rounded-full' src={castumer3} alt="" />
                                    <p>Md Abdur Razzak Rakib</p>
                                </div>
                            </div>
                        </SwiperSlide>
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