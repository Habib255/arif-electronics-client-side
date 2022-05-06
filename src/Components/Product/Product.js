import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
    const { name, id, details, url, price } = product
    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <h5>{price}</h5>
                    <Button variant="primary">manage item</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;