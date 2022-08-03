import React, {useState} from 'react'

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import profileImage from "../../images/profile-image.jpeg";

function AdminNavBar({user , setUser}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
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
          <Nav.Link href="/create" style={{ color: "#d8a941" }}>
            Create&nbsp;&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link href="/edit-desserts" style={{ color: "#d8a941" }}>
            Edit&nbsp;&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link href="/pending-orders" style={{ color: "#d8a941" }}>
            Pending Orders&nbsp;&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link href="/accepted-orders" style={{ color: "#d8a941" }}>
            Accepted Orders&nbsp;&nbsp;&nbsp;
          </Nav.Link>
          {/* <Nav.Link href="/userProfile">
            <img
              className="profileImage"
              src={profileImage}
              alt="profile icon"
            />
          </Nav.Link> */}
        </Nav>
        <Button
          onClick={handleLogoutClick}
          className="border-0 logOutButton"
          style={{
            backgroundColor: isHovering ? "#f1f1f3" : "#d8a941",
            color: isHovering ? "black" : "#f1f1f3",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Logout
        </Button>
      </Container>
    </Navbar>
  );
}

export default AdminNavBar