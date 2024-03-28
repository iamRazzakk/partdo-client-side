import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CircleLoader } from 'react-spinners';

const Cart = () => {
    const [cartCars, setCartCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://partdo.vercel.app/addProducts')
            .then(data => data.json())
            .then(res => {
                setCartCars(res);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="mt-20 p-4">
            {loading ? (
                <div className="flex items-center justify-center">
                    <CircleLoader color="#000" size={100} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Helmet>
                        <title>
                            Partdo || Cart
                        </title>
                    </Helmet>
                    {cartCars.map(cartCar => (
                        <div className="card h-52 card-side bg-base-100 shadow-xl" key={cartCar._id}>
                            <figure><img className="w-96" src={cartCar.image} alt="Car" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{cartCar.type}</h2>
                                <p>Brand: {cartCar.brand}</p>
                                <p>Price: ${cartCar.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
