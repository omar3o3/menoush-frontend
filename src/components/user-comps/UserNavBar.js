import React , {useState} from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import menoushBlackLogo from "../../images/menoushBlackLogo.png";

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
    <Navbar sticky="top" className="userNavBar ps-5">
      <Container className="fs-3" fluid>
        <Nav className="d-flex">
          <Nav.Link
            href="/"
            style={{ color: navBarTextColor, marginLeft: "10%" }}
            className="navBarLinks"
          >
            Menu
          </Nav.Link>
          <Nav.Link
            href="/cart"
            style={{
              color: navBarTextColor,
              marginRight: "2%",
              marginLeft: "30%",
              marginTop: "9%",
              padding: "0rem",
            }}
            className="navBarLinks ml-auto"
          >
            <ion-icon name="cart-outline" className=""></ion-icon>
          </Nav.Link>
          <Nav.Link
            href="/order-history"
            style={{
              color: navBarTextColor,
              marginRight: "2%",
              marginTop: "9%",
              padding: "0rem",
              marginLeft: "30%",
            }}
            className="navBarLinks"
          >
            <ion-icon
              name="time-outline"
              className="justify-content-end"
            ></ion-icon>
          </Nav.Link>
        </Nav>
        <Button
          onClick={handleLogoutClick}
          className="border-0 logOutButton"
          style={{
            backgroundColor: isHovering ? "#f1f1f3" : navBarTextColor,
            color: isHovering ? "black" : "#f1f1f3",
            marginRight: "5%",
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
