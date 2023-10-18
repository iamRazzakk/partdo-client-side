import { useEffect, useState } from "react";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/Product.json') // Make sure the path is correct
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="mt-44">
            <h1 className="text-7xl font-bold text-center">Our Product</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-md m-10">
                {products.map((product) => (
                    <div key={product.id} className="card card-compact bg-base-100 shadow-xl">
                        <img className='h-96 w-full rounded items-center' src={product.image} alt={product.item_name} />
                        <div className="card-body">
                            <h2 className="card-title">{product.item_name}</h2>
                            <p>{product.description}</p>
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

export default Shop;