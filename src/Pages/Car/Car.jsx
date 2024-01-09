import  { useState, useEffect } from 'react';
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
            <h1 className="md:text-7xl font-bold text-center md:mb-16">Car Collection</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 p-10 gap-4" data-aos="fade-up">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Car;