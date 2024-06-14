const mongoose = require('mongoose');
const db = require("../config/connection");
const { User, Hobby, Post } = require("../models");
const userSeeds = require("./userSeeds.json");
const hobbySeeds = require("./hobbySeeds.json");
const commentSeeds = require("./commentSeeds.json");
const postSeeds = require("./postSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Hobby", "hobby");

    await cleanDB("User", "user");

    await cleanDB("Comment", "comment");

    await cleanDB("Post", "post");

    await User.create(userSeeds);

    await Comment.create(commentSeeds);

    await Hobby.create(hobbySeeds);

    await Post.create(postSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
