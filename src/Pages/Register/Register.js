import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const [agree, setAgree] = useState(false);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const navigateLogin = () => {
        navigate('/login')
    }

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName});
    }

  useEffect( () => {if(user){
      navigate('/home')
    }},[user]);

  useEffect( () =>  {
      if(error){
      toast("User already exists")
    }
    },[error])


  if(loading || updating){
      return <Loading></Loading>
    }

  return (
      <div className='register-form'>
        <h2 style={{ textAlign: 'center' }} className='text-primary'>Please Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control className='text-primary' type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} className='text-primary' type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} className='text-primary' type="password" placeholder="Password" required/>
          </Form.Group>
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        <label className={`ps-2 ${agree ? '' : 'text-danger' }`} htmlFor="terms">Accept all terms and conditions</label>
        <Button 
          disabled={!agree}
          className='mt-4 w-50 d-block mx-auto mb-4' variant="primary" type="submit">
          Register
        </Button>
        </Form>
        <p className='mb-5 mt-3'>Already have an account? <Link to="/login" className='text-primary' onClick={navigateLogin}>Please Login</Link></p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </div>
    );
};

export default Register;