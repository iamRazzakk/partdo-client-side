import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const  Discount = () => {
    return (
        <div>
            <div className="hero min-h-[450px] mt-12 w-full relative">
                <div className="carousel-container">
                    <Carousel showThumbs={false} infiniteLoop autoPlay>
                        <div>
                            <img className='h-[450px] opacity-25 w-full' src="../3 car.jpeg" alt="Discount Banner 1" />
                        </div>
                        <div>
                            <img className='h-[450px] opacity-25 w-full' src="../4 car.jpeg" alt="Discount Banner 2" />
                        </div>
                        <div>
                            <img className='h-[450px] opacity-25 w-full' src="../5 car .jpeg" alt="Discount Banner 3" />
                        </div>
                    </Carousel>
                </div>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Amazing Discounts Await You</h1>
                        <p className="mb-5">
                            Discover incredible savings on our top-quality cars. We offer the best deals to make your dream car more affordable. Don't miss out on these limited-time offers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;
