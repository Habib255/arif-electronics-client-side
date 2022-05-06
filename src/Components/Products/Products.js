import React from 'react';
import UseProducts from '../../Hooks/UseProducts/UseProducts';
import Product from '../Product/Product';
const Products = () => {
    const [products, setProducts] = UseProducts()

    return (
        <div className='d-flex flex-wrap mt-3 justify-content-between '>

            {products.map(product => <Product key={product.id} product={product}></Product>)}
        </div>
    );
};

export default Products;