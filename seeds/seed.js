
const sequelize = require('../config/connection');
const { Blog, User , Comment } = require('../models');

//retreiving all the default data from the json files 
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./comment.json');

//function to seed data to the database 
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //seed all the data from the userData.json into the User model
  const users = await User.bulkCreate(userData, {
    //make sure to hook before create to encrypt the password
    individualHooks: true,
    returning: true,
  });

  //seed all the data from the blogData.json into the Blog model 
  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      //randomly assign a user id to the blog 
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };

  //seed all the data from the commentData.json into the Comment model 
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };


  process.exit(0);
};

seedDatabase();
