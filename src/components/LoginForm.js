import React , {useState} from 'react'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm({onLogin}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

      function handleSubmit(e) {
        e.preventDefault();
        //setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          // .then(resp => resp.json()).then(data => console.log(data))
          .then((r) => {
            //setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => console.log(err.errors)); //setErrors(err.errors)
            }
          });
      }

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ color: "#d8a941" }}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your username"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm