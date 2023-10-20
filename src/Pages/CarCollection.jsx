import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CarCollection = () => {
    const carBrand = useLoaderData()
    const { id } = useParams()
    const [cars, setCars] = useState([])
    const Brand = carBrand.find(item => item.id == id)
    useEffect(() => {
        fetch(`http://localhost:5000/brandProduct/${Brand.brand}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCars(data)
            })
    }, [Brand.brand])
    console.log(cars);
    return (
        <div>
            <h2 className='text-7xl font-bold text-center mt-10'>Cars from {Brand.brand}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 px-5 gap-4'>
                {cars.map(car => (
                    <div key={car.id}>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img src={car.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{car.name}</h2>
                                <p>{car.price}</p>
                                <p>{car.details}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-link">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CarCollection;