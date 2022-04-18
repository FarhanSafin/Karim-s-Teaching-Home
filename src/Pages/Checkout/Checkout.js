import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const [agree, setAgree] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        toast("Thanks for choosing me. I will contact you soon")
    }

    return (
        <div className='checkout-form'>
        <h1 className='text-primary text-center mt-5'>Check Out Page</h1>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control className='text-primary' type="name" placeholder="Enter name" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control className='text-primary' type="name" placeholder="Enter your address" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formNumber">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control className='text-primary' type="number" placeholder="Enter your phone number" required/>
  </Form.Group>
  <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
  <label className={`ps-2 ${agree ? '' : 'text-danger' }`} htmlFor="terms">All the above information are correct</label>
  <Button
  disabled={!agree}
  className='mt-4 w-50 d-block mx-auto mb-4' variant="primary" type="submit">
    Checkout
  </Button>
</Form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;