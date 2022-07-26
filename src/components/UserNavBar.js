import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function UserNavBar({user , setUser}) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="fs-3">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/userProfile">*icon*</Nav.Link>
          {/* <Nav.Link href="/logout">Logout</Nav.Link> */}
        </Nav>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </Container>
    </Navbar>
  );
}

export default UserNavBar

// Home
// about
// gallery
// cart
// account
// logout
// signup form?