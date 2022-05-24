import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Product from '../Product/Product';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [userItems, setUserItems] = useState([])
    useEffect(() => {
        const getUserItem = async () => {
            const email = user.email
            const url = `http://localhost:5000/user?email=${email}`;
            const { data } = await axios.get(url)
            setUserItems(data)
        }
        getUserItem()

    }, [])

    const handleDeleteItem = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = userItems.filter(filterProduct => filterProduct._id !== id)
                setUserItems(remaining);
            })


    }

    return (
        <div className=''>
            <h2> here is for showing my items</h2>
            <h3>your items {userItems.length}</h3>
            <div className='d-flex flex-wrap gap-5'>  {userItems.map(product => <div className='border g-col-4' key={product._id}><Product product={product}></Product>
                <Button onClick={() => handleDeleteItem(product._id)} className='d-flex-center '> delete this item</Button></div>)}</div>

        </div>
    );
};

export default MyItems;