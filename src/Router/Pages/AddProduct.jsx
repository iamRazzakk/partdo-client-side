import { useEffect, useState } from 'react';

const AddProduct = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('/carCard.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCars(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className='m-10'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-md">
                {cars.map((car) => (
                    <div key={car.id} className="card card-compact bg-base-100 shadow-xl">
                        <img className='h-96 w-full rounded items-center' src={car.img} alt={car.title} />
                        <div className="card-body">
                            <h2 className="card-title">{car.title}</h2>
                            <p>{car.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-white">See Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddProduct;
