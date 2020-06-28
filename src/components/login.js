import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { writeStorage } from "@rehooks/local-storage";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useLazyQuery } from "@apollo/react-hooks";
import { VERIFY_USER } from "../graphql/verify-user";

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const [verifyUserEmail, { loading, data }] = useLazyQuery(VERIFY_USER);

  let userIsValid =
    data && data.users.length > 0 && data.users[0].email === email;

  let verifyEmailButtonText = userIsValid
    ? "You are verified, click to continue"
    : "Verify your email";

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              Make sure you enter a valid -email
            </Form.Text>
          </Form.Group>

          <Button
            variant={userIsValid ? "success" : "primary"}
            disabled={email.length < 5}
            onClick={() => {
              if (userIsValid) {
                writeStorage("userEmail", email);
                history.push("/home");
              } else verifyUserEmail({ variables: { email } });
            }}
          >
            {loading ? "Loading..." : verifyEmailButtonText}
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
