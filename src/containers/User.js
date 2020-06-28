import React from "react";
import { ListGroup } from "react-bootstrap";
import CategoryContainer from "./CategoryContainer";

export default function UserContainer({
  userId,
  fname,
  lname,
  categoryId,
  email,
}) {
  return (
    <ListGroup.Item>
      {" "}
      id: {userId}, Full name: {fname} {lname}, e-mail: {email} <br />
      <CategoryContainer categoryId={categoryId} />
    </ListGroup.Item>
  );
}
