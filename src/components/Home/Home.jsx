import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Prouducts/Products';
import { Helmet} from 'react-helmet-async';


const Home = () => {

    return (
        <div className='px-2 md:px-6'>
            <Helmet>
        <title>Home | Gadget heaven</title>
        <meta name="description" content="Welcome to my homepage!" />
      </Helmet>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;