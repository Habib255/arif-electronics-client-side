import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import image from "../../icons8-google-16.png"
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SignInGoogle = () => {

    let navigate = useNavigate()


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleSignInWithGoogle = () => {

        signInWithGoogle()
        navigate('/home')
        if (googleLoading) {
            <Loading></Loading>
        }

    }


    return (
        <div>
            <div className='mt-3 d-flex'>
                <div className='w-50 pe-3'><hr /></div>
                <p>or</p>
                <div className='w-50 ps-3'><hr /></div>
            </div>

            <button onClick={handleSignInWithGoogle} className='btn btn-light border-secondary w-100 mt-3 mb-3' type="submit"> <img className='me-3' src={image} alt="" /> Sign In With Google</button>

        </div>
    );
};

export default SignInGoogle;