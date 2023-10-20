import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    const { id, img, title, description, brand, price, rating } = car;
    return (
        <div>
            <div className="card card-compact h-[430px] bg-base-100 shadow-xl">
                <figure><img className='h-[350px]' src={img} alt={title} /></figure>
                <div className="card-body">
                    <Link to={`/carDetail/${id}`}><h2 className="card-title text-xl font-bold text-center">{brand}</h2></Link>
                    <div className="">
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CarCard;