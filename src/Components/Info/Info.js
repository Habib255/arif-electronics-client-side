import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Info = () => {
    return (
        <div className='bg-secondary bg-gradient pt-4 pb-4 mt-4'>
            <h2>Stay connected & stay updated</h2>

            <div className='text-start text-light d-flex flex-wrap justify-content-evenly pt-3'>
                <div>

                    <p className='pt-3'><span className='pe-3'><FaArrowAltCircleRight /></span> Know which product recently realesed </p>
                    <p className='pt-3'><span className='pe-3'><FaArrowAltCircleRight /></span> Know about the upcoming product </p>
                    <p className='pt-3'><span className='pe-3'><FaArrowAltCircleRight /></span> Get updated about the Price </p>


                </div>
                <div>

                    <p className='pt-3'><span className='pe-3'><FaArrowAltCircleRight /></span> Know the details/specification of product </p>
                    <p className='pt-3'><span className='pe-3'><FaArrowAltCircleRight /></span>Get idea about the product quality </p>
                    <p className='pt-3'><span className='pe-3'><FaArrowAltCircleRight /></span>Get update about the stock every moment </p>

                </div>
            </div>
        </div>
    );
};

export default Info;