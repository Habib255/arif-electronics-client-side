import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, ForgotPasswordError] = useSendPasswordResetEmail(
        auth
    );
    let navigate = useNavigate()

    if (sending) {
        navigate('/login')

    }
    const handleForgotPassword = async (event) => {
        const email = event.target.email.value
        await sendPasswordResetEmail(email)
        toast('Password Reset Link Sent')

    }
    return (
        <div className=' mt-5 d-flex justify-content-center'>
            <div className='fullview'>
                <div className='halfView border p-4 shadow '>
                    <h2 className='mb-4'>Forgot Password?</h2>
                    <Form onSubmit={handleForgotPassword} className='text-start'>
                        <Form.Group className="mb-3">
                            <Form.Label> Type your Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Button className='w-100 mb-2' variant="secondary" type="submit">
                            Submit
                        </Button>

                        <Link className='text-primary text-decoration-none mt-3' to="/register">Not a User ? Register First</Link>

                        <h6 className='text-danger'>{ForgotPasswordError?.message}</h6>
                    </Form>

                </div>
            </div>
        </div>

    );
};

export default ForgotPassword;