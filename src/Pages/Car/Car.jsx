import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CarCard from './CarCard';

const Car = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {

        AOS.init({
            duration: 1000,
            offset: 100,
        });

        fetch('/carCard.json')
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
            })
            .catch((error) => {
                console.error('Error fetching car data:', error);
            });
    }, []);

    return (
        <div>
            <h2 className='text-3xl underline md:text-7xl font-bold text-center mt-6 mb-6 md:mb-16 md:mt-16'>Car Brands</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Car;