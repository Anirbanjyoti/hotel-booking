import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Registration = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");
  const [successMessage, setSuccessMessage] = useState(" ");
  const [error, setError] = useState(" ");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleOnBlurEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnBlurPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnBlurConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  if (user) {
    navigate("/hotel");
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    // validation
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }
    setValidated(true);

        const Message = "Successfully Created !";
        setSuccessMessage(Message);
        setEmail(" ");
        setPassword(" ");
        setConfirmPassword(" ");
        setError(" ");
       
        if (password !== confirmPassword) {
          setError("Your Password and confirmPassword is not same!");
          return;
        }
        if (password.length < 6) {
          setError("Password should be at least 6 characters!");
          return;
        }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="cus-form mt-5">
      <h1 className="mb-5">Registration Please!</h1>
      <Form noValidate validated={validated} onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleOnBlurEmail}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please choose a valid Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handleOnBlurPassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleOnBlurConfirmPassword}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          Please choose a Password.
        </Form.Control.Feedback>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <p style={{ color: "green" }}>{successMessage}</p>
        <p style={{ color: "red" }}>{error}</p>

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
