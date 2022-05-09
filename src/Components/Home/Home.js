import React from 'react';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <h4 className='mt-3'>some of our products</h4>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;