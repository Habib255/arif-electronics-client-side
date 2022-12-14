import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { _id, supplierName, name, details, url, price, quantity } = product
    const nevigate = useNavigate()
    const nevigateToManageItem = id => {
        nevigate(`/manageproducts/${id}`)

    }

    return (
        <div>
            <Card className='border-0 cart' style={{ width: '25rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <p><strong>Quantity</strong>: {quantity} pcs</p>
                    <p><strong>Supplier:</strong> {supplierName}</p>
                    <p><strong>Price:</strong> <strong>$ {price}</strong></p>
                    <Button className='bg-secondary text-white w-50' variant="primary" onClick={() => nevigateToManageItem(_id)}>manage this item</Button>


                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;