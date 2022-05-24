import React from 'react';
import image from "../../404.jpg"

const NotFound = () => {
    return (
        <div className='bg-dark'>
            <img className='w-100' src={image} alt="" />
        </div>
    );
};

export default NotFound;