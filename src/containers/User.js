import React from "react";
import { ListGroup } from "react-bootstrap";
import CategoryContainer from "./CategoryContainer";
// import { useQuery } from "@apollo/react-hooks";
// import { GET_SINGLE_USER } from "../graphql/get-single-user";

export default function UserContainer({
  userId,
  fname,
  lname,
  categoryId,
  email,
}) {
  // const data = useQuery(GET_SINGLE_USER, {
  //   variables: { id: userId },
  // });

  return (
    <ListGroup.Item>
      {" "}
      id: {userId}, Full name: {fname} {lname}, e-mail: {email} <br />
      <CategoryContainer categoryId={categoryId} />
    </ListGroup.Item>
  );
}
