import React from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts/UseProducts';
import Product from '../Product/Product';

const HomeProducts = () => {
    const [products] = UseProducts()



    return (
        <div className='d-flex flex-wrap mt-3 justify-content-evenly '>

            {products.slice(0, 6).map((product) => <div className='border d-grid shadow p-4 m-2' key={product._id}><Product product={product}></Product></div>)}
            <div className='d-flex flex-row-reverse mt-5 me-5 container mb-4'>
                <button className=' btn btn-secondary'>
                    <Link className='text-white text-decoration-none' as={Link} to='/products'> See more products</Link>

                </button>
            </div>
        </div>
    );
};

export default HomeProducts;