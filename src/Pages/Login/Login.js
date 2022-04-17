import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    if(user){
      navigate(from, { replace: true });
    }

    if(error){
      alert('Wrong username or password')
    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = e => {
        navigate('/register')
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );


    const resetPassword = async() => {
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
          alert('Sent email');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} className='text-primary' type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} className='text-primary' type="password" placeholder="Password" required/>
  </Form.Group>
  <Button className='mt-4 w-25 d-block mx-auto' variant="primary" type="submit">
    Login
  </Button>
</Form>
<p className='mb-5 mt-4'>New Here? <Link to="/register" className='text-primary' onClick={navigateRegister}>Please Register</Link></p>
<p className='mb-5 mt-4'>Forgot Password? <Link to="/register" className='text-primary' onClick={resetPassword}>Reset Password</Link></p>
<SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;