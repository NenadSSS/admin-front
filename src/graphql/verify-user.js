import gql from "graphql-tag";

export const VERIFY_USER = gql`
  query FindUser($email: String!) {
    users(where: { email: { _eq: $email } }) {
      first_name
      last_name
      email
      age
      category_id
    }
  }
`;
