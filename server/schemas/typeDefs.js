const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    hobbies: [Hobby]
    posts: [Post]
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
  {
    type Post {
      _id: ID!
      postText: String!
      postAuthor: String!
      createdAt: String!
    }
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

  input PostInput {
    postText: String!
    postAuthor: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    me: User
    users: [User]
    user(username: String!): User
    hobbies: [Hobby]
    hobby(hobbyId: ID!): Hobby
    post: [Post]
    post(postId: ID!): Post
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
    addPost(postData: PostInput!): Post
    updatePost(postId: ID!, postText: String!); Post
    removePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;
