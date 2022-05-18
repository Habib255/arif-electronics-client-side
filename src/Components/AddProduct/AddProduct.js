import React from 'react';

const AddProduct = () => {
    const handleAddProduct = (event) => {
        event.preventDefault()
        const product = {
            name: event.target.name.value,
            details: event.target.details.value,
            url: event.target.imageUrl.value,
            supplierName: event.target.supplierName.value,
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

    }
    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleAddProduct} className='d-flex flex-column gap-4'>
                <h4>add product here</h4>
                <input type='text' name='name' placeholder='name'></input>
                <textarea name="details" id="" cols="30" placeholder='details' rows="2"></textarea>
                <input name='imageUrl' placeholder='Image URL'></input>
                <input type='text' name='supplierName' placeholder='supplier'></input>
                <input type="number" name='price' placeholder='price'></input>
                <input className='btn btn-primary w-50' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddProduct;