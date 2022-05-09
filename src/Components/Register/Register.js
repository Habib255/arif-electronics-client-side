import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SignInGoogle from '../SignInGoogle/SignInGoogle';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [
        createUserWithEmailAndPassword,
        createUser,
        createUserLoading,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(createUser)
    const getEmail = (event) => {
        setEmail(event.target.value)

    }
    const getPassword = (event) => {
        setPassword(event.target.value)
    }
    const getConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleUserRegister = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Passwords not matched')
            return
        }
        setError('')



        createUserWithEmailAndPassword(email, password)

        toast('succesfully registered')
    }



    return (
        <div className='w-50 mx-auto'>
            <h2 className='mb-4'>Please Register Here</h2>
            <Form onSubmit={handleUserRegister} className='text-start'>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={getEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={getPassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={getConfirmPassword} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Accept terms & conditions" required />
                </Form.Group>
                <Button className='w-100 mb-4' variant="secondary" type="submit">
                    Submit
                </Button>

            </Form>
            <h5 className='text-danger text- mb-3 mx-auto'>{error}</h5>
            <h5 className='text-danger text- mb-3 mx-auto'>{createUserError?.message}</h5>
            <Link className='btn border-secondary text-decoration-none text-black w-100' to="/login">Already Registered? Login here</Link>

            <div >
                <SignInGoogle></SignInGoogle>
            </div>
        </div>
    );
};

export default Register;