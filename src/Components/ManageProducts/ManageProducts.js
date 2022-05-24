import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageProducts = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState({})


    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    const handleDelivered = () => {

        const amount = product.quantity
        const newAmount = parseInt(amount) - 1


        const url = `http://localhost:5000/updateProduct/${productId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify({ newAmount })
        })
            .then(res => res.json())
            .then(result => console.log(result))




    }

    const addItemToStock = (event) => {
        event.preventDefault()
        const totalQuantity = product.quantity
        const newQuantity = event.target.quantity.value
        const newAmount = parseInt(totalQuantity) + parseInt(newQuantity)



        console.log(newQuantity)
        console.log(totalQuantity)
        const url = `http://localhost:5000/updateProduct/${productId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify({ newAmount })
        })
            .then(res => res.json())
            .then(result => console.log(result))

    }
    return (
        <div className='w-50 mx-auto shadow p-4 border'>
            <div className='mb-4'>
                <img className='w-50' src={product.url} alt="" />
                <h3>{product.name}</h3>
                <p>
                    details : {product.details}
                </p>
                <p> price : $ {product.price}</p>
                <p> quantity : {product.quantity} pcs</p>
                <button className='btn btn-secondary' onClick={handleDelivered}>Delivered</button>
            </div>
            <div>
                <h3>Reserve in stock</h3>
                <form onSubmit={addItemToStock}>

                    <input type="number" name="quantity" id="" required />
                    <input className='bg-secondary text-white' type="submit" value="add item" />

                </form>

            </div>
        </div>
    );
};

export default ManageProducts;