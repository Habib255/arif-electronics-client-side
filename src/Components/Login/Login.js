import React, { useState } from 'react';
import { Alert, Button, Form, } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SignInGoogle from '../SignInGoogle/SignInGoogle';
import './Login.css'

const Login = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [userLogin] = useAuthState(auth)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    if (user) {
        toast('logged in')
        navigate('/home')

    }
    if (loading) {
        <Loading></Loading>
    }
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)

    }



    const resetPassword = async (event) => {
        const email = event.target.email.value
        await sendPasswordResetEmail(email)

    }

    return (
        <div className='fullview mx-auto'>
            <div className='halfView border p-4 shadow'>
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

                    <Button className='w-100 mb-2' variant="secondary" type="submit">
                        Submit
                    </Button>
                    <p onClick={resetPassword} className='btn text-danger'>forgot password?</p>
                    <Link className='mb-2 btn bg-secondary text-decoration-none text-white w-100' to="/register">Not Registered? Click here</Link>

                    <h6 className='text-danger'>{signInError?.message}</h6>
                </Form>
                <div>
                    <SignInGoogle></SignInGoogle>
                </div>
            </div>
        </div>
    );
};

export default Login;