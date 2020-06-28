import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Container, Row, ListGroup } from "react-bootstrap";

import { GET_ALL_USERS } from "../graphql/get-all-users";
import User from "./User";

export function UsersContainer() {
  const { data: { users = [] } = {} } = useQuery(GET_ALL_USERS);
  return (
    <Container>
      <Row className="justify-content-md-center">
        {" "}
        <ListGroup variant="flush">
          <h4>All users</h4>
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
    </Container>
  );
}
