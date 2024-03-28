// import './Navbar/Header.css'
import Typewriter from 'typewriter-effect';

import { Helmet } from 'react-helmet-async';
import headerImg from '../../assets/slider-bg.jpg'
import headerCar from '../../assets/slider-cars.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Header = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <Helmet>
                <title>
                    Partdo
                </title>
            </Helmet>
            <div className='lg:h-[100vh] relative w-full lg:mb-32'>
                <img src={headerImg} className='relative h-[90vh] md:w-full rounded-lg' alt="" />
                <img data-aos="fade-down" src={headerCar} className='absolute -mt-52 lg:-mt-72 lg:ml-28' alt="" />


                {/*  */}
                <h2 className='text-white text-center font-sans mb-4 text-3xl lg:text-7xl md:text-6xl sm:text-3xl space-x-7 font-bold absolute md:-mt-[266px] lg:-mt-[360px] md:ml-36 lg:ml-[250px] -mt-60 ml-20 w-2/3'
                    style={{
                        color: 'black',
                        WebkitTextFillColor: 'white',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: 'black'
                    }}>
                    <Typewriter
                        data-aos="fade-down"
                        onInit={(typewriter) => {
                            typewriter.typeString('Find Your Dream Car')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                .deleteAll()
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }}
                    />
                </h2>




            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Header;