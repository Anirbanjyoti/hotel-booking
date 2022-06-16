import React from "react";
import logo from "../../../images/loc.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand to="/">
            <img src={logo} alt="img"></img>
          </Navbar.Brand>
          <Nav className="my-nav">
            <Link to="/">Home</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
