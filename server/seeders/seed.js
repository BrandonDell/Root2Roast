const db = require("../config/connection");
const { User, Hobby } = require("../models");
const userSeeds = require("./userSeeds.json");
const hobbySeeds = require("./hobbySeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Hobby", "hobby");

    await cleanDB("User", "users");

    await User.create(userSeeds);

    await Hobby.create(hobbySeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
