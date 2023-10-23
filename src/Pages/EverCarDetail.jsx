// EverCarDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EverCarDetail = () => {
    const { carId } = useParams();
    // console.log(carId);
    const [car, setCar] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/car/${carId}`)
            .then((res) => res.json())
            .then((data) => setCar(data))
            .catch((error) => console.error(error));
    }, [carId]);
    console.log(car);

    return (
        <div>
            {car ? (
                < div className='flex m-4 p-5'>
                    <div className='flex-1'>
                        <img className='h-[40vh] md:h-[80vh]' src={car.image} alt={car.name} />
                    </div>
                    <div className='flex-1 ml-4'>
                        <h2 className='text-xl md:text-7xl mb-4 font-bold'>{car.type}</h2>
                        <p className='md:text-xl mb-4 font-normal'>{car.description}</p>
                        {/* <button onClick={() => addToCart(car)}>Add to Cart</button> */}
                        {/* <button onClick={() => (car)}>Add to Cart</button> */}
                        <button className='btn btn-link bg-white'>Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p>Loading car details...</p>
            )
            }
        </div >
    );
};

export default EverCarDetail;
