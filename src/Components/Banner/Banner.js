import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/BN4Bh4k/banner.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;