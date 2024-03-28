
import Header from '../../components/Header/Header';
import Car from '../Car/Car';
import Product from '../Product/Product';
import Discount from '../Discount/Discount';
// import TESTIMONIAL from '../../components/TESTIMONIAL/TESTIMONIAL';
import FAQ from '../../components/FAQ/FAQ';
import TESTIMONIAL from '../../components/TESTIMONIAL/TESTIMONIAL';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Partdo || Home
                </title>
            </Helmet>
            <Header></Header>
            <div className='md:mt-10'>
                <Car></Car>
            </div>
            <Discount></Discount>
            <Product></Product>
            <TESTIMONIAL></TESTIMONIAL>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;