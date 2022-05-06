import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const SignInGoogle = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
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

            <button onClick={handleSignInWithGoogle} className='btn btn-secondary w-100 mt-3 mb-3' type="submit"> <img src="../../../public/icons8-google-16.png" alt="" /> Sign In With Google</button>

        </div>
    );
};

export default SignInGoogle;