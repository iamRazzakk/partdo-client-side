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
            <h2 className='uppercase text-center text-3xl md:text-5xl font-semibold mb-6 md:mb-10'>Car Brands</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Car;