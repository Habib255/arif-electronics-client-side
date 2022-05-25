import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='bg-gradient bg-dark pt-3 pb-3 '>
            <div className='d-flex flex-wrap text-light justify-content-center gap-5'>
                <div>
                    <h4>Write us</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">

                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">

                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">

                            <Form.Control type="number" placeholder="Phone (optional)" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">

                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">

                            <textarea name="textArea" placeholder='write your messege here' cols="30" rows="4"></textarea>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <h4>
                        Contact information
                    </h4>
                    <p>We are open for any suggestion or just to have a chat</p>
                    <p><strong>Address: </strong> Level-3,House A-23, 32 east street,Dhanmondi,Dhaka-1300</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;