// import './Navbar/Header.css'
import { Link } from 'react-router-dom';
import carVideo from '../../../public/carVideo.mp4'
const Header = () => {
    return (
        <div>
            <div className='h-[100vh] relative w-full'>
                <video autoPlay muted loop className='rounded-lg h-[100vh] object-cover w-full mx-auto form-control' src={carVideo}>
                </video>
                <div className='w-1/3 font-salsa -mt-[450px] ml-10'>
                    <h1 className='text-white mb-4 text-5xl font-bold'>Car Market Hub: <span className='text-3xl'>Where Transactions Thrive.</span></h1>
                    <p className='mb-4 text-white text-xl'>Sell your car effortlessly at Partodo. Experience transparent transactions and seamless connections. Join us in shaping the future of car ownership – start selling today! </p>
                    <Link to='car' className=" relative px-5 py-3 overflow-hidden font-medium text-white bg-black border border-black rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Show Our Collection</span>
                    </Link>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Header;