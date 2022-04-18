import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SocialLogin.css'

const SocialLogin = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate('/home')
        }
      },[user])

      
      useEffect(() => {
        if (error) {
            errorElement = toast('Social Login has been closed. Please try again');
        }
      },[error])

    let errorElement;

    if(loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn login-with-google-btn w-50 mb-2 mt-5 d-block mx-auto'>
                    <img src={google} alt="googleimage" />
                    <span className='px-2'>Sign in with Google</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;