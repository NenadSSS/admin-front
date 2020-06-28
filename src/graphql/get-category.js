import gql from "graphql-tag";

export const GET_CATEGORY = gql`
  query GetCategory($id: Int!) {
    categories(where: { id: { _eq: $id } }) {
      category_name
    }
  }
`;
