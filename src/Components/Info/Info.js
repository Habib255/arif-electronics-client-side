import React from 'react';

const Info = () => {
    return (
        <div className='bg-secondary bg-gradient pt-3 pb-3'>
            <h2>Stay connected & stay updated</h2>

            <div className='text-start text-light d-flex flex-wrap justify-content-center gap-4'>
                <div>
                    <ul>
                        <li>Know which product recently realesed</li>
                        <li>Know about the upcoming product</li>
                        <li> Get updated about the Price</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Know the details/specification of product</li>
                        <li>Get idea about the product quality</li>
                        <li>Don't hesitate to visit our store</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Info;