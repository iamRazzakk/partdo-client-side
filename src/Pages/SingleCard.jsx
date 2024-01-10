import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../components/Probider/AuthProvider';
import '../components/CardCSS/CardCSS.css'

const SingleCard = () => {
    const { user } = useContext(AuthContext)
    const [cars, setCars] = useState([]);

    const { brand } = useParams();

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5001/car/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Car Detail been deleted.',
                                'success'
                            )
                            const newCars = cars.filter(car => car._id !== _id)
                            setCars(newCars)
                        }
                    })
            }
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5001/brandcar/${brand}`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [brand]);

    return (
        <div>
            <h1 className='text-xl md:text-7xl text-center font-bold mb-10'>Car Collection From {brand}</h1>
            <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-4'>
                {cars.map(car => (
                    <div key={car._id}>
                        <div className="cardFull max-w-full card bg-black text-white gap-4  shadow-xl">
                            <figure><img className='card-imgg' src={car.image} alt="carPhoto" /></figure>
                            <div className="card-bodyyy">
                                <p>Brand: {car.brand}</p>
                                <p>Type: {car.type}</p>
                                <p>Price: ${car.price}</p>
                                <p>Description: {car.description}</p>
                                <p>Rating: {car.rating}</p>
                                <div className='flex'>
                                    {
                                        user ? (
                                            <div className="card-actions justify-evenly">
                                                <Link to={`/singlecar/${car._id}`}>
                                                <button className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Detail</span>
                                                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                                                    </button>
                                                </Link>
                                                <Link to={`/updatecar/${car._id}`}>
                                                    <button className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Update</span>
                                                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                                                    </button>
                                                </Link>


                                                <button onClick={() => handleDelete(car._id)} className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Delete</span>
                                                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                                                </button>



                                                {/* <button onClick={() => handleDelete(car._id)} className='btn btn-link bg-black'>Delete</button> */}
                                            </div>
                                        ) :
                                            <Link to="/login">
                                                <button className='btn btn-link bg-white'>Login</button>
                                            </Link>
                                    }
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