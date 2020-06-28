import gql from "graphql-tag";

export const GET_SINGLE_USER= gql`
  query GetSingleUser($id: Int!) {
    users(where: { id: { _eq: $id } }) {
      first_name
      last_name
      email
      age
      category_id
    }
  }
`;
