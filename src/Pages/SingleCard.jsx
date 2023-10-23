import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleCard = () => {
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

                fetch(`http://localhost:5000/car/${_id}`, {
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
                        }
                    })
            }
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/brandcar/${brand}`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [brand]);

    return (
        <div>
            <h1 className='text-7xl text-center font-bold mb-10'>Car From {brand}</h1>
            <div className='grid md:grid-cols-2 gap-5 lg:grid-cols-4'>
                {cars.map(car => (
                    <div key={car._id}>
                        <div className="h-[500px] card gap-4 bg-base-100 shadow-xl">
                            <figure><img className='h-[150px]' src={car.image} alt="carPhoto" /></figure>
                            <div className="card-body">
                                <p>Brand: {car.brand}</p>
                                <p>Type: {car.type}</p>
                                <p>Price: ${car.price}</p>
                                <p>Description: {car.description}</p>
                                <p>Rating: {car.rating}</p>
                                <div className="card-actions justify-evenly">
                                    <Link to={`/singlecar/${car._id}`}>
                                        <button className='btn btn-link bg-white'>Car Detail</button>
                                    </Link>
                                    <Link to={`/updatecar/${car._id}`}>
                                        <button className='btn btn-link bg-white'>Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(car._id)} className='btn btn-link bg-white'>Delete</button>
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