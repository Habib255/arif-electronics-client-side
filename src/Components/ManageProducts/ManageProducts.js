import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageProducts = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    return (
        <div>
            <h3>{product.name}</h3>
        </div>
    );
};

export default ManageProducts;