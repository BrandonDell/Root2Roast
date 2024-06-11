const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const hobbySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    users: [{
        type: Schema.Types.Obj,
        ref: 'User',
    }],
    comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Hobby = model("Hobby", hobbySchema);

module.exports = Hobby;
