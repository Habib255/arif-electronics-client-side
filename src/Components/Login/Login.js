import React, { useState } from 'react';
import { Alert, Button, Form, } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SignInGoogle from '../SignInGoogle/SignInGoogle';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (user) {
        toast('logged in')
        if (user) {
            navigate(from, { replace: true });
        }
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
                    <div className='links'>
                        <div className=''>  <Link to="/forgotpassword" className='text-decoration-none text-primary'>forgot password?</Link></div>

                        <div className=''><Link className='text-decoration-none text-primary' to="/register">Not Registered?</Link></div>
                    </div>




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