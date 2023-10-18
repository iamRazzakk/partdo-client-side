import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [cars, setCars] = useState([]);
    const aosRef = useRef();
    const handleDetailShow = () => {

    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });

        fetch('/carCard.json')
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                if (aosRef.current) {
                    AOS.refresh();
                }
            })
    }, []);

    return (
        <div className='m-10'>
            <h1 className='text-7xl font-bold text-center md:mb-10'>Car Collection</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-md" data-aos="fade-up" ref={aosRef}>
                {cars.map((car) => (
                    <div key={car.id} className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                        <img className='h-96 w-full rounded items-center' src={car.img} alt={car.title} />
                        <div className="card-body">
                            <h2 className="card-title">{car.title}</h2>
                            <p>{car.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/car/${car.id}`}>
                                    <button onClick={handleDetailShow} className="btn bg-white">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddProduct;
