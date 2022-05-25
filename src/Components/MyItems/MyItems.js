import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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
        const agreeDelete = window.confirm('Please confirm first to delete this item')
        if (agreeDelete) {
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

    }

    return (
        <div className='container mt-2 '>

            <h3 className='pb-2'>You've Added  {userItems.length} Item</h3>
            <div className='d-flex flex-wrap gap-3 justify-content-evenly'>  {userItems.map(product => <div className='border pb-4' key={product._id}><Product product={product}></Product>
                <Button onClick={() => handleDeleteItem(product._id)} className='d-flex-center deleteBtnWidth btn btn-secondary'> delete this item</Button></div>)}</div>
            <div className='d-flex flex-row-reverse mt-3 me-5 container'>
                <button className=' btn btn-secondary'>
                    <Link className='text-white text-decoration-none' as={Link} to='/addProduct'> add more product</Link>

                </button>
            </div>
        </div>
    );
};

export default MyItems;