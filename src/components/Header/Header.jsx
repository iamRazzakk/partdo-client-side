// import './Navbar/Header.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import headerImg from '../../assets/slider-bg.jpg'
import headerCar from '../../assets/slider-cars.png'
const Header = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Partdo
                </title>
            </Helmet>
            <div className='h-[86vh] relative w-full mb-32'>
                <img src={headerImg} className='relative rounded-lg' alt="" />
                <img src={headerCar} className='absolute lg:-mt-96 lg:ml-28' alt="" />
                <div className='absolute lg:-mt-[520px] lg:ml-96 w-2/3'>
                    <h1 className='text-white font-serif mt-10 mb-4 text-xl lg:text-7xl space-x-7 font-bold'>Find yoru Car </h1>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Header;