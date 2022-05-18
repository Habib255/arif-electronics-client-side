import React from 'react';
import UseProducts from '../../Hooks/UseProducts/UseProducts';
import Product from '../Product/Product';

const HomeProducts = () => {
    const [products] = UseProducts()



    return (
        <div className='d-flex flex-wrap mt-3 justify-content-between '>

            {products.slice(0, 6).map((product) => <Product key={product._id} product={product}></Product>)}
        </div>
    );
};

export default HomeProducts;