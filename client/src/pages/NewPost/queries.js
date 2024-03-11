import { gql } from "@apollo/client";

export const GET_USER = gql`
  query {
    users {
      fullName
      id
    }
  }
`;

export const NEW_POST_MUTATION = gql`
  mutation createPost($data: posts_insert_input!) {
    insert_posts_one(object: $data) {
      id
      title
    }
  }
`;
