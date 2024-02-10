//importing the necessary libraries from sequelize 
const { Model, DataTypes } = require('sequelize');
//importing bcrypt to encrypt the secure data.
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//create a User model with an instance method of checkPassword
class User extends Model {
  //compare the loginPassword with the password where it is called. 
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

//initialize the user model 
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      //password has a minimum length of 8
      validate: {
        len: [8],
      },
    },
  },
  {
    //before the password is being created and updated, enctypy it first. 
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
