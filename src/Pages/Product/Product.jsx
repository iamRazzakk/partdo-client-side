import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
    const [products, setProducts] = useState([]); // Use setProducts, not setProduct

    useEffect(() => {
        // Initialize AOS with custom animation settings
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 100,   // Offset (in pixels) from the top of the element
        });

        fetch('/Product.json') // Update the URL to match your data file location
            .then((res) => res.json())
            .then((data) => {
                setProducts(data); // Use setProducts to update the state
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });
    }, []);

    return (
        <div>
            <h1 className="text-7xl font-bold text-center mb-16 mt-16">Product Collection</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up">
                {products.map((product) => (
                    <div key={product.id} className="card card-compact h-[450px] bg-base-100 shadow-xl">
                        <figure><img src={product.image} alt={product.item_name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.item_name}</h2>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                            <p>Rating: {product.rating}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
