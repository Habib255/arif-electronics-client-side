import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Form } from 'react-bootstrap';

const Contact = () => {
    const handleBtn = (event) => {
        event.preventDefault()
    }
    return (
        <div className='bg-gradient bg-dark pb-3 '>
            <div className='bg-gradient text-white pt-4 pb-4'>
                <h2>Want To Deal With Us</h2>
                <h3>Please don't hesitate to contact</h3>
            </div>
            <div className='d-flex flex-wrap justify-content-evenly text-light justify-content-center gap-5'>
                <div>
                    <h4 className='pb-2'>Write us</h4>
                    <Form onSubmit={handleBtn}>
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

                            <textarea name="textArea" placeholder='write your messege here' cols="50" rows="4"></textarea>
                        </Form.Group>
                        <div className='d-flex justify-content-end'> <input className='btn bg-light' type="submit" value="submit" /></div>
                    </Form>
                </div>
                <div> <h4>
                    Contact information
                </h4>
                    <div className='pt-4'>

                        <div className='text-start'>  <p>We are open for any suggestion or just to have a chat</p>
                            <p className='pt-3'><span className='pe-3'><FaMapMarkerAlt /></span><strong>Address: </strong> Level-3,H-23, 32 street,Dhanmondi,Dhaka-1300</p>
                            <p className='pt-3'><span className='pe-3'><FaPhoneAlt /></span><strong>Phone: </strong> +8801234567890</p>
                            <p className='pt-3'><span className='pe-3'><FaEnvelope /></span><strong>Email: </strong> Email1234@Email.com</p>
                            <p className='pt-3'><span className='pe-3'><FaGlobe /></span><strong>Website: </strong> www.website.com</p></div>
                    </div></div>
            </div>
        </div>
    );
};

export default Contact;