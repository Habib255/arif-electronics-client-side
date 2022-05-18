import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, supplierName, name, details, url, price } = product
    const nevigate = useNavigate()
    const nevigateToManageItem = id => {
        nevigate(`/manageproducts/${id}`)

    }
    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>

                    <p>supplier: {supplierName}</p>
                    <h5>{price}</h5>
                    <Button variant="primary" onClick={() => nevigateToManageItem(_id)}>manage item</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;