import { gql } from "@apollo/client";

export const GET_POST = gql`
  query post($id: Int!) {
    posts_by_pk(id: $id) {
      id
      title
      description
      cover
      user {
        id
        fullName
      }
    }
  }
`;
