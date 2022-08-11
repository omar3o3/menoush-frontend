import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import menoushBlackLogo from "../images/menoushBlackLogo.png";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function LoginComp({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#5b503d",
        paddingBottom: "10%",
      }}
    >
      <div className="text-center" style={{}}>
        <img
          src={menoushBlackLogo}
          alt="menoush logo"
          className=""
          style={{
            maxHeight: "15rem",
            border: "white",
            marginTop: ".5%",
            position: "relative",
          }}
        />
        <h1 className="landingPageHeader" style={{ color: "#d8a941" }}>
          Welcome to Menoush Bakery
        </h1>
      </div>
      <div
        style={{
          marginLeft: "30%",
          marginRight: "30%",
          marginTop: "5%",
        }}
      >
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <br />
            <p
              // className="mx-0 px-0"
              style={{
                color: "#d8a941",
                textAlign: "center",
                display: "inline",
              }}
            >
              Don't have an account? &nbsp; &nbsp;
            </p>
            <Button
              onClick={() => setShowLogin(false)}
              className="border-1 border-dark"
              style={{
                backgroundColor: isHovering ? "#1d1a0c" : "white",
                color: isHovering ? "white" : "black",
                display: "inline",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <br />

            <p
              style={{
                textAlign: "center",
                color: "#d8a941",
                display: "inline",
              }}
            >
              Already have an account? &nbsp; &nbsp;
            </p>
            <Button
              onClick={() => setShowLogin(true)}
              className="border-1 border-dark"
              style={{
                backgroundColor: isHovering ? "#1d1a0c" : "white",
                color: isHovering ? "white" : "black",
                display: "inline",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Log In
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginComp;
