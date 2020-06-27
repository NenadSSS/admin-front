import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useLazyQuery } from "@apollo/react-hooks";
import { VERIFY_USER } from "../graphql/verify-user";

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const [getUser, { loading, data, error }] = useLazyQuery(VERIFY_USER);
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button
        disabled={email.length < 5}
        onClick={() => getUser({ variables: { email } })}
      >
        Verify your email
      </Button>
      <br />
      <br />
      <Button
        disabled={
          !(data && data.users.length > 0 && data.users[0].email == email)
        }
        onClick={() => {
          history.push("/home");
        }}
      >
        Enter
      </Button>
    </Form>
  );
};
