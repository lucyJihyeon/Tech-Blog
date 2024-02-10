//import sequlize and dotenv 
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//sequelize configuratioin. if it is running in a cloud environment, sequelize is initialized with JawsDB URL
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  //if running locally, use the stored data in process.env
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
