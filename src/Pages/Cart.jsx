import { useEffect, useState } from "react";

const Cart = () => {
    const [cartCars, setCartCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/addProducts')
            .then(data => data.json())
            .then(res => setCartCars(res))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    );
};

export default Cart;
