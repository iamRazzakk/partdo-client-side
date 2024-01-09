import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    const { img, title, brand } = car;
    return (
        <div>
            <div className="card card-compact h-[310px] bg-base-100 shadow-2xl">

                <div className="card-body">
                    {/* http://localhost:5173/cardisplay/BMW */}

                    <Link to={`/cardisplay/${brand}`}>
                        <figure><img className='h-[250px] cardImg' src={img} alt={title} /></figure></Link>
                    
                        <h2 className="card-title bg-black rounded-b-lg flex text-white w-full items-center justify-center text-xl font-bold text-center">{brand}</h2>
                </div>
            </div>
        </div>

    );
};

export default CarCard;