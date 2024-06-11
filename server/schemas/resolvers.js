const { User, Hobby } = require("../models");
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
      return Hobby.find().sort({ name: 1 });
    },
    hobby: async (parent, { hobbyId }) => {
      return Hobby.findOne({ _id: hobbyId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("hobbies");
      }
      throw new AuthenticationError("You need to be logged in!");
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
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // addHobby: async (parent, { hobbyData }, context) => {
    //   const hobby = await User.findByIdAndUpdate(
    //     { _id: context.user._id },
    //     { $push: { hobby: hobbyData } },
    //     { new: true }
        
    //   );
    // },
    
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
              comments: commentData,
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
  },
};

module.exports = resolvers;
