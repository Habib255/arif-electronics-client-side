import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageProducts = () => {
    let [totalQuantity, setTotalQuantity] = useState("")
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    const handleDelivered = (event) => {
        event.preventDefault()

    }

    const addItemToStock = (event) => {
        event.preventDefault()
        const quantity = event.target.quantity.value

        const oldQuantity = product.quantity.value
        setTotalQuantity = oldQuantity + quantity
        console.log(totalQuantity)


    }
    return (
        <div className='w-50 mx-auto'>
            <div className='mb-4'>
                <img className='w-50' src={product.url} alt="" />
                <h3>{product.name}</h3>
                <p>
                    details : {product.details}
                </p>
                <p> price : $ {product.price}</p>
                <p> quantity : {product.quantity} pcs</p>
                <button onClick={handleDelivered}>delivered</button>
            </div>
            <div>
                <h3>add this item to stock</h3>
                <form onSubmit={addItemToStock}>

                    <input type="number" name="quantity" id="" />
                    <input type="submit" value="add item" />

                </form>

            </div>
        </div>
    );
};

export default ManageProducts;