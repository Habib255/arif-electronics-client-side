import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeProducts from '../HomeProducts/HomeProducts';
import Info from '../Info/Info';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Info></Info>
            <Contact></Contact>
        </div>
    );
};

export default Home;