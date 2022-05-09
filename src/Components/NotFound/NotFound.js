import React from 'react';
import image from "../../404.jpg"

const NotFound = () => {
    return (
        <div className='bg-dark'>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;