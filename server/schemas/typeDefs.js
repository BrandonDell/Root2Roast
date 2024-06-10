// Need to followup and test users interests+hobby. Test hobby: description+members. Both with Mutations 

const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    interests: [String]
    hobby: [Hobby]
  }

  type Hobby {
    _id: ID
    Name: String!
    description: String!
    members: [User]
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

  type Query {
    users: [User]
    user(username: String!): User
    hobbies(username: String): [Hobby]
    hobby(hobbyId: ID!): Hobby
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addHobby(name: String!, description: String!, members: [String]!): Hobby
    updateHobby(hobbyId: ID!, name: String, description: String!, members: [String]!): Monster
      removeHobby(hobbyId: ID!): Hobby
    addComment(hobbyId: ID!, commentText: String!): Hobby
    updateComment(hobbyId: ID!, commentId: ID!, commentText: String!): Hobby
    removeComment(hobbyId: ID!, commentId: ID!): Hobby
  }
`;

module.exports = typeDefs;
