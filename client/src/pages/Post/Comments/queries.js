import { gql } from "@apollo/client";

export const GET_USER = gql`
  query {
    users {
      fullName
      id
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($input: comments_insert_input!) {
    insert_comments_one(object: $input) {
      id
    }
  }
`;

export const COMMENTS_SUBSCRIPTION = gql`
  subscription getComment($post_id: Int!) {
    comments(where: { post_id: { _eq: $post_id } }) {
      id
      text
      user {
        fullName
        profile_photo
      }
    }
  }
`;
