const { User, hobby } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("hobbies");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("hobbies");
    },
    hobbies: async () => {
      return hobby.find().sort({ name: 1 });
    },
    hobby: async (parent, { hobbyId }) => {
      return hobby.findOne({ _id: hobbyId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("comments");
      }
      throw AuthenticationError;
    },
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
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addhobby: async (parent, { name, description }) => {
      const hobby = await hobby.create({
        name,
        description,
      });

      return hobby;
    },
    addComment: async (parent, { hobbyId, commentText }, context) => {
      if (context.user) {
        return hobby.findOneAndUpdate(
          { _id: hobbyId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removehobby: async (parent, { hobbyId }, context) => {
      const hobby = await hobby.findOneAndDelete({
        _id: hobbyId,
      });

      return hobby;
    },
    removeComment: async (parent, { hobbyId, commentId }, context) => {
      if (context.user) {
        return hobby.findOneAndUpdate(
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
      throw AuthenticationError;
    },
    updateComment: async (parent, { hobbyId, commentId, commentText }) => {
      return hobby.findOneAndUpdate(
        { _id: hobbyId, "comments._id": commentId },
        { $set: { "comments.$.commentText": commentText } },
        { new: true }
      );
    },
    updatehobby: async (
      parent,
      { hobbyId, name, type, habitat, weaknesses }
    ) => {
      const updateFields = {};
      if (name) updateFields.name = name;
      if (description) updateFields.description = description;

      return hobby.findOneAndUpdate(
        { _id: hobbyId },
        { $set: updateFields },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
