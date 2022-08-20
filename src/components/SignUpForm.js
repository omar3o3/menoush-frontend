import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUpForm({ onLogin }) {
  const [actualName, setActualName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        actual_name: actualName,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
      }),
    }).then((r) => {
      // console.log('im working form handleSubmit')
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ color: "#d8a941" }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            onChange={(e) => setActualName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Avatar Picture</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your profile image url"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="name"
            placeholder="Re-enter your Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </Form.Group>

        <Button
          type="submit"
          className="border-1 border-dark"
          style={{
            backgroundColor: isHovering ? "#1d1a0c" : "white",
            color: isHovering ? "white" : "black",
            display: "inline",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default SignUpForm;
