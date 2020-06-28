import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import { GET_SINGLE_USER } from "../graphql/get-single-user";

export default function UserContainer({ userId, fname, lname, categoryId }) {
  // const data = useQuery(GET_SINGLE_USER, {
  //   variables: { id: userId },
  // });

  return (
    <div>
      {userId} {fname} {lname} {categoryId}
    </div>
  );
}
