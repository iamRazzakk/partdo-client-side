import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    const { id, img, title, description, brand, price, rating } = car;
    return (
        <div>
            <div className="card card-compact h-[430px] bg-base-100 shadow-xl">
                <figure><img className='h' src={img} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{brand}</h2>
                    <p className='font-bold'>{description}</p>
                    <p className='font-bold'>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className='card-actions justify-end'>
                        <div className="">
                            <button className="btn btn-neutral">Update</button>
                        </div>
                        <div className="">
                        <Link to={`/car/${id}`} state={{ car }}>
                                <button className="btn btn-success bg-black text-white">See Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
