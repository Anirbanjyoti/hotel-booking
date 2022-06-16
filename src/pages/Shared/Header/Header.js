import React from "react";
import logo from "../../../images/loc.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";



const Header = () => {
const handleLogOut =()=>{
  signOut(auth)
}

  const [user] = useAuthState(auth);
  // console.log(user);
  
  return (
    <div>
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand to="/">
            <img src={logo} alt="img"></img>
          </Navbar.Brand>
          <Nav className="my-nav">
            <Link to="/">Home</Link>
            <Link to="/hotel">Hotels</Link>
            <Link to="/registration">Registration</Link>
            { 
              user?
              <>
              {/* {user.email} */}
              <button onClick={handleLogOut}>Logout</button>
              </>
              :
              <Link to="/login">Login</Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
