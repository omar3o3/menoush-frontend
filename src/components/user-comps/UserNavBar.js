import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profileImage from "../../images/profile-image.jpeg";

function UserNavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container className="fs-3 justify-content-center">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          {/* <Nav.Link href="/userProfile">
            <img
              className="profileImage"
              src={profileImage}
              alt="profile icon"
            />
          </Nav.Link> */}
        </Nav>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </Container>
    </Navbar>
  );
}

export default UserNavBar;

// Home
// about
// gallery
// cart
// account
// logout
// signup form?
