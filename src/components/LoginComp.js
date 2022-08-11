import React , {useState} from 'react'

import Button from "react-bootstrap/Button";

import menoushBlackLogo from "../images/menoushBlackLogo.png";

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function LoginComp({onLogin}) {
    
    const [showLogin, setShowLogin] = useState(true);

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
            <p style={{ color: "#d8a941", textAlign: "center" }}>
              Don't have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <br />

            <p style={{ textAlign: "center", color: "#d8a941" }}>
              Already have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginComp