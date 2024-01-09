import { useState } from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    const [loading, setLoading] = useState(true);
    const { img, title, brand } = car;

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <div>
            {loading ? (
                <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ) : (
                <div className="card card-compact h-[310px] bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <Link to={`/cardisplay/${brand}`}>
                            <figure>
                                <img className="h-[250px] cardImg" src={img} alt={title} />
                            </figure>
                        </Link>
                        <h2 className="card-title bg-black rounded-b-lg flex text-white w-full items-center justify-center text-xl font-bold text-center">
                            {brand}
                        </h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarCard;
