import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts/UseProducts';
import Product from '../Product/Product';
const Products = () => {
    const [products, setProducts] = UseProducts()
    const handleDeleteItem = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = products.filter(filterProduct => filterProduct._id !== id)
                setProducts(remaining);
            })


    }


    return (
        <div>
            <div className=''>

                <div className='d-flex flex-wrap gap-5'>  {products.map(product => <div className='border shadow p-4' key={product._id}><Product product={product}></Product>
                    <Button onClick={() => handleDeleteItem(product._id)} className='d-flex-center w-50 bg-secondary text-white '> Delete Item</Button></div>
                )}</div>

                <button className='d-flex flex-reverse'>
                    <Link as={Link} to='/addProduct'> add more product</Link>

                </button>
            </div>
        </div>
    );
};

export default Products;