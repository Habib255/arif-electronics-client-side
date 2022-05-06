import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInGoogle from '../SignInGoogle/SignInGoogle';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
    }


    return (
        <div className='w-50 mx-auto'>
            <h2 className='mb-4'>Please Login here</h2>
            <Form onSubmit={handleLogin} className='text-start'>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-100 mb-4' variant="secondary" type="submit">
                    Submit
                </Button>
                <Link className='btn btn-secondary text-decoration-none text-white w-100' to="/register">Not Registered? Click here</Link>
            </Form>
            <div>
                <SignInGoogle></SignInGoogle>
            </div>
        </div>
    );
};

export default Login;