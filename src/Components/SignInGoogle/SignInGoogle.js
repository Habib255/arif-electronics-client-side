import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import image from "../../icons8-google-16.png"
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SignInGoogle = () => {

    const navigate = useNavigate()
    let error

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    if (googleUser) {
        return navigate('/home')
    }
    if (googleLoading) {
        <Loading></Loading>
    }
    if (googleError) {
        error = <h6 className='text-danger'>Error: {googleError?.message}</h6>
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }



    return (
        <div>
            <div className='mt-3 d-flex'>
                <div className='w-50 pe-3'><hr /></div>
                <p>or</p>
                <div className='w-50 ps-3'><hr /></div>
            </div>
            {error}
            <button onClick={handleSignInWithGoogle} className=' bg-secondary text-white btn btn-light border-secondary w-100 mt-3 mb-3' type="submit"> <img className='me-3' src={image} alt="" /> Sign In With Google</button>

        </div>
    );
};

export default SignInGoogle;