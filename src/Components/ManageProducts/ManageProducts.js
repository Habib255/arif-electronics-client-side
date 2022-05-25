import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProducts = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState({})
    console.log(product)

    useEffect(() => {
        const url = `https://whispering-tundra-74547.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [product])

    console.log(product)
    const handleDelivered = () => {

        const amount = product.quantity
        const newAmount = parseInt(amount) - 1
        product.quantity = newAmount
        const url = `https://whispering-tundra-74547.herokuapp.com/updateProduct/${productId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify({ newAmount })
        })
            .then(res => res.json())
            .then(result => { setProduct(product) })
        toast('Item delevered')
    }

    const addItemToStock = (event) => {
        event.preventDefault()
        const oldQuantity = product.quantity
        const newQuantity = event.target.quantity.value
        const newAmount = parseInt(oldQuantity) + parseInt(newQuantity)
        const url = `https://whispering-tundra-74547.herokuapp.com/updateProduct/${productId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify({ newAmount })
        })
            .then(res => res.json())
            .then(result => console.log(result))
        toast('Item added to stock')
        event.target.quantity.value = ('')

    }
    return (
        <div className='fullview mx-auto shadow p-4 border'>
            <div>
                <div className='halfView mb-4'>
                    <img className='w-50' src={product.url} alt="" />
                    <h3>{product.name}</h3>
                    <p>
                        <strong>details :</strong> {product.details}
                    </p>
                    <p> <strong>price : $</strong> {product.price}</p>
                    <p> <strong>quantity :</strong> {product.quantity} pcs</p>
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
        </div>
    );
};

export default ManageProducts;