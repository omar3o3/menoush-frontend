import React , {useState} from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import profileImage from "../../images/profile-image.jpeg";

function UserNavBar({ user, setUser, navBarTextColor , homeCardButtonColor}) {
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
    <Navbar sticky="top" className="userNavBar">
      <Container className="fs-3 justify-content-center">
        <Nav className="me-auto">
          <Nav.Link
            href="/"
            style={{ color: navBarTextColor }}
            className="navBarLinks"
          >
            Home
          </Nav.Link>
          &nbsp;&nbsp;&nbsp;
          <Nav.Link
            href="/gallery"
            style={{ color: navBarTextColor }}
            className="navBarLinks"
          >
            Gallery
          </Nav.Link>
          &nbsp;&nbsp;&nbsp;
          <Nav.Link
            href="/cart"
            style={{ color: navBarTextColor }}
            className="navBarLinks"
          >
            Cart
          </Nav.Link>
          &nbsp;&nbsp;&nbsp;
          <Nav.Link
            href="/order-history"
            style={{ color: navBarTextColor }}
            className="navBarLinks"
          >
            Order History
          </Nav.Link>
          &nbsp;&nbsp;&nbsp;
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
            backgroundColor: isHovering ? "#f1f1f3" : navBarTextColor,
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

export default UserNavBar;
