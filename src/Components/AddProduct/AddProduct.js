import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth)
    const handleAddProduct = (event) => {
        event.preventDefault()
        let product = {
            userEmail: user.email,
            name: event.target.name.value,
            details: event.target.details.value,
            url: event.target.imageUrl.value,
            supplierName: event.target.supplierName.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value
        }
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(product)
        toast('successfully added item')
        event.target.name.value = ''
        event.target.details.value = ''
        event.target.imageUrl.value = ''
        event.target.supplierName.value = ''
        event.target.quantity.value = ''
        event.target.price.value = ''

    }
    return (
        <div className='mx-auto fullview'>
            <form onSubmit={handleAddProduct} className='d-flex flex-column gap-4 halfView border p-4 shadow'>
                <h4>add product here</h4>

                <input type='email' name='email' value={user.email} disabled></input>
                <input type='text' name='name' placeholder='name' required></input>
                <textarea name="details" id="" cols="30" placeholder='details' rows="2" required></textarea>
                <input name='imageUrl' placeholder='Image URL' required></input>
                <input type='text' name='supplierName' placeholder='supplier' required></input>
                <input type="number" name='price' placeholder='price' required></input>
                <input type="number" name='quantity' placeholder='Quantity' required></input>
                <input className='btn btn-secondary' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddProduct;