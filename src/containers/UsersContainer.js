import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import { Container, Row, ListGroup, Button } from "react-bootstrap";
import { deleteFromStorage } from "@rehooks/local-storage";

import { GET_ALL_USERS } from "../graphql/get-all-users";
import User from "./User";

export function UsersContainer() {
  const history = useHistory();

  const { data: { users = [] } = {} } = useQuery(GET_ALL_USERS);

  const logOut = () => {
    deleteFromStorage("userEmail");
    history.push("/");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        {" "}
        <ListGroup variant="flush">
          <h5>All users</h5>
          {users &&
            users.map((user) => (
              <User
                email={user.email}
                key={user.id}
                userId={user.id}
                fname={user.first_name}
                lname={user.last_name}
                categoryId={user.category_id}
              />
            ))}
        </ListGroup>
      </Row>
      <Button
        onClick={() => {
          logOut();
        }}
        variant="secondary"
      >
        Log out
      </Button>
    </Container>
  );
}
