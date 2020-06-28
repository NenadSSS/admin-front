import gql from "graphql-tag";

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      category_id
      age
      first_name
      last_name
    }
  }
`;
