import React from 'react'

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import profileImage from "../../images/profile-image.jpeg";

function AdminNavBar({user , setUser}) {

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container className="fs-3">
        <Nav className="me-auto">
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/edit-desserts">Edit</Nav.Link>
          <Nav.Link href="/pending-orders">Pending-Orders</Nav.Link>
          <Nav.Link href="/accepted-orders">Accepted-Orders</Nav.Link>
          <Nav.Link href="/userProfile">
            <img
              className="profileImage"
              src={profileImage}
              alt="profile icon"
            />
          </Nav.Link>
        </Nav>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </Container>
    </Navbar>
  );
}

export default AdminNavBar