
import Header from '../../components/Header/Header';
import Car from '../Car/Car';
import Product from '../Product/Product';
import Discount from '../Discount/Discount';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='md:mt-10'>
                <Car></Car>
            </div>
            <Product></Product>
            <Discount></Discount>
        </div>
    );
};

export default Home;