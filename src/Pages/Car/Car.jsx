import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CarCard from './CarCard';

const Car = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Initialize AOS with custom animation settings
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 100,   // Offset (in pixels) from the top of the element
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
            <h1 className="text-7xl font-bold text-center mb-16">Car Collection</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Car;
