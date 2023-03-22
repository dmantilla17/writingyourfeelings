const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}
Post.init(
  {
    id: {
      type: Datatypes.INTERGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    last_name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    username: {
      type: Datatypes.STRING,
      allowNull,
    },
    post_name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    post: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: Datatypes.STRING,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
module.exports = Post;
