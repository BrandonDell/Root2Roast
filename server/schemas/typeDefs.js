// Need to followup and test users interests+hobby. Test hobby: description+members. Both with Mutations 

const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    hobbies: [Hobby]
  }

  type Hobby {
    _id: ID
    name: String!
    description: String!
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }
  input HobbyInput{
    name: String!
    description: String!
  }
  input CommentInput{
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    hobbies: [Hobby]
    hobby(hobbyId: ID!): Hobby
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addHobby(hobbyData: HobbyInput!): Hobby
    updateHobby(hobbyId: ID!, name: String, description: String!): Hobby
    removeHobby(hobbyId: ID!): Hobby
    addComment(commentData: CommentInput!, hobbyId: ID!): Hobby
    updateComment(hobbyId: ID!, commentId: ID!, commentText: String!): Hobby
    removeComment(hobbyId: ID!, commentId: ID!): Hobby
  }
`;

module.exports = typeDefs;
