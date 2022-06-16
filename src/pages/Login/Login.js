import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Registration/Registration.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
//   const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth)

  const handleOnBlurEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnBlurPassword = (e) => {
    setPassword(e.target.value);
  };
  if(user){
    navigate('/hotel');
  }

  const handleLoginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="cus-form mt-5">
      <Form onSubmit={handleLoginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleOnBlurEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handleOnBlurPassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" size="lg">
          Login
        </Button>
        <p>
          You Have No Account?{" "}
          <span>
            <Link to="/registration">Sign up </Link>
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Login;
