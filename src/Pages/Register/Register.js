import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'

const Register = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if(user){
      alert('Successfull')
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);

        createUserWithEmailAndPassword(email, password);
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
  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
            <p className='mb-5 mt-3'>Already have an account? <Link to="/login" className='text-danger' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;