const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const sequelize = require("sequelize");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "blog_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

module.exports = { User, Post, Comment };
