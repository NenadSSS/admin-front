import gql from "graphql-tag";

export const GET_USERS = gql`
  query users {
    users {
      first_name
      last_name
    }
  }
`;
