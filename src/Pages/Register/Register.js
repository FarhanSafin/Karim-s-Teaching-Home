import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
        <h2 style={{ textAlign: 'center' }} className='text-primary'>Please Register</h2>
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control className='text-primary' type="name" placeholder="Enter name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className='text-primary' type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className='text-primary' type="password" placeholder="Password" required/>
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