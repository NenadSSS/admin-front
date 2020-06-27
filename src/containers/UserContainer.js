import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../graphql/get-user";

export function UserContainer() {
  const { data: { users = [] } = {} } = useQuery(GET_USERS);
  return <div>{users && users.map((user) => JSON.stringify(user))}</div>;
}
