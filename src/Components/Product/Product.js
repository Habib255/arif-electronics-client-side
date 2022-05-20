import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts/UseProducts';


const Product = ({ product }) => {
    const [products, setProducts] = UseProducts()
    const { _id, supplierName, name, details, url, price, quantity } = product
    const nevigate = useNavigate()
    const nevigateToManageItem = id => {
        nevigate(`/manageproducts/${id}`)

    }

    return (
        <div>
            <Card className='border-0' style={{ width: '30rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <p>Quantity: {quantity} pcs</p>
                    <p>supplier: {supplierName}</p>
                    <h5>price: $ {price}</h5>
                    <Button className='d-flex-center' variant="primary" onClick={() => nevigateToManageItem(_id)}>manage item</Button>


                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;