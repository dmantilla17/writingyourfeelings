const {Model, Datatypes}= require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}
Post.init(
    {
        id:
        {
            type: Datatypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: Datatypes.STRING,
            allowNull:false,
        },
        
        }

    }
)