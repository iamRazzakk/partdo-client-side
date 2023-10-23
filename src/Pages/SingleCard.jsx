import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleCard = () => {
    const [cars, setCars] = useState([]);
    const { brand } = useParams();
    console.log(brand);

    useEffect(() => {
        fetch(`http://localhost:5000/brandcar/${brand}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCars(data)
            })
    }, [brand]);
    // console.log(cars);

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-5 lg:grid-cols-4'>
                {cars.map(car => (
                    <div key={car._id}>
                        <div className="h-[500px] card gap-4 bg-base-100 shadow-xl">
                            <figure><img className='h-[300px]' src={car.image} alt="carPhoto" /></figure>
                            <div className="card-body">
                                {/* <h2 className="card-title">{car.name}</h2> */}
                                <p>Brand: {car.brand}</p>
                                <p>Type: {car.type}</p>
                                <p>Price: ${car.price}</p>
                                <p>Description: {car.description}</p>
                                <p>Rating: {car.rating}</p>
                                <div className="card-actions justify-end">
                                    <Link to='/updatecar'>
                                        <button className='btn btn-link bg-white'>Update</button>
                                    </Link>
                                    <Link to={`/singlecar/${car._id}`}>
                                        <button className='btn btn-link bg-white'>Car Detail</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleCard;
