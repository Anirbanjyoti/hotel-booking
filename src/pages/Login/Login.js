import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Registration/Registration.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
<div className='cus-form mt-5'>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit"  size='lg'>
        Submit
      </Button>
      <p>You Have No Account? <span><Link to='/registration'>Login </Link></span></p>
    </Form>
        </div>
    );
};

export default Login;