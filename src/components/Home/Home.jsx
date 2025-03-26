import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Prouducts/Products';


const Home = () => {

    return (
        <div className='bg-base-300 px-2 md:px-6'>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;