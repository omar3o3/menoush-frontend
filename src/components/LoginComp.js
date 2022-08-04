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
        marginBottom: "30%",
        backgroundColor: "#5b503d",
        paddingBottom: "30%",
      }}
    >
      {/* <h1
        className="fs-1 fst-italic fw-semibold"
        style={{ textAlign: "center", marginTop: "5%" }}
      >
        Menoush Bakery
      </h1> */}
      {/* <h1
        className="landingPageHeader"
        style={{ color: "#d8a941", textAlign: "center", marginTop: "5%" , }}
      >
        Welcome to Menoush Bakery
      </h1> */}
      <div className="text-center mb-3 mt-1">
        <img
          src={menoushBlackLogo}
          alt=""
          className=""
          style={{
            // width: "20%",
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
      <div style={{ marginLeft: "30%", marginRight: "30%", marginTop: "5%" }}>
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