import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_USERS } from "../graphql/get-all-users";
import User from "./User";

export function UsersContainer() {
  const { data: { users = [] } = {} } = useQuery(GET_ALL_USERS);
  return (
    <div>
      {" "}
      <h4>All users</h4>
      {users &&
        users.map((user) => (
          <User
            key={user.id}
            userId={user.id}
            fname={user.first_name}
            lname={user.last_name}
            categoryId={user.category_id}
          />
        ))}
    </div>
  );
}
