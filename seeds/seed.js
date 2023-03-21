const sequelize= require('../config/connection')

async const runSeeds(){
    await sequelize.sync({force:true});
    
}