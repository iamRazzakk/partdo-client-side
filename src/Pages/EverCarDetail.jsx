// EverCarDetail.jsx
import { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import Swal from 'sweetalert2';

const EverCarDetail = () => {
    const { carId } = useParams();
    // console.log(carId);
    const [car, setCar] = useState();

    useEffect(() => {
        fetch(`http://localhost:5001/car/${carId}`)
            .then((res) => res.json())
            .then((data) => setCar(data))
            .catch((error) => console.error(error));
    }, [carId]);
    // console.log(car);
    const addToCard = () => {

      car.id=car._id
      delete car._id
      console.log(car);

      console.log(car);
        fetch(`http://localhost:5001/addProducts`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data=> {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire("Car Add on Cart !");
                }
            })
    }

    return (
        <div>
            {car ? (
                < div className='md:flex m-4 p-5'>
                    <div className='flex-1 p-4'>
                        <img className='h-[40vh] md:h-[80vh]' name="img" src={car.image} alt={car.name} />
                    </div>
                    <div className='flex-1 ml-4 p-4'>
                        <h2 name="type" className='text-xl md:text-7xl mb-4 font-bold'>{car.type}</h2>
                        <p name="description" className='md:text-xl mb-4 font-normal'>{car.brand}</p>
                        <p name="description" className='md:text-xl mb-4 font-normal'>${car.price}</p>
                        <p name="description" className='md:text-xl mb-4 font-normal'>{car.description}</p>
                        <Rating
                            initialRating={car.rating}
                        />
                        {/* <Link to={'addcart'}> */}
                            <button className='btn btn-link bg-white' onClick={addToCard}>Add to Cart</button>
                        {/* </Link> */}
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center">
                    <CircleLoader
                        color="#000"
                        size={100}
                    />
                </div>
            )
            }
        </div >
    );
};

export default EverCarDetail;
