const { AuthenticationError } = require('@apollo/server');
const { User, Hobby, Post} = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("hobbies").populate('posts');
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findById(context.user._id).populate('hobbies').populate('posts');
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },
    users: async () => {
      return User.find().populate("hobbies").populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("hobbies").populate('posts');
    },
    hobbies: async () => {
      return Hobby.find().sort({ name: 1 });
    },
    // hobbies: async () => {
    //   return Hobby.find();
    // },
    hobby: async (parent, { hobbyId }) => {
      return Hobby.findOne({ _id: hobbyId });
    },
    post: async (parent, args, context) => {
      return Post.findOne({_id: args.postId })
    },
    // hobby: async (parent, { hobbyId }) => {
    //   return Hobby.findById(hobbyId);
    // },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    
    addHobby: async (parent, { hobbyData }) => {
      const hobby = new Hobby(hobbyData);
      await hobby.save();
      return hobby;
    },
    addComment: async (parent, { commentData, hobbyId }, context) => {
      if (context.user) {
        return Hobby.findOneAndUpdate(
          { _id: hobbyId },
          {
            $addToSet: {
              comments: { ...commentData, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeHobby: async (parent, { hobbyId }) => {
      const hobby = await Hobby.findOneAndDelete({
        _id: hobbyId,
      });

      return hobby;
    },
    removeComment: async (parent, { hobbyId, commentId }, context) => {
      if (context.user) {
        return Hobby.findOneAndUpdate(
          { _id: hobbyId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateComment: async (parent, { hobbyId, commentId, commentText }) => {
      return Hobby.findOneAndUpdate(
        { _id: hobbyId, "comments._id": commentId },
        { $set: { "comments.$.commentText": commentText } },
        { new: true }
      );
    },
    updateHobby: async (
      parent,
      { hobbyId, name, description }
    ) => {
      const updateFields = {};
      if (name) updateFields.name = name;
      if (description) updateFields.description = description;

      return Hobby.findOneAndUpdate(
        { _id: hobbyId },
        { $set: updateFields },
        { new: true }
      );
    },
    addPost: async (parent, { postData }, context) => {
      if (context.user) {
        const post = await Post.create(postData);
        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updatePost: async (parent, { postId, postText }, context) => {
      if (context.user) {
        const updatedPost = await Post.findByIdAndUpdate(
          postId,
          { postText },
          { new: true, runValidators: true }
        );
        return updatedPost;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findByIdAndDelete(postId);
        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },
};

module.exports = resolvers;
