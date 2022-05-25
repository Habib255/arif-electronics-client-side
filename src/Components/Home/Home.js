import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeProducts from '../HomeProducts/HomeProducts';
import Info from '../Info/Info';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <h4 className='mt-3'>some of our products</h4>
            <HomeProducts></HomeProducts>
            <Info></Info>
            <Contact></Contact>
        </div>
    );
};

export default Home;