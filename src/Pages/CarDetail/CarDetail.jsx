import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import toast from 'react-hot-toast';

const CarDetail = () => {
    const location = useLocation();
    const car = location.state.car;

    if (!car) {
        return <div>Loading...</div>;
    }

    const { id, img, title, description, brand, price, rating } = car;
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: car }); 

        
        
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt={title} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{brand}</h1>
                    <p className="py-6">{description}</p>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className='text-3xl mt-4'>
                        <button className='btn btn-link bg-white' onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;
