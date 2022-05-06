import React from 'react';
import { Button, Card } from 'react-bootstrap';
import UseProducts from '../../Hooks/UseProducts/UseProducts';

const HomeProducts = () => {
    const [products, setProducts] = UseProducts()


    return (
        <div className='d-flex flex-wrap mt-3 justify-content-between '>

            {products.slice(0, 4).map((product) => <div key={product.id} >
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={product.url} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <h5>available quantity: {product.quantity}</h5>
                        <Card.Text>
                            {product.details}
                        </Card.Text>
                        <p>Supplier :{product.supplierName}</p>
                        <h5>Price: {product.price}</h5>
                        <Button variant="primary">manage item</Button>
                    </Card.Body>
                </Card>
            </div>)}
        </div>
    );
};

export default HomeProducts;