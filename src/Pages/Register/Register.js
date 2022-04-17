import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Register = () => {

  const [agree, setAgree] = useState(false);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
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
        navigate('/home')
    }

    if(error){
      alert('something is wrong. Please try again later.')
    }

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
  className='mt-4 w-25 d-block mx-auto mb-4' variant="primary" type="submit">
    Register
  </Button>
</Form>
            <p className='mb-5 mt-3'>Already have an account? <Link to="/login" className='text-primary' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;