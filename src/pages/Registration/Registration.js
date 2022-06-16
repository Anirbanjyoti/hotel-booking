import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Registration.css";
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";

const Registration = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");
  const [successMessage, setSuccessMessage] = useState(" ");
  const [error, setError] = useState(" ");

  const handleOnBlurEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnBlurPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnBlurConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password,confirmPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        const Message = 'Successfully Created !'
        setSuccessMessage(Message)
        setError(' ');
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        if(password !==confirmPassword){
            setError('Your Password and confirmPassword is not same!');
            return;
        }
        if(password.length<6){
            setError('Password should be at least 6 characters!');
            return;
        }

        // ..
      });
  };

  return (
    <div className="cus-form mt-5">
      <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleOnBlurEmail}
            type="email"
            placeholder="Enter email" required
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

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleOnBlurConfirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <p style={{color:'green'}}>{successMessage}</p>
      <p>{error}</p>
       
        <Button variant="primary" type="submit" size="lg">
          Submit
        </Button>
        <p>
          Already Have Account?{" "}
          <span>
            <Link to="/login">Login </Link>
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Registration;
