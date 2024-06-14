import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_HOBBIES = gql`
  query getHobbies {
    hobbies {
      _id
      name
      description
      users
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_HOBBY = gql`
  query getSingleHobby($hobbyId: ID!) {
    hobby(hobbyId: $hobbyId) {
      _id
      name
      description
      users
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_Post = gql`
  query getPost {
  
`;
