import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SignInGoogle from '../SignInGoogle/SignInGoogle';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)
        email.value = ''
        password.value = ''
        if (user) {
            toast('succesfully logged in')
        }



    }
    const resetPassword = () => {

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
                <Link className='mt-3 mb-3 btn border-secondary text-decoration-none text-black w-100' to="/register">Not Registered? Click here</Link>
                <p onClick={resetPassword} className='btn text-danger'>forgot password?</p>
                <h4 className='text-danger'>{signInError?.message}</h4>
            </Form>
            <div>
                <SignInGoogle></SignInGoogle>
            </div>
        </div>
    );
};

export default Login;