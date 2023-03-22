const { Post } = require("../models");

const postData = [
  {
    first_name: "Alex",
    last_name: "Star",
    username: "tyruetop",
    post_name: "Nights in Paris",
    post: "Paris breathes life into imagination",
  },
  {
    first_name: "Petro",
    last_name: "Amor",
    username: "singyourheartout",
    post_name: "My Journey of Coding:",
    post: "Coding has changed my life",
  },
  {
    first_name: "Cairo",
    last_name: "lospo",
    username: "tyruetop",
    post_name: "Banana Cake: The remedy",
    post: "Paris breathes life into imagination",
  },
  {
    first_name: "",
    last_name: "",
    username: "",
    post_name: "",
    post: "",
  },
];
const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;
