import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_HOBBY = gql`
  mutation addHobby($hobbyData: HobbyInput!) {
    addHobby(hobbyData: $hobbyData) {
      description
      name
      _id
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentData: CommentInput!, $hobbyId: ID!) {
    addComment(commentData: $commentData, hobbyId: $hobbyId) {
      _id
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_HOBBY = gql`
  mutation removeHobby($hobbyId: ID!) {
    removeHobby(hobbyId: $hobbyId) {
      _id
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($hobbyId: ID!, $commentId: ID!) {
    removeComment(hobbyId: $hobbyId, commentId: $commentId) {
      _id
      comments {
        _id
        commentText
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($hobbyId: ID!, $commentId: ID!, $commentText: String!) {
    updateComment(hobbyId: $hobbyId, commentId: $commentId, commentText: $commentText) {
      _id
      comments {
        _id
        commentText
      }
    }
  }
`;


export const UPDATE_HOBBY = gql`
  mutation updateHobby(
    $hobbyId: ID!
    $name: String
    $description: String
  ) {
    updateHobby(
      hobbyId: $hobbyId
      name: $name
      description: $description
    ) {
      _id
      name
      description
    }
  }
`;
export const ADD_POST = gpl` 
mutation addPost
}
`;
export const UPDATE_POST = gpl` 
mutation updatePost
}
`;
export const REMOVE_POST = gpl` 
mutation removePost
}
`;
